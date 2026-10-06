'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaPlus, FaMinus } from 'react-icons/fa';

type TimelineEntry = {
  heading: string;
  sub?: string;
  desc?: string;
};

type TimelineSection = {
  icon: React.ReactNode;
  title: string;
  entries: TimelineEntry[];
};

const timelineData: TimelineSection[] = [
  {
    icon: <FaGraduationCap />,
    title: 'Education',
    entries: [
      { heading: 'MCA (Computer Science) – Mangalayatan University', sub: '2024 - 2026' },
      { heading: 'MA (Political Science) – IGNOU University', sub: '2020 - 2022' },
      { heading: 'BA (ALL Subject) – Delhi University', sub: '2016 - 2019' },
      { heading: 'Intermediate – CBSE', sub: '2015 - 2016' },
      { heading: 'Matriculation – CBSE', sub: '2013 - 2014' },
    ],
  },
  {
    icon: <FaBriefcase />,
    title: 'Experience',
    entries: [
      {
        heading: 'AllHeart Web – MERN Developer',
        sub: 'Jan 2025 – Aug-2026',
        desc: `• Built and maintained scalable full-stack apps using MongoDB, Express.js, React, and Node.js.
              • Designed RESTful APIs and server-side logic with Node.js & Express.
              • Collaborated closely with frontend/backend teams to ensure seamless integration.
              • Handled deployments and maintenance on cloud environments.
              • Ensured application scalability, speed, and high performance.
              • Used Git for version control and agile collaboration.`,
      },
      {
        heading: 'Appin Technology – MERN Stack Developer',
        sub: 'Nov 2024 – Dec-2025',
        desc: `• Created dashboards, optimized backend data handling, reduced reporting time by 30%.
              • Streamlined backend workflows to enhance data processing efficiency and reduce manual effort. 
              • Identified and resolved critical bugs during testing and deployment phases to improve system stability.
              • Collaborated with senior developers to optimize features and troubleshoot performance issues.`,
      },
    
    ],
  },
 
];

export default function About() {
  const [expandedSections, setExpandedSections] = useState<boolean[]>(
    timelineData.map(() => false)
  );

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <>
      <Navbar />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black text-slate-800 dark:text-white relative overflow-hidden"
        >
          {/* Light mode blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-100/60 rounded-full blur-3xl dark:hidden" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100/50 rounded-full blur-3xl dark:hidden" />

          <div className="relative z-10 pt-28 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900 dark:text-white">
                About <span className="heading-gradient">Me</span>
              </h2>

              <p className="text-lg text-slate-600 dark:text-white/90 leading-relaxed mb-4 text-justify">
                <span className="text-cyan-600 dark:text-cyan-300 font-semibold">Not just a developer — a digital architect.</span>{' '}
                I&apos;m Vinay Raj, a full-stack engineer who designs intuitive interfaces, architects intelligent systems, and turns blank screens into real-world impact.
              </p>

              <p className="text-lg text-slate-600 dark:text-white/90 leading-relaxed mb-4 text-justify">
                Whether it&apos;s AI-powered visual search or real-time dashboards, I bridge the gap between data and design.
                From clean UI flows to scalable APIs, I build web experiences that don&apos;t just <em>function</em> — they <strong>connect</strong>.
              </p>

              <p className="text-lg text-slate-500 dark:text-white/80 italic mb-6 text-justify">
                &ldquo;I don&apos;t just write code. I shape digital journeys that speak for themselves.&rdquo;
              </p>

              <a
                href="/Vinay_Raj_Resume.pdf"
                download
                className="inline-block btn-primary"
              >
                Download Resume
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src="/profile.image.jpeg"
                alt="Vinay Raj"
                width={400}
                height={400}
                className="rounded-2xl shadow-soft ring-1 ring-slate-200 dark:ring-white/10"
              />
            </div>
          </div>

          <div className="w-full my-12">
            <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 rounded-full" />
          </div>

          <div className="max-w-6xl mx-auto pb-16 px-6">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-10 text-center">
              My <span className="heading-gradient">Journey</span>
            </h2>

            <div className="relative border-l-2 border-cyan-400 ml-4 space-y-12">
              {timelineData.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute -left-6 top-1 bg-gradient-to-br from-cyan-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                    {section.icon}
                  </div>

                  <div
                    className="flex items-center justify-between card-light p-4 cursor-pointer hover:shadow-glow transition"
                    onClick={() => toggleSection(index)}
                  >
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">{section.title}</h3>
                    {expandedSections[index] ? <FaMinus className="text-cyan-600 dark:text-cyan-400" /> : <FaPlus className="text-cyan-600 dark:text-cyan-400" />}
                  </div>

                  <AnimatePresence>
                    {expandedSections[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-4"
                      >
                        {section.entries.map((entry, idx) => (
                          <div
                            key={idx}
                            className="card-light p-4 text-slate-700 dark:text-white/90"
                          >
                            <h4 className="font-semibold text-lg text-slate-900 dark:text-white">{entry.heading}</h4>
                            {entry.sub && <p className="text-sm text-slate-500 dark:text-white/70">{entry.sub}</p>}
                            {entry.desc && (
                              <p className="mt-2 text-sm whitespace-pre-line">{entry.desc}</p>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}