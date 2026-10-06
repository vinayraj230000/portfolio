'use client';

import { useEffect, useRef, useState } from 'react';
import { FiX } from 'react-icons/fi';
import clsx from 'clsx';
import Image from 'next/image';
import LazyLottie from './LazyLottie';
import bot from '../components/animations/bot.json';
import { usePortfolioChat } from '@/lib/usePortfolioChat';

export default function Chatbot() {
  const { messages, typing, error, sendMessage } = usePortfolioChat([
    {
      role: 'bot',
      text: "Hi! I'm Khushmeet's AI assistant. Ask me about projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  const handleSend = async () => {
    if (!input.trim() || typing) return;
    const userText = input.trim();
    setInput('');
    await sendMessage(userText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 text-sm">
      {open ? (
        <div className="w-80 rounded-xl shadow-lg border flex flex-col bg-white dark:bg-gray-900 text-slate-800 dark:text-white border-slate-200 dark:border-gray-700">
          <div className="flex justify-between items-center px-4 py-2 font-semibold border-b border-slate-200 dark:border-gray-700">
            Vinay Raj AI
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX />
            </button>
          </div>

          <div className="h-64 overflow-y-auto px-3 py-2 space-y-3 flex flex-col">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={clsx(
                  'flex gap-2 items-start',
                  msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
                )}
              >
                <Image
                  src={msg.role === 'user' ? '/images/user.png' : '/images/bot.png'}
                  alt="avatar"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <div
                  className={clsx(
                    'px-3 py-2 rounded-xl max-w-[85%] text-sm',
                    msg.role === 'user'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-100 text-slate-800 dark:bg-gray-700 dark:text-white'
                  )}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-center gap-2 self-start">
                <Image src="/images/bot.png" alt="typing" width={28} height={28} className="rounded-full" />
                <div className="animate-pulse px-3 py-2 rounded-xl bg-slate-200 dark:bg-white/10 w-fit">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {error && <p className="px-3 pb-1 text-xs text-amber-600 dark:text-amber-400">{error}</p>}

          <div className="flex border-t border-slate-200 dark:border-gray-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={typing}
              className="flex-grow px-3 py-2 outline-none bg-transparent disabled:opacity-50"
              placeholder="Ask about projects..."
            />
            <button
              onClick={handleSend}
              disabled={typing || !input.trim()}
              className="px-4 font-bold text-cyan-600 disabled:opacity-40"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-white dark:bg-black text-black rounded-full p-3 shadow-glow ring-2 ring-cyan-200 dark:ring-cyan-800 hover:scale-105 transition"
          title="Open AI Assistant"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <LazyLottie animationData={bot} loop className="w-16 h-16" />
          </div>
        </button>
      )}
    </div>
  );
}
