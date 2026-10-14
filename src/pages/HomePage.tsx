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
  Building2,
  TreePine,
  Briefcase,
  Sparkles,
  Phone,
  Calendar,
  Check,
  Instagram,
  Play,
  Calculator,
  FileText,
  Clock,
  Mail,
} from 'lucide-react';
import { Property } from '../data/propertiesData';
import { IMAGES } from '../data/imageConfig';
import { CONTACT_CONFIG } from '../data/contactConfig';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { ScheduleVisitModal } from '../components/ScheduleVisitModal';

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
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactType, setContactType] = useState('Villa');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactWaLink, setContactWaLink] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location: selectedLocation,
      type: selectedType,
      budget: selectedBudget,
    });
    onNavigate('properties');
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone.trim()) return;

    const formatted = `Hello Property Darshan,\n\nI would like to enquire about ${contactType} properties in Lucknow.\n• Name: ${contactName.trim() || 'Visitor'}\n• Contact Phone: ${contactPhone.trim()}\n• Property Type: ${contactType}${contactMessage.trim() ? `\n• Notes: ${contactMessage.trim()}` : ''}\n\nPlease share suitable options and availability.`;
    const url = `https://wa.me/919721013815?text=${encodeURIComponent(formatted)}`;
    setContactWaLink(url);
    setContactSubmitted(true);

    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // Graceful fallback
    }
  };

  const featuredProperties = properties.filter((p) => p.isFeatured).slice(0, 3);

  // 5 Property Categories with counts, starting prices, and photos
  const propertyCategories = [
    {
      id: 'villas',
      title: 'Luxury Villas',
      filter: 'Villa',
      count: `${properties.filter((p) => p.type === 'Villa').length} Properties`,
      priceHint: 'From ₹ 2.85 Cr',
      image: IMAGES.properties.villa1,
      icon: Building2,
      description: 'Private pools, lush landscaped lawns and premium gated architecture.',
    },
    {
      id: 'plots',
      title: 'Residential Plots',
      filter: 'Plot',
      count: `${properties.filter((p) => p.type === 'Plot').length} Properties`,
      priceHint: 'From ₹ 1.25 Cr',
      image: IMAGES.properties.plot1,
      icon: TreePine,
      description: 'Wide 40ft avenues, RERA-approved gated layouts ready for custom build.',
    },
    {
      id: 'houses',
      title: 'Independent Houses',
      filter: 'House',
      count: `${properties.filter((p) => p.type === 'House').length} Properties`,
      priceHint: 'From ₹ 1.65 Cr',
      image: IMAGES.properties.house1,
      icon: HomeIcon,
      description: 'Multi-floor residences with private terraces, parking and zero shared walls.',
    },
    {
      id: 'apartments',
      title: 'Premium Apartments',
      filter: 'Apartment',
      count: `${properties.filter((p) => p.type === 'Apartment').length} Properties`,
      priceHint: 'From ₹ 1.20 Cr',
      image: IMAGES.properties.apartment1,
      icon: Building,
      description: 'Skyline balconies, high-speed elevators, clubhouse and swimming pool.',
    },
    {
      id: 'commercial',
      title: 'Commercial Properties',
      filter: 'Commercial',
      count: `${properties.filter((p) => p.type === 'Commercial').length} Properties`,
      priceHint: 'From ₹ 3.75 Cr',
      image: IMAGES.properties.commercial1,
      icon: Briefcase,
      description: 'High-visibility highway corridor plots and prime showroom spaces.',
    },
  ];

  // Video Tours & Reels Data
  const propertyTours = [
    {
      id: 'tour-1',
      title: 'Luxury 4 BHK Villa Walkthrough',
      location: 'Gomti Nagar, Lucknow',
      duration: '1:45 min',
      image: IMAGES.detailVillaMain,
      tag: 'Trending Reel',
      propertySlug: 'luxury-villa-gomti-nagar',
    },
    {
      id: 'tour-2',
      title: 'Gated Residential Plot Layout',
      location: 'Sushant Golf City, Lucknow',
      duration: '1:20 min',
      image: IMAGES.properties.plot1,
      tag: 'Site Tour',
      propertySlug: 'premium-plot-sushant-golf-city',
    },
    {
      id: 'tour-3',
      title: 'Evening Elevation & Private Pool',
      location: 'Shaheed Path, Lucknow',
      duration: '2:10 min',
      image: IMAGES.gallery.evening,
      tag: 'Architectural Tour',
      propertySlug: 'modern-villa-sushant-golf-city',
    },
    {
      id: 'tour-4',
      title: 'Modern Independent Designer House',
      location: 'Faizabad Road, Lucknow',
      duration: '1:30 min',
      image: IMAGES.properties.house1,
      tag: 'Interior Reel',
      propertySlug: 'independent-house-faizabad-road',
    },
  ];

  return (
    <div className="w-full">
      {/* ================= 1. HERO SECTION (PHASE 1 PRESERVED) ================= */}
      <section
        className="relative min-h-[360px] sm:min-h-[500px] lg:min-h-[660px] flex items-center overflow-hidden"
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-14 lg:py-18 w-full">
          <div className="max-w-2xl">
            {/* Subheading */}
            <div className="inline-block mb-1.5 sm:mb-3">
              <p className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-[#071426] font-sans">
                PREMIUM PROPERTIES. A BRIGHTER TOMORROW.
              </p>
            </div>

            {/* Main Title with Script Accent */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#071426] tracking-tight leading-[1.12] mb-1.5 sm:mb-3">
              Find Your <br className="hidden sm:inline" />
              <span className="sm:block text-slate-900 ml-1 sm:ml-0">Dream Property</span>
              <span className="block font-script font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#c58e3d] mt-0.5 sm:mt-1 lowercase first-letter:capitalize">
                with property darshan
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-slate-700 text-xs sm:text-base lg:text-lg leading-relaxed max-w-xl mb-4 sm:mb-8 font-normal">
              Discover premium homes, villas, plots and investment opportunities in{' '}
              <strong className="font-semibold text-slate-900">Lucknow</strong> with expert guidance and personalised
              property tours.
            </p>

            {/* Floating Filter Search Box */}
            <div
              className="bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-2xl sm:rounded-full shadow-2xl border border-white/60 max-w-3xl"
              data-purpose="hero-search-card"
            >
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-2">
                {/* 3 Selectors (Horizontal on Desktop, 3-column compact grid on Mobile) */}
                <div className="grid grid-cols-3 sm:flex sm:flex-1 items-center gap-1.5 sm:gap-2 w-full">
                  {/* Location Filter */}
                  <div className="flex items-center gap-1.5 sm:gap-3 w-full sm:w-1/3 px-2 sm:px-4 py-1.5 sm:py-2 hover:bg-slate-50/80 rounded-xl sm:rounded-full transition-colors cursor-pointer group bg-slate-50/70 sm:bg-transparent">
                    <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:text-[#c58e3d] shrink-0">
                      <MapPin className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[1.8]" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <label className="block text-[8px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-0.5 sm:mb-1">
                        Location
                      </label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full bg-transparent text-[11px] sm:text-sm font-bold text-slate-900 border-none p-0 focus:ring-0 cursor-pointer truncate"
                      >
                        <option value="Lucknow">Lucknow</option>
                        <option value="Gomti Nagar">Gomti Nagar</option>
                        <option value="Sushant Golf City">Sushant Golf City</option>
                        <option value="Faizabad Road">Faizabad Road</option>
                        <option value="Hazratganj">Hazratganj</option>
                        <option value="Alambagh">Alambagh</option>
                        <option value="Shaheed Path">Shaheed Path</option>
                      </select>
                    </div>
                  </div>

                  {/* Divider for desktop */}
                  <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>

                  {/* Property Type Filter */}
                  <div className="flex items-center gap-1.5 sm:gap-3 w-full sm:w-1/3 px-2 sm:px-4 py-1.5 sm:py-2 hover:bg-slate-50/80 rounded-xl sm:rounded-full transition-colors cursor-pointer group bg-slate-50/70 sm:bg-transparent">
                    <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:text-[#c58e3d] shrink-0">
                      <HomeIcon className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[1.8]" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <label className="block text-[8px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-0.5 sm:mb-1">
                        Type
                      </label>
                      <select
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="w-full bg-transparent text-[11px] sm:text-sm font-semibold text-slate-800 border-none p-0 focus:ring-0 cursor-pointer truncate"
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

                  {/* Divider for desktop */}
                  <div className="hidden sm:block h-8 w-[1px] bg-slate-200"></div>

                  {/* Budget Filter */}
                  <div className="flex items-center gap-1.5 sm:gap-3 w-full sm:w-1/3 px-2 sm:px-4 py-1.5 sm:py-2 hover:bg-slate-50/80 rounded-xl sm:rounded-full transition-colors cursor-pointer group bg-slate-50/70 sm:bg-transparent">
                    <div className="w-6 h-6 sm:w-9 sm:h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold group-hover:text-[#c58e3d] shrink-0 text-xs sm:text-sm">
                      ₹
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <label className="block text-[8px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-0.5 sm:mb-1">
                        Budget
                      </label>
                      <select
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className="w-full bg-transparent text-[11px] sm:text-sm font-semibold text-slate-800 border-none p-0 focus:ring-0 cursor-pointer truncate"
                      >
                        <option value="Any">Any Budget</option>
                        <option value="Under 1.5 Cr">&lt; ₹ 1.5 Cr</option>
                        <option value="1.5 Cr - 2.5 Cr">₹ 1.5-2.5 Cr</option>
                        <option value="Above 2.5 Cr">&gt; ₹ 2.5 Cr</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Search Action Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3.5 bg-[#071426] hover:bg-[#0c1e34] text-white rounded-xl sm:rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-navy-900/30 transition-all duration-200 active:scale-95 shrink-0"
                >
                  <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                  <span>Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. FOUR-ITEM TRUST STRIP (PHASE 1 PRESERVED) ================= */}
      <section className="bg-white border-y border-slate-200/70 py-3.5 sm:py-8 lg:py-10 relative z-20" data-purpose="value-propositions">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-1 sm:gap-4 divide-x divide-slate-100">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#d4a359]/12 flex items-center justify-center text-slate-800 mb-1.5 sm:mb-3 transition-transform hover:scale-105">
                <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8] text-slate-800" />
              </div>
              <h3 className="text-[11px] sm:text-sm lg:text-base font-bold text-slate-900 leading-tight">
                Verified Listings
              </h3>
              <p className="hidden sm:block text-xs text-slate-500 leading-snug mt-1 max-w-[190px]">
                100% genuine properties with verified details.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#d4a359]/12 flex items-center justify-center text-slate-800 mb-1.5 sm:mb-3 transition-transform hover:scale-105">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8] text-slate-800" />
              </div>
              <h3 className="text-[11px] sm:text-sm lg:text-base font-bold text-slate-900 leading-tight">
                Trusted & Secure
              </h3>
              <p className="hidden sm:block text-xs text-slate-500 leading-snug mt-1 max-w-[190px]">
                Safe and transparent property transactions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#d4a359]/12 flex items-center justify-center text-slate-800 mb-1.5 sm:mb-3 transition-transform hover:scale-105">
                <Headphones className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8] text-slate-800" />
              </div>
              <h3 className="text-[11px] sm:text-sm lg:text-base font-bold text-slate-900 leading-tight">
                Expert Guidance
              </h3>
              <p className="hidden sm:block text-xs text-slate-500 leading-snug mt-1 max-w-[190px]">
                Personalised advice at every step.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center px-1 sm:px-3">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#d4a359]/12 flex items-center justify-center text-slate-800 mb-1.5 sm:mb-3 transition-transform hover:scale-105">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.8] text-slate-800" />
              </div>
              <h3 className="text-[11px] sm:text-sm lg:text-base font-bold text-slate-900 leading-tight">
                Better Investment
              </h3>
              <p className="hidden sm:block text-xs text-slate-500 leading-snug mt-1 max-w-[190px]">
                Find properties that match your lifestyle and future goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURED PROPERTIES (PHASE 1 PRESERVED) ================= */}
      <section className="pt-8 sm:pt-16 pb-16 sm:pb-20 bg-[#F9F8F6]" data-purpose="featured-properties" id="properties">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
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

      {/* ================= 4. EXPLORE PROPERTY CATEGORIES ================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-100" id="categories" data-purpose="property-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c58e3d] block mb-2 font-sans">
                CURATED COLLECTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071426] tracking-tight font-sans">
                Explore Property Categories
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
                Choose the property type that fits your vision — from private villas to investment plots and commercial corridors across Lucknow.
              </p>
            </div>

            <button
              onClick={() => onNavigate('properties')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#071426] hover:text-[#c58e3d] transition-colors self-start md:self-auto"
            >
              <span>All 5 Categories</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Categories 5-Card Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {propertyCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  onClick={() => onNavigate('properties', category.filter)}
                  className="group bg-[#fdfcfb] border border-slate-200/80 hover:border-[#d4a359] rounded-2xl overflow-hidden p-3.5 flex flex-col justify-between transition-all duration-300 hover:shadow-lg cursor-pointer hover:-translate-y-1"
                >
                  <div>
                    {/* Category Image Container */}
                    <div className="relative h-44 rounded-xl overflow-hidden mb-3.5 bg-slate-900">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <span className="absolute bottom-2.5 left-2.5 bg-white/95 text-[#071426] text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                        {category.count}
                      </span>
                    </div>

                    {/* Title & Icon Header */}
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-[#d4a359]/15 text-[#b87834] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-[#b87834] transition-colors leading-tight">
                        {category.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-500 leading-snug line-clamp-2 mb-3">
                      {category.description}
                    </p>
                  </div>

                  {/* Bottom Price & Link */}
                  <div className="pt-2.5 border-t border-slate-200/70 flex items-center justify-between text-xs">
                    <span className="font-extrabold text-[#071426]">{category.priceHint}</span>
                    <span className="font-bold text-[#b87834] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 5. ABOUT PROPERTY DARSHAN (PREVIEW SECTION) ================= */}
      <section className="py-16 sm:py-20 bg-[#F9F8F6]" id="about-preview" data-purpose="about-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Image with Trust Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-900">
                <img
                  src={IMAGES.aboutInterior}
                  alt="Property Darshan Office & Luxury Living Room in Lucknow"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
              </div>

              {/* Floating Trust Card */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#d4a359]/20 text-[#b87834] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <span className="block text-xl font-extrabold text-slate-900 leading-none">100%</span>
                    <span className="text-[11px] font-semibold text-slate-500 leading-tight">Verified Site Visits</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Story Copy & Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c58e3d] block mb-2 font-sans">
                ABOUT PROPERTY DARSHAN
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071426] tracking-tight leading-tight mb-4 font-sans">
                Your Trusted Real Estate Partner in Lucknow
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                At <strong className="font-bold text-slate-800">Property Darshan</strong>, we believe a property is not just brick and mortar — it is the cornerstone of your family&apos;s peace, lifestyle, and a brighter tomorrow.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Based locally in Lucknow, our seasoned team offers personalized guidance across Gomti Nagar, Sushant Golf City, Faizabad Road, and Shaheed Path. We bridge buyers with genuine owners and verified developers, eliminating middleman ambiguities and false promises.
              </p>

              {/* 4 Quick Stat Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pt-6 border-t border-slate-200/80">
                <div>
                  <span className="block text-2xl font-extrabold text-[#071426]">100%</span>
                  <span className="text-xs text-slate-500 font-medium">Genuine Listings</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-[#071426]">500+</span>
                  <span className="text-xs text-slate-500 font-medium">Families Guided</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-[#071426]">10+</span>
                  <span className="text-xs text-slate-500 font-medium">Prime Localities</span>
                </div>
                <div>
                  <span className="block text-2xl font-extrabold text-[#071426]">₹ 0</span>
                  <span className="text-xs text-slate-500 font-medium">Hidden Charges</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 rounded-full bg-[#071426] hover:bg-[#0c1e34] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md inline-flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={CONTACT_CONFIG.getTelLink()}
                  className="px-5 py-3 rounded-full border border-slate-300 hover:border-[#d4a359] text-slate-800 hover:text-[#b87834] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Advisor</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. OUR SERVICES ================= */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-100" id="services" data-purpose="services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c58e3d] block mb-2 font-sans">
              END-TO-END GUIDANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071426] tracking-tight font-sans">
              Comprehensive Real Estate Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From your first shortlisted search to property site visits, legal checks, bank loans, and keys handover in Lucknow.
            </p>
          </div>

          {/* 4 Core Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-[#fcfbf9] border border-slate-100 hover:border-[#d4a359] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#d4a359]/15 text-[#b87834] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Personalised Site Tours</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  Accompanied, scheduled site visits with senior Lucknow advisors who walk you through room dimensions, neighborhood infrastructure and future connectivity.
                </p>
              </div>
              <button
                onClick={() => setScheduleModalOpen(true)}
                className="text-xs font-bold text-[#b87834] group-hover:text-[#945f26] inline-flex items-center gap-1.5 self-start pt-3 border-t border-slate-200/60 w-full"
              >
                <span>Schedule a Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-[#fcfbf9] border border-slate-100 hover:border-[#d4a359] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#d4a359]/15 text-[#b87834] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Legal & RERA Verification</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  Complete documentation review, land registry verification, RERA sanction checks, and transparent encumbrance assistance before any payment.
                </p>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-bold text-[#b87834] group-hover:text-[#945f26] inline-flex items-center gap-1.5 self-start pt-3 border-t border-slate-200/60 w-full"
              >
                <span>Request Verification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-[#fcfbf9] border border-slate-100 hover:border-[#d4a359] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#d4a359]/15 text-[#b87834] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Calculator className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Home Loan Assistance</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  Tie-ups with premier financial institutions (SBI, HDFC, ICICI) to secure fast-track approvals and competitive home loan interest rates.
                </p>
              </div>
              <button
                onClick={() => onNavigate('property-detail', 'luxury-villa-gomti-nagar')}
                className="text-xs font-bold text-[#b87834] group-hover:text-[#945f26] inline-flex items-center gap-1.5 self-start pt-3 border-t border-slate-200/60 w-full"
              >
                <span>Calculate EMI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Service 4 */}
            <div className="bg-[#fcfbf9] border border-slate-100 hover:border-[#d4a359] rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#d4a359]/15 text-[#b87834] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Investment Advisory</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  Strategic growth forecasting for commercial and residential corridors on Shaheed Path, Sultanpur Road, and Gomti Nagar Extension.
                </p>
              </div>
              <a
                href={CONTACT_CONFIG.getWhatsAppLink(undefined, 'Investment Advisory')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#b87834] group-hover:text-[#945f26] inline-flex items-center gap-1.5 self-start pt-3 border-t border-slate-200/60 w-full"
              >
                <span>Consult on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. PROPERTY TOURS & INSTAGRAM REELS ================= */}
      <section className="py-16 sm:py-20 bg-[#F9F8F6]" id="tours" data-purpose="video-tours-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c58e3d] block mb-2 font-sans">
                WATCH & EXPERIENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071426] tracking-tight font-sans">
                Property Tours & Instagram Reels
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
                Watch high-definition video walkthroughs and short video reels showing every angle of Lucknow&apos;s finest properties before scheduling your visit.
              </p>
            </div>

            <a
              href={CONTACT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-xs font-bold text-slate-800 transition shadow-xs self-start md:self-auto shrink-0"
            >
              <Instagram className="w-4 h-4 text-rose-500" />
              <span>Follow {CONTACT_CONFIG.instagramHandle}</span>
            </a>
          </div>

          {/* 4 Video Reel Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {propertyTours.map((tour) => (
              <div
                key={tour.id}
                onClick={() => onNavigate('property-detail', tour.propertySlug)}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#d4a359] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Video Reel Mockup Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  {/* Dark gradient for text & play icon */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Play Button Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-[#d4a359] text-slate-900 group-hover:text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <span className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-mono px-2 py-0.5 rounded">
                    {tour.duration}
                  </span>

                  {/* Category Tag */}
                  <span className="absolute top-3 left-3 bg-[#d4a359] text-[#071426] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                    {tour.tag}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#b87834] transition-colors leading-snug mb-1">
                      {tour.title}
                    </h3>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#b87834] shrink-0" />
                      <span className="truncate">{tour.location}</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">Verified Walkthrough</span>
                    <span className="text-[#b87834] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof Banner */}
          <div className="bg-gradient-to-r from-[#071426] via-[#0b1e38] to-[#071426] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6 text-[#e5b268]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Follow Property Darshan on Instagram
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  New video walkthroughs, price drops, and Lucknow property updates posted weekly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial text-center px-5 py-2.5 rounded-full bg-[#d4a359] hover:bg-[#e5b268] text-[#071426] font-bold text-xs uppercase tracking-wider transition shadow-md whitespace-nowrap"
              >
                Watch Reels on Instagram
              </a>
              <button
                onClick={() => setScheduleModalOpen(true)}
                className="flex-1 md:flex-initial text-center px-5 py-2.5 rounded-full border border-white/30 hover:border-white text-white font-bold text-xs uppercase tracking-wider transition whitespace-nowrap"
              >
                Book Site Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. WHY CHOOSE PROPERTY DARSHAN (PHASE 1 PRESERVED) ================= */}
      <section className="w-full bg-[#071426] overflow-hidden" id="why-choose" data-purpose="story-and-value">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Cozy Luxury Living Room Image with Handwritten Title */}
          <div className="relative min-h-[420px] lg:min-h-[560px] w-full overflow-hidden flex items-center p-8 sm:p-12">
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

      {/* ================= 9. CONTACT & ENQUIRY (FUNCTIONAL CALL & WHATSAPP) ================= */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80" id="contact-enquiry" data-purpose="contact-and-enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Direct Call & WhatsApp Connect Actions */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c58e3d] block mb-2 font-sans">
                DIRECT COMMUNICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071426] tracking-tight leading-tight mb-4 font-sans">
                Ready to Find Your Dream Property?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Speak directly with our senior property advisors or drop a WhatsApp message. We are ready to answer your questions, arrange physical site visits, and share floor plans.
              </p>

              {/* Functional Action Cards (Direct Call & WhatsApp Enquiry) */}
              <div className="space-y-4 mb-8">
                {/* 1. Direct Call Now Button */}
                <a
                  href={CONTACT_CONFIG.getTelLink()}
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#d4a359] shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#d4a359]/20 text-[#b87834] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Direct Phone Call
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-[#071426] block">
                        Call {CONTACT_CONFIG.displayPhones.split(',')[0]}
                      </span>
                      <span className="text-xs text-slate-500">Native dialer · Available 9 AM - 7 PM</span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#d4a359] group-hover:text-white flex items-center justify-center text-slate-700 transition">
                    <ArrowRight className="w-4 h-4 stroke-[2]" />
                  </div>
                </a>

                {/* 2. WhatsApp Enquiry Button */}
                <a
                  href={CONTACT_CONFIG.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <WhatsAppIcon className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">
                        WhatsApp Enquiry
                      </span>
                      <span className="text-base sm:text-lg font-extrabold text-[#071426] block">
                        Chat on WhatsApp
                      </span>
                      <span className="text-xs text-slate-500">Instant response · Receive property brochures</span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-emerald-50 group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center text-emerald-700 transition">
                    <ArrowRight className="w-4 h-4 stroke-[2]" />
                  </div>
                </a>
              </div>

              {/* Business Location & Hours */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 text-xs text-slate-600 space-y-2.5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#b87834] shrink-0 mt-0.5" />
                  <span>{CONTACT_CONFIG.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#b87834] shrink-0" />
                  <span>{CONTACT_CONFIG.timing}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#b87834] shrink-0" />
                  <a href={`mailto:${CONTACT_CONFIG.email}`} className="hover:text-slate-900 font-semibold">
                    {CONTACT_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Inline Quick Enquiry Form */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-md">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c58e3d] block mb-1">
                ONLINE ENQUIRY
              </span>
              <h3 className="text-2xl font-extrabold text-[#071426] mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill out the quick form below and our dedicated property advisor will call you with matching options.
              </p>

              {contactSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Enquiry Ready for Dispatch</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900">{contactName || 'there'}</span>. Your enquiry for <span className="font-semibold">{contactType}</span> in Lucknow is prepared for direct delivery to our verified advisory desk.
                  </p>

                  <div className="pt-2 space-y-2.5 max-w-sm mx-auto">
                    <a
                      href={contactWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current" />
                      <span>Deliver on WhatsApp Now (+91 9721013815)</span>
                    </a>

                    <a
                      href={CONTACT_CONFIG.getTelLink()}
                      className="w-full bg-[#071426] hover:bg-[#0c1e34] text-white font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#d4a359]" />
                      <span>Call Advisor Directly (9721013815)</span>
                    </a>

                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactName('');
                        setContactPhone('');
                        setContactMessage('');
                      }}
                      className="text-xs text-slate-400 hover:text-slate-700 underline block mx-auto pt-1"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#d4a359] focus:outline-none bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number (Required)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#d4a359] focus:outline-none bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Interested Property Type
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-xs">
                      {['Villa', 'Plot', 'House', 'Apartment', 'Commercial'].map((typeOption) => (
                        <button
                          type="button"
                          key={typeOption}
                          onClick={() => setContactType(typeOption)}
                          className={`py-2 px-1 text-center rounded-xl border transition-all text-xs ${
                            contactType === typeOption
                              ? 'border-[#d4a359] bg-[#fdf8f0] text-[#b87834] font-bold'
                              : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {typeOption}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Message / Preferred Location (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Looking for a 4 BHK Villa in Gomti Nagar under 3 Cr..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 focus:border-[#d4a359] focus:outline-none bg-slate-50/50 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#071426] hover:bg-[#0c1e34] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    We value your privacy. No spam. Direct response from verified advisors.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Visit Modal for homepage CTAs */}
      <ScheduleVisitModal
        property={featuredProperties[0] || properties[0]}
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
      />
    </div>
  );
};
