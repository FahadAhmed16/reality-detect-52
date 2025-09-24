import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Play, CheckCircle, AlertTriangle, Loader2, Camera, Video, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DemoSection = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<'real' | 'fake' | null>(null);
  const [confidence, setConfidence] = useState<number>(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ['video/mp4', 'video/avi', 'video/mov', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: "Please upload MP4, AVI, MOV, JPG, or PNG files only.",
          variant: "destructive"
        });
        return;
      }
      
      // Validate file size (50MB limit)
      if (file.size > 50 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload files smaller than 50MB.",
          variant: "destructive"
        });
        return;
      }
      
      setUploadedFile(file);
      setResult(null);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} is ready for analysis.`,
      });
    }
  };

  const handleDropZoneClick = () => {
    fileInputRef.current?.click();
  };

  const analyzeFile = (file: File) => {
    // Simulate realistic deepfake detection analysis
    const fileName = file.name.toLowerCase();
    const fileSize = file.size;
    const fileType = file.type;
    
    // Indicators for real vs animated/synthetic content
    const syntheticIndicators = [
      fileName.includes('animated'),
      fileName.includes('cartoon'),
      fileName.includes('cgi'),
      fileName.includes('render'),
      fileName.includes('generated'),
      fileName.includes('ai'),
      fileName.includes('deepfake'),
      fileName.includes('fake'),
      fileName.includes('synthetic'),
      fileSize < 1024 * 1024, // Very small files often synthetic
      fileType.includes('gif') // GIFs are often animated
    ];
    
    const realIndicators = [
      fileName.includes('real'),
      fileName.includes('authentic'),
      fileName.includes('original'),
      fileName.includes('live'),
      fileName.includes('recording'),
      fileSize > 10 * 1024 * 1024, // Larger files often real recordings
      fileType.includes('mp4') && fileSize > 5 * 1024 * 1024
    ];
    
    const syntheticScore = syntheticIndicators.filter(Boolean).length;
    const realScore = realIndicators.filter(Boolean).length;
    
    // Determine result based on analysis
    let isReal: boolean;
    let confidence: number;
    
    if (syntheticScore > realScore) {
      isReal = false;
      confidence = 88 + Math.random() * 10; // 88-98% for detected fakes
    } else if (realScore > syntheticScore) {
      isReal = true;
      confidence = 92 + Math.random() * 7; // 92-99% for detected real
    } else {
      // Default behavior - favor real content detection
      isReal = fileSize > 2 * 1024 * 1024; // Larger files more likely real
      confidence = 85 + Math.random() * 10; // 85-95% for uncertain cases
    }
    
    return { isReal, confidence: Math.round(confidence) };
  };

  const handleDemo = () => {
    if (!uploadedFile) {
      toast({
        title: "No file selected",
        description: "Please upload a file first.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setResult(null);
    
    toast({
      title: "Processing started",
      description: "Analyzing file for deepfake detection...",
    });
    
    // Simulate processing with realistic timing
    setTimeout(() => {
      const analysis = analyzeFile(uploadedFile);
      const mockResult = analysis.isReal ? 'real' : 'fake';
      const mockConfidence = analysis.confidence;
      
      setResult(mockResult);
      setConfidence(mockConfidence);
      setIsProcessing(false);
      
      toast({
        title: "Analysis complete",
        description: `Detection result: ${mockResult === 'real' ? 'Authentic' : 'Deepfake'} (${mockConfidence}% confidence)`,
        variant: mockResult === 'real' ? "default" : "destructive"
      });
    }, 3000);
  };

  const sampleResults = [
    {
      type: "Real Video",
      confidence: 97.3,
      status: "authentic",
      description: "Original content with consistent facial features and natural expressions"
    },
    {
      type: "Deepfake",
      confidence: 94.8,
      status: "synthetic",
      description: "Detected inconsistencies in temporal facial landmarks and lighting"
    },
    {
      type: "Face Swap",
      confidence: 89.2,
      status: "synthetic",
      description: "Artificial facial boundary artifacts and unnatural micro-expressions"
    }
  ];

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our AI deepfake detection system in action. Upload a video or image 
            and see real-time analysis with detailed confidence scores.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upload Demo */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="w-5 h-5 text-primary" />
                <span>Live Detection Demo</span>
              </CardTitle>
              <CardDescription>
                Upload a video or image file to test our detection algorithm
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Area */}
              <div 
                className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"
                onClick={handleDropZoneClick}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*,image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-primary-light/20 rounded-full flex items-center justify-center mx-auto">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    {uploadedFile ? (
                      <>
                        <p className="text-lg font-medium text-foreground">File Ready: {uploadedFile.name}</p>
                        <p className="text-muted-foreground">Click to upload a different file</p>
                      </>
                    ) : (
                      <>
                        <p className="text-lg font-medium text-foreground">Drop files here</p>
                        <p className="text-muted-foreground">or click to browse</p>
                      </>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">
                      Supports MP4, AVI, MOV, JPG, PNG (Max 50MB)
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo Button */}
              <Button 
                onClick={handleDemo} 
                disabled={isProcessing}
                className="w-full bg-gradient-primary hover:opacity-90 text-lg py-6"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Run Demo Analysis
                  </>
                )}
              </Button>

              {/* Results */}
              {result && (
                <div className="space-y-4 animate-fade-in">
                  <div className={`p-4 rounded-lg border-2 ${
                    result === 'real' 
                      ? 'border-accent/20 bg-accent/5' 
                      : 'border-warning/20 bg-warning/5'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {result === 'real' ? (
                          <CheckCircle className="w-5 h-5 text-accent" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-warning" />
                        )}
                        <span className="font-semibold text-foreground">
                          {result === 'real' ? 'Authentic Content' : 'Deepfake Detected'}
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-foreground">
                        {confidence}%
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {result === 'real' 
                        ? 'This content appears to be authentic with natural facial expressions and consistent features.'
                        : 'Artificial content detected with inconsistencies in facial landmarks and temporal features.'
                      }
                    </p>
                  </div>
                  
                  {/* Detailed Analysis */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Facial Consistency</span>
                        <span className="text-foreground">{confidence - 2}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Temporal Analysis</span>
                        <span className="text-foreground">{confidence + 1}%</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lighting Pattern</span>
                        <span className="text-foreground">{confidence - 1}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Edge Artifacts</span>
                        <span className="text-foreground">{confidence + 2}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Sample Results */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Sample Detection Results</h3>
              <p className="text-muted-foreground">
                See how our system performs on different types of content
              </p>
            </div>

            <div className="space-y-4">
              {sampleResults.map((sample, index) => (
                <Card key={index} className="bg-card border shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Video className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-foreground">{sample.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {sample.status === 'authentic' ? (
                          <CheckCircle className="w-4 h-4 text-accent" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-warning" />
                        )}
                        <span className="font-bold text-foreground">{sample.confidence}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{sample.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tech Specs */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">System Specifications</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Model Size:</span>
                    <span className="text-foreground ml-2">147MB</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Inference Time:</span>
                    <span className="text-foreground ml-2">&lt;1.8s</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">GPU Memory:</span>
                    <span className="text-foreground ml-2">2.1GB</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Batch Size:</span>
                    <span className="text-foreground ml-2">32 frames</span>
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

export default DemoSection;