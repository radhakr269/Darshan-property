import React from 'react';
import { Home, Building2, Heart, Phone, Users } from 'lucide-react';

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'properties', label: 'Properties', icon: Building2 },
    { id: 'services', label: 'Services', icon: Heart },
    { id: 'contact', label: 'Contact', icon: Phone, isContact: true },
    { id: 'about', label: 'About Us', icon: Users },
  ];

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#051329] border-t border-white/10 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] px-2 shadow-2xl"
      data-purpose="mobile-bottom-navigation"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 items-end">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            currentPage === item.id || (item.id === 'properties' && currentPage === 'property-detail');

          return (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1 transition-colors group focus:outline-none ${
                isActive ? 'text-[#e5b268]' : 'text-slate-400 hover:text-white'
              }`}
            >
              {item.isContact ? (
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-transform active:scale-95 ${
                    isActive
                      ? 'bg-[#e5b268] text-[#051329]'
                      : 'bg-gradient-to-tr from-[#c89243] to-[#f4d193] text-[#051329]'
                  }`}
                >
                  <Icon className="w-4 h-4 fill-current" />
                </div>
              ) : (
                <Icon className={`w-5 h-5 mb-1 ${isActive ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
              )}
              <span
                className={`text-[10px] tracking-tight leading-none ${
                  isActive ? 'font-bold text-[#e5b268]' : 'font-medium'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
