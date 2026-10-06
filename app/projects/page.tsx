'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaSearch, FaTooth, FaTimes, FaBolt, FaWallet, FaTicketAlt, FaTools, FaGlobe, FaCube, FaBrain, FaBuilding, FaShieldAlt, FaMusic, FaCarSide } from 'react-icons/fa';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import dynamic from 'next/dynamic';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = dynamic(() => import('@/components/Carousel'), { ssr: false });
const Chatbot = dynamic(() => import('@/components/Chatbot'), { ssr: false });

type Category = 'All' | 'Web Development' | 'UI/UX' | 'AI' | 'Desktop Application';

const TABS: Category[] = ['All', 'Web Development', 'UI/UX', 'AI', 'Desktop Application'];

const projects = [
  {
    title: 'MIS Dashboard',
    category: 'Web Development' as Category,
    description: 'An analytics dashboard for real-time business insights with charts & user KPIs.',
    icon: <FaChartLine size={20} className="text-blue-400" />,
    image: '/projectImages/mis-dash/mis-dash-5.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/mis-dashboard.mp3',
    impact: '✅ Used by technical teams • 🚀 35% performance boost • 📈 Improved reporting visibility',
    screenshots: [
      '/projectImages/mis-dash/mis-dash-1.png',
      '/projectImages/mis-dash/mis-dash-2.png',
      '/projectImages/mis-dash/mis-dash-3.png',
      '/projectImages/mis-dash/mis-dash-4.png',
      '/projectImages/mis-dash/mis-dash-5.png',
      '/projectImages/mis-dash/mis-dash-6.png',
      '/projectImages/mis-dash/mis-dash-7.png',
      '/projectImages/mis-dash/mis-dash-8.png',
    ],
    github: 'https://github.com/Khushmeet13/mis-dashboard',
    liveDemo: 'https://mis-dashboard-sigma.vercel.app/',
    narrationText: `The MIS Dashboard provides real-time analytics for business performance. It includes charts, KPIs, and tools to boost decision-making by 35%.`,
  },
  {
    title: 'Neural AI Search',
    category: 'AI' as Category,
    description: 'AI-powered search engine with Deep Search, AI Overview, Private Mode, and built-in productivity tools.',
    icon: <FaSearch size={20} className="text-cyan-400" />,
    image: '/projectImages/neural-ai/neural-1.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/visual-search.mp3',
    impact: '✅ 1M+ images indexed • 🚀 90% faster search • 📈 70% user satisfaction improvement',
    screenshots: ['/projectImages/neural-ai/neural-1.png', '/projectImages/neural-ai/neural-2.png', '/projectImages/neural-ai/neural-3.png','/projectImages/neural-ai/neural-4.png', '/projectImages/neural-ai/neural-5.png'],
    github: 'https://github.com/Khushmeet13/neural-search',
    liveDemo: 'https://neural-search.vercel.app/',
    narrationText: `Neural AI Search is an AI-powered search engine designed to make web search smarter, faster, and more useful. It integrates DuckDuckGo to provide relevant web results while offering advanced features like AI Overview and Deep Search for enhanced information discovery. The platform also includes Private Mode for privacy-focused searching and a collection of Quick Tools such as Calculator, Weather, Currency Converter, and World Clock, all within a modern and responsive interface.`
  },
  {
    title: 'Cephalogram Tool',
    category: 'Desktop Application' as Category,
    description: 'AI-driven dental X-ray measurement app with annotation and detection.',
    icon: <FaTooth size={20} className="text-emerald-600 dark:text-white" />,
    image: '/projectImages/ceph/ceph-4.png',
    bgEffect: 'bg-[url(/images/bg-dental.png)]',
    audio: '/audio/cephalogram-tool.mp3',
    impact: '✅ Over 200+ points • 🚀 60% time savings • 📈 Improved diagnosis precision',
    screenshots: [
      '/projectImages/ceph/ceph-1.png',
      '/projectImages/ceph/ceph-2.png',
      '/projectImages/ceph/ceph-3.png',
      '/projectImages/ceph/ceph-4.png',
    ],
    github: 'https://github.com/Khushmeet13/ceph-analysis-tool',
    liveDemo: 'https://github.com/Khushmeet13/ceph-analysis-tool',
    caseStudy: '/projects/cephalogram-tool',
    narrationText: `User-friendly software for orthodontists to analyze X-ray images with precision. It supports landmark measurements, reduces human error with algorithmic workflows, and boosts workflow efficiency by 25%.`,
  },
  {
    title: 'TestForge AI',
    category: 'AI' as Category,
    description: 'AI-powered test suite generator — upload a project ZIP and AI generates complete test files in real-time.',
    icon: <FaBolt size={20} className="text-yellow-400" />,
    image: '/projectImages/testforge/testforge-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/testforge.mp3',
    impact: '✅ Node.js · TypeScript · Python · Java • 🚀 Jest, Pytest, JUnit & more • 📈 Live streaming output',
    screenshots: ['/projectImages/testforge/testforge-1.png', '/projectImages/testforge/testforge-2.png', '/projectImages/testforge/testforge-3.png', '/projectImages/testforge/testforge-4.png', '/projectImages/testforge/testforge-5.png', '/projectImages/testforge/testforge-6.png', '/projectImages/testforge/testforge-7.png'],
    github: 'https://github.com/Khushmeet13/testforge-ai',
    liveDemo: 'https://testforge-ai-gen.vercel.app/',
    caseStudy: '/projects/testforge-ai',
    narrationText: `TestForge AI lets you upload any project ZIP — it auto-detects the language and framework, analyzes functions and API routes, then uses AI to stream a complete test suite in real-time. Supports Jest, Vitest, Mocha, Pytest, JUnit 5, and RSpec with one-click download.`,
  },
  {
    title: 'Finora',
    category: 'Web Development' as Category,
    description: 'Personal finance dashboard — track spending, manage cards, and get budget-aware shopping picks.',
    icon: <FaWallet size={20} className="text-emerald-400" />,
    image: '/projectImages/finora/finora-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/finora.mp3',
    impact: '✅ Multi-card management • 🚀 AI product recommendations • 📈 Auto-synced history',
    screenshots: [
      '/projectImages/finora/finora-1.jpeg',
      '/projectImages/finora/finora-2.jpeg',
      '/projectImages/finora/finora-3.jpeg',
      '/projectImages/finora/finora-4.jpeg',
      '/projectImages/finora/finora-5.jpeg',
      '/projectImages/finora/finora-6.jpeg',
    ],
    github: 'https://github.com/Khushmeet13/finora',
    liveDemo: 'https://finora-dashboard.vercel.app',
    narrationText: `Finora is a smart personal finance dashboard where you can add and manage payment cards, track your spending, and visualize budget breakdowns. It pulls transaction history directly from your payment gateway and uses AI to recommend online shopping products that fit within your remaining monthly budget — so you never overspend.`,
  },
  {
    title: 'StagePass',
    category: 'Web Development' as Category,
    description: 'Event ticketing platform — discover shows, book seats, pay online & get confirmation on WhatsApp and email.',
    icon: <FaTicketAlt size={20} className="text-orange-400" />,
    image: '/projectImages/stagepass/stagepass-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/stagepass.mp3',
    impact: '✅ Live Ticketmaster • 🚀 Online payments & QR tickets • 📈 WhatsApp & email confirmation',
    screenshots: [
      '/projectImages/stagepass/stagepass-1.png',
      '/projectImages/stagepass/stagepass-2.png',
      '/projectImages/stagepass/stagepass-3.png',
      '/projectImages/stagepass/stagepass-4.png',
      '/projectImages/stagepass/stagepass-5.png',
    ],
    github: 'https://github.com/Khushmeet13/event-booking-app',
    liveDemo: 'https://stagepass-tickets.vercel.app/',
    narrationText: `StagePass is a production-grade event ticketing platform. Browse live shows powered by the Ticketmaster API, filter by city and genre, check venue locations, enquire via WhatsApp, select seats, and checkout with online payment. You get a QR-coded ticket confirmation instantly on both WhatsApp and email.`,
  },
  {
    title: 'ToolNest',
    category: 'Web Development' as Category,
    description: 'All-in-one utility platform — generators, converters, image tools & dev utilities organized by category.',
    icon: <FaTools size={20} className="text-amber-400" />,
    image: '/projectImages/toolnest/toolnest-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/toolnest.mp3',
    impact: '✅ 20+ tools across 4 categories • 🚀 Zero login required • 📈 Instant in-browser processing',
    screenshots: [
      '/projectImages/toolnest/toolnest-preview.png',
      '/projectImages/toolnest/toolnest-1.png',
      '/projectImages/toolnest/toolnest-2.png',
      '/projectImages/toolnest/toolnest-3.png',
      '/projectImages/toolnest/toolnest-4.png',
      '/projectImages/toolnest/toolnest-5.png',
    ],
    github: 'https://github.com/Khushmeet13/toolnest',
    liveDemo: 'https://toolnest-new.vercel.app/',
    narrationText: `ToolNest is a clean, category-driven utility platform housing tools for generators, converters, image processing, and developer utilities — all running in-browser with no login needed. Built for speed and discoverability, every tool is one click away.`,
  },
  {
    title: 'LaunchXY',
    category: 'UI/UX' as Category,
    description: 'CRM website with multi-language support — clean, conversion-focused design for a SaaS product.',
    icon: <FaGlobe size={20} className="text-sky-400" />,
    image: '/projectImages/lxy/lxy-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/launchxy.mp3',
    impact: '✅ Multi-language support • 🚀 CRM-focused UI • 📈 Conversion-optimized landing sections',
    screenshots: [
      '/projectImages/lxy/launchxy-1.png',
      '/projectImages/lxy/launchxy-2.png',
      '/projectImages/lxy/launchxy-3.png',
      '/projectImages/lxy/launchxy-4.png',
      '/projectImages/lxy/launchxy-5.png',
      '/projectImages/lxy/launchxy-6.png',
    ],
    github: 'https://github.com/Khushmeet13/launchxy',
    liveDemo: 'https://lxy-website.vercel.app/',
    narrationText: `LaunchXY is a polished marketing website for a CRM SaaS product. It features multi-language support for global reach, clean section-based layout with feature highlights, pricing, and testimonials — all designed to convert visitors into users.`,
  },
  {
    title: 'Cryptrix',
    category: 'UI/UX' as Category,
    description: 'Immersive 3D blockchain website — a visually rich Web3 landing page with futuristic UI and fluid animations.',
    icon: <FaCube size={20} className="text-cyan-400" />,
    image: '/projectImages/cryptrix/cryptrix-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/cryptrix.mp3',
    impact: '✅ Full 3D interactive UI • 🚀 Web3 aesthetic • 📈 Smooth GSAP & Three.js animations',
    screenshots: [
      '/projectImages/cryptrix/cryptrix-1.png',
      '/projectImages/cryptrix/cryptrix-2.png',
      '/projectImages/cryptrix/cryptrix-3.png',
      '/projectImages/cryptrix/cryptrix-4.png',
      '/projectImages/cryptrix/cryptrix-5.png',
    ],
    github: 'https://github.com/Khushmeet13/cryptrix-webiste',
    liveDemo: 'https://cryptrix-webiste.vercel.app/',
    narrationText: `Cryptrix is a high-fidelity 3D blockchain landing page built purely for visual impact. It features immersive Three.js scenes, fluid GSAP animations, and a dark futuristic aesthetic that captures the energy of Web3 — no backend, just pure frontend craftsmanship.`,
  },
  {
    title: 'Nexus AI',
    category: 'UI/UX' as Category,
    description: '3D interactive showcase built with Next.js & Three.js — three immersive 3D models with smooth scene transitions.',
    icon: <FaBrain size={20} className="text-violet-400" />,
    image: '/projectImages/nexus/nexus-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/nexus-ai.mp3',
    impact: '✅ 3 custom 3D models • 🚀 Next.js + Three.js • 📈 Smooth camera & scene transitions',
    screenshots: [
      '/projectImages/nexus/nexus-1.png',
      '/projectImages/nexus/nexus-2.png',
      '/projectImages/nexus/nexus-3.png',
      '/projectImages/nexus/nexus-4.png',
    ],
    github: 'https://github.com/Khushmeet13/nexus-ai-3d',
    liveDemo: 'https://nexus-ai-3d.vercel.app/',
    narrationText: `Nexus AI is a pure 3D creative showcase built with Next.js and Three.js. It features three custom 3D models rendered in-browser with fluid camera transitions and immersive lighting — a demonstration of what modern web can achieve visually without any native app.`,
  },
  {
    title: 'ArchViz',
    category: 'UI/UX' as Category,
    description: '3D architectural visualization — interactive property tours through photorealistic house models in the browser.',
    icon: <FaBuilding size={20} className="text-amber-400" />,
    image: '/projectImages/archviz/archviz-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/archviz.mp3',
    impact: '✅ Photorealistic 3D models • 🚀 Interactive property walkthroughs • 📈 Browser-native',
    screenshots: [
      '/projectImages/archviz/archviz-1.png',
      '/projectImages/archviz/archviz-2.png',
      '/projectImages/archviz/archviz-3.png',
    ],
    github: 'https://github.com/Khushmeet13/archviz',
    liveDemo: 'https://archviz-3d.vercel.app/',
    narrationText: `ArchViz brings architectural models to life in the browser. Explore photorealistic 3D house models with interactive walkthroughs — navigate rooms, inspect layouts, and experience property designs as if you're physically there, all powered by Three.js with zero plugins required.`,
  },
  {
    title: 'Auth System',
    category: 'Web Development' as Category,
    description: 'Full-stack auth implementation — login, signup, OAuth, roles & permissions with secure session management.',
    icon: <FaShieldAlt size={20} className="text-green-400" />,
    image: '/projectImages/auth/auth-preview.png',
    bgEffect: 'bg-[url(/images/bg-charts.png)]',
    audio: '/audio/auth.mp3',
    impact: '✅ OAuth + JWT + Sessions • 🚀 Role-based access control • 📈 Production-ready security patterns',
    screenshots: [
      '/projectImages/auth/auth-1.png',
      '/projectImages/auth/auth-2.png',
      '/projectImages/auth/auth-3.png',
      '/projectImages/auth/auth-4.png',
      '/projectImages/auth/auth-5.png',
      '/projectImages/auth/auth-6.png',
    ],
    github: 'https://github.com/Khushmeet13/auth-system',
    liveDemo: 'https://auth-new-system.vercel.app/',
    narrationText: `A complete full-stack authentication system covering login, signup, OAuth providers, JWT tokens, session management, role-based access control, and protected routes — built as a production-ready reference implementation for secure user auth.`,
  },
  {
    title: 'Music Universe',
    category: 'UI/UX' as Category,
    description: 'Immersive 3D music visualization — songs are stars, genres are galaxies, playlists are constellations in a navigable universe.',
    icon: <FaMusic size={20} className="text-pink-400" />,
    image: '/projectImages/music-universe/music-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/music-universe.mp3',
    impact: '✅ Beat-reactive 3D stars • 🚀 Web Audio API + Three.js • 📈 Bloom, Vignette & Chromatic Aberration FX',
    screenshots: [
      '/projectImages/music-universe/music-1.png',
      '/projectImages/music-universe/music-2.png',
      '/projectImages/music-universe/music-3.png',
    ],
    github: 'https://github.com/Khushmeet13/music-universe',
    liveDemo: 'https://music-universe-3d.vercel.app/',
    narrationText: `Music Universe transforms your entire music library into a navigable 3D cosmos. Every song is a glowing star pulsing to its BPM, genres form spiral particle galaxies, and playlists connect as constellations in deep space. Built with React Three Fiber, Web Audio API for real-time beat detection, and post-processing effects including Bloom and Chromatic Aberration — it's the most visual way to experience music.`,
  },
  {
    title: 'Vetron Cars',
    category: 'UI/UX' as Category,
    description: '3D supercar showcase — 360° model rotation, live color customization & dynamic environment lighting.',
    icon: <FaCarSide size={20} className="text-red-400" />,
    image: '/projectImages/vetron/cars-preview.png',
    bgEffect: 'bg-[url(/images/bg-matrix.png)]',
    audio: '/audio/vetron.mp3',
    impact: '✅ 360° interactive rotation • 🚀 Real-time color customization • 📈 Dynamic environment & studio lighting',
    screenshots: [
      '/projectImages/vetron/vetron-1.png',
      '/projectImages/vetron/vetron-2.png',
      '/projectImages/vetron/vetron-3.png',
    ],
    github: 'https://github.com/Khushmeet13/vetron-cars',
    liveDemo: 'https://vetron-cars.vercel.app/',
    narrationText: `Vetron Cars is a premium 3D supercar showcase built to feel like a virtual showroom. Rotate any model a full 360 degrees, switch paint colors in real time, and watch the lighting respond dynamically across different studio and environment presets — a polished, high-fidelity way to present a fleet of supercars on the web.`,
  },
];

// Tab accent colors
const TAB_COLORS: Record<Category, string> = {
  All: 'from-indigo-400 to-blue-400',
  'Web Development': 'from-blue-400 to-cyan-400',
  'UI/UX': 'from-pink-400 to-rose-400',
  AI: 'from-violet-400 to-purple-400',
  'Desktop Application': 'from-emerald-400 to-teal-400',
};

const TAB_ACTIVE_BG: Record<Category, string> = {
  All: 'bg-white dark:bg-white/15 text-slate-800 dark:text-white shadow-sm',
  'Web Development': 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-200',
  'UI/UX': 'bg-pink-100 dark:bg-pink-500/10 text-pink-700 dark:text-pink-200',
  AI: 'bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-200',
  'Desktop Application': 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-200',
};

const CATEGORY_BADGE: Record<Exclude<Category, 'All'>, string> = {
  'Web Development': 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-600/40 dark:text-blue-100 dark:border-blue-400/30',
  'UI/UX': 'bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-600/40 dark:text-pink-100 dark:border-pink-400/30',
  AI: 'bg-violet-100 text-violet-800 border-violet-200 dark:bg-violet-600/40 dark:text-violet-100 dark:border-violet-400/30',
  'Desktop Application': 'bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-600/40 dark:text-emerald-100 dark:border-emerald-400/30',
};

function darkBgOnly(bgClass: string) {
  return bgClass.replace(/^bg-/, 'dark:bg-');
}

export default function Projects() {
  const audioRefs = useRef<{ [key: number]: HTMLAudioElement | null }>({});
  const [carouselImages, setCarouselImages] = useState<string[] | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState<Category>('All');

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (!carouselImages) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
      } else if (e.key === 'ArrowRight') {
        setCurrent((prev) => (prev + 1) % carouselImages.length);
      } else if (e.key === 'Escape') {
        setCarouselImages(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [carouselImages]);

  const handlePlayAudio = (index: number) => {
    const currentAudio = audioRefs.current[index];
    if (playingIndex === index && currentAudio) {
      currentAudio.pause();
      setPlayingIndex(null);
      return;
    }
    Object.entries(audioRefs.current).forEach(([i, audio]) => {
      if (audio && Number(i) !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    if (currentAudio) {
      currentAudio.currentTime = 0;
      currentAudio.play();
      setPlayingIndex(index);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-screen px-6 py-20 bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-black text-slate-800 dark:text-white overflow-hidden"
        >
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-100/60 dark:bg-purple-600 dark:opacity-30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-violet-100/50 dark:bg-blue-400 dark:opacity-20 rounded-full blur-3xl" />

          <div className="text-center mb-10 pt-10 relative z-10">
            <h2 className="text-4xl md:text-3xl font-semibold mb-3 tracking-tight">
              <span className="heading-gradient">Projects</span>
            </h2>
            <p className="text-lg text-slate-600 dark:opacity-80">
              Scroll through AI magic, data mastery, and intuitive design.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-16 z-10 relative">
            <div className="flex gap-2 p-1 rounded-xl bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 shadow-soft">
              {TABS.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative px-5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                      ? TAB_ACTIVE_BG[tab] + ' shadow-md'
                      : 'text-slate-500 dark:text-white/50 hover:text-slate-800 dark:hover:text-white/80 hover:bg-white/80 dark:hover:bg-white/5'
                      }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tab-indicator"
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${TAB_COLORS[tab]} opacity-20`}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {tab === 'Web Development' && <span className="text-blue-300">{'</>'}</span>}
                      {tab === 'UI/UX' && <span className="text-pink-300">✦</span>}
                      {tab === 'AI' && <span className="text-violet-300">◈</span>}
                      {tab === 'All' && <span className="text-slate-400 dark:text-white/70">⊞</span>}
                      {tab === 'Desktop Application' && <span className="text-emerald-300">⬡</span>}
                      {tab}
                    </span>
                    {isActive && (
                      <span
                        className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-gradient-to-r ${TAB_COLORS[tab]} opacity-80`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project count label */}
          {/* <div className="text-center mb-8 z-10 relative">
            <span className="text-white/40 text-sm tracking-widest uppercase">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
              {activeTab !== 'All' ? ` in ${activeTab}` : ''}
            </span>
          </div> */}

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 relative"
            >
              {filteredProjects.length === 0 ? (
                <div className="col-span-3 text-center py-24 text-slate-400 dark:text-white/40 text-lg">
                  No projects in this category yet.
                </div>
              ) : (
                filteredProjects.map((project, index) => {
                  // Find the global index for audio refs
                  const globalIndex = projects.indexOf(project);
                  return (
                    <Tilt
                      key={project.title}
                      glareEnable={true}
                      glareMaxOpacity={0.15}
                      tiltMaxAngleX={10}
                      tiltMaxAngleY={10}
                      className={`relative group p-1 rounded-2xl bg-white border border-slate-200 shadow-soft dark:bg-transparent dark:border-0 dark:shadow-xl ${darkBgOnly(project.bgEffect)} dark:bg-cover dark:bg-center`}
                    >
                      <div className="absolute -top-3 right-3 z-20">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border backdrop-blur-sm ${CATEGORY_BADGE[project.category as Exclude<Category, 'All'>]}`}
                        >
                          {project.category}
                        </span>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="relative rounded-2xl overflow-hidden bg-white dark:bg-white/10 dark:backdrop-blur-xl dark:border dark:border-white/10"
                      >
                        <div className="p-5">
                          <div className="flex items-center gap-3 mb-2">
                            {project.icon}
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                          </div>
                          <div className="relative h-40 w-full mb-3 rounded-lg overflow-hidden ring-1 ring-slate-100 dark:ring-0">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={700}
                              height={300}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <p className="text-sm text-slate-600 dark:text-white/90 mb-2">{project.description}</p>
                          <p className="text-xs text-slate-500 dark:text-white/60 italic">{project.impact}</p>
                        </div>

                        {/* Hover Glassy Overlay */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => handlePlayAudio(globalIndex)}
                            className="text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black mb-2"
                          >
                            {playingIndex === globalIndex ? '⏸ Pause' : '▶ Narration'}
                          </button>
                          <button
                            onClick={() => {
                              setCarouselImages(project.screenshots);
                              setCurrent(0);
                            }}
                            className="text-white border border-white px-4 py-1 text-sm rounded hover:bg-white hover:text-black mb-2"
                          >
                            View Screenshots
                          </button>
                          <div className="flex gap-3">
                            {'caseStudy' in project && project.caseStudy && (
                              <Link
                                href={project.caseStudy}
                                className="text-sm underline text-white/90 hover:text-white font-medium"
                              >
                                Case Study
                              </Link>
                            )}
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm underline text-white/90 hover:text-white"
                            >
                              GitHub
                            </a>
                            <a
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm underline text-white/90 hover:text-white"
                            >
                              Live Demo
                            </a>
                          </div>
                        </div>

                        <audio
                          ref={(el) => {
                            audioRefs.current[globalIndex] = el;
                          }}
                          src={project.audio}
                          preload="auto"
                        />

                        {playingIndex === globalIndex && (
                          <div className="p-4 bg-slate-50 dark:bg-white/10 text-slate-700 dark:text-white text-sm italic rounded-b-2xl border-t border-slate-100 dark:border-white/10">
                            {project.narrationText}
                          </div>
                        )}
                      </motion.div>
                    </Tilt>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>

          {/* Carousel Modal */}
          {carouselImages && (
            <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
              <div className="w-11/12 max-w-6xl rounded-lg overflow-hidden relative flex items-center">
                <button
                  onClick={() =>
                    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
                  }
                  className="text-white text-4xl px-1 py-4 z-30 bg-black/50 rounded-full hover:bg-white/50 hover:text-black m-2"
                >
                  <ChevronLeft />
                </button>

                <Carousel images={carouselImages} current={current} setCurrent={setCurrent} />

                <button
                  onClick={() => setCurrent((prev) => (prev + 1) % carouselImages.length)}
                  className="text-white text-4xl px-1 py-4 z-30 bg-black/50 rounded-full hover:bg-white/50 hover:text-black m-2"
                >
                  <ChevronRight />
                </button>
              </div>

              <button
                onClick={() => setCarouselImages(null)}
                className="absolute top-2 right-2 text-white text-2xl bg-black/70 p-2 rounded-full z-20 hover:bg-white/20 hover:text-gray-300"
              >
                <FaTimes />
              </button>
            </div>
          )}

          <Chatbot />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}