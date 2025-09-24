import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Code, BookOpen, ExternalLink, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DocumentationSection = () => {
  const { toast } = useToast();
  const documents = [
    {
      icon: FileText,
      title: "Research Paper",
      description: "Complete academic paper with methodology, results, and analysis",
      size: "2.4 MB",
      type: "PDF",
      downloadUrl: "#"
    },
    {
      icon: Code,
      title: "Technical Documentation",
      description: "Detailed implementation guide and API documentation",
      size: "1.8 MB", 
      type: "PDF",
      downloadUrl: "#"
    }
  ];

  const handleDownload = (title: string, type: string) => {
    toast({
      title: "Download initiated",
      description: `${title} (${type}) download will begin shortly.`,
    });
    
    // Simulate file download by opening a new tab
    const downloadUrl = `https://github.com/your-repo/deepfake-detector/releases/download/v1.0/${title.toLowerCase().replace(/\s+/g, '-')}.${type.toLowerCase()}`;
    window.open(downloadUrl, '_blank');
  };

  const citations = [
    {
      title: "Advanced Deepfake Detection Using Multi-Modal CNNs",
      authors: "Rodriguez, A., Watson, E., Chen, S.",
      venue: "Submitted to CVPR 2024",
      year: "2024"
    },
    {
      title: "Temporal Consistency Analysis for Synthetic Media Detection", 
      authors: "Watson, E., Rodriguez, A., Chen, S.",
      venue: "IEEE Workshop on Media Forensics",
      year: "2024"
    }
  ];

  const usageInstructions = [
    {
      step: "1",
      title: "Environment Setup",
      description: "Install Python 3.8+, PyTorch, and required dependencies"
    },
    {
      step: "2", 
      title: "Model Download",
      description: "Download pre-trained model weights and configuration files"
    },
    {
      step: "3",
      title: "Input Preparation", 
      description: "Preprocess video/image files according to model requirements"
    },
    {
      step: "4",
      title: "Inference",
      description: "Run detection algorithm and interpret confidence scores"
    }
  ];

  return (
    <section id="docs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Documentation & Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access comprehensive technical documentation, research papers, and implementation guides 
            for our deepfake detection system.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {documents.map((doc, index) => {
            const Icon = doc.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">{doc.title}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>{doc.type}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {doc.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleDownload(doc.title, doc.type)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download {doc.type}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Usage Instructions */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Start Guide</h3>
            <div className="space-y-4">
              {usageInstructions.map((instruction, index) => (
                <Card key={index} className="bg-card border shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                        {instruction.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{instruction.title}</h4>
                        <p className="text-sm text-muted-foreground">{instruction.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* GitHub Link */}
            <Card className="mt-6 bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Github className="w-8 h-8 text-foreground" />
                    <div>
                      <h4 className="font-semibold text-foreground">View on GitHub</h4>
                      <p className="text-sm text-muted-foreground">Complete source code and documentation</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    onClick={() => {
                      toast({
                        title: "Opening GitHub Repository",
                        description: "Redirecting to the project repository...",
                      });
                      window.open("https://github.com/deepfake-video-detector/deepfake-detection-system", '_blank');
                    }}
                    className="flex items-center space-x-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Repository</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Citations */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Publications</h3>
            <div className="space-y-4">
              {citations.map((citation, index) => (
                <Card key={index} className="bg-card border shadow-card">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-2">{citation.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{citation.authors}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary">{citation.venue}</span>
                      <span className="text-sm text-muted-foreground">{citation.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Requirements */}
            <Card className="mt-6 bg-gradient-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-foreground">System Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Python Version:</span>
                    <span className="text-foreground">3.8 or higher</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Memory:</span>
                    <span className="text-foreground">8GB RAM minimum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">GPU:</span>
                    <span className="text-foreground">CUDA-compatible (recommended)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Storage:</span>
                    <span className="text-foreground">5GB available space</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;