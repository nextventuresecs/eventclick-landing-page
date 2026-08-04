'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/only_icon.png';
import { 
  ShieldCheck, 
  ArrowUp, 
  Lock, 
  FileText, 
  Globe2, 
  Mail, 
  Calendar, 
  Radio, 
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onOpenDemo?: () => void;
}

export default function Footer({ onOpenDemo }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#1E293B]">
      {/* Background Subtle Accent Light */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(140,111,207,0.35), transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        
        {/* Top Callout & Brand Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#1E293B] items-start">
          
          {/* Column 1: Brand & Operational Status (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-15 h-15 sm:w-14 sm:h-14 rounded-2xl bg-white flex items-center justify-center p-2 shadow-lg border border-white/20">
                <Image src={logo} alt="Eventclick Logo" width={60} height={60} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-2xl tracking-tight text-white">
                  Eventclick
                </span>
                <span className="text-[11px] text-[#A5B4FC] font-medium tracking-wide">
                  Verified Field Event Execution SaaS
                </span>
              </div>
            </div>

            <p className="text-[14px] text-[#94A3B8] leading-relaxed max-w-md">
              Empowering NGOs, corporate CSR foundations, and government projects with real-time video streaming, tamper-evident geotagged photo proof, and automated audit reporting.
            </p>

            {/* Operational System Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#1E293B] border border-[#334155] text-[12px]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
              </span>
              <span className="text-[#E2E8F0] font-medium">Platform Status:</span>
              <span className="text-[#4ADE80] font-semibold">99.9% Uptime Operational</span>
            </div>
          </div>

          {/* Column 2: Quick Demo Callout Box (7 cols) */}
          <div className="lg:col-span-7 bg-gradient-to-r from-[#1E1B4B] to-[#312E81] border border-[#3730A3]/50 rounded-2xl p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-lg">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#A5B4FC] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Need a tailored walkthrough?</span>
              </div>
              <h4 className="font-heading font-semibold text-lg text-white">
                Book a Live Field Demonstration
              </h4>
              <p className="text-[13px] text-[#C7D2FE]">
                See how Eventclick streamlines verified photo quotas, RBAC, and live streaming.
              </p>
            </div>

            <button
              onClick={onOpenDemo}
              className="px-5 py-3 bg-[#402291] hover:bg-[#3160B7] text-white text-[13px] font-semibold rounded-xl shadow-md transition-all shrink-0 inline-flex items-center gap-2 border border-white/10"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Demo</span>
            </button>
          </div>

        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[13px]">
          
          {/* Column 1: Core Capabilities */}
          <div className="space-y-3.5">
            <h4 className="font-heading font-semibold text-[13px] text-white uppercase tracking-wider flex items-center gap-2">
              <Radio className="w-4 h-4 text-[#818CF8]" />
              <span>Capabilities</span>
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li><Link href="/#features" className="hover:text-white transition-colors">Ultra-Low Latency Streaming</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Geotagged Camera Photos</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Smart Completion Gates</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Live Presence Analytics</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Automated Media Archiving</Link></li>
            </ul>
          </div>

          {/* Column 2: Roles & Workflows */}
          <div className="space-y-3.5">
            <h4 className="font-heading font-semibold text-[13px] text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
              <span>Governance</span>
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li><Link href="/#roles" className="hover:text-white transition-colors">Org Administrators</Link></li>
              <li><Link href="/#roles" className="hover:text-white transition-colors">Field Event Leads</Link></li>
              <li><Link href="/#roles" className="hover:text-white transition-colors">Field Volunteers</Link></li>
              <li><Link href="/#roles" className="hover:text-white transition-colors">RBAC Permission Matrix</Link></li>
              <li><Link href="/#security" className="hover:text-white transition-colors">Security Architecture</Link></li>
            </ul>
          </div>

          {/* Column 3: Architecture & Resources */}
          <div className="space-y-3.5">
            <h4 className="font-heading font-semibold text-[13px] text-white uppercase tracking-wider flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#34D399]" />
              <span>Resources</span>
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li><Link href="/#how-it-works" className="hover:text-white transition-colors">Field Execution Workflow</Link></li>
              <li><Link href="/#showcase" className="hover:text-white transition-colors">Interactive Room Inspector</Link></li>
              <li><Link href="/#faq" className="hover:text-white transition-colors">Technical & Security FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div className="space-y-3.5">
            <h4 className="font-heading font-semibold text-[13px] text-white uppercase tracking-wider flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#F472B6]" />
              <span>Legal & Compliance</span>
            </h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>Privacy Policy</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>Terms of Service</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </Link>
              </li>
              <li>
                <Link href="/gdpr-dpa" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>GDPR & Data Framework</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </Link>
              </li>
              <li>
                <Link href="/saas-agreement" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>SaaS Agreement</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </Link>
              </li>
              <li>
                <Link href="/sla" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>Service Level Agreement</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                  <span>Cookie Policy</span>
                  <ExternalLink className="w-3 h-3 text-[#64748B]" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Security Badges & Scroll to Top */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#64748B]">
          
          <div className="flex flex-wrap items-center gap-3">
            <span suppressHydrationWarning>
              © {new Date().getFullYear()} Eventclick Platform. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[#64748B]">
              Engineered by <strong className="text-[#94A3B8] font-sans"><a href="https://nextventures.in/">NextVentures</a></strong>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#1E293B] hover:bg-[#334155] text-[#94A3B8] hover:text-white transition-all border border-[#334155]"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </footer>
  );
}
