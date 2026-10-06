import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6 relative overflow-hidden">
        <div className="absolute inset-0 dark:hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-100/60 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-100/50 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-lg">
          <p className="text-8xl font-extrabold heading-gradient mb-2">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Lost in the matrix?
          </h1>
          <p className="text-slate-600 dark:text-gray-400 mb-8">
            This page doesn&apos;t exist — maybe it was moved, deleted, or never built.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="btn-primary">
              Go home →
            </Link>
            <Link href="/projects" className="btn-outline">
              View projects
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
