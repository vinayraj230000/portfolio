'use client';

import { useState } from 'react';
import { HiOutlineClipboardCopy } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LazyLottie from './LazyLottie';
import backendAnimation from './animations/backend.json';
import frontendAnimation from './animations/frontend.json';
import tooldesignAnimation from './animations/tool&design.json';
import { fastTransition, viewportOnce } from '@/lib/motion';


// Tech Stack Data
type SkillCategory = 'Frontend' | 'Backend' | 'Tools & Design';

const skillSections: Record<SkillCategory, {
  icon: string | object;
  skills: { name: string; icon: string }[];
}> = {
  Frontend: {
    icon: frontendAnimation,
    skills: [
      { name: 'React.js', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/nextdotjs.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
    ],
  },
  Backend: {
    icon: backendAnimation,
    skills: [
      { name: 'Node.js', icon: '/icons/nodedotjs.svg' },
      { name: 'Express.js', icon: '/icons/express.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'MySQL', icon: '/icons/mysql.svg' },
    ],
  },
  'Tools & Design': {
    icon: tooldesignAnimation,
    skills: [
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Figma', icon: '/icons/figma.svg' },
    ],
  },
};

const insights = [
  {
    text: 'Tech enthusiast with a passion for development',
    image: '/images/development.webp',
    type: 'image',
  },
  {
    text: 'Stay curious. Keep experimenting.',
    type: 'image',
  },
];

type InsightProps = {
  text: string;
  image?: string | object;
  type?: 'lottie' | 'image';
};

const InsightCard = ({ text, image, type = 'image' }: InsightProps) => (
  <motion.div
    className="w-full max-w-[300px] flex flex-col items-center text-center card-light px-4 py-4 space-y-3"
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={fastTransition}
    viewport={viewportOnce}
  >
    <p className="text-sm text-slate-600 dark:text-white italic">{text}</p>

    {type === 'lottie' && typeof image === 'object' && (
      <LazyLottie animationData={image} loop style={{ width: 100, height: 100 }} />
    )}

    {type === 'image' && typeof image === 'string' && (
      <Image src={image} alt="Insight visual" width={100} height={100} onError={() => console.error("Image failed to load:", image)} />
    )}
  </motion.div>
);

export default function Skills() {
  const categories: SkillCategory[] = ['Frontend', 'Backend'];
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('vinayraj01276@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>


      <motion.section
        className="relative px-4 py-16 section-muted overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={fastTransition}
        viewport={viewportOnce}
      >


        <div className="text-center mb-8 relative z-10">
          <motion.p
            className="text-md text-slate-500 dark:text-gray-300 tracking-wide mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={fastTransition}
            viewport={viewportOnce}
          >
            I constantly try to improve
          </motion.p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            MY <span className="heading-gradient">Tech Stack</span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 max-w-7xl mx-auto px-4">
          {/* LEFT: Quotes / Cards */}
          <div className="flex flex-col gap-5">
            <div className="relative w-full max-w-[700px]">
              <Image
                src="/images/techphoto.webp"
                alt="Tech Background"
                width={700}
                height={400}
                className="rounded-2xl shadow-soft ring-1 ring-slate-200/60"
              />

              {/* Text Over Image */}
              <div className="absolute inset-0 flex items-end justify-center">
                <p className="text-white font-serif text-xl sm:text-xl font-semibold bg-black/50 px-4 py-2 rounded-xl shadow-lg">
                  “The best way to learn is by building.”
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between gap-5 ">
              {/* LEFT: All Insight Cards */}
              <div className="flex flex-col gap-5">
                {insights.map((item, index) => (
                  <InsightCard key={index} text={item.text} image={item.image} />
                ))}
              </div>

              {/* RIGHT: Single Side Image */}
              <div className="w-full max-w-[300px] h-[200px] flex-shrink-0 mt-6 md:mt-0 relative mx-auto md:mx-0">
                <Image
                  src="/images/connected.jpg"
                  alt="Visual Side Image"
                  fill
                  className="rounded-2xl shadow-xl object-cover"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center bg-slate-900/50 dark:bg-black/40 rounded-2xl">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    Do you want to start a project together?
                  </p>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-full shadow-md hover:bg-cyan-50 hover:text-cyan-700 transition duration-200"
                  >
                    <HiOutlineClipboardCopy className="text-xl" />
                    {copied ? 'Copied!' : 'Copy my email address'}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Tech Stack */}
          <div className="space-y-8">
            {/* Frontend and Backend in two columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {categories.map((category) => {
                const data = skillSections[category];
                return (
                  <div
                    key={category}
                    className="p-6 card-light"
                  >
                    <motion.h3
                      className="text-2xl font-bold flex items-center gap-1 mb-2 text-slate-800 dark:text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={fastTransition}
                      viewport={viewportOnce}
                    >
                      {typeof data.icon === 'string' ? (
                        <Image src={data.icon} alt={category} width={30} height={30} />
                      ) : (
                        <LazyLottie animationData={data.icon} loop className="w-[90px] h-[90px]" />
                      )}
                      {category}
                    </motion.h3>

                    <div className="grid grid-cols-2 gap-4">
                      {data.skills.map((tech) => (
                        <motion.div
                          key={tech.name}
                          className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-white dark:bg-black/45 rounded-2xl border border-slate-200 dark:border-white/20 shadow-sm hover:shadow-glow hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all hover:scale-105"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={40}
                            height={40}
                            className="mb-2 opacity-90 hover:opacity-100 transition duration-200 dark:filter dark:invert dark:brightness-200"
                          />
                          <span className="text-sm text-gray-800 dark:text-white">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tools & Design section in full width below */}
            <div className="p-6 card-light">
              <motion.h3
                className="text-2xl font-bold flex items-center gap-3 mb-4 text-slate-800 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={fastTransition}
                viewport={viewportOnce}
              >

                {typeof skillSections['Tools & Design'].icon === 'string' ? (
                  <Image src={skillSections['Tools & Design'].icon as string} alt="Tools & Design" width={30} height={30} />
                ) : (
                  <LazyLottie animationData={skillSections['Tools & Design'].icon} loop className="w-[50px] h-[50px]" />
                )}

                Tools & Design
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {skillSections['Tools & Design'].skills.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-white dark:bg-black/45 rounded-2xl border border-slate-200 dark:border-white/20 shadow-sm hover:shadow-glow hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="mb-2 opacity-90 hover:opacity-100 transition duration-200 dark:filter dark:invert dark:brightness-200"
                    />

                    <span className="text-sm text-gray-800 dark:text-white">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
