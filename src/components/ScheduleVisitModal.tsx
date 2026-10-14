import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2 } from 'lucide-react';
import { Property } from '../data/propertiesData';

interface ScheduleVisitModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleVisitModal: React.FC<ScheduleVisitModalProps> = ({ property, isOpen, onClose }) => {
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('11:00 AM - 1:00 PM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 text-slate-900 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-800 focus:outline-none"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Visit Scheduled!</h3>
            <p className="text-sm text-slate-600 max-w-xs mx-auto leading-relaxed">
              Thank you, <span className="font-semibold">{name}</span>. Our Lucknow property advisor will call you at{' '}
              <span className="font-semibold">{phone}</span> to confirm your private tour for{' '}
              <span className="font-semibold text-[#071426]">{property.title}</span> on{' '}
              <span className="font-semibold">{date || 'your selected date'}</span>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#071426] text-white text-xs font-bold hover:bg-[#0c1e34]"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4a359] block mb-1">
                PRIVATE PROPERTY TOUR
              </span>
              <h3 className="text-xl font-bold text-slate-900">Schedule a Site Visit</h3>
              <p className="text-xs text-slate-500 mt-1">
                {property.title} · {property.location}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Select Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-200 rounded-xl focus:border-[#d4a359] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Preferred Time Slot</span>
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {['10:00 AM - 12:00 PM', '12:00 PM - 2:00 PM', '2:00 PM - 4:00 PM', '4:00 PM - 6:00 PM'].map(
                    (timeOption) => (
                      <button
                        type="button"
                        key={timeOption}
                        onClick={() => setSlot(timeOption)}
                        className={`p-2 rounded-xl text-left border transition-all ${
                          slot === timeOption
                            ? 'border-[#d4a359] bg-[#fefbf6] text-[#b87834] font-bold'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {timeOption}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Your Full Name</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-200 rounded-xl focus:border-[#d4a359] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>Phone Number</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 border border-slate-200 rounded-xl focus:border-[#d4a359] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#d4a359] to-[#c58e3d] text-slate-900 font-bold text-xs rounded-xl shadow-md hover:from-[#e5b268] hover:to-[#d4a359] transition-all"
              >
                Confirm Site Visit
              </button>

              <p className="text-[11px] text-center text-slate-400">
                100% verified site visit accompanied by a senior advisor. No obligations.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
