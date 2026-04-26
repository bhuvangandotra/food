import { Instagram, MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-[#2A2A2A]">
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center text-white font-bold text-lg font-['Space_Grotesk']">
                FS
              </div>
              <span className="text-xl font-bold font-['Space_Grotesk'] tracking-tight">
                Food <span className="gradient-text">Safari</span>
              </span>
            </div>
            <p className="text-[#666] text-sm leading-relaxed">
              Pathankot's viral food destination. North Indian, Fast Food, Chinese, Healthy Food, Wraps, Momos, Shakes & Beverages.
            </p>
          </div>

          <div>
            <h4 className="font-bold font-['Space_Grotesk'] mb-4 text-sm uppercase tracking-wider text-[#A0A0A0]">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Menu', href: '#menu' },
                { label: 'Specials', href: '#specials' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Visit Us', href: '#visit' },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block text-[#666] hover:text-white text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold font-['Space_Grotesk'] mb-4 text-sm uppercase tracking-wider text-[#A0A0A0]">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#666] text-sm">
                <Phone size={14} className="text-[#3B82F6]" />
                +91 97807 71919
              </div>
              <div className="flex items-center gap-2 text-[#666] text-sm">
                <MapPin size={14} className="text-[#3B82F6]" />
                Patel Chowk, Near AXIS Bank, Pathankot
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold font-['Space_Grotesk'] mb-4 text-sm uppercase tracking-wider text-[#A0A0A0]">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919780771919"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com/foodsafaripathankot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C]/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#666] text-sm">
            &copy; {new Date().getFullYear()} Food Safari Pathankot. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-[#2A2A2A] bg-[#141414] text-[#A0A0A0] hover:text-white hover:border-[#3B82F6]/30 transition-all"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
