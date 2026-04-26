import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Specials', href: '#specials' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit Us', href: '#visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center text-white font-bold text-lg font-['Space_Grotesk'] group-hover:scale-110 transition-transform">
            FS
          </div>
          <span className="text-xl font-bold font-['Space_Grotesk'] tracking-tight">
            Food <span className="gradient-text">Safari</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#A0A0A0] hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://wa.me/919780771919"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white text-sm font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            Order Now
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 animate-slide-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[#A0A0A0] hover:text-white transition-colors border-b border-[#2A2A2A] last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/919780771919"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center px-5 py-3 rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white font-semibold"
          >
            Order Now
          </a>
        </div>
      )}
    </nav>
  );
}
