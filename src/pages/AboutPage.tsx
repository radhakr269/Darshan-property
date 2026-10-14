import React from 'react';
import {
  ChevronRight,
  ArrowRight,
  Home as HomeIcon,
  TrendingUp,
  FileText,
  ArrowLeftRight,
  ShieldCheck,
  Users,
  Headphones,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { IMAGES } from '../data/imageConfig';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FAFBFD]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-slate-900 min-h-[460px] flex items-center overflow-hidden">
        {/* Hero Background Image with Subtle Parallax Feel & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroDesktop}
            alt="Luxury Villa Property Darshan Hero"
            className="w-full h-full object-cover object-[center_35%]"
          />
          {/* Transparent top right, soft bright gradient over the text on left matching Stitch mockup */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent w-full md:w-3/5 lg:w-[58%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 py-20 w-full">
          <div className="max-w-xl">
            <p className="text-[11px] sm:text-xs font-extrabold tracking-[0.2em] text-[#DF9E52] uppercase mb-3">
              OUR STORY. YOUR DREAMS. A BRIGHTER TOMORROW.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B192C] leading-[1.1] tracking-tight mb-4">
              About<br />
              <span className="text-[#0B192C]">Property Darshan</span>
            </h1>
            <p className="text-sm sm:text-base text-[#475569] font-medium leading-relaxed mb-6 max-w-md">
              Your trusted real estate partner in Lucknow, helping you find the right property for a better tomorrow.
            </p>

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-[#0B192C] transition-colors focus:outline-none"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#0B192C]">About</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY SECTION ================= */}
      <section className="py-20 lg:py-24 bg-[#FAFBFD]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Image Container */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11]">
                <img
                  src={IMAGES.aboutInterior}
                  alt="Luxury Lucknow Living Room Interior"
                  className="w-full h-full object-cover object-[center_60%]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>
            </div>

            {/* Right: Story Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold tracking-[0.2em] text-[#DF9E52] uppercase mb-2">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-[34px] font-extrabold text-[#0B192C] leading-snug tracking-tight mb-6">
                Helping You Find<br className="hidden sm:inline" /> Your Dream Property in Lucknow
              </h2>
              <div className="space-y-4 text-[14.5px] leading-relaxed text-[#556376]">
                <p>
                  At Property Darshan, we believe that a home is more than just a place — it&apos;s a new beginning, a better
                  lifestyle, and a brighter future. Based in Lucknow, we are dedicated to helping our clients find the right
                  properties that match their goals, whether it&apos;s a dream home, a smart investment, or a commercial space
                  for their business.
                </p>
                <p>
                  With local expertise, genuine guidance, and a client-first approach, we make your real estate journey
                  simple, transparent, and hassle-free.
                </p>
              </div>
              <div className="mt-8">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-[#e3a358] to-[#d89243] hover:from-[#ecc38c] hover:to-[#df9e52] text-[#0c1829] shadow-md transition-all active:scale-95"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES SECTION ================= */}
      <section className="py-20 lg:py-24 bg-white" id="services">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-[#DF9E52] uppercase mb-2 block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-[34px] font-extrabold text-[#0B192C] tracking-tight mb-3">
              Complete Real Estate Support
            </h2>
            <p className="text-sm sm:text-[15px] text-[#606D7F]">
              From property tours to investment guidance, we are here at every step of your journey.
            </p>
          </div>

          {/* Services 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Property Tours */}
            <div className="bg-[#FAFBFD] border border-gray-100 rounded-2xl p-7 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF5ED] flex items-center justify-center text-[#DF9E52] mb-5">
                <HomeIcon className="w-7 h-7 stroke-[1.7]" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-2.5">Property Tours</h3>
              <p className="text-xs sm:text-[13px] text-[#626E80] leading-relaxed">
                Explore the best residential and commercial properties in Lucknow with personalized tours.
              </p>
            </div>

            {/* Card 2: Investment Insights */}
            <div className="bg-[#FAFBFD] border border-gray-100 rounded-2xl p-7 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF5ED] flex items-center justify-center text-[#DF9E52] mb-5">
                <TrendingUp className="w-7 h-7 stroke-[1.7]" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-2.5">Investment Insights</h3>
              <p className="text-xs sm:text-[13px] text-[#626E80] leading-relaxed">
                Get expert advice on property investments to help you make informed and profitable decisions.
              </p>
            </div>

            {/* Card 3: Real Estate Updates */}
            <div className="bg-[#FAFBFD] border border-gray-100 rounded-2xl p-7 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF5ED] flex items-center justify-center text-[#DF9E52] mb-5">
                <FileText className="w-7 h-7 stroke-[1.7]" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-2.5">Real Estate Updates</h3>
              <p className="text-xs sm:text-[13px] text-[#626E80] leading-relaxed">
                Stay updated with the latest market trends, new launches and opportunities in Lucknow.
              </p>
            </div>

            {/* Card 4: Buy / Sell / Rent Support */}
            <div className="bg-[#FAFBFD] border border-gray-100 rounded-2xl p-7 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF5ED] flex items-center justify-center text-[#DF9E52] mb-5">
                <ArrowLeftRight className="w-7 h-7 stroke-[1.7]" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-2.5">Buy / Sell / Rent Support</h3>
              <p className="text-xs sm:text-[13px] text-[#626E80] leading-relaxed">
                End-to-end assistance for buying, selling or renting properties with complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="py-20 lg:py-24 bg-[#FAFBFD]">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-[0.2em] text-[#DF9E52] uppercase mb-2 block">
              WHY CHOOSE PROPERTY DARSHAN
            </span>
            <h2 className="text-3xl sm:text-[34px] font-extrabold text-[#0B192C] tracking-tight mb-3">
              A Trusted Partner in Your Real Estate Journey
            </h2>
            <p className="text-sm sm:text-[15px] text-[#606D7F]">
              We go beyond property listings — we build relationships, offer genuine guidance, and help you make confident property decisions.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF5ED] flex items-center justify-center text-[#DF9E52] mb-5">
                <ShieldCheck className="w-7 h-7 stroke-[1.7]" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-2.5">Verified Listings</h3>
              <p className="text-xs sm:text-[13px] text-[#626E80] leading-relaxed">
                100% genuine properties with verified details.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF5ED] flex items-center justify-center text-[#DF9E52] mb-5">
                <Users className="w-7 h-7 stroke-[1.7]" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-2.5">Local Expertise</h3>
              <p className="text-xs sm:text-[13px] text-[#626E80] leading-relaxed">
                In-depth knowledge of Lucknow&apos;s real estate market.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF5ED] flex items-center justify-center text-[#DF9E52] mb-5">
                <Headphones className="w-7 h-7 stroke-[1.7]" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-2.5">Personalized Guidance</h3>
              <p className="text-xs sm:text-[13px] text-[#626E80] leading-relaxed">
                Tailored property recommendations as per your needs.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-7 text-center flex flex-col items-center hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <div className="w-14 h-14 rounded-full bg-[#FCF5ED] flex items-center justify-center text-[#DF9E52] mb-5">
                <CheckCircle2 className="w-7 h-7 stroke-[1.7]" />
              </div>
              <h3 className="text-base font-bold text-[#0B192C] mb-2.5">Transparent Process</h3>
              <p className="text-xs sm:text-[13px] text-[#626E80] leading-relaxed">
                Honest advice and clear communication at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="relative bg-[#061325] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.aboutInterior}
            alt="Interior Living Room Luxury"
            className="w-full h-full object-cover object-[center_60%] opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061325] via-[#061325]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-6 py-16 sm:py-20">
          <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#DF9E52] uppercase mb-2.5 block">
              MORE THAN PROPERTIES.
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              A Better Tomorrow Starts with the Right Property.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-7 max-w-lg">
              Let Property Darshan be your guide to finding a home, investment or commercial space that fits your lifestyle and future goals.
            </p>
            <button
              onClick={() => onNavigate('properties')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-[#e3a358] to-[#d89243] hover:from-[#ecc38c] hover:to-[#df9e52] text-[#0c1829] shadow-md transition-all active:scale-95"
            >
              <span>Explore Properties</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
