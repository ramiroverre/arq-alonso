import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";
import { ShapesBackdrop } from "./components/layout/ShapesBackdrop";
import { Hero } from "./components/hero/Hero";
import { StatsSection } from "./components/stats/StatsSection";
import { MarqueeSection } from "./components/marquee/MarqueeSection";
import { GallerySection } from "./components/gallery/GallerySection";
import { ServicesSection } from "./components/services/ServicesSection";
import { About } from "./components/about/About";
import { ContactCTA } from "./components/contact/ContactCTA";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <GallerySection />
        <ServicesSection />
        <ShapesBackdrop>
          <MarqueeSection />
          <About />
        </ShapesBackdrop>
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
