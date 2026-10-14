import React, { useState, useMemo } from 'react';
import {
  MapPin,
  Home as HomeIcon,
  Search,
  ArrowRight,
  Heart,
  Bed,
  Bath,
  Maximize2,
  Building,
  Building2,
  TreePine,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import { Property } from '../data/propertiesData';
import { IMAGES } from '../data/imageConfig';

interface PropertiesPageProps {
  properties: Property[];
  onNavigate: (page: string, propertySlug?: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  initialFilters?: { location: string; type: string; budget: string };
}

export const PropertiesPage: React.FC<PropertiesPageProps> = ({
  properties,
  onNavigate,
  favorites,
  onToggleFavorite,
  initialFilters,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    initialFilters?.type && initialFilters.type !== 'Any' ? initialFilters.type : 'All'
  );
  const [filterLocation, setFilterLocation] = useState(initialFilters?.location || 'Lucknow');
  const [filterType, setFilterType] = useState(initialFilters?.type || 'Any');
  const [filterBudget, setFilterBudget] = useState(initialFilters?.budget || 'Any');
  const [filterArea, setFilterArea] = useState('Any');
  const [sortBy, setSortBy] = useState('Latest First');

  const categories = [
    { id: 'All', label: 'All Properties', icon: HomeIcon },
    { id: 'Villa', label: 'Villas', icon: Building2 },
    { id: 'House', label: 'Houses', icon: HomeIcon },
    { id: 'Plot', label: 'Plots', icon: TreePine },
    { id: 'Apartment', label: 'Apartments', icon: Building },
    { id: 'Commercial', label: 'Commercial', icon: Briefcase },
  ];

  const filteredProperties = useMemo(() => {
    let list = [...properties];

    // Category filter
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.type.toLowerCase() === activeCategory.toLowerCase());
    }

    // Type filter if selected in dropdown
    if (filterType !== 'Any') {
      list = list.filter((p) => p.type.toLowerCase() === filterType.toLowerCase());
    }

    // Location filter
    if (filterLocation !== 'Lucknow') {
      list = list.filter((p) =>
        p.location.toLowerCase().includes(filterLocation.toLowerCase()) ||
        p.subLocation.toLowerCase().includes(filterLocation.toLowerCase())
      );
    }

    // Budget filter
    if (filterBudget === 'Under 1.5 Cr') {
      list = list.filter((p) => p.priceNum <= 1.5);
    } else if (filterBudget === '1.5 Cr - 2.5 Cr') {
      list = list.filter((p) => p.priceNum >= 1.5 && p.priceNum <= 2.5);
    } else if (filterBudget === 'Above 2.5 Cr') {
      list = list.filter((p) => p.priceNum >= 2.5);
    }

    // Area filter
    if (filterArea === '1000 - 2000 sq ft') {
      list = list.filter((p) => {
        const sqft = parseInt(p.area.replace(/,/g, ''));
        return sqft >= 1000 && sqft <= 2000;
      });
    } else if (filterArea === '2000 - 3500 sq ft') {
      list = list.filter((p) => {
        const sqft = parseInt(p.area.replace(/,/g, ''));
        return sqft >= 2000 && sqft <= 3500;
      });
    } else if (filterArea === '3500+ sq ft') {
      list = list.filter((p) => {
        const sqft = parseInt(p.area.replace(/,/g, ''));
        return sqft >= 3500;
      });
    }

    // Sorting
    if (sortBy === 'Price: Low to High') {
      list.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === 'Price: High to Low') {
      list.sort((a, b) => b.priceNum - a.priceNum);
    }

    return list;
  }, [properties, activeCategory, filterLocation, filterType, filterBudget, filterArea, sortBy]);

  return (
    <div className="w-full bg-[#fbfbfd]">
      {/* ================= HERO BANNER ================= */}
      <section
        className="relative bg-slate-100 overflow-hidden border-b border-slate-200"
        style={{
          backgroundImage: `url(${IMAGES.heroProperties})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        <div className="hero-clear-overlay absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="max-w-xl">
            <p className="text-xs sm:text-sm font-bold tracking-[0.22em] text-[#051329] uppercase mb-2">
              PREMIUM PROPERTIES IN LUCKNOW
            </p>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#051329] tracking-tight mb-2">
              Properties
            </h1>
            <p className="font-script text-3xl sm:text-4xl text-[#c58e3d] font-bold mb-4 tracking-wide">
              Find Your Perfect Property
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
              Explore a curated selection of premium villas, plots, houses and apartments in{' '}
              <strong className="font-bold text-slate-900">Lucknow</strong>. Verified listings, expert guidance and
              personalised support — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BREADCRUMB & FILTERS ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 mb-6">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-1 hover:text-[#051329] focus:outline-none"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Home</span>
          </button>
          <span>&gt;</span>
          <span className="text-slate-900 font-medium">Properties</span>
        </nav>

        {/* Category Tabs / Filter Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar text-sm font-medium">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (cat.id !== 'All') {
                    setFilterType(cat.id);
                  } else {
                    setFilterType('Any');
                  }
                }}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-all whitespace-nowrap shadow-xs ${
                  isActive
                    ? 'bg-[#051329] text-white shadow-md'
                    : 'bg-[#f3f4f6] text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#e5b268]' : 'text-slate-600'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-4 bg-white rounded-2xl p-3 shadow-md border border-slate-100 grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
          {/* Filter 1: Location */}
          <div className="flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200">
            <MapPin className="w-5 h-5 text-slate-600 mr-3 shrink-0" />
            <div className="grow min-w-0">
              <label className="block text-[11px] font-medium text-slate-400 leading-none mb-1">Location</label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full p-0 border-0 bg-transparent text-sm font-semibold text-slate-800 focus:ring-0 cursor-pointer"
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

          {/* Filter 2: Property Type */}
          <div className="flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200">
            <HomeIcon className="w-5 h-5 text-slate-600 mr-3 shrink-0" />
            <div className="grow min-w-0">
              <label className="block text-[11px] font-medium text-slate-400 leading-none mb-1">Property Type</label>
              <select
                value={filterType}
                onChange={(e) => {
                  setFilterType(e.target.value);
                  if (e.target.value !== 'Any') {
                    setActiveCategory(e.target.value);
                  } else {
                    setActiveCategory('All');
                  }
                }}
                className="w-full p-0 border-0 bg-transparent text-sm font-semibold text-slate-800 focus:ring-0 cursor-pointer"
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

          {/* Filter 3: Budget */}
          <div className="flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-slate-200">
            <span className="text-slate-600 font-bold text-lg mr-3 shrink-0">₹</span>
            <div className="grow min-w-0">
              <label className="block text-[11px] font-medium text-slate-400 leading-none mb-1">Budget</label>
              <select
                value={filterBudget}
                onChange={(e) => setFilterBudget(e.target.value)}
                className="w-full p-0 border-0 bg-transparent text-sm font-semibold text-slate-800 focus:ring-0 cursor-pointer"
              >
                <option value="Any">Any Budget</option>
                <option value="Under 1.5 Cr">Under 1.5 Cr</option>
                <option value="1.5 Cr - 2.5 Cr">1.5 Cr - 2.5 Cr</option>
                <option value="Above 2.5 Cr">Above 2.5 Cr</option>
              </select>
            </div>
          </div>

          {/* Filter 4: Area (sq ft) */}
          <div className="flex items-center px-4 py-2">
            <Maximize2 className="w-5 h-5 text-slate-600 mr-3 shrink-0" />
            <div className="grow min-w-0">
              <label className="block text-[11px] font-medium text-slate-400 leading-none mb-1">Area (sq ft)</label>
              <select
                value={filterArea}
                onChange={(e) => setFilterArea(e.target.value)}
                className="w-full p-0 border-0 bg-transparent text-sm font-semibold text-slate-800 focus:ring-0 cursor-pointer"
              >
                <option value="Any">Any Area</option>
                <option value="1000 - 2000 sq ft">1,000 - 2,000 sq ft</option>
                <option value="2000 - 3500 sq ft">2,000 - 3,500 sq ft</option>
                <option value="3500+ sq ft">3,500+ sq ft</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="px-2">
            <button
              type="button"
              onClick={() => {
                // Already reactive via state!
              }}
              className="w-full bg-[#051329] hover:bg-[#0c2247] text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold text-sm transition-colors shadow-sm"
            >
              <Search className="w-4 h-4 stroke-[2.5]" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= PROPERTIES LISTINGS SECTION ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {filteredProperties.length} Properties Found
          </h2>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 text-sm text-slate-600 self-end sm:self-auto">
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-slate-300 rounded-lg text-xs sm:text-sm font-medium py-1.5 pl-3 pr-8 bg-white focus:ring-[#051329] focus:border-[#051329] cursor-pointer"
            >
              <option value="Latest First">Latest First</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Properties Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProperties.map((property) => {
            const isFav = favorites.includes(property.id);
            return (
              <article
                key={property.id}
                onClick={() => onNavigate('property-detail', property.slug)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 flex flex-col group cursor-pointer"
              >
                {/* Thumbnail Container */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* 'For Sale' Pill */}
                  <span className="absolute top-4 left-4 bg-[#c88d35] text-white text-[11px] font-semibold tracking-wider px-3 py-1 rounded-full uppercase shadow">
                    {property.tag}
                  </span>
                  {/* Heart Button */}
                  <button
                    aria-label="Add to wishlist"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(property.id);
                    }}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/25 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition"
                  >
                    <Heart className={`w-5 h-5 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#c58e3d] transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{property.location}</span>
                    </p>

                    {/* Key Specs */}
                    <div className="flex items-center text-xs text-slate-600 gap-4 py-2 border-t border-slate-100">
                      {property.bhk && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <Bed className="w-4 h-4 text-slate-500" />
                          <span>{property.bhk}</span>
                        </span>
                      )}
                      {property.baths && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <Bath className="w-4 h-4 text-slate-500" />
                          <span>{property.baths}</span>
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 font-medium">
                        <Maximize2 className="w-4 h-4 text-slate-500" />
                        <span>{property.area}</span>
                      </span>
                      {property.type === 'Commercial' && (
                        <span className="flex items-center gap-1.5 font-medium">
                          <Briefcase className="w-4 h-4 text-slate-500" />
                          <span>High Growth</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom Price & Action */}
                  <div className="mt-4 pt-3 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xl font-extrabold text-[#051329]">{property.price}</span>
                    <button
                      aria-label="View property"
                      className="w-10 h-10 rounded-full bg-[#faecd6] text-[#b47a24] hover:bg-[#c99a53] hover:text-white flex items-center justify-center transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* ================= NEED HELP CTA SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="contact">
        <div className="relative rounded-3xl overflow-hidden bg-[#06152a] text-white grid grid-cols-1 lg:grid-cols-12 shadow-xl border border-slate-800">
          {/* Left Image: Luxury Living Room */}
          <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
            <img
              src={IMAGES.helpCtaInterior}
              alt="Luxury living room in Lucknow"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#06152a]/95"></div>
          </div>

          {/* Right Content Box */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e5b976] mb-3">
              LET&apos;S FIND YOUR PERFECT PROPERTY
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Need Help Choosing <br className="hidden sm:inline" />
              The Right Property?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
              Get expert <span className="text-white font-semibold">advice</span>,{' '}
              <span className="text-white font-semibold">site visits</span> and personalized property recommendations in{' '}
              <span className="text-[#e5b976] font-semibold">Lucknow</span>.
            </p>
            <div>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-[#e5b976] hover:bg-[#d4a35b] text-[#051329] transition-all shadow-md active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
