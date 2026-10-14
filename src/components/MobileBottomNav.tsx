import React from 'react';
import { Home, Building2, Heart, Phone, Users } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentPage, onNavigate }) => {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#051329] border-t border-[#12233f] py-2 px-3 shadow-2xl"
      data-purpose="mobile-bottom-navigation"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-center">
        {/* Nav Item 1: Home */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center transition group ${
            currentPage === 'home' ? 'text-[#e2b36e]' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-tight">Home</span>
        </button>

        {/* Nav Item 2: Properties */}
        <button
          onClick={() => {
            onNavigate('properties');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center transition group ${
            currentPage === 'properties' || currentPage === 'property-detail'
              ? 'text-[#e2b36e]'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          <Building2 className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-tight">Properties</span>
        </button>

        {/* Nav Item 3: Services */}
        <button
          onClick={() => {
            onNavigate('services');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center transition group ${
            currentPage === 'services' ? 'text-[#e2b36e]' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Heart className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-tight">Services</span>
        </button>

        {/* Nav Item 4: Contact (Gold Center Highlight) */}
        <button
          onClick={() => {
            onNavigate('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col items-center justify-center -mt-3.5 group"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#c89243] via-[#e2b36e] to-[#f4d193] text-[#051329] flex items-center justify-center shadow-lg border-2 border-[#051329] transform active:scale-95 transition-transform">
            <Phone className="w-5 h-5 fill-current" />
          </div>
          <span className="text-[10px] font-bold text-[#e2b36e] mt-1 tracking-tight">Contact</span>
        </button>

        {/* Nav Item 5: Follow Us */}
        <button
          onClick={() => {
            onNavigate('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center transition group ${
            currentPage === 'about' ? 'text-[#e2b36e]' : 'text-gray-400 hover:text-white'
          }`}
        >
          <Users className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-medium tracking-tight whitespace-nowrap">About Us</span>
        </button>
      </div>
    </nav>
  );
};
