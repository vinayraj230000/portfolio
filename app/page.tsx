import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HomeChatWidget from '@/components/HomeChatWidget';

const Skills = dynamic(() => import('@/components/Skills'), { loading: () => <SectionPlaceholder /> });
const WorkExperience = dynamic(() => import('@/components/WorkExperience'), { loading: () => <SectionPlaceholder /> });
const Projects = dynamic(() => import('@/components/Projects'), { loading: () => <SectionPlaceholder /> });
const AboutPreview = dynamic(() => import('@/components/AboutPreview'), { loading: () => <SectionPlaceholder /> });
const ContactCTA = dynamic(() => import('@/components/ContactCTA'), { loading: () => <SectionPlaceholder /> });

function SectionPlaceholder() {
  return <div className="min-h-[400px] w-full" aria-hidden />;
}

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <WorkExperience />
        <Projects />
        <AboutPreview />
        <ContactCTA />
      </main>

      <Footer />
      <HomeChatWidget />
    </>
  );
}
