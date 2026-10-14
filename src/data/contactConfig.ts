/**
 * Centralized Contact & Communication Configuration for Property Darshan
 * Use only the confirmed official business details.
 */
export const CONTACT_CONFIG = {
  // Confirmed official business contact numbers
  primaryPhone: '+919721013815',
  secondaryPhone: '+918809269208',
  displayPhones: '+91 9721013815, 8809269208',
  whatsappNumber: '919721013815',
  displayWhatsApp: '+91 9721013815',
  email: 'info@propertydarshan.in',
  address: 'Lucknow, Uttar Pradesh (Property Tours across Prime Locations)',
  city: 'Lucknow',
  state: 'Uttar Pradesh',
  timing: 'Mon - Sun: 9:00 AM - 8:00 PM',
  instagramUrl: 'https://instagram.com/_property.darshan_',
  instagramHandle: '@_property.darshan_',
  facebookUrl: 'https://facebook.com',
  youtubeUrl: 'https://youtube.com',

  // Native phone dialer link
  getTelLink: (phone = '+919721013815') => `tel:${phone.replace(/\s+/g, '')}`,

  // WhatsApp enquiry link with pre-filled message
  getWhatsAppLink: (propertyTitle?: string, propertyLocation?: string) => {
    let message = 'Hello Property Darshan, I would like to enquire about premium properties in Lucknow.';
    if (propertyTitle) {
      message = `Hello Property Darshan, I am interested in "${propertyTitle}"${propertyLocation ? ` (${propertyLocation})` : ''}. Please share complete details, brochure, and arrange a site visit.`;
    }
    return `https://wa.me/919721013815?text=${encodeURIComponent(message)}`;
  },
};
