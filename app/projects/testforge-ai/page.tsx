import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUpload,
  FaRobot,
  FaDownload,
  FaCode,
} from 'react-icons/fa';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'TestForge AI — Case Study',
  description:
    'How TestForge AI auto-generates complete test suites from project ZIPs using AI — problem, architecture, tech stack, and impact metrics.',
  openGraph: {
    title: 'TestForge AI Case Study | Khushmeet Saini',
    description:
      'AI-powered test suite generator — upload a ZIP, get runnable Jest, Pytest, JUnit tests in real-time.',
    images: ['/projectImages/testforge/testforge-preview.png'],
  },
};

const meta = [
  { label: 'Role', value: 'Full-Stack Developer' },
  { label: 'Category', value: 'AI · Developer Tools' },
  { label: 'Status', value: 'Live on Vercel' },
  { label: 'Year', value: '2025' },
];

const metrics = [
  { value: '6+', label: 'Test frameworks' },
  { value: '~85%', label: 'Less boilerplate' },
  { value: '4', label: 'Languages detected' },
  { value: '< 2 min', label: 'Avg. generation time' },
];

const narrative = [
  {
    num: '01',
    title: 'The problem',
    body: 'Developers skip tests because scaffolding is slow — configuring Jest vs Pytest vs JUnit, writing boilerplate, and covering routes takes hours before meaningful assertions begin.',
  },
  {
    num: '02',
    title: 'My role',
    body: 'Sole full-stack builder: product UX, ZIP ingestion pipeline, static code analysis, AI prompt design, streaming response UI, multi-language detection, and downloadable output packaging.',
  },
  {
    num: '03',
    title: 'The solution',
    body: 'TestForge AI — upload a project ZIP, watch tests generate live in the browser, then download a complete suite. The tool meets developers where they are instead of forcing a single framework.',
  },
];

const pipeline = [
  {
    icon: FaUpload,
    title: 'Upload & analyze',
    text: 'Unpack ZIP, detect language, framework, routes, and exports.',
  },
  {
    icon: FaRobot,
    title: 'AI generation',
    text: 'LLM streams runnable test files tailored to the detected stack.',
  },
  {
    icon: FaCode,
    title: 'Multi-framework',
    text: 'Jest, Vitest, Mocha, Pytest, JUnit 5, and RSpec output.',
  },
  {
    icon: FaDownload,
    title: 'Export',
    text: 'Download the full suite as a ZIP for local or CI use.',
  },
];

const techStack = [
  { name: 'React', icon: '/images/React.webp' },
  { name: 'TypeScript', icon: '/images/typescript.webp' },
  { name: 'Tailwind CSS', icon: '/images/Tailwind.webp' },
  { name: 'Node.js', icon: '/images/node-js.png' },
] as const;

const outcomes = [
  'Cuts initial test scaffolding time by ~85%',
  'Supports Jest, Vitest, Mocha, Pytest, JUnit 5, RSpec',
  'Real-time streaming so users see progress instantly',
  'Production-ready UX deployed on Vercel',
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400 mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
      {children}
    </h2>
  );
}

export default function TestForgeCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-950 text-slate-800 dark:text-white min-h-screen">
        {/* Hero */}
        <section className="relative pt-24 pb-20 px-6 overflow-hidden border-b border-slate-200/80 dark:border-white/10">
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
            style={{
              backgroundImage:
                'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-bl from-cyan-100/70 via-blue-50/40 to-transparent dark:from-cyan-950/40 dark:via-blue-950/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mb-10 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              All projects
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    Case Study
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.15em] px-3 py-1.5 rounded-md border border-slate-200 dark:border-white/15 text-slate-600 dark:text-gray-300">
                    AI · Developer Tools
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                  TestForge{' '}
                  <span className="heading-gradient">AI</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
                  An AI-powered test suite generator that turns a project ZIP into
                  complete, runnable tests — streamed in real-time with one-click download.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="https://testforge-ai-gen.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-sm"
                  >
                    View live product
                    <FaExternalLinkAlt className="text-xs opacity-80" />
                  </a>
                  <a
                    href="https://github.com/Khushmeet13/testforge-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex items-center gap-2 text-sm"
                  >
                    <FaGithub className="text-base" />
                    Source code
                  </a>
                </div>

                <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200/80 dark:border-white/10">
                  {meta.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[11px] uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-1">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-medium text-slate-800 dark:text-gray-200">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Browser mockup */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-violet-500/10 rounded-3xl blur-2xl dark:from-cyan-500/20 dark:to-violet-500/10" />
                <div className="relative rounded-xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/40 bg-white dark:bg-slate-900">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200/80 dark:border-white/10">
                    <span className="w-3 h-3 rounded-full bg-red-400/90" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/90" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
                    <span className="ml-3 flex-1 text-center text-[11px] text-slate-400 dark:text-gray-500 font-mono truncate pr-8">
                      testforge-ai-gen.vercel.app
                    </span>
                  </div>
                  <Image
                    src="/projectImages/testforge/testforge-preview.png"
                    alt="TestForge AI — upload project and stream generated tests"
                    width={1200}
                    height={700}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics strip */}
        <section className="border-b border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-black/40">
          <div className="max-w-6xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-white/10">
              {metrics.map((m) => (
                <div key={m.label} className="py-4 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tabular-nums tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative */}
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-14">
              <SectionLabel>Overview</SectionLabel>
              <SectionTitle>
                From problem to{' '}
                <span className="heading-gradient">shipped product</span>
              </SectionTitle>
              <p className="mt-4 text-slate-600 dark:text-gray-400 leading-relaxed">
                A product-minded breakdown of why TestForge AI exists, what I built,
                and how it delivers value to developers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {narrative.map((item) => (
                <article
                  key={item.num}
                  className="group relative p-8 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-cyan-200 dark:hover:border-cyan-800/50 transition-colors"
                >
                  <span className="text-5xl font-bold text-slate-100 dark:text-white/[0.06] absolute top-6 right-6 select-none">
                    {item.num}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 relative">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed relative">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pipeline */}
        <section className="section-muted px-6 py-20 md:py-24 border-y border-slate-200/80 dark:border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <SectionLabel>Architecture</SectionLabel>
              <SectionTitle>
                How the{' '}
                <span className="heading-gradient">pipeline works</span>
              </SectionTitle>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pipeline.map(({ icon: Icon, title, text }, i) => (
                <div key={title} className="relative">
                  {i < pipeline.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-2.5 z-10 text-slate-300 dark:text-white/20">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                  <div className="h-full p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
                    <div className="w-11 h-11 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center mb-5">
                      <Icon className="text-white dark:text-slate-900 text-lg" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product walkthrough */}
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2 lg:sticky lg:top-28">
                <SectionLabel>Product</SectionLabel>
                <SectionTitle>
                  Interface &{' '}
                  <span className="heading-gradient">user flow</span>
                </SectionTitle>
                <p className="mt-4 text-slate-600 dark:text-gray-400 leading-relaxed text-sm">
                  A focused three-step experience: upload a project, watch tests stream
                  in real time, then export a ready-to-run suite.
                </p>

                <ol className="mt-10 space-y-6">
                  {[
                    { step: '1', title: 'Upload ZIP', desc: 'Drop any Node, Python, or Java project archive.' },
                    { step: '2', title: 'Watch generation', desc: 'Tests stream live as the AI writes each file.' },
                    { step: '3', title: 'Download & run', desc: 'Export the full suite and run it in your repo or CI.' },
                  ].map((s) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-cyan-500/30 dark:border-cyan-400/30 flex items-center justify-center text-xs font-bold text-cyan-600 dark:text-cyan-400">
                        {s.step}
                      </span>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{s.title}</p>
                        <p className="text-sm text-slate-500 dark:text-gray-400 mt-0.5">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="lg:col-span-3">
                <div className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-soft dark:shadow-none bg-slate-50 dark:bg-white/[0.02] p-2">
                  <Image
                    src="/projectImages/testforge/testforge-preview.png"
                    alt="TestForge AI product screenshot"
                    width={1200}
                    height={700}
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <p className="text-xs text-slate-400 dark:text-gray-500 mt-3 text-center">
                  Upload flow with live streaming output and downloadable test suite
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech + Impact */}
        <section className="section-muted px-6 py-20 md:py-24 border-t border-slate-200/80 dark:border-white/10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionLabel>Technology</SectionLabel>
              <SectionTitle>
                Built with{' '}
                <span className="heading-gradient">modern tooling</span>
              </SectionTitle>
              <p className="mt-4 text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
                React + TypeScript + Tailwind on the frontend. Node.js backend handles
                ZIP extraction, AST-aware context building, LLM streaming via SSE, and
                packaged ZIP export.
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10"
                  >
                    <Image src={tech.icon} alt={tech.name} width={20} height={20} />
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
                <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10">
                  <FaRobot className="text-violet-600 dark:text-violet-400 text-base" />
                  <span className="text-sm font-medium text-slate-700 dark:text-gray-300">AI / LLM</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
              <SectionLabel>Results</SectionLabel>
              <SectionTitle>
                Measurable{' '}
                <span className="heading-gradient">impact</span>
              </SectionTitle>
              <p className="mt-4 text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
                TestForge AI removes the biggest friction in adopting tests: getting
                started. Developers receive a meaningful baseline suite in minutes —
                covering routes, utilities, and core logic with framework-correct syntax.
              </p>
              <ul className="space-y-3">
                {outcomes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-cyan-950 px-8 py-14 md:px-16 md:py-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/10 to-violet-600/20 pointer-events-none" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-4">
                  Live product
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  Try TestForge AI yourself
                </h2>
                <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                  Upload a project ZIP and see a complete test suite generated in real time.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://testforge-ai-gen.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors"
                  >
                    Open live demo
                    <FaExternalLinkAlt className="text-xs opacity-70" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-white/25 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
