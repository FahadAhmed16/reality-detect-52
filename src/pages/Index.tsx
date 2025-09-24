import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechnologySection from "@/components/TechnologySection";
import DemoSection from "@/components/DemoSection";
import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import DocumentationSection from "@/components/DocumentationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TechnologySection />
      <DemoSection />
      <ResultsSection />
      <TeamSection />
      <DocumentationSection />
      <Footer />
    </div>
  );
};

export default Index;
