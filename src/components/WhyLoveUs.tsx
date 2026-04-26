import { Flame, Wallet, Zap, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Flame,
    title: 'Great Taste',
    description: 'Every dish is a flavor bomb. We don\'t do boring — only bold, punchy, unforgettable.',
    color: '#3B82F6',
  },
  {
    icon: Wallet,
    title: 'Affordable Prices',
    description: 'Premium taste, pocket-friendly prices. Great food shouldn\'t break the bank.',
    color: '#25D366',
  },
  {
    icon: Zap,
    title: 'Trendy Vibe',
    description: 'The aesthetic is unmatched. Every corner is Instagram-worthy, every bite is reel-ready.',
    color: '#E1306C',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Quick prep, quick serve. Your cravings don\'t wait, and neither do we.',
    color: '#60A5FA',
  },
];

export default function WhyLoveUs() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141414]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#60A5FA]/30 bg-[#60A5FA]/5 text-[#60A5FA] text-sm font-medium mb-4">
            Why Us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-4">
            Why People Love <span className="gradient-text">Food Safari</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className={`group p-8 rounded-2xl border border-[#2A2A2A] bg-[#141414] card-hover text-center reveal reveal-delay-${idx + 1}`}
            >
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${reason.color}15`, border: `1px solid ${reason.color}30` }}
              >
                <reason.icon size={28} style={{ color: reason.color }} />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3">{reason.title}</h3>
              <p className="text-[#A0A0A0] text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
