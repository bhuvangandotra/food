import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';

const specials = [
  {
    name: 'The Og Crispy Chicken Burger',
    description: 'The OG that started it all. Crispy, juicy, and absolutely legendary.',
    price: '149',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: '#1 Viral',
  },
  {
    name: 'Zinger Faya Fury',
    description: 'Our spiciest zinger yet. Crispy chicken with a fiery kick that keeps you coming back.',
    price: '179',
    image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Most Ordered',
  },
  {
    name: 'Oreo Overload Shake',
    description: 'Oreo crusted glass, whipped cream, chocolate drizzle — pure indulgence.',
    price: '119',
    image: 'https://images.pexels.com/photos/1132557/pexels-photo-1132557.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Fan Favorite',
  },
  {
    name: 'Cheesy Peri Peri Blast Momos',
    description: 'Cheesy, spicy, and absolutely addictive. The momos that broke the internet.',
    price: '129',
    image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Must Try',
  },
  {
    name: 'Chicken Fiesta Feast Pizza',
    description: 'Loaded with chicken, cheese, and our signature sauce. A feast in every slice.',
    price: '249',
    image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Spicy Hit',
  },
  {
    name: 'Makhni Drip Pasta',
    description: 'Creamy makhni sauce meets Italian pasta. A desi fusion masterpiece.',
    price: '159',
    image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Fusion King',
  },
];

export default function ViralSpecials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="specials" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex items-end justify-between mb-12 reveal">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[#3B82F6] text-sm font-medium mb-4">
              <Flame size={14} /> Signature Dishes
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk']">
              Viral <span className="gradient-text">Specials</span>
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-3 rounded-full border border-[#2A2A2A] bg-[#141414] text-white disabled:opacity-30 hover:border-[#3B82F6]/30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-3 rounded-full border border-[#2A2A2A] bg-[#141414] text-white disabled:opacity-30 hover:border-[#3B82F6]/30 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {specials.map((item) => (
            <div
              key={item.name}
              className="min-w-[300px] sm:min-w-[380px] snap-start group rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#141414] card-hover flex-shrink-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover menu-card-img" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white text-xs font-bold">
                  {item.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-2">{item.name}</h3>
                <p className="text-[#A0A0A0] text-sm mb-4 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-text font-['Space_Grotesk']">&#8377;{item.price}</span>
                  <a
                    href={`https://wa.me/919780771919?text=Hi! I'd like to order ${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
