import { ChevronDown, Instagram, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Food background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 via-transparent to-[#60A5FA]/5" />
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3B82F6]/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E40AF]/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 mb-8 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span className="text-sm text-[#3B82F6] font-medium">Now Serving in Pathankot</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-['Space_Grotesk'] leading-[0.95] mb-6 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          Pathankot's
          <br />
          <span className="gradient-text animate-glow">Viral Food</span>
          <br />
          Destination
        </h1>

        <p className="text-lg sm:text-xl text-[#A0A0A0] max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          Momos, burgers, shakes, wraps, pizza & more — crafted for the gram and your tastebuds.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.45s' }}>
          <a
            href="#menu"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center gap-2"
          >
            Explore Menu
            <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="https://wa.me/919780771919"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-[#25D366]/50 text-[#25D366] font-semibold text-lg hover:bg-[#25D366]/10 hover:border-[#25D366] transition-all duration-300 flex items-center gap-2"
          >
            <MessageCircle size={20} />
            Order on WhatsApp
          </a>
          <a
            href="https://instagram.com/foodsafaripathankot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full border-2 border-[#E1306C]/50 text-[#E1306C] font-semibold text-lg hover:bg-[#E1306C]/10 hover:border-[#E1306C] transition-all duration-300 flex items-center gap-2"
          >
            <Instagram size={20} />
            Follow on Instagram
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 sm:gap-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {[
            { value: '200+', label: 'Menu Items' },
            { value: '4.2', label: 'Dining Rating' },
            { value: '111', label: 'Delivery Reviews' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text font-['Space_Grotesk']">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#666] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-float">
        <span className="text-xs text-[#666] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="text-[#666]" />
      </div>
    </section>
  );
}
