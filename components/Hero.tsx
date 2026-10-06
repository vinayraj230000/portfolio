'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import { fastTransition } from '@/lib/motion';


export default function Hero() {
  return (
    <>
      <motion.section
        className="relative h-[100vh] w-full flex items-center justify-center px-4 md:px-16 bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-indigo-800 overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fastTransition}
      >
        {/* Light mode decorative blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-200/60 to-blue-200/40 blur-3xl dark:hidden" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-violet-200/50 to-indigo-100/40 blur-3xl dark:hidden" />
        <div className="absolute top-[30%] left-[20%] w-[200px] h-[200px] rounded-full bg-cyan-100/50 blur-2xl dark:hidden" />

        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-black/50 z-0 hidden dark:block" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">
          <div className="text-slate-900 dark:text-white text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-300 mb-3">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Hi, I&apos;m{' '}
              <span className="heading-gradient">Vinay Raj</span>{' '}
              👋
            </h1>

            <p className="text-xl font-medium text-slate-700 dark:text-white">
              I&apos;m a{' '}
              <span className="text-cyan-600 dark:text-cyan-300 font-bold">
                <Typewriter
                  words={['MERN Stack Developer', 'UI/UX Designer', 'Tech Enthusiast']}
                  loop
                  cursor
                />
              </span>
            </p>

            <p className="mt-4 text-lg text-slate-600 dark:text-white/90 max-w-md">
              I build sleek, scalable web apps using <strong className="text-slate-800 dark:text-white">React.js</strong>, <strong className="text-slate-800 dark:text-white">Next.js</strong>, and <strong className="text-slate-800 dark:text-white">Node.js</strong>.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/Vinay_Raj_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View Portfolio
              </a>
              <Link href="/contact" className="btn-outline text-center">
                Contact Me
              </Link>
            </div>

            <div className="mt-8 flex justify-center md:justify-start gap-6 text-2xl text-slate-600 dark:text-white">
              <a href="https://github.com/vinayraj230000" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/vinay-raj-76562a300/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <motion.div
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...fastTransition, delay: 0.15 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 blur-2xl opacity-30 dark:opacity-40 scale-110" />
              <Image
                src="/profile.image.jpeg"
                alt="Vinay Raj profile"
                width={400}
                height={400}
                priority
                className="relative rounded-full border-4 border-white shadow-2xl ring-4 ring-cyan-100 dark:ring-cyan-900/50"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 text-cyan-600 dark:text-white text-3xl animate-bounce">
          ↓
        </div>
      </motion.section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-gray-700" />
    </>
  );
}
