'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LazyLottie from './LazyLottie';
import { X } from 'lucide-react';
import bot from './animations/bot.json';
import { usePortfolioChat } from '@/lib/usePortfolioChat';
import Link from 'next/link';

const INITIAL_GREETINGS = [
  "👋 Hey! I'm Vinay Raj AI Assistant.",
  'Need a developer for your next project?',
  'Ask me about skills, projects, or experience!',
];

function ChatPanel() {
  const { messages, typing, error, sendMessage, addBotMessage } = usePortfolioChat([]);
  const [input, setInput] = useState('');
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const greetingsShown = useRef(false);

  useEffect(() => {
    if (!isOpen || greetingsShown.current) return;
    greetingsShown.current = true;

    INITIAL_GREETINGS.forEach((msg, index) => {
      setTimeout(() => {
        addBotMessage(msg);
        if (index === INITIAL_GREETINGS.length - 1) {
          setTimeout(() => setReady(true), 400);
        }
      }, 400 * (index + 1));
    });
  }, [isOpen, addBotMessage]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const handleSend = async () => {
    if (!input.trim() || !ready || typing) return;
    const text = input.trim();
    setInput('');
    await sendMessage(text);
  };

  const handleEmoji = async (emoji: string) => {
    if (typing) return;
    await sendMessage(emoji);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mb-4 w-[320px] max-w-[calc(100vw-3rem)] bg-white dark:bg-gray-900 shadow-2xl rounded-xl flex flex-col border border-slate-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-slate-200 dark:border-gray-700">
              <span className="font-semibold text-sm text-slate-800 dark:text-white">
                Vinay Raj AI
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-red-500"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div
              ref={containerRef}
              className="overflow-y-auto px-4 py-3 space-y-2 text-sm max-h-72 min-h-[120px] flex flex-col"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] px-3 py-2 rounded-lg ${
                    msg.role === 'bot'
                      ? 'bg-slate-100 text-slate-800 dark:bg-gray-700 dark:text-white self-start'
                      : 'bg-cyan-500 text-white self-end ml-auto'
                  }`}
                >
                  {msg.text}

                  {msg.showButtons && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['👍', '🚀', '💬'].map((emoji) => (
                        <button
                          key={emoji}
                          onClick={() => handleEmoji(emoji)}
                          disabled={typing}
                          className="text-lg hover:scale-110 transition-transform disabled:opacity-50"
                        >
                          {emoji}
                        </button>
                      ))}
                      <Link
                        href="/contact"
                        className="text-xs underline text-cyan-600 dark:text-cyan-300 ml-1"
                      >
                        Contact →
                      </Link>
                    </div>
                  )}
                </div>
              ))}

              {typing && (
                <div className="text-gray-400 text-sm italic self-start">Typing...</div>
              )}
            </div>

            {error && (
              <p className="px-4 pb-1 text-xs text-amber-600 dark:text-amber-400">{error}</p>
            )}

            <div className="px-4 py-3 border-t border-gray-300 dark:border-gray-700 flex gap-2">
              <input
                type="text"
                placeholder={ready ? 'Ask me anything...' : 'Starting up...'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={!ready || typing}
                className="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm text-gray-800 dark:text-white outline-none disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={!ready || typing || !input.trim()}
                className="px-3 py-2 text-sm font-semibold text-cyan-600 disabled:opacity-40"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto ml-auto flex bg-white dark:bg-gray-900 text-slate-800 dark:text-white rounded-full shadow-glow ring-2 ring-cyan-200 dark:ring-cyan-800"
          aria-label="Open AI assistant"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <LazyLottie animationData={bot} loop className="w-16 h-16" />
          </div>
        </motion.button>
      )}
    </div>
  );
}

export default function HomeChatWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(<ChatPanel />, document.body);
}
