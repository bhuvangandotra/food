import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import MenuShowcase from './components/MenuShowcase';
import ViralSpecials from './components/ViralSpecials';
import InstagramSection from './components/InstagramSection';
import WhyLoveUs from './components/WhyLoveUs';
import CustomerReviews from './components/CustomerReviews';
import VisitUs from './components/VisitUs';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <MenuShowcase />
      <ViralSpecials />
      <InstagramSection />
      <WhyLoveUs />
      <CustomerReviews />
      <VisitUs />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
