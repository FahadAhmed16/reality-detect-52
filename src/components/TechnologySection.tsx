import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Layers, Zap, Database, Eye, Shield, Code, BarChart } from "lucide-react";

const TechnologySection = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Convolutional Neural Networks",
      description: "Multi-layer CNN architecture optimized for facial feature detection and analysis",
      details: "ResNet-50 backbone with custom attention mechanisms"
    },
    {
      icon: Layers,
      title: "Temporal Consistency Analysis",
      description: "Frame-by-frame analysis to detect temporal inconsistencies in video sequences",
      details: "LSTM networks for sequence modeling and anomaly detection"
    },
    {
      icon: Eye,
      title: "Facial Landmark Detection",
      description: "68-point facial landmark tracking for micro-expression analysis",
      details: "MediaPipe integration with custom refinement algorithms"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Optimized inference pipeline capable of processing video streams in real-time",
      details: "ONNX Runtime with GPU acceleration support"
    },
    {
      icon: Database,
      title: "Multi-modal Dataset",
      description: "Trained on diverse datasets including FaceForensics++, Celeb-DF, and DFDC",
      details: "15M+ samples across multiple deepfake generation techniques"
    },
    {
      icon: Shield,
      title: "Adversarial Training",
      description: "Robust training against adversarial attacks and novel deepfake methods",
      details: "Advanced data augmentation and regularization techniques"
    }
  ];

  const architectureSteps = [
    {
      step: "01",
      title: "Input Processing",
      description: "Video frame extraction and preprocessing",
      icon: Code
    },
    {
      step: "02", 
      title: "Feature Extraction",
      description: "CNN-based facial feature extraction",
      icon: Brain
    },
    {
      step: "03",
      title: "Temporal Analysis",
      description: "Sequence modeling and consistency checking",
      icon: Layers
    },
    {
      step: "04",
      title: "Classification",
      description: "Binary classification with confidence scoring",
      icon: BarChart
    }
  ];

  return (
    <section id="technology" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Advanced Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our deepfake detection system leverages cutting-edge machine learning techniques 
            and computer vision algorithms to achieve state-of-the-art performance.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">{tech.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-primary font-medium bg-primary-light/20 px-3 py-2 rounded-lg">
                    {tech.details}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Architecture Flow */}
        <div className="bg-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Detection Pipeline Architecture
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Step number */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  
                  {/* Arrow */}
                  {index < architectureSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-gradient-primary"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;