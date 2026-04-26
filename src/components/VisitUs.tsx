import { MapPin, Clock, Phone, MessageCircle, Instagram, Navigation } from 'lucide-react';

export default function VisitUs() {
  return (
    <section id="visit" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[#3B82F6] text-sm font-medium mb-4">
            Visit Us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-4">
            Come <span className="gradient-text">Hang Out</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto">
            We're right here in Pathankot. Drop by, grab a bite, and vibe with us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="p-6 rounded-2xl border border-[#2A2A2A] bg-[#141414] card-hover reveal">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#3B82F6]" />
                </div>
                <div>
                  <h3 className="font-bold font-['Space_Grotesk'] mb-1">Location</h3>
                  <p className="text-[#A0A0A0] text-sm">Patel Chowk, Near AXIS Bank, Pathankot Locality, Pathankot, Punjab</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#2A2A2A] bg-[#141414] card-hover reveal reveal-delay-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-[#60A5FA]" />
                </div>
                <div>
                  <h3 className="font-bold font-['Space_Grotesk'] mb-1">Hours</h3>
                  <div className="text-[#A0A0A0] text-sm space-y-1">
                    <p>Opens at 11:00 AM</p>
                    <p className="text-[#3B82F6] text-xs font-medium">Currently Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#2A2A2A] bg-[#141414] card-hover reveal reveal-delay-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-bold font-['Space_Grotesk'] mb-1">Contact</h3>
                  <p className="text-[#A0A0A0] text-sm">+91 97807 71919</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 reveal reveal-delay-3">
              <a
                href="https://wa.me/919780771919"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366] text-white font-semibold hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href="https://instagram.com/foodsafaripathankot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-[#E1306C]/50 text-[#E1306C] font-semibold hover:bg-[#E1306C]/10 transition-all"
              >
                <Instagram size={18} />
                Instagram
              </a>
              <a
                href="https://maps.google.com/?q=Patel+Chowk+Near+AXIS+Bank+Pathankot+Punjab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-[#3B82F6]/50 text-[#3B82F6] font-semibold hover:bg-[#3B82F6]/10 transition-all"
              >
                <Navigation size={18} />
                Directions
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#141414] h-[400px] lg:h-auto reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27268.449979987!2d75.63!3d32.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c1e2e1b1e1e1%3A0x0!2sPathankot%2C%20Punjab!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Food Safari Pathankot Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
