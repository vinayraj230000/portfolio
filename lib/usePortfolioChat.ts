'use client';

import { useState } from 'react';

export type ChatRole = 'user' | 'bot';

export type PortfolioChatMessage = {
  role: ChatRole;
  text: string;
  showButtons?: boolean;
};

type ApiChatMessage = {
  role: 'user' | 'model';
  text: string;
};

function toApiHistory(messages: PortfolioChatMessage[]): ApiChatMessage[] {
  return messages
    .slice(-10)
    .map((m) => ({
      role: m.role === 'user' ? ('user' as const) : ('model' as const),
      text: m.text,
    }));
}

export function usePortfolioChat(initialMessages: PortfolioChatMessage[] = []) {
  const [messages, setMessages] = useState<PortfolioChatMessage[]>(initialMessages);
  const [typing, setTyping] = useState(false);
  const [error, setError] = useState('');

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return false;

    const userMessage: PortfolioChatMessage = { role: 'user', text: trimmed };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setError('');
    setTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: toApiHistory(nextMessages) }),
      });

      const data = await res.json();

      if (!res.ok && !data.reply) {
        throw new Error(data.error || 'Failed to get a response.');
      }

      const botMessage: PortfolioChatMessage = {
        role: 'bot',
        text: data.reply,
        showButtons: shouldShowContactButtons(trimmed, data.reply),
      };

      setMessages((prev) => [...prev, botMessage]);

      if (data.warning) {
        setError(data.warning);
      } else {
        setError('');
      }

      return true;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'Sorry, I could not connect to AI right now. Email Khushmeet at khushmeetsaini72@gmail.com',
        },
      ]);
      return false;
    } finally {
      setTyping(false);
    }
  };

  const addBotMessage = (text: string, showButtons = false) => {
    setMessages((prev) => [...prev, { role: 'bot', text, showButtons }]);
  };

  return {
    messages,
    setMessages,
    typing,
    error,
    setError,
    sendMessage,
    addBotMessage,
  };
}

function shouldShowContactButtons(userText: string, reply: string): boolean {
  const combined = `${userText} ${reply}`.toLowerCase();
  return (
    combined.includes('contact') ||
    combined.includes('hire') ||
    combined.includes('email') ||
    combined.includes('reach') ||
    combined.includes('collaborat') ||
    combined.includes('project together')
  );
}
