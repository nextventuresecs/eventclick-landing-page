'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/only_icon.png';
import Link from 'next/link';
import { Menu, X, ArrowRight, LogIn, Sparkles, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenDemo: () => void;
}

const NAV_LINKS = [
  { name: 'Features', href: '/#features' },
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Security & Trust', href: '/#security' },
  { name: 'Use Cases', href: '/#roles' },
  { name: 'FAQ', href: '/#faq' },
];

export default function Navbar({ onOpenDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full px-4 sm:px-6 py-4 transition-all duration-500 pointer-events-none"
    >
      <div
        className={`pointer-events-auto max-w-6xl mx-auto transition-all duration-500 ${
          mobileMenuOpen ? 'rounded-[24px]' : 'rounded-[40px]'
        } ${
          scrolled
            ? 'bg-white/70 backdrop-blur-2xl border border-black/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-white/40 backdrop-blur-lg border border-white/60 shadow-sm py-3 px-5 sm:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Lockup */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#402291] rounded-xl p-1 transition-opacity hover:opacity-80"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
              <Image
                src={logo}
                alt="Eventclick Logo"
                width={44}
                height={44}
                className="w-full h-full object-contain shrink-0 drop-shadow-sm"
                priority
              />
            </div>

            <span className="font-heading font-semibold text-[22px] sm:text-[24px] tracking-tight leading-none flex items-center gap-1">
              <span className="text-[#0F172A]">Event</span>
              <span className="bg-gradient-to-r from-[#402291] to-[#3160B7] bg-clip-text text-transparent">
                click
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setActiveHover(null)}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setActiveHover(link.name)}
                className="relative px-4 py-2 text-[14px] font-medium text-[#475467] hover:text-[#0F172A] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#402291]"
              >
                {activeHover === link.name && (
                  <motion.span
                    layoutId="navHoverPill"
                    className="absolute inset-0 bg-black/[0.04] rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link
              href="https://app.eventclick.live/"
              className="px-3.5 py-2 text-[13.5px] font-semibold text-[#402291] hover:text-[#28226E] hover:bg-[#402291]/8 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#402291]"
            >
              <LogIn className="w-4 h-4 text-[#402291]" />
              <span>Log in</span>
            </Link>

            <button
              onClick={onOpenDemo}
              className="group relative px-4.5 py-2 text-[13.5px] font-bold text-white rounded-xl bg-gradient-to-r from-[#402291] via-[#36217A] to-[#3160B7] shadow-md shadow-[#402291]/20 hover:shadow-lg hover:shadow-[#402291]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden cursor-pointer flex items-center gap-2 border border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#402291]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA] group-hover:rotate-12 transition-transform" />
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="hidden sm:flex md:hidden px-3 py-1.5 text-[12.5px] font-bold text-white bg-[#402291] rounded-xl shadow-xs"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl text-[#475467] hover:text-[#0F172A] hover:bg-[#F5F3FC] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#402291] transition-colors border border-[#E2E5ED]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5.5 h-5.5 text-[#402291]" /> : <Menu className="w-5.5 h-5.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden border-t border-[#E2E5ED] pt-4 pb-2 space-y-2 overflow-hidden"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[14px] font-semibold text-[#475467] hover:text-[#402291] hover:bg-[#F5F3FC] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronDown className="w-4 h-4 text-[#98A2B3] -rotate-90" />
                </a>
              ))}

              <div className="pt-3 border-t border-[#E2E5ED] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-2.5 text-center text-[14px] font-semibold text-[#402291] bg-[#F5F3FC] hover:bg-[#EAE4F8] rounded-xl flex items-center justify-center gap-2 border border-[#8C6FCF]/20"
                >
                  <LogIn className="w-4 h-4 text-[#402291]" />
                  <span>Log in</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full py-2.5 text-center text-[14px] font-bold text-white bg-gradient-to-r from-[#402291] to-[#3160B7] rounded-xl flex items-center justify-center gap-2 shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#A78BFA]" />
                  <span>Book a Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
