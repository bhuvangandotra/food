import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919780771919?text=Hi! I'd like to place an order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] animate-whatsapp-pulse hover:scale-110 transition-transform"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
