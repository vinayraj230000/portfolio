import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaUpload,
  FaCrosshairs,
  FaRulerCombined,
  FaFileMedical,
} from 'react-icons/fa';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cephalogram Tool — Case Study',
  description:
    'How a JavaFX desktop app streamlines orthodontic cephalogram analysis — problem, role, tech stack, screenshots, and impact metrics.',
  openGraph: {
    title: 'Cephalogram Tool Case Study | Khushmeet Saini',
    description:
      'Desktop software for dental X-ray landmark measurement and orthodontic treatment planning.',
    images: ['/projectImages/ceph/ceph-4.png'],
  },
};

const meta = [
  { label: 'Role', value: 'Software Developer' },
  { label: 'Category', value: 'Desktop · Healthcare' },
  { label: 'Status', value: 'Open source' },
  { label: 'Year', value: '2024' },
];

const metrics = [
  { value: '200+', label: 'Landmark points' },
  { value: '60%', label: 'Time saved per scan' },
  { value: '25%', label: 'Workflow efficiency gain' },
  { value: '4', label: 'Analysis modules' },
];

const narrative = [
  {
    num: '01',
    title: 'The problem',
    body: 'Orthodontists rely on cephalometric X-rays for treatment planning, but manual landmark measurement is slow, repetitive, and prone to human error — especially when tracing angles and distances across hundreds of anatomical reference points.',
  },
  {
    num: '02',
    title: 'My role',
    body: 'Built the application during my CSIO-CSIR internship: requirements gathering with domain experts, JavaFX UI design, landmark annotation tools, measurement algorithms, and iterative testing with research teams to improve accuracy.',
  },
  {
    num: '03',
    title: 'The solution',
    body: 'A desktop cephalogram analysis tool that combines intuitive manual annotation with algorithmic measurement workflows — giving clinicians faster, more consistent orthodontic analysis without replacing their clinical judgment.',
  },
];

const pipeline = [
  {
    icon: FaUpload,
    title: 'Import X-ray',
    text: 'Load cephalogram images in standard clinical formats for immediate analysis.',
  },
  {
    icon: FaCrosshairs,
    title: 'Landmark placement',
    text: 'Place and adjust anatomical reference points with precision crosshair tools.',
  },
  {
    icon: FaRulerCombined,
    title: 'Auto measurement',
    text: 'Compute distances, angles, and indices from placed landmarks automatically.',
  },
  {
    icon: FaFileMedical,
    title: 'Clinical output',
    text: 'Generate structured measurement reports to support treatment planning.',
  },
];

const techStack = [
  { name: 'Java', icon: '/images/java.png' },
  { name: 'JavaFX', icon: '/images/javafx.jpg' },
] as const;

const screenshots = [
  { src: '/projectImages/ceph/ceph-1.png', alt: 'Cephalogram Tool — main analysis view' },
  { src: '/projectImages/ceph/ceph-2.png', alt: 'Cephalogram Tool — landmark annotation' },
  { src: '/projectImages/ceph/ceph-3.png', alt: 'Cephalogram Tool — measurement panel' },
  { src: '/projectImages/ceph/ceph-4.png', alt: 'Cephalogram Tool — results overview' },
];

const outcomes = [
  'Supports 200+ cephalometric landmark and measurement points',
  'Reduces per-scan analysis time by approximately 60%',
  'Improves workflow efficiency by 25% through guided annotation',
  'Built and validated with CSIO-CSIR research teams during internship',
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400 mb-3">
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

export default function CephalogramCaseStudy() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-950 text-slate-800 dark:text-white min-h-screen">
        {/* Hero */}
        <section className="relative pt-24 pb-20 px-6 overflow-hidden border-b border-slate-200/80 dark:border-white/10">
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.12]"
            style={{
              backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-gradient-to-bl from-emerald-100/70 via-teal-50/40 to-transparent dark:from-emerald-950/40 dark:via-teal-950/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors mb-10 group"
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
                    Desktop · Healthcare
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-5">
                  Cephalogram{' '}
                  <span className="heading-gradient">Tool</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
                  A JavaFX desktop application for orthodontic cephalogram analysis —
                  precise landmark annotation, automated measurements, and faster treatment planning.
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href="https://github.com/Khushmeet13/ceph-analysis-tool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 text-sm"
                  >
                    <FaGithub className="text-base" />
                    View source code
                  </a>
                  <Link
                    href="/contact"
                    className="btn-outline inline-flex items-center gap-2 text-sm"
                  >
                    Discuss this project
                  </Link>
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

              {/* Desktop mockup */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-cyan-500/10 rounded-3xl blur-2xl dark:from-emerald-500/20 dark:to-teal-500/10" />
                <div className="relative rounded-xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-2xl shadow-slate-200/50 dark:shadow-black/40 bg-white dark:bg-slate-900">
                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200/80 dark:border-white/10">
                    <span className="w-3 h-3 rounded-full bg-red-400/90" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/90" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/90" />
                    <span className="ml-3 flex-1 text-center text-[11px] text-slate-400 dark:text-gray-500 font-mono truncate pr-8">
                      Cephalogram Analysis Tool — JavaFX
                    </span>
                  </div>
                  <Image
                    src="/projectImages/ceph/ceph-4.png"
                    alt="Cephalogram Tool — orthodontic X-ray analysis interface"
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
                <div
                  key={m.label}
                  className="py-4 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 text-center md:text-left"
                >
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
                From clinical need to{' '}
                <span className="heading-gradient">working software</span>
              </SectionTitle>
              <p className="mt-4 text-slate-600 dark:text-gray-400 leading-relaxed">
                A product-minded breakdown of why the Cephalogram Tool was built, my
                contribution at CSIO-CSIR, and the impact on orthodontic workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {narrative.map((item) => (
                <article
                  key={item.num}
                  className="group relative p-8 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-colors"
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
              <SectionLabel>Workflow</SectionLabel>
              <SectionTitle>
                How analysis{' '}
                <span className="heading-gradient">works</span>
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

        {/* Screenshots */}
        <section className="px-6 py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-2 lg:sticky lg:top-28">
                <SectionLabel>Product</SectionLabel>
                <SectionTitle>
                  Interface &{' '}
                  <span className="heading-gradient">screenshots</span>
                </SectionTitle>
                <p className="mt-4 text-slate-600 dark:text-gray-400 leading-relaxed text-sm">
                  A focused clinical workflow: import the X-ray, annotate landmarks,
                  review automated measurements, and export results for treatment planning.
                </p>

                <ol className="mt-10 space-y-6">
                  {[
                    { step: '1', title: 'Load cephalogram', desc: 'Import the patient X-ray into the analysis workspace.' },
                    { step: '2', title: 'Annotate landmarks', desc: 'Place anatomical reference points with precision tools.' },
                    { step: '3', title: 'Review & export', desc: 'Validate measurements and save reports for clinical use.' },
                  ].map((s) => (
                    <li key={s.step} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-emerald-500/30 dark:border-emerald-400/30 flex items-center justify-center text-xs font-bold text-emerald-600 dark:text-emerald-400">
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

              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {screenshots.map((shot) => (
                  <div
                    key={shot.src}
                    className="rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/10 shadow-soft dark:shadow-none bg-slate-50 dark:bg-white/[0.02] p-2"
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                ))}
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
                <span className="heading-gradient">Java & JavaFX</span>
              </SectionTitle>
              <p className="mt-4 text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
                A cross-platform desktop application using Java for core logic and JavaFX
                for the clinical UI — canvas-based image rendering, interactive landmark
                placement, and real-time measurement computation on the client.
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10"
                  >
                    <Image src={tech.icon} alt={tech.name} width={20} height={20} className="rounded-sm" />
                    <span className="text-sm font-medium text-slate-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10">
              <SectionLabel>Results</SectionLabel>
              <SectionTitle>
                Measurable{' '}
                <span className="heading-gradient">impact</span>
              </SectionTitle>
              <p className="mt-4 text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-8">
                The tool replaces hours of manual tracing with a guided digital workflow —
                reducing repetitive work while keeping clinicians in control of landmark placement
                and final interpretation.
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
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-emerald-950 px-8 py-14 md:px-16 md:py-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-600/10 to-cyan-600/20 pointer-events-none" />
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-4">
                  Open source
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  Explore the Cephalogram Tool
                </h2>
                <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                  View the source code and documentation on GitHub, or reach out to
                  discuss healthcare software projects.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href="https://github.com/Khushmeet13/ceph-analysis-tool"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors"
                  >
                    <FaGithub />
                    View on GitHub
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
