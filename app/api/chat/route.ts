import { NextResponse } from 'next/server';
import { PORTFOLIO_SYSTEM_PROMPT } from '@/lib/chatbot-context';
import {
  GEMINI_MODELS,
  getLocalFallbackReply,
  isQuotaError,
} from '@/lib/chatbot-fallback';

type ChatMessage = {
  role: 'user' | 'model';
  text: string;
};

function getModelList(): string[] {
  const preferred = process.env.GEMINI_MODEL?.trim();
  if (preferred) {
    return [preferred, ...GEMINI_MODELS.filter((m) => m !== preferred)];
  }
  return [...GEMINI_MODELS];
}

async function callGemini(
  apiKey: string,
  model: string,
  messages: ChatMessage[]
) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: PORTFOLIO_SYSTEM_PROMPT }],
        },
        contents: messages.map((msg) => ({
          role: msg.role,
          parts: [{ text: msg.text.trim() }],
        })),
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    const errorMessage =
      data?.error?.message || `Gemini request failed for ${model}.`;
    return { ok: false as const, error: errorMessage, model };
  }

  const reply =
    data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
    "Sorry, I couldn't generate a reply. Please try again.";

  return { ok: true as const, reply, model };
}

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Chatbot is not configured. Add GEMINI_API_KEY to your environment.' },
      { status: 500 }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const messages = body.messages?.filter((m) => m.text?.trim()) ?? [];
  const lastMessage = messages.at(-1);

  if (!lastMessage || lastMessage.role !== 'user') {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }

  if (lastMessage.text.length > 500) {
    return NextResponse.json({ error: 'Message too long (max 500 characters).' }, { status: 400 });
  }

  const models = getModelList();
  let lastError = '';

  try {
    for (const model of models) {
      const result = await callGemini(apiKey, model, messages);

      if (result.ok) {
        return NextResponse.json({
          reply: result.reply,
          model: result.model,
          source: 'gemini',
        });
      }

      lastError = result.error;
      console.warn(`Gemini model ${model} failed:`, result.error);

      if (!isQuotaError(result.error)) {
        break;
      }
    }

    const fallbackReply = getLocalFallbackReply(lastMessage.text);

    return NextResponse.json({
      reply: fallbackReply,
      source: 'fallback',
      warning: isQuotaError(lastError)
        ? 'AI quota reached — showing a quick answer instead. Create a new API key at aistudio.google.com or try again later.'
        : 'AI temporarily unavailable — showing a quick answer instead.',
    });
  } catch (error) {
    console.error('Chat API error:', error);

    return NextResponse.json({
      reply: getLocalFallbackReply(lastMessage.text),
      source: 'fallback',
      warning: 'AI temporarily unavailable — showing a quick answer instead.',
    });
  }
}
