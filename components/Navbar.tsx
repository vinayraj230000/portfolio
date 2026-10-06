'use client';

import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from './DarkModeToggle';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300
        ${isScrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-gray-800 text-slate-800 dark:text-white'
          : 'bg-transparent text-slate-800 dark:text-white'
        }`}
    >
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-cyan-200 dark:ring-cyan-800">
          <Image src="/profile.image.jpeg" alt="Profile" width={40} height={40} />
        </div>
        <h1 className="text-xl font-bold font-serif">Portfolio</h1>
      </div>

      <div className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm transition-all duration-300 group ${
                isActive ? 'font-bold text-cyan-600 dark:text-cyan-400' : 'text-slate-600 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              <span className="block group-hover:-translate-y-0.5 transform transition-all duration-300">
                {link.label}
              </span>
              <span className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-500 transition-all duration-300 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          );
        })}
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4 relative">
        <IconGroup />
        <DarkModeToggle />
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-b border-slate-100 dark:border-gray-800 text-slate-800 dark:text-white flex flex-col items-center py-4 space-y-4 md:hidden shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg ${isActive ? 'text-cyan-600 dark:text-cyan-400 font-semibold' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
          <IconGroup />
          <DarkModeToggle />
        </div>
      )}
    </nav>
  );
}

function IconGroup() {
  return (
    <>
      <div className="relative group">
        <a href="https://github.com/vinayraj230000" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-5 h-5 text-slate-600 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" />
        </a>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          GitHub
        </div>
      </div>
      <div className="relative group">
        <a href="https://www.linkedin.com/in/vinay-raj-76562a300/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-5 h-5 text-slate-600 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" />
        </a>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
          LinkedIn
        </div>
      </div>
      
    </>
  );
}
