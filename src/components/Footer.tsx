import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { CONTACT_CONFIG } from '../data/contactConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onNavigate: (page: string) => void;
  variant?: 'full' | 'minimal';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, variant = 'full' }) => {
  return (
    <footer className="bg-[#040e1f] text-slate-300 pt-16 pb-20 md:pb-8 border-t border-slate-800" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Motto */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-end gap-0.5 text-[#d4a359]">
                <svg
                  className="w-7 h-8 fill-current"
                  fill="none"
                  viewBox="0 0 32 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="#D4A359" height="20" opacity="0.8" rx="1" width="6" x="2" y="16"></rect>
                  <rect fill="#E5B268" height="28" rx="1" width="6" x="10" y="8"></rect>
                  <rect fill="#F4CA88" height="34" rx="1" width="6" x="18" y="2"></rect>
                  <rect fill="#C58E3D" height="24" opacity="0.9" rx="1" width="5" x="26" y="12"></rect>
                  <path d="M0 35H32V36H0z" fill="#D4A359"></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] tracking-[0.25em] font-semibold text-[#e5b268] font-sans uppercase leading-none">
                  PROPERTY
                </span>
                <span className="text-xl font-bold tracking-tight text-white leading-tight font-serif mt-0.5">
                  दर्शन
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 font-medium tracking-wide">
              Premium Properties. A Brighter Tomorrow.
            </p>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Lucknow&apos;s most trusted luxury real estate platform delivering authentic listings and hassle-free verified site visits.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('properties')} className="text-[#e6bc79] font-semibold hover:text-white transition-colors">
                  Properties
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Get in Touch */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e5b976] shrink-0" />
                <a href={CONTACT_CONFIG.getTelLink()} className="hover:text-white transition-colors">
                  {CONTACT_CONFIG.displayPhones}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={CONTACT_CONFIG.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-emerald-400 font-medium"
                >
                  WhatsApp: {CONTACT_CONFIG.displayWhatsApp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e5b976] shrink-0" />
                <a href={`mailto:${CONTACT_CONFIG.email}`} className="hover:text-white transition-colors">
                  {CONTACT_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e5b976] shrink-0 mt-0.5" />
                <span>{CONTACT_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#e5b976] shrink-0" />
                <span>{CONTACT_CONFIG.timing}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Follow Us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Follow Us</h4>
            <p className="text-xs text-slate-400 mb-3">
              Follow for daily property updates, video tours, and investment insights across Lucknow.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white text-[#051329] hover:bg-[#e5b976] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_CONFIG.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white text-[#051329] hover:bg-[#e5b976] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CONTACT_CONFIG.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white text-[#051329] hover:bg-[#e5b976] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-[#e5b976] font-medium">
              Instagram: <a href={CONTACT_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{CONTACT_CONFIG.instagramHandle}</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2025 Property Darshan. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <span>|</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300 transition-colors">
              RERA Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
