import { Button } from "@/components/ui/button";
import { Shield, Play, ChevronRight, Zap, Brain, Eye } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-light/20 text-primary-dark px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Shield className="w-4 h-4" />
            <span>Final Year Research Project</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            AI-Powered
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Deepfake</span>
            <br />
            Detection System
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Advanced machine learning technology to identify and combat synthetic media manipulation 
            using state-of-the-art neural networks and computer vision algorithms.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98.7%</div>
              <div className="text-muted-foreground">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">&lt;2s</div>
              <div className="text-muted-foreground">Processing Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">15M+</div>
              <div className="text-muted-foreground">Training Samples</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-6 shadow-glow"
              onClick={() => scrollToSection('demo')}
            >
              <Play className="w-5 h-5 mr-2" />
              Try Live Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5"
              onClick={() => scrollToSection('docs')}
            >
              <ChevronRight className="w-5 h-5 mr-2" />
              View Research
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mt-16 animate-slide-in">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Brain className="w-5 h-5 text-primary" />
              <span>Deep Learning</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Eye className="w-5 h-5 text-accent" />
              <span>Computer Vision</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Zap className="w-5 h-5 text-warning" />
              <span>Real-time Analysis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;