export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-slate-100 dark:border-gray-800 text-slate-600 dark:text-white text-center py-4 font-mono text-sm">
      <p>© {new Date().getFullYear()}. Vinay Raj. My Portfolio. All rights reserved.</p>
    </footer>
  );
}
