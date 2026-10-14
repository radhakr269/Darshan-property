import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Instagram,
  LayoutGrid,
  Check,
  User,
  Home as HomeIcon,
  MessageSquare,
  Send,
  Lock,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Headphones,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { IMAGES } from '../data/imageConfig';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fbfcfd]">
      {/* ================= HERO BANNER ================= */}
      <section className="relative bg-[#061224] text-white overflow-hidden py-16 lg:py-24" data-purpose="hero-banner">
        {/* Hero Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroContact}
            alt="Luxury Modern Villa Dusk"
            className="w-full h-full object-cover object-right opacity-35 filter brightness-90 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061224] via-[#061224]/85 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <span className="inline-block text-[#d8a858] font-bold text-xs uppercase tracking-[0.25em] mb-2">
              Let&apos;s Connect
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8">
              We&apos;re Here to Help You Find Your Dream Property
            </p>

            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-medium text-slate-400">
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors focus:outline-none"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-slate-200">Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT TWO COLUMN SECTION ================= */}
      <main className="py-16 lg:py-20 bg-[#fbfcfd]" data-purpose="contact-container" id="enquiry-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Contact Details & Service Bullets */}
            <div className="lg:col-span-5 flex flex-col justify-start" data-purpose="contact-info-column">
              <span className="text-[#ca9946] text-xs font-bold uppercase tracking-[0.22em] mb-2">Get In Touch</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#091e3e] tracking-tight leading-tight mb-4">
                Let&apos;s Make Your Property Goals a Reality
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10">
                Have a question, want to book a property tour or need investment advice? Our team is here to help you at
                every step.
              </p>

              <div className="space-y-7">
                {/* Item 1: Phone */}
                <div className="flex items-start gap-4" data-purpose="contact-phone">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#f6eee2] text-[#c59344] flex items-center justify-center shadow-xs">
                    <Phone className="w-5 h-5 fill-current text-[#c59344]" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">Call Us</span>
                    <p className="text-lg font-bold text-[#091e3e] mt-0.5 tracking-tight">
                      <a href="tel:9721013815" className="hover:text-[#c59344] transition-colors">
                        9721013815
                      </a>{' '}
                      &nbsp;|&nbsp;{' '}
                      <a href="tel:8809269208" className="hover:text-[#c59344] transition-colors">
                        8809269208
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">Mon - Sun, 9:00 AM to 8:00 PM</p>
                  </div>
                </div>

                {/* Item 2: Location */}
                <div className="flex items-start gap-4" data-purpose="contact-location">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#f6eee2] text-[#c59344] flex items-center justify-center shadow-xs">
                    <MapPin className="w-5 h-5 text-[#c59344]" />
                  </div>
                  <div>
                    <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Our Location
                    </span>
                    <p className="text-base font-bold text-[#091e3e] mt-0.5">Lucknow, Uttar Pradesh</p>
                    <p className="text-xs text-slate-500 mt-0.5">Property Tours Available Across Lucknow</p>
                  </div>
                </div>

                {/* Item 3: Instagram */}
                <div className="flex items-start gap-4" data-purpose="contact-instagram">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#f6eee2] text-[#c59344] flex items-center justify-center shadow-xs">
                    <Instagram className="w-5 h-5 text-[#c59344]" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Follow Us on Instagram
                    </span>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#091e3e] hover:text-[#c59344] transition-colors mt-0.5 inline-block"
                    >
                      @_property.darshan_
                    </a>
                    {/* Mini tag pill */}
                    <div className="flex items-center gap-1.5 mt-1.5 text-xs text-slate-600 font-medium">
                      <div className="w-4 h-4 rounded-full bg-[#cca050] text-white flex items-center justify-center text-[10px]">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>Property Tours | Investment Insights | Real Estate Updates</span>
                    </div>
                  </div>
                </div>

                {/* Item 4: Services Checklist */}
                <div className="flex items-start gap-4 pt-1" data-purpose="contact-services-list">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#f6eee2] text-[#c59344] flex items-center justify-center shadow-xs">
                    <LayoutGrid className="w-5 h-5 text-[#c59344]" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">
                      Our Services
                    </span>
                    <div className="space-y-2">
                      {['Property Tours', 'Investment Insights', 'Real Estate Updates', 'DM for Business Collaboration'].map(
                        (srv) => (
                          <div key={srv} className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#caa050] text-white flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="text-xs font-semibold text-slate-700">{srv}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Enquiry Form Card */}
            <div className="lg:col-span-7" data-purpose="enquiry-card">
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.06)] p-6 sm:p-9 lg:p-10">
                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#091e3e]">Enquiry Received!</h3>
                    <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Thank you <span className="font-semibold text-slate-900">{fullName}</span>. Our Lucknow property
                      advisor will reach out to you shortly at <span className="font-semibold">{phoneNumber}</span>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFullName('');
                        setPhoneNumber('');
                        setPropertyType('');
                        setMessage('');
                      }}
                      className="mt-4 px-6 py-2.5 bg-[#071426] text-white text-xs font-semibold rounded-full hover:bg-[#0c1e34] transition"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-[#ca9946] text-xs font-bold uppercase tracking-[0.22em] block mb-1">
                      Send Us a Message
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091e3e] tracking-tight mb-2">
                      Enquire About a Property
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-7">
                      Fill in your details and our team will get back to you soon with the best options as per your needs.
                    </p>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                      {/* 2-Column: Full Name & Phone Number */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {/* Name Field */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Your Full Name <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              required
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              placeholder="Enter your name"
                              className="block w-full rounded-xl border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#ca9946] focus:ring-1 focus:ring-[#ca9946] bg-white transition duration-150"
                            />
                          </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1.5">
                            Phone Number <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Phone className="w-4 h-4" />
                            </div>
                            <input
                              type="tel"
                              required
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="Enter your number"
                              className="block w-full rounded-xl border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#ca9946] focus:ring-1 focus:ring-[#ca9946] bg-white transition duration-150"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Property Type Dropdown */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Property Type <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <HomeIcon className="w-4 h-4" />
                          </div>
                          <select
                            required
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className="block w-full rounded-xl border-slate-200 pl-10 pr-10 py-2.5 text-sm text-slate-700 focus:border-[#ca9946] focus:ring-1 focus:ring-[#ca9946] bg-white cursor-pointer transition duration-150"
                          >
                            <option value="" disabled>
                              Select property type
                            </option>
                            <option value="residential-villa">Luxury Villa / House</option>
                            <option value="apartment">Modern Apartment / Flat</option>
                            <option value="commercial">Commercial Space / Office</option>
                            <option value="plot">Residential Plot / Land</option>
                            <option value="investment">High ROI Investment Assets</option>
                          </select>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Your Message <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                            <MessageSquare className="w-4 h-4" />
                          </div>
                          <textarea
                            required
                            maxLength={500}
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell us about your requirements..."
                            className="block w-full rounded-xl border-slate-200 pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#ca9946] focus:ring-1 focus:ring-[#ca9946] bg-white transition duration-150 resize-none"
                          ></textarea>
                          <span className="absolute bottom-2.5 right-3 text-[11px] text-slate-400 font-medium">
                            {message.length}/500
                          </span>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#d8a858] to-[#caa050] hover:from-[#cca04f] hover:to-[#be9445] text-slate-900 font-bold py-3.5 px-6 rounded-xl shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 group mt-2 active:scale-95"
                      >
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        <span className="text-sm font-bold tracking-wide">Send Enquiry</span>
                      </button>

                      {/* Privacy Lock Notice */}
                      <div className="flex items-center justify-center gap-2 text-slate-500 text-xs pt-1">
                        <Lock className="w-3.5 h-3.5 text-slate-400" />
                        <span>Your information is safe with us. We&apos;ll get back to you soon.</span>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ================= LOCATION MAP SECTION ================= */}
      <section className="py-10 bg-white" data-purpose="location-map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-[#f8fafc] grid grid-cols-1 lg:grid-cols-12 shadow-xs">
            {/* Interactive Style Realistic Stylized Map Canvas */}
            <div className="lg:col-span-8 h-80 sm:h-96 relative bg-[#ebf3e8] overflow-hidden" data-purpose="lucknow-map-canvas">
              <svg className="w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 800 400">
                <rect fill="#eaf2e7" height="400" width="800"></rect>
                {/* Road networks */}
                <path d="M -20,120 Q 250,140 400,210 T 820,290" fill="none" stroke="#ffffff" strokeWidth="6"></path>
                <path d="M 120,-20 Q 180,180 280,420" fill="none" stroke="#ffffff" strokeWidth="5"></path>
                <path d="M 450,-20 L 350,420" fill="none" stroke="#ffffff" strokeWidth="5"></path>
                <path d="M 220,130 L 680,80" fill="none" stroke="#f1f5f9" strokeWidth="2.5" strokeDasharray="4 2"></path>
                <path d="M 50,300 L 780,340" fill="none" stroke="#f1f5f9" strokeWidth="2.5"></path>
                <path d="M 300,100 L 520,380" fill="none" stroke="#f1f5f9" strokeWidth="2.5"></path>
                {/* Gomti River (Realistic Blue Ribbon) */}
                <path
                  d="M 160,-20 C 230,80 200,90 280,140 C 360,190 510,130 580,210 C 650,290 730,280 820,320"
                  fill="none"
                  stroke="#a5d8ff"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M 160,-20 C 230,80 200,90 280,140 C 360,190 510,130 580,210 C 650,290 730,280 820,320"
                  fill="none"
                  stroke="#bae6fd"
                  strokeWidth="6"
                ></path>
                <text fill="#0284c7" fontSize="10" fontWeight="600" opacity="0.85" transform="rotate(22 210 85)" x="210" y="85">
                  Gomti River
                </text>
                <text fill="#0284c7" fontSize="10" fontWeight="600" opacity="0.85" transform="rotate(26 510 215)" x="510" y="215">
                  Gomti River
                </text>
              </svg>

              {/* Map Landmarks Labels */}
              <div className="absolute top-16 left-16 text-center pointer-events-none">
                <span className="text-xs font-bold text-slate-700 bg-white/70 px-1.5 py-0.5 rounded shadow-2xs">
                  Hazratganj
                </span>
              </div>
              <div className="absolute bottom-12 left-10 text-center pointer-events-none">
                <span className="text-xs font-bold text-slate-700 bg-white/70 px-1.5 py-0.5 rounded shadow-2xs block">
                  Alambagh
                </span>
                <span className="text-[10px] text-slate-500 font-medium">आलमबाग</span>
              </div>
              <div className="absolute bottom-16 left-48 text-center pointer-events-none">
                <span className="text-xs font-bold text-slate-700 bg-white/70 px-1.5 py-0.5 rounded shadow-2xs block">
                  Charbagh
                </span>
                <span className="text-[10px] text-slate-500 font-medium">चारबाग</span>
              </div>
              <div className="absolute top-8 right-52 text-center pointer-events-none">
                <span className="text-xs font-bold text-slate-700 bg-white/70 px-1.5 py-0.5 rounded shadow-2xs block">
                  Gomti Nagar
                </span>
                <span className="text-[10px] text-slate-500 font-medium">गोमती नगर</span>
              </div>
              <div className="absolute bottom-16 right-48 text-center pointer-events-none">
                <span className="text-xs font-bold text-slate-700 bg-white/70 px-1.5 py-0.5 rounded shadow-2xs block">
                  Indira Nagar
                </span>
                <span className="text-[10px] text-slate-500 font-medium">इंदिरा नगर</span>
              </div>

              {/* Central Lucknow Label */}
              <div className="absolute top-44 left-36 text-center pointer-events-none">
                <span className="text-sm font-extrabold text-slate-800 tracking-wider">LUCKNOW</span>
                <span className="text-xs block text-slate-600 font-semibold font-serif">लखनऊ</span>
              </div>

              {/* Prominent Red Location Pin */}
              <div className="absolute top-36 left-[45%] -translate-x-1/2 flex items-center gap-2 drop-shadow-md">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-rose-600 border-2 border-white flex items-center justify-center text-white shadow-lg animate-bounce">
                    <MapPin className="w-4 h-4 fill-white" />
                  </div>
                  <div className="w-2.5 h-1 bg-black/30 rounded-full mx-auto blur-[1px] mt-0.5"></div>
                </div>
                <div className="bg-white/95 backdrop-blur-2xs px-2.5 py-1 rounded-md shadow-md border border-slate-200">
                  <span className="block text-xs font-extrabold text-slate-900 leading-none">Lucknow</span>
                  <span className="text-[10px] font-medium text-slate-500">Uttar Pradesh</span>
                </div>
              </div>
            </div>

            {/* Right Side: Visit Our Location Info Panel */}
            <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-center bg-white" data-purpose="visit-panel">
              <span className="text-[#ca9946] text-xs font-bold uppercase tracking-[0.2em] mb-1">Visit Our Location</span>
              <h3 className="text-2xl font-extrabold text-[#091e3e] mb-3">Find Us in Lucknow</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                We are based in <strong className="font-bold text-slate-800">Lucknow</strong>, Uttar Pradesh and offer
                property tours across prime locations. Get in touch to plan your site visit or discuss your requirements.
              </p>
              <div>
                <a
                  className="inline-flex items-center gap-2 border border-[#caa050] text-[#091e3e] hover:bg-[#cca050] hover:text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
                  href="https://maps.google.com/?q=Lucknow+Uttar+Pradesh"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MapPin className="w-4 h-4 text-[#cca050] group-hover:text-white" />
                  <span>Get Directions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITIONS ROW ================= */}
      <section className="py-12 bg-white border-t border-slate-100" data-purpose="value-propositions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-slate-200">
            {/* Prop 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-[#f8f5ee] flex items-center justify-center text-slate-700 mb-3 shadow-2xs">
                <HomeIcon className="w-5 h-5 text-slate-800" />
              </div>
              <h4 className="text-sm font-bold text-[#091e3e] mb-1">Verified Listings</h4>
              <p className="text-xs text-slate-500 leading-normal">100% genuine properties with verified details.</p>
            </div>

            {/* Prop 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-[#f8f5ee] flex items-center justify-center text-slate-700 mb-3 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-slate-800" />
              </div>
              <h4 className="text-sm font-bold text-[#091e3e] mb-1">Trusted & Secure</h4>
              <p className="text-xs text-slate-500 leading-normal">Safe and transparent property transactions.</p>
            </div>

            {/* Prop 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-[#f8f5ee] flex items-center justify-center text-slate-700 mb-3 shadow-2xs">
                <Headphones className="w-5 h-5 text-slate-800" />
              </div>
              <h4 className="text-sm font-bold text-[#091e3e] mb-1">Expert Guidance</h4>
              <p className="text-xs text-slate-500 leading-normal">Personalised advice at every step.</p>
            </div>

            {/* Prop 4 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-12 h-12 rounded-full bg-[#f8f5ee] flex items-center justify-center text-slate-700 mb-3 shadow-2xs">
                <TrendingUp className="w-5 h-5 text-slate-800" />
              </div>
              <h4 className="text-sm font-bold text-[#091e3e] mb-1">Better Investment</h4>
              <p className="text-xs text-slate-500 leading-normal">
                Find properties that match your lifestyle and future goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
