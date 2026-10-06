'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { fastTransition, viewportOnce } from '@/lib/motion';


const projects = [
  {
    title: 'MIS Dashboard',
    description: 'Business analytics dashboard for real-time report generation and structured data management. Features smart data upload, cleaning, and dynamic filters for faster insights.',
    link: '/projects',
    live: 'https://mis-dashboard-sigma.vercel.app/',
    image: '/projectImages/mis-dash/mis-dash-1.png',
    techStack: [
      { icon: '/images/React.webp', name: 'React' },
      { icon: '/images/Tailwind.webp', name: 'Tailwind CSS' },
      { icon: '/images/node-js.png', name: 'Node.js' },
      { icon: '/images/mysql.webp', name: 'MySQL' },
    ]
  },
  {
    title: 'Neural Search Engine',
    description: 'AI-powered search tool that connects user images to matching products with high accuracy. It uses machine learning model to understand visuals and display the most relevant results.',
    link: '/projects',
    live: 'http://172.105.252.9:3000/sms-reports',
    image: '/projectImages/neural-ai/neural-ai1.png', 
    techStack: [
      { icon: '/images/React.webp', name: 'React' },
      { icon: '/images/typescript.webp', name: 'Tyescript' },
      { icon: '/images/node-js.png', name: 'Node.js' },
      { icon: '/images/mongodb.webp', name: 'MongoDB' },
    ]
  },
  {
    title: 'Cephalogram Tool',
    description: 'Software tool for analyzing X-rays and generating precise orthodontic measurements. Supports manual annotations and improves treatment planning accuracy.',
    link: '/projects/cephalogram-tool',
    live: 'https://github.com/Khushmeet13/ceph-analysis-tool',
    image: '/projectImages/ceph/ceph-2.png',
    techStack: [
      { icon: '/images/java.png', name: 'Java' },
      { icon: '/images/javafx.jpg', name: 'JavaFX' },
    ]
  },
  {
    title: 'TestForge AI',
    description: 'AI-powered test suite generator — upload a project ZIP and AI generates complete, runnable test files for it in real-time.',
    link: '/projects/testforge-ai',
    live: 'https://testforge-ai-gen.vercel.app/',
    image: '/projectImages/testforge/testforge-preview.png',
    techStack: [
      { icon: '/images/React.webp', name: 'React' },
      { icon: '/images/typescript.webp', name: 'TypeScript' },
      { icon: '/images/Tailwind.webp', name: 'Tailwind CSS' },
    ]
  },
  {
    title: 'StagePass',
    description: 'Event ticketing platform — discover shows, book seats, pay online & get instant confirmation on WhatsApp and email.',
    link: '/projects',
    live: 'https://stagepass-tickets.vercel.app/',
    image: '/projectImages/stagepass/stagepass-preview.png',
    techStack: [
      { icon: '/images/React.webp', name: 'React' },
      { icon: '/images/Tailwind.webp', name: 'Tailwind CSS' },
      { icon: '/images/razorpay.png', name: 'Razorpay' },
    ]
  },
  {
    title: 'ArchViz',
    description: '3D architectural visualization — interactive property tours through photorealistic house models, right in the browser.',
    link: '/projects',
    live: 'https://archviz-3d.vercel.app/',
    image: '/projectImages/archviz/archviz-preview.png',
    techStack: [
      { icon: '/images/nextjs.png', name: 'Next.js' },
      { icon: '/images/typescript.webp', name: 'TypeScript' },
      { icon: '/images/threejs.png', name: 'Three.js' },
      { icon: '/images/Tailwind.webp', name: 'Tailwind CSS' },
    ]
  },
];


export default function Projects() {
  return (
    <>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-gray-700" />

      <motion.section
        className="py-16 px-4 sm:px-10 section-muted"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={fastTransition}
        viewport={viewportOnce}
      >
        <h2 className="flex items-center justify-center text-4xl font-bold text-slate-900 dark:text-white mb-10">
          <span className="heading-gradient">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...fastTransition, delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 card-light hover:shadow-glow transition-shadow"
            >

              <div className="relative overflow-hidden rounded-xl mb-4 flex justify-center group ring-1 ring-slate-100 dark:ring-white/10">
                <div className="absolute inset-0 bg-slate-900/20 dark:bg-black/50 transition-opacity duration-300 ease-in-out group-hover:opacity-0 z-10" />
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={700}
                  height={300}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="transition-transform duration-300 ease-out object-cover rounded-md z-0"
                />
              </div>


              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{proj.title}
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 inline-flex items-center text-cyan-600 dark:text-cyan-500 hover:underline"
                >
                  <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </h3>
              <p className="text-sm mb-4 text-slate-600 dark:text-white text-justify">{proj.description}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {proj.techStack.map((tech, index) => (
                  <div key={index} className="relative group w-6 h-6">
                    {/* Tech Icon */}
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />


                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-slate-800 dark:bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none">
                      {tech.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 mt-[-2px]" />
                    </div>
                  </div>
                ))}
              </div>


              <Link href={proj.link} className="text-cyan-600 dark:text-cyan-400 hover:underline text-sm font-medium">
                {proj.link.startsWith('/projects/') && proj.link !== '/projects'
                  ? 'Read case study →'
                  : 'View Details →'}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full font-semibold btn-primary"
            >
              Explore More →
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </>
  );
}
