import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { AboutSection } from "@/components/AboutSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CareersSection } from "@/components/CareersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SolutionsSection />
        <ServicesSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
