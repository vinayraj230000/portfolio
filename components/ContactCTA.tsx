'use client';

import { motion } from 'framer-motion';
import LazyLottie from './LazyLottie';
import devAnimation from './animations/rocket.json';
import GamifiedContact from './GamifiedContact';
import { fastTransition, viewportOnce } from '@/lib/motion';

export default function ContactCTA() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={fastTransition}
        className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-gray-700"
      />

      <motion.section
        className="relative section-muted text-center pt-16 pb-20 px-4 text-slate-800 dark:text-white min-h-[500px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={fastTransition}
        viewport={viewportOnce}
      >
        <h2 className="flex items-center justify-center text-3xl font-bold text-slate-900 dark:text-white">
          <LazyLottie animationData={devAnimation} className="w-15 h-12 mr-2" loop />
          <span className="heading-gradient">Ready to work together?</span>
        </h2>

        <p className="text-lg max-w-2xl mx-auto text-slate-600 dark:text-white/80 mb-4 mt-4">
          I&apos;m open to freelance work, collaboration opportunities, or full-time roles.
          Let&apos;s create something exceptional together!
        </p>

        <GamifiedContact />

        <p className="mt-10 italic text-slate-500 dark:text-white/80">
          &ldquo;Let&apos;s turn ideas into reality — one pixel at a time.&rdquo;
        </p>
      </motion.section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-gray-700" />
    </>
  );
}
