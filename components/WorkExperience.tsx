'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LazyLottie from './LazyLottie';
import devAnimation from './animations/workex.json';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { fastTransition, viewportOnce } from '@/lib/motion';

const experiences = [
  {
    company: 'Allheart Web Pvt Ltd',
    website: 'https://allheartweb.com',
    role: 'MERN Stack Developer',
    period: 'Jan 2026- Aug-2026',
    location: 'Chandigarh, India',
    description: `
    <ul class="list-disc pl-5 space-y-1">
      <li>Working on building and maintaining scalable applications using MongoDB, Express.js, React, and Node.js.</li>
      <li>Made responsive UI in Tailwind, and integrated RESTful APIs for seamless frontend-backend communication.</li>
      <li>Identify and resolve bugs, ensuring software quality and performance.</li>
      <li>Deploy and maintain applications on cloud platforms or servers and utilize Git for code versioning .</li>
      <li>Work with cross-functional teams to ensure project requirements and optimize application performance for speed and scalability.</li>
    </ul>
    `,
    logo: '/logos/allheart.png',
    skills: ['React.Js', "Next.Js", 'Tailwind', 'Node JS', "Express.Js", 'MongoDB', 'REST API', 'Figma', "MySQL", "Web3.js", "Wallet Integration", "MetaMask", "TrustWallet"],
  },
  {
    company: 'Appin Technology Lab',
    website: 'https://appintechnologylab.com',
    role: 'MERN Developer',
    period: 'Nov 2024 - Dec 2025',
    location: 'Delhi, India',
    description:`
    <ul class="list-disc pl-5 space-y-1">
      <li>Delivered custom full-stack solutions using React, Node, Express, and MySQL.</li>
      <li>Built an interactive dashboard that automated data collection and highlighted key business insights.</li>
      <li>Streamlined backend data systems to enhance processing speed and minimize manual errors.</li>
      <li>Identified and resolved critical bugs to improve overall system stability and user experience.</li>
      <li>Collaborated with senior developers to troubleshoot and optimize web application features.</li>
    </ul>
    `,
    logo: '/logos/vns.png',
    skills: ['React.Js', "Next.Js", 'Tailwind', 'Node JS', "Express.Js", 'MongoDB', 'REST API', 'Figma', "MySQL"],
  }
];

export default function WorkExperience() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  return (
    <>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent dark:via-gray-700" />

      <motion.section
        className="px-4 py-12 pb-16 section-surface"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={fastTransition}
      >
        <h2 className="flex items-center justify-center text-4xl font-bold text-center mb-12 heading-gradient">
          <LazyLottie animationData={devAnimation} className="w-13 h-12 mr-3" loop />
          Work Experience
        </h2>

        <div className="relative border-l-[3px] border-dashed border-cyan-400 dark:border-cyan-500 pl-6 space-y-14 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...fastTransition, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[16px] top-2 w-4 h-4 rounded-full bg-cyan-500 border-2 border-white dark:border-gray-900 z-10 shadow-md ring-2 ring-cyan-100 dark:ring-cyan-900" />

              <div className="card-light p-5 group-hover:shadow-glow transition-shadow duration-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.role}</h3>
                      <p className="text-sm text-slate-600 dark:text-gray-400">
                        {exp.company} • {exp.location}
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 inline-flex items-center text-cyan-500 hover:underline"
                        >
                          <FaExternalLinkAlt className="ml-1 text-xs" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-gray-400 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-cyan-50 text-cyan-700 dark:bg-blue-900 dark:text-blue-300 rounded-full border border-cyan-100 dark:border-transparent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <button
                  className="mt-4 text-sm text-cyan-600 dark:text-cyan-400 underline hover:opacity-80 transition"
                  onClick={() => setActiveModal(idx)}
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeModal !== null && (
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-lg bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl text-gray-800 dark:text-gray-100 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-2">
                  {experiences[activeModal].role} @ {experiences[activeModal].company}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {experiences[activeModal].period} • {experiences[activeModal].location}
                </p>
                <div
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: experiences[activeModal].description }}
                />
                <button
                  onClick={() => setActiveModal(null)}
                  className="mt-5 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md text-sm"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </>
  );
}
