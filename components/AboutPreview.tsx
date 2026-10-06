'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fastTransition, viewportOnce } from '@/lib/motion';


export default function AboutPreview() {
  const tags = ['Clean Code', 'User-first Design', 'Full-Stack', 'Performance', 'Agile'];

  return (
    <>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-gray-700" />

      <motion.section
        className="text-center section-surface py-16 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={fastTransition}
        viewport={viewportOnce}
      >
        <h2 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <span>👨‍💻</span>
          <span className="heading-gradient">About Me</span>
        </h2>

        <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          I thrive on transforming ideas into interactive digital products using design tools and full-stack technologies.
        </p>

        <p className="text-sm text-slate-500 dark:text-gray-400 mt-2">
          React • Next.js • Node.js • TypeScript • Express.js • MongoDB • MySQL
        </p>

        <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mx-auto my-6" />

        <div className="text-left max-w-2xl mx-auto text-slate-600 dark:text-gray-300 text-sm md:text-base">
          <h3 className="font-semibold text-lg text-slate-800 dark:text-white text-center">🧠 My Approach</h3>
        </div>

        <div className="mt-5 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              title: 'Phase 1',
              content: 'Understand the user, define the problem, and plan the features with empathy and clarity.',
              image: '/images/phase1.jpg',
            },
            {
              title: 'Phase 2',
              content: 'Design intuitive UI/UX wireframes and prototypes before diving into development.',
              image: '/images/phase2.jpg',
            },
            {
              title: 'Phase 3',
              content: 'Develop, test, and deploy scalable code with focus on performance, accessibility, and UX.',
              image: '/images/phase3.webp',
            },
          ].map((phase, index) => (
            <motion.div
              key={index}
              className="relative border border-slate-200 dark:border-cyan-300/50 rounded-2xl h-48 overflow-hidden group cursor-pointer shadow-soft hover:shadow-glow transition-shadow"
              whileHover="hovered"
              initial="initial"
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
            >
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${phase.image})` }}
              />

              <div className="absolute inset-0 bg-slate-900/50 dark:bg-black/60 z-10" />

              <motion.div
                variants={{
                  initial: { opacity: 1 },
                  hovered: { opacity: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-20 flex items-center justify-center text-lg font-bold text-cyan-300 font-serif"
              >
                {phase.title}
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hovered: { opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 z-30 flex items-center justify-center p-4 text-white text-sm leading-relaxed text-center"
              >
                {phase.content}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <blockquote className="mt-8 italic text-sm text-slate-500 dark:text-gray-500 pl-4 max-w-xl mx-auto">
          <p>&quot;Code is a tool to amplify imagination.&quot;</p>
        </blockquote>

        <motion.div
          className="flex gap-2 mt-6 justify-center flex-wrap"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="bg-cyan-50 text-cyan-700 dark:bg-blue-600/20 dark:text-white/75 text-xs px-3 py-1 rounded-full cursor-default border border-cyan-100 dark:border-transparent"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/about"
            className="text-cyan-600 dark:text-cyan-300 hover:underline font-medium"
          >
            Learn more →
          </Link>

          <a
            href="/Vinay_Raj_Resume.pdf"
            download
            className="btn-outline dark:border-white dark:text-white"
          >
            Download Resume
          </a>
        </div>
      </motion.section>
    </>
  );
}
