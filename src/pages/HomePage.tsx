import React, { useState } from 'react';
import {
  MapPin,
  Home as HomeIcon,
  Search,
  CheckCircle2,
  ShieldCheck,
  Headphones,
  TrendingUp,
  ArrowRight,
  Heart,
  Bed,
  Bath,
  Maximize2,
  Building,
  TreePine,
  Sparkles,
} from 'lucide-react';
import { Property } from '../data/propertiesData';
import { IMAGES } from '../data/imageConfig';

interface HomePageProps {
  properties: Property[];
  onNavigate: (page: string, propertySlug?: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSearch: (filters: { location: string; type: string; budget: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  properties,
  onNavigate,
  favorites,
  onToggleFavorite,
  onSearch,
}) => {
  const [selectedLocation, setSelectedLocation] = useState('Lucknow');
  const [selectedType, setSelectedType] = useState('Any');
  const [selectedBudget, setSelectedBudget] = useState('Any');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: selectedLocation,
      type: selectedType,
      budget: selectedBudget,
    });
    onNavigate('properties');
  };

  const featuredProperties = properties.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="w-full">
      {/* ================= HERO SECTION (CRITICAL: NO FADE EFFECT) ================= */}
      <section
        className="relative min-h-[660px] lg:min-h-[720px] flex items-center overflow-hidden"
        data-purpose="hero-banner"
        id="home"
      >
        {/* Hero Background Image - Natural visibility, zero unapproved blur or heavy tint */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full">
            <source media="(max-width: 768px)" srcSet={IMAGES.heroMobile} />
            <img
              src={IMAGES.heroDesktop}
              alt="Luxury Modern Villa in Lucknow with Pool"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          {/* Approved subtle text-reading gradient mask only on left side for text contrast */}
          <div className="absolute inset-0 hero-clear-overlay pointer-events-none"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 w-full">
          <div className="max-w-2xl">
            {/* Subheading */}
            <div className="inline-block mb-3">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#071426] font-sans">
                PREMIUM PROPERTIES. A BRIGHTER TOMORROW.
              </p>
            </div>

            {/* Main Title with Script Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071426] tracking-tight leading-[1.12] mb-3">
              Find Your <br />
              <span className="block text-slate-900">Dream Property</span>
              <span className="block font-script font-bold text-4xl sm:text-5xl lg:text-6xl text-[#c58e3d] mt-1 lowercase first-letter:capitalize">
                with property darshan
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-normal">
              Discover premium homes, villas, plots and investment opportunities in{' '}
              <strong className="font-semibold text-slate-900">Lucknow</strong> with expert guidance and personalised
              property tours.
            </p>

            {/* Floating Filter Search Box */}
            <div
              className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-3xl sm:rounded-full shadow-2xl border border-white/60 max-w-3xl"
              data-purpose="hero-search-card"
            >
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2">
                {/* Location Filter */}
                <div className="flex items-center gap-3 w-full sm:w-1/3 px-4 py-2 hover:bg-slate-50/80 rounded-full transition-colors cursor-pointer group">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:text-[#c58e3d] shrink-0">
                    <MapPin className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-1">
                      Location
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full bg-transparent text-sm font-bold text-slate-900 border-none p-0 focus:ring-0 cursor-pointer"
                    >
                      <option value="Lucknow">Lucknow (All)</option>
                      <option value="Gomti Nagar">Gomti Nagar</option>
                      <option value="Sushant Golf City">Sushant Golf City</option>
                      <option value="Faizabad Road">Faizabad Road</option>
                      <option value="Hazratganj">Hazratganj</option>
                      <option value="Alambagh">Alambagh</option>
                      <option value="Shaheed Path">Shaheed Path</option>
                    </select>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>

                {/* Property Type Filter */}
                <div className="flex items-center gap-3 w-full sm:w-1/3 px-4 py-2 hover:bg-slate-50/80 rounded-full transition-colors cursor-pointer group">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:text-[#c58e3d] shrink-0">
                    <HomeIcon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-1">
                      Property Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 border-none p-0 focus:ring-0 cursor-pointer"
                    >
                      <option value="Any">Any Type</option>
                      <option value="Villa">Villa</option>
                      <option value="Plot">Plot</option>
                      <option value="House">House</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>

                {/* Budget Filter */}
                <div className="flex items-center gap-3 w-full sm:w-1/3 px-4 py-2 hover:bg-slate-50/80 rounded-full transition-colors cursor-pointer group">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold group-hover:text-[#c58e3d] shrink-0 text-sm">
                    ₹
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-1">
                      Budget
                    </label>
                    <select
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                      className="w-full bg-transparent text-sm font-semibold text-slate-800 border-none p-0 focus:ring-0 cursor-pointer"
                    >
                      <option value="Any">Any Budget</option>
                      <option value="Under 1.5 Cr">Under ₹ 1.5 Cr</option>
                      <option value="1.5 Cr - 2.5 Cr">₹ 1.5 Cr - 2.5 Cr</option>
                      <option value="Above 2.5 Cr">Above ₹ 2.5 Cr</option>
                    </select>
                  </div>
                </div>

                {/* Search Action Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#071426] hover:bg-[#0c1e34] text-white rounded-full font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-navy-900/30 transition-all duration-200 active:scale-95 shrink-0"
                >
                  <Search className="w-4 h-4 stroke-[2.2]" />
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITIONS BAR ================= */}
      <section className="bg-white border-y border-slate-200/70 py-12 relative z-20" data-purpose="value-propositions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center px-4 pt-4 sm:pt-0">
              <div className="w-14 h-14 rounded-full bg-[#d4a359]/10 flex items-center justify-center text-slate-800 mb-4 transition-transform hover:scale-105">
                <HomeIcon className="w-6 h-6 stroke-[1.8] text-slate-800" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Verified Listings</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-snug max-w-[200px]">
                100% genuine properties with verified details.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="w-14 h-14 rounded-full bg-[#d4a359]/10 flex items-center justify-center text-slate-800 mb-4 transition-transform hover:scale-105">
                <ShieldCheck className="w-6 h-6 stroke-[1.8] text-slate-800" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Trusted & Secure</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-snug max-w-[200px]">
                Safe and transparent property transactions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="w-14 h-14 rounded-full bg-[#d4a359]/10 flex items-center justify-center text-slate-800 mb-4 transition-transform hover:scale-105">
                <Headphones className="w-6 h-6 stroke-[1.8] text-slate-800" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Expert Guidance</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-snug max-w-[200px]">
                Personalised advice at every step.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="w-14 h-14 rounded-full bg-[#d4a359]/10 flex items-center justify-center text-slate-800 mb-4 transition-transform hover:scale-105">
                <TrendingUp className="w-6 h-6 stroke-[1.8] text-slate-800" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Better Investment</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-snug max-w-[200px]">
                Find properties that match your lifestyle and future goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROPERTIES SECTION ================= */}
      <section className="py-20 bg-[#F9F8F6]" data-purpose="featured-properties" id="properties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c58e3d] block mb-2 font-sans">
                FEATURED PROPERTIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071426] tracking-tight font-sans">
                Handpicked Properties in Lucknow
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
                Explore our curated selection of premium villas, plots and homes in the best locations of Lucknow.
              </p>
            </div>

            {/* View All Properties Action */}
            <button
              onClick={() => onNavigate('properties')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-700/80 hover:border-[#d4a359] text-slate-800 hover:text-[#c58e3d] font-semibold text-sm transition-all duration-200 self-start md:self-auto group shrink-0"
            >
              <span>View All Properties</span>
              <ArrowRight className="w-4 h-4 stroke-[2] transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => {
              const isFav = favorites.includes(property.id);
              return (
                <article
                  key={property.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group cursor-pointer"
                  data-purpose="property-card"
                  onClick={() => onNavigate('property-detail', property.slug)}
                >
                  {/* Thumbnail Container */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badges */}
                    <span className="absolute top-4 left-4 bg-[#c58e3d]/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {property.tag}
                    </span>
                    <button
                      aria-label="Add to favorites"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(property.id);
                      }}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md flex items-center justify-center text-white transition-colors"
                    >
                      <Heart className={`w-5 h-5 stroke-[2] ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#c58e3d] transition-colors">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs mt-1.5 mb-5">
                        <MapPin className="w-4 h-4 text-[#d4a359] shrink-0" />
                        <span>{property.location}</span>
                      </div>

                      {/* Specs Row */}
                      <div className="flex items-center gap-4 text-xs text-slate-600 font-medium py-3 border-t border-slate-100">
                        {property.bhk && (
                          <div className="flex items-center gap-1.5">
                            <Bed className="w-4 h-4 text-slate-400" />
                            <span>{property.bhk}</span>
                          </div>
                        )}
                        {property.baths && (
                          <div className="flex items-center gap-1.5">
                            <Bath className="w-4 h-4 text-slate-400" />
                            <span>{property.baths}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5">
                          <Maximize2 className="w-4 h-4 text-slate-400" />
                          <span>{property.area}</span>
                        </div>
                        {property.type === 'Plot' && (
                          <div className="flex items-center gap-1.5">
                            <TreePine className="w-4 h-4 text-slate-400" />
                            <span>Gated Community</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Price & Link Button */}
                    <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-slate-900">{property.price}</span>
                      </div>
                      <button
                        aria-label="View property details"
                        className="w-10 h-10 rounded-full bg-[#f9f8f6] group-hover:bg-[#d4a359] text-slate-700 group-hover:text-white flex items-center justify-center transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STORY / WHY CHOOSE SECTION ================= */}
      <section className="w-full bg-[#071426] overflow-hidden" data-purpose="story-and-value">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Cozy Luxury Living Room Image with Handwritten Title */}
          <div className="relative min-h-[460px] lg:min-h-[580px] w-full overflow-hidden flex items-center p-8 sm:p-12">
            <img
              src={IMAGES.aboutInterior}
              alt="Luxury Living Room Interior"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Soft Tint Mask */}
            <div className="absolute inset-0 bg-slate-950/20 backdrop-brightness-95"></div>
            {/* Artistic Calligraphy Overlay */}
            <div className="relative z-10 max-w-xs sm:max-w-sm -rotate-6 transform">
              <p className="font-script text-3xl sm:text-4xl lg:text-5xl font-bold text-[#142337] leading-[1.15] drop-shadow-sm select-none">
                A Better Tomorrow Starts with the Right Property
              </p>
            </div>
          </div>

          {/* Right Side: Why Choose Property Darshan Content Block */}
          <div className="bg-[#071426] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative">
            {/* Subtle Gold Skyscraper Vector Background Pattern */}
            <div className="absolute right-4 bottom-4 opacity-15 pointer-events-none hidden sm:block">
              <svg className="w-48 h-64 stroke-[#e5b268] stroke-[1.2]" fill="none" viewBox="0 0 200 300">
                <rect height="220" width="40" x="20" y="80"></rect>
                <rect height="260" width="50" x="70" y="40"></rect>
                <rect height="290" width="45" x="130" y="10"></rect>
                <line x1="20" x2="60" y1="120" y2="120"></line>
                <line x1="20" x2="60" y1="160" y2="160"></line>
                <line x1="70" x2="120" y1="80" y2="80"></line>
                <line x1="70" x2="120" y1="120" y2="120"></line>
                <line x1="130" x2="175" y1="60" y2="60"></line>
                <line x1="130" x2="175" y1="100" y2="100"></line>
              </svg>
            </div>

            <div className="relative z-10 max-w-xl">
              {/* Overline */}
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#e5b268] block mb-3 font-sans">
                WHY CHOOSE PROPERTY DARSHAN
              </span>

              {/* Main Header */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4 font-sans">
                More Than Properties.<br />
                <span className="text-white">A Better Tomorrow.</span>
              </h2>

              {/* Descriptive Copy */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-10 font-normal">
                From property tours to investment insights, we make your real estate journey in{' '}
                <strong className="text-white font-semibold">Lucknow</strong> simple, transparent and rewarding.
              </p>

              {/* 3 Micro Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {/* Item 1 */}
                <div className="flex flex-col items-start gap-2.5">
                  <div className="text-[#e5b268]">
                    <MapPin className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-100 leading-snug">
                    Prime Locations Across Lucknow
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-start gap-2.5">
                  <div className="text-[#e5b268]">
                    <HomeIcon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-100 leading-snug">
                    Wide Range of Properties
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-start gap-2.5">
                  <div className="text-[#e5b268]">
                    <Sparkles className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-100 leading-snug">
                    Expert Support at Every Step
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
