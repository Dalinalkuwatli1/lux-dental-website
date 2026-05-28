'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useBooking } from '../booking/BookingContext';
import { useAppContext } from '../../context/AppContext';
import { translations } from '../../data/translations';
import Button from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();
  const { locale, theme, toggleLocale, toggleTheme } = useAppContext();

  const t = translations[locale].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: locale === 'en' ? 'Home' : 'الرئيسية', href: '/' },
    { name: t.treatments, href: '/services' },
    { name: t.specialists, href: '/doctors' },
    { name: t.book, href: '/booking' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${isScrolled
          ? 'bg-white/40 dark:bg-[#060b0a]/40 backdrop-blur-xl shadow-glass py-2 border-b border-white/20 dark:border-white/5'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group focus:outline-none">
          <Image
            src="/images/tooth-logo-transparent.png"
            alt="Lumina Dental"
            width={40}
            height={40}
            className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.15em] text-charcoal dark:text-white font-sans">
              LUMINA
            </span>
            <span className="text-[8px] font-medium tracking-[0.3em] text-gold uppercase -mt-0.5">
              DENTAL CLINIC
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-all duration-200 relative py-1 focus:outline-none ${isActive(link.href)
                  ? 'text-primary dark:text-[#00f2fe] font-semibold'
                  : 'text-neutral-600 dark:text-slate-200 hover:text-charcoal dark:hover:text-white'
                }`}
            >
              {link.name}
              {isActive(link.href) && (
                <span className="absolute bottom-0 inset-x-2 h-[2px] bg-primary dark:bg-[#00f2fe] rounded-full animate-fade-in glow-primary" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50 transition-colors focus:outline-none text-neutral-600 dark:text-slate-200 hover:text-charcoal dark:hover:text-[#00f2fe]"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Language Switcher */}
          <button
            onClick={toggleLocale}
            className="relative flex items-center w-12 h-6 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 border border-neutral-300/50 dark:border-neutral-700/50 p-0.5 cursor-pointer transition-colors focus:outline-none hover-glow"
            aria-label="Toggle Language"
          >
            <span className="absolute left-1.5 text-[9px] font-bold text-neutral-500 dark:text-slate-200">EN</span>
            <span className="absolute right-1.5 text-[9px] font-bold text-neutral-500 dark:text-slate-200">AR</span>
            <div
              className={`w-5 h-5 bg-white dark:bg-[#00f2fe] rounded-full shadow-sm transform transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) flex items-center justify-center ${locale === 'ar' ? 'translate-x-6' : 'translate-x-0'
                }`}
            >
              <span className="text-[8px] font-bold text-primary dark:text-[#060b0a]">{locale.toUpperCase()}</span>
            </div>
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => openBooking()}
          >
            {t.book}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-full text-neutral-600 dark:text-slate-200 hover:text-charcoal hover:bg-neutral-100/50 dark:hover:bg-neutral-800 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden absolute top-full inset-x-0 bg-white dark:bg-[#060b0a] border-b border-neutral-100 dark:border-neutral-800 shadow-premium transition-all duration-350 ease-in-out ${isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-4 invisible'
          }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">

          <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-slate-200"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button
              onClick={toggleLocale}
              className="text-sm font-medium text-neutral-600 dark:text-slate-200 border border-neutral-200 dark:border-neutral-700 px-3 py-1 rounded-full"
            >
              {locale === 'en' ? 'عربي' : 'English'}
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium tracking-wide py-2 ${isActive(link.href) ? 'text-primary dark:text-[#00f2fe]' : 'text-neutral-600 dark:text-slate-200'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Button
            variant="primary"
            onClick={() => {
              setIsOpen(false);
              openBooking();
            }}
            className="w-full mt-2"
          >
            {t.book}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
