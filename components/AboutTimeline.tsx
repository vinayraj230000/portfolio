'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      { heading: 'B.Tech (IT) – CGC Landran', sub: '2020 - 2024 | CGPA: 8.98' },
      { heading: 'Intermediate – CBSE', sub: '2019 - 2020 | 95%' },
      { heading: 'Matriculation – CBSE', sub: '2017 - 2018 | 90.2%' },
    ],
  },
  {
    icon: <FaBriefcase />,
    title: 'Experience',
    entries: [
      {
        heading: 'AllHeart Web – MERN Developer',
        sub: 'June 2025 – Present',
        desc: `• Built and maintained scalable full-stack apps using MongoDB, Express.js, React, and Node.js.
              • Designed RESTful APIs and server-side logic with Node.js & Express.
              • Collaborated closely with frontend/backend teams to ensure seamless integration.
              • Handled deployments and maintenance on cloud environments.
              • Ensured application scalability, speed, and high performance.
              • Used Git for version control and agile collaboration.`,
      },
      {
        heading: 'Virtuoso Netsoft – Web Dev Intern',
        sub: 'Jan 2025 – May-2025',
        desc: `• Created dashboards, optimized backend data handling, reduced reporting time by 30%.
              • Streamlined backend workflows to enhance data processing efficiency and reduce manual effort. 
              • Identified and resolved critical bugs during testing and deployment phases to improve system stability.
              • Collaborated with senior developers to optimize features and troubleshoot performance issues.`,
      },
      {
        heading: 'CSIO-CSIR – Development Intern',
        sub: 'Jan 2024 – May-2024',
        desc: `• Designed a software tool for cephalogram analysis to streamline orthodontic planning.
        • Enhanced tool accuracy and efficiency through continuous research-driven improvements.
        • Co-led prototyping and testing efforts, boosting user interaction and adoption.
        • Gained hands-on experience across software tools, expanding technical skills and adaptability.`,
      },
    ],
  },
  {
    icon: <FaCertificate />,
    title: 'Certifications',
    entries: [
      {
        heading: 'React JS – Solitaire Infosys',
        sub: 'Issued: Aug 2023',
        desc: 'Completed an intensive 3-months training program covering React, Redux, and deployment practices.',
      },
      {
        heading: 'Cloud Computing 101 – AWS Educate',
        sub: 'Issued: July 2021',
        desc: 'Gained hands-on experience with AWS services including EC2, S3, Lambda, and IAM basics.',
      },
      {
        heading: 'Java Programming Fundamentals – Infosys',
        sub: 'Issued: Oct 2022',
        desc: 'Learned core Java concepts including OOP, data types, control structures, and exception handling. Built mini console applications using classes and interfaces.',
      },
    ],
  },
];

export default function AboutTimeline() {
  const [expandedSections, setExpandedSections] = useState<boolean[]>(
    timelineData.map(() => false)
  );

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className="max-w-6xl mx-auto pb-8 px-6">
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
              {expandedSections[index] ? (
                <FaMinus className="text-cyan-600 dark:text-cyan-400" />
              ) : (
                <FaPlus className="text-cyan-600 dark:text-cyan-400" />
              )}
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
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                        {entry.heading}
                      </h4>
                      {entry.sub && (
                        <p className="text-sm text-slate-500 dark:text-white/70">{entry.sub}</p>
                      )}
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
  );
}

export function AboutHero() {
  return (
    <div className="relative z-10 pt-28 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900 dark:text-white">
          About <span className="heading-gradient">Me</span>
        </h2>

        <p className="text-lg text-slate-600 dark:text-white/90 leading-relaxed mb-4 text-justify">
          <span className="text-cyan-600 dark:text-cyan-300 font-semibold">
            Not just a developer — a digital architect.
          </span>{' '}
          I&apos;m Khushmeet Saini, a full-stack engineer who designs intuitive interfaces,
          architects intelligent systems, and turns blank screens into real-world impact.
        </p>

        <p className="text-lg text-slate-600 dark:text-white/90 leading-relaxed mb-4 text-justify">
          Whether it&apos;s AI-powered visual search or real-time dashboards, I bridge the gap
          between data and design. From clean UI flows to scalable APIs, I build web experiences
          that don&apos;t just <em>function</em> — they <strong>connect</strong>.
        </p>

        <p className="text-lg text-slate-500 dark:text-white/80 italic mb-6 text-justify">
          &ldquo;I don&apos;t just write code. I shape digital journeys that speak for themselves.&rdquo;
        </p>

        <a href="/khushmeetsaini_resume.pdf" download className="inline-block btn-primary">
          Download Resume
        </a>
      </div>

      <div className="flex justify-center md:justify-end">
        <Image
          src="/full-img.webp"
          alt="Khushmeet Saini"
          width={300}
          height={300}
          className="rounded-2xl shadow-soft ring-1 ring-slate-200 dark:ring-white/10"
        />
      </div>
    </div>
  );
}
