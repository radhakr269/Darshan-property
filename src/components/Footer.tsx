import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  variant?: 'full' | 'minimal';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, variant = 'full' }) => {
  if (variant === 'minimal') {
    return (
      <footer className="bg-[#040b15] text-slate-400 py-8 border-t border-white/5 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2025 Property Darshan. All rights reserved. Premium properties in Lucknow.</p>
          <div className="flex space-x-6">
            <button onClick={() => onNavigate('contact')} className="hover:text-[#d4a359] transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#d4a359] transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#d4a359] transition-colors">
              RERA Compliance
            </button>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#040e1f] text-slate-300 pt-16 pb-8 border-t border-slate-800" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Motto */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg className="w-8 h-8 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M3 21h18"></path>
                <path d="M5 21V7l7-4 7 4v14"></path>
                <path d="M9 21v-8h6v8"></path>
              </svg>
              <div>
                <div className="text-[16px] font-bold tracking-[0.18em] uppercase text-[#e6bc79] font-serif">PROPERTY</div>
                <div className="text-[14px] font-semibold text-[#e6bc79]">दर्शन</div>
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
                <a href="tel:+919721013815" className="hover:text-white transition-colors">
                  +91 9721013815, 8809269208
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e5b976] shrink-0" />
                <a href="mailto:info@propertydarshan.in" className="hover:text-white transition-colors">
                  info@propertydarshan.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e5b976] shrink-0 mt-0.5" />
                <span>123, Palm Residency, Gomti Nagar, Lucknow, Uttar Pradesh 226010</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#e5b976] shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white text-[#051329] hover:bg-[#e5b976] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white text-[#051329] hover:bg-[#e5b976] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white text-[#051329] hover:bg-[#e5b976] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white text-[#051329] hover:bg-[#e5b976] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-[#e5b976] font-medium">
              Instagram: @_property.darshan_
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
