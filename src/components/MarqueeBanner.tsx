export default function MarqueeBanner() {
  const items = [
    'MOMOS',
    'BURGERS',
    'SHAKES',
    'WRAPS',
    'CHINESE',
    'PIZZA',
    'PASTA',
    'ZINGER',
    'SALADS',
    'NOODLES',
    'FRIES',
    'DESSERTS',
  ];

  return (
    <div className="py-4 border-y border-[#2A2A2A] overflow-hidden bg-[#0A0A0A]">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, idx) => (
          <span key={idx} className="flex items-center gap-6 mx-6">
            <span className="text-sm font-bold font-['Space_Grotesk'] text-[#2A2A2A] hover:text-[#3B82F6] transition-colors cursor-default">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/40" />
          </span>
        ))}
      </div>
    </div>
  );
}
