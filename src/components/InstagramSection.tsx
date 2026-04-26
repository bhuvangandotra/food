import { Instagram, Play } from 'lucide-react';

const posts = [
  { image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400', likes: '2.4K', type: 'reel' },
  { image: 'https://images.pexels.com/photos/1132557/pexels-photo-1132557.jpeg?auto=compress&cs=tinysrgb&w=400', likes: '1.8K', type: 'reel' },
  { image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=400', likes: '3.1K', type: 'post' },
  { image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=400', likes: '2.7K', type: 'reel' },
  { image: 'https://images.pexels.com/photos/1040241/pexels-photo-1040241.jpeg?auto=compress&cs=tinysrgb&w=400', likes: '1.5K', type: 'post' },
  { image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=400', likes: '2.2K', type: 'reel' },
];

export default function InstagramSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3B82F6]/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E1306C]/30 bg-[#E1306C]/5 text-[#E1306C] text-sm font-medium mb-4">
            <Instagram size={14} /> @foodsafaripathankot
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-4">
            Follow the <span className="gradient-text">Vibe</span>
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto">
            Follow us for new drops, food reels & behind-the-scenes chaos.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
          {posts.map((post, idx) => (
            <a
              key={idx}
              href="https://instagram.com/foodsafaripathankot"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square rounded-xl overflow-hidden reveal reveal-delay-${(idx % 4) + 1}`}
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {post.type === 'reel' && (
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#0A0A0A]/60 backdrop-blur-sm">
                  <Play size={12} className="text-white fill-white" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-1 text-white text-xs font-medium">
                  <Instagram size={12} />
                  {post.likes}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center reveal">
          <a
            href="https://instagram.com/foodsafaripathankot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#E1306C]/50 text-[#E1306C] font-semibold text-lg hover:bg-[#E1306C]/10 hover:border-[#E1306C] transition-all duration-300"
          >
            <Instagram size={22} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
