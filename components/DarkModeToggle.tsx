'use client';

import { useTheme } from './ThemeProvider';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="ml-2 px-3 py-1.5 text-sm font-medium rounded-full border border-slate-200 dark:border-gray-600
                 bg-slate-50 dark:bg-gray-800 text-slate-700 dark:text-white
                 hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
    >
      {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
