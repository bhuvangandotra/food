import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Aarav S.',
    text: 'The Og Crispy Chicken Burger is insane! Best burger in Pathankot, hands down. The vibe is so aesthetic too.',
    rating: 5,
    avatar: 'A',
    tag: 'Burger Lover',
  },
  {
    name: 'Priya M.',
    text: 'Oreo Overload Shake literally broke my brain. The glass is coated with Oreo crumbs — unreal presentation!',
    rating: 5,
    avatar: 'P',
    tag: 'Shake Addict',
  },
  {
    name: 'Rahul K.',
    text: 'Finally a place in Pathankot that gets it. Great food, great prices, and the ambiance is straight out of Delhi.',
    rating: 4,
    avatar: 'R',
    tag: 'Foodie',
  },
  {
    name: 'Simran D.',
    text: 'Came for the gram, stayed for the food. The Cheesy Peri Peri Momos are fire. Already been here 5 times this month!',
    rating: 5,
    avatar: 'S',
    tag: 'Regular',
  },
  {
    name: 'Vikram J.',
    text: 'Fast service, amazing taste, and the prices are so reasonable. The Zinger Faya Fury is a must-try!',
    rating: 5,
    avatar: 'V',
    tag: 'Local Guide',
  },
  {
    name: 'Neha T.',
    text: 'The Cheesy Loaded Fries are addictive. Cheese pull is real! Perfect spot for hanging out with friends.',
    rating: 4,
    avatar: 'N',
    tag: 'Cheese Fan',
  },
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#141414]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#60A5FA]/30 bg-[#60A5FA]/5 text-[#60A5FA] text-sm font-medium mb-4">
            Reviews
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto">
            Don't take our word for it — hear it from the food fam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <div
              key={review.name}
              className={`group p-6 rounded-2xl border border-[#2A2A2A] bg-[#141414] card-hover reveal reveal-delay-${(idx % 4) + 1}`}
            >
              <Quote size={24} className="text-[#3B82F6]/30 mb-4" />

              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">"{review.text}"</p>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#60A5FA] fill-[#60A5FA]" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-xs text-[#666]">{review.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
