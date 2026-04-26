import { useState } from 'react';
import { Flame, MessageCircle, ChevronDown } from 'lucide-react';

const categories = [
  'All',
  'Momos',
  'Burgers',
  'Wraps',
  'Pasta',
  'Salads',
  'Noodles & Rice',
  'Chinese',
  'Fries & Sides',
  'Pizza',
  'Zinger & Baked',
  'Shakes & Drinks',
  'Soup',
  'Desserts',
];

interface MenuItem {
  name: string;
  price: string;
  category: string;
  image: string;
  viral?: boolean;
  tag?: string;
}

const menuItems: MenuItem[] = [
  // Momos
  { name: 'Classic Steamed Veg Momos', price: '99', category: 'Momos', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Classic' },
  { name: 'Cheesy Peri Peri Blast Momos', price: '129', category: 'Momos', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Crunchy Delight Veg Momos', price: '119', category: 'Momos', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Oven-baked Cheesy Veg Momos', price: '129', category: 'Momos', image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Bestseller' },
  { name: 'Fiery Peri Peri Chicken Momos', price: '139', category: 'Momos', image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Spicy' },
  { name: 'Buttery Makhani Chicken Momos', price: '149', category: 'Momos', image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Rich' },
  { name: 'Zesty Lemon Pepper Fried Momos', price: '129', category: 'Momos', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Veg Kurkure Fusion Momos', price: '119', category: 'Momos', image: 'https://images.pexels.com/photos/1132557/pexels-photo-1132557.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Crunchy' },

  // Burgers
  { name: 'The Og Crispy Chicken Burger', price: '149', category: 'Burgers', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Most Viral' },
  { name: 'The Chicken Loaded Dominator', price: '199', category: 'Burgers', image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Bestseller' },
  { name: 'Double Cheese Paneer Paradise', price: '159', category: 'Burgers', image: 'https://images.pexels.com/photos/1199961/pexels-photo-1199961.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Cheesy' },
  { name: 'Ziinger Chicken Burger', price: '149', category: 'Burgers', image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Tandoori Chicken Supreme', price: '169', category: 'Burgers', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Dirty American Veg Stacker', price: '139', category: 'Burgers', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Swiss Mushroom Chicken Burst', price: '179', category: 'Burgers', image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Premium' },
  { name: 'Fiery Peri Peri Grilled Chicken', price: '159', category: 'Burgers', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Spicy' },

  // Wraps
  { name: 'Smoky Paneer Tikka Wrap', price: '129', category: 'Wraps', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Popular' },
  { name: 'Crunchy Ziinger Chicken Overload', price: '149', category: 'Wraps', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Makhni Chicken Drip Wrap', price: '149', category: 'Wraps', image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Rich' },
  { name: 'Dirty American Chicken Cheesy', price: '139', category: 'Wraps', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Double Cheesy Paneer Wrap', price: '129', category: 'Wraps', image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // Pasta
  { name: 'Cheesy Alfredo White Sauce Pasta', price: '149', category: 'Pasta', image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Creamy' },
  { name: 'Makhni Drip Pasta', price: '159', category: 'Pasta', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Chicken Mac & Cheese Pasta', price: '179', category: 'Pasta', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Comfort' },
  { name: 'Mix Sauce Fusion Pasta', price: '159', category: 'Pasta', image: 'https://images.pexels.com/photos/1132557/pexels-photo-1132557.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Red Sauce Pasta (Arrabbiata)', price: '139', category: 'Pasta', image: 'https://images.pexels.com/photos/1199961/pexels-photo-1199961.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Spicy' },

  // Salads
  { name: 'Cheesy American Veg Bowl', price: '139', category: 'Salads', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Healthy' },
  { name: 'Tandoori Chicken Tikka Bowl', price: '179', category: 'Salads', image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'High Protein' },
  { name: 'Zesty Greek Chicken Bowl', price: '169', category: 'Salads', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Peri Peri Paneer Salad', price: '149', category: 'Salads', image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // Noodles & Rice
  { name: 'Hakka Noodles (Veg)', price: '129', category: 'Noodles & Rice', image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Classic' },
  { name: 'Chilli Garlic Noodles (Chicken)', price: '149', category: 'Noodles & Rice', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Spicy' },
  { name: 'Schezwan Fried Rice (Chicken)', price: '149', category: 'Noodles & Rice', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Street Style Chowmein (Veg)', price: '119', category: 'Noodles & Rice', image: 'https://images.pexels.com/photos/1132557/pexels-photo-1132557.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Street' },
  { name: 'Plain Fried Rice (Veg)', price: '109', category: 'Noodles & Rice', image: 'https://images.pexels.com/photos/1199961/pexels-photo-1199961.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // Chinese
  { name: 'Chilli Chicken', price: '169', category: 'Chinese', image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Popular' },
  { name: 'Chicken Manchurian', price: '159', category: 'Chinese', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Honey Chilli Potato', price: '139', category: 'Chinese', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Chilli Mushroom', price: '139', category: 'Chinese', image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Veg Thali', price: '199', category: 'Chinese', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Combo' },
  { name: 'Non-veg Thali', price: '249', category: 'Chinese', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Combo' },

  // Fries & Sides
  { name: 'Cheesy Loaded Fries', price: '129', category: 'Fries & Sides', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Fiery Peri Peri Fries', price: '109', category: 'Fries & Sides', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Spicy' },
  { name: 'Chicken Loaded Fries', price: '149', category: 'Fries & Sides', image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'BBQ Cheese Fries', price: '129', category: 'Fries & Sides', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Chicken Popcorn', price: '129', category: 'Fries & Sides', image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Snack' },
  { name: 'Paneer Strips', price: '119', category: 'Fries & Sides', image: 'https://images.pexels.com/photos/1199961/pexels-photo-1199961.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // Pizza
  { name: 'Loaded Veggie Overload Thin Crust', price: '199', category: 'Pizza', image: 'https://images.pexels.com/photos/1199961/pexels-photo-1199961.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Loaded' },
  { name: 'Chicken Fiesta Feast Pan Crust', price: '249', category: 'Pizza', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Makhni Paneer Drip Thin Crust', price: '219', category: 'Pizza', image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Desi' },
  { name: 'Fully Loaded Non-veg Meat Pan Crust', price: '269', category: 'Pizza', image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Premium' },
  { name: 'Classic Margherita Cheese Thin Crust', price: '169', category: 'Pizza', image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Classic' },

  // Zinger & Baked
  { name: 'Zinger Faya Fury', price: '179', category: 'Zinger & Baked', image: 'https://images.pexels.com/photos/7625140/pexels-photo-7625140.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Fiery Peri Peri Zinger Chicken', price: '169', category: 'Zinger & Baked', image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Spicy' },
  { name: 'Smoky Oven-baked Chicken', price: '189', category: 'Zinger & Baked', image: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Smoky' },
  { name: 'Tandoori Oven Fired Chicken', price: '199', category: 'Zinger & Baked', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Makhni Drip Baked Chicken', price: '189', category: 'Zinger & Baked', image: 'https://images.pexels.com/photos/1556629/pexels-photo-1556629.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Rich' },

  // Shakes & Drinks
  { name: 'Oreo Overload Shake', price: '119', category: 'Shakes & Drinks', image: 'https://images.pexels.com/photos/1132557/pexels-photo-1132557.jpeg?auto=compress&cs=tinysrgb&w=600', viral: true, tag: 'Viral' },
  { name: 'Kitkat Crunch Shake', price: '129', category: 'Shakes & Drinks', image: 'https://images.pexels.com/photos/1040241/pexels-photo-1040241.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Crunchy' },
  { name: 'Classic Virgin Mojito', price: '99', category: 'Shakes & Drinks', image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Refreshing' },
  { name: 'Mocha Frappuccino', price: '139', category: 'Shakes & Drinks', image: 'https://images.pexels.com/photos/1132557/pexels-photo-1132557.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Chocolate Rush Shake', price: '119', category: 'Shakes & Drinks', image: 'https://images.pexels.com/photos/1040241/pexels-photo-1040241.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Choco' },
  { name: 'Blueberry Blast Lemonade', price: '99', category: 'Shakes & Drinks', image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=600' },

  // Soup
  { name: 'Chicken Manchow Soup', price: '99', category: 'Soup', image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Warm' },
  { name: 'Veg Hot & Sour Soup', price: '79', category: 'Soup', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { name: 'Chicken Sweet Corn Soup', price: '89', category: 'Soup', image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Comfort' },

  // Desserts
  { name: 'Brownie With Chocolate', price: '99', category: 'Desserts', image: 'https://images.pexels.com/photos/1199961/pexels-photo-1199961.jpeg?auto=compress&cs=tinysrgb&w=600', tag: 'Sweet' },
];

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAllCategories, setShowAllCategories] = useState(false);

  const visibleCategories = showAllCategories ? categories : categories.slice(0, 7);
  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter((i) => i.category === activeCategory);
  const viralItems = menuItems.filter((i) => i.viral);

  return (
    <section id="menu" className="py-20 sm:py-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#3B82F6]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/5 text-[#3B82F6] text-sm font-medium mb-4">
            Our Menu
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Space_Grotesk'] mb-4">
            The <span className="gradient-text">Full</span> Menu
          </h2>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto">
            North Indian, Fast Food, Chinese, Healthy Food, Wraps, Momos, Shakes & Beverages
          </p>
        </div>

        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-8">
            <Flame size={24} className="text-[#3B82F6]" />
            <h3 className="text-2xl font-bold font-['Space_Grotesk']">Most Viral Items</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {viralItems.slice(0, 8).map((item) => (
              <div
                key={item.name}
                className="group relative rounded-2xl overflow-hidden border border-[#3B82F6]/20 bg-[#141414] card-hover"
              >
                <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white text-xs font-bold flex items-center gap-1">
                  <Flame size={12} /> VIRAL
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover menu-card-img" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-white mb-1">{item.name}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-[#3B82F6] font-bold text-lg font-['Space_Grotesk']">&#8377;{item.price}</span>
                    <a
                      href={`https://wa.me/919780771919?text=Hi! I'd like to order ${item.name} (₹${item.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors"
                    >
                      <MessageCircle size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 reveal">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {visibleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                    : 'bg-[#141414] text-[#A0A0A0] border border-[#2A2A2A] hover:border-[#3B82F6]/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
            {!showAllCategories && categories.length > 7 && (
              <button
                onClick={() => setShowAllCategories(true)}
                className="px-4 py-2.5 rounded-full text-sm text-[#60A5FA] border border-[#3B82F6]/30 hover:bg-[#3B82F6]/10 transition-all flex items-center gap-1"
              >
                More <ChevronDown size={14} />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item, idx) => (
            <div
              key={item.name}
              className={`menu-card group rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#141414] card-hover reveal reveal-delay-${(idx % 4) + 1}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover menu-card-img" />
                {item.tag && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0A0A0A]/80 backdrop-blur-sm text-[#60A5FA] text-xs font-bold border border-[#3B82F6]/20">
                    {item.tag}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h4 className="font-semibold text-white leading-tight">{item.name}</h4>
                  <span className="text-[#3B82F6] font-bold text-xl font-['Space_Grotesk'] whitespace-nowrap">&#8377;{item.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#666] bg-[#1A1A1A] px-3 py-1 rounded-full">{item.category}</span>
                  <a
                    href={`https://wa.me/919780771919?text=Hi! I'd like to order ${item.name} (₹${item.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366]/10 text-[#25D366] text-sm font-medium hover:bg-[#25D366]/20 transition-colors"
                  >
                    <MessageCircle size={14} />
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
          <a
            href="https://wa.me/919780771919?text=Hi! I'd like to see the full menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(37,211,102,0.3)] transition-all duration-300"
          >
            <MessageCircle size={22} />
            Order Full Menu on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
