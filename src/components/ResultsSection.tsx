import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Target, Clock, Database, Cpu } from "lucide-react";

const ResultsSection = () => {
  const performanceMetrics = [
    {
      icon: Target,
      label: "Overall Accuracy",
      value: "98.7%",
      improvement: "+2.3%",
      description: "Evaluated on FaceForensics++ test set"
    },
    {
      icon: TrendingUp,
      label: "Precision Score",
      value: "97.9%",
      improvement: "+1.8%", 
      description: "True positive deepfake detection rate"
    },
    {
      icon: BarChart3,
      label: "Recall Score", 
      value: "98.4%",
      improvement: "+2.1%",
      description: "Successfully identified deepfakes"
    },
    {
      icon: Clock,
      label: "Processing Speed",
      value: "1.7s",
      improvement: "-0.4s",
      description: "Average inference time per video"
    }
  ];

  const benchmarkData = [
    {
      dataset: "FaceForensics++",
      samples: "1.8M",
      accuracy: "98.7%",
      precision: "97.9%",
      recall: "98.4%"
    },
    {
      dataset: "Celeb-DF v2",
      samples: "590K",
      accuracy: "96.3%",
      precision: "95.7%",
      recall: "97.1%"
    },
    {
      dataset: "DFDC Preview",
      samples: "5.2M",
      accuracy: "94.8%",
      precision: "93.6%",
      recall: "96.2%"
    },
    {
      dataset: "DeeperForensics",
      samples: "60K",
      accuracy: "97.1%",
      precision: "96.4%",
      recall: "97.8%"
    }
  ];

  const technicalSpecs = [
    {
      icon: Database,
      title: "Training Data",
      specs: [
        "15M+ video samples",
        "25 deepfake methods",
        "50+ compression levels",
        "4K resolution support"
      ]
    },
    {
      icon: Cpu,
      title: "Model Architecture", 
      specs: [
        "ResNet-50 backbone",
        "Custom attention layers",
        "147M parameters",
        "Mixed precision training"
      ]
    }
  ];

  return (
    <section id="results" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Performance Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our system achieves state-of-the-art performance across multiple benchmark datasets, 
            demonstrating superior accuracy and efficiency in deepfake detection.
          </p>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-foreground">{metric.value}</CardTitle>
                  <CardDescription className="text-muted-foreground">{metric.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-flex items-center space-x-1 bg-accent/10 text-accent px-2 py-1 rounded-full text-sm font-medium mb-2">
                    <TrendingUp className="w-3 h-3" />
                    <span>{metric.improvement}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benchmark Comparison Table */}
        <Card className="bg-card border-0 shadow-card mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Benchmark Comparison</CardTitle>
            <CardDescription>
              Performance evaluation across industry-standard deepfake detection datasets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Dataset</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Samples</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Accuracy</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Precision</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Recall</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarkData.map((row, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-foreground">{row.dataset}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.samples}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center bg-accent/10 text-accent px-2 py-1 rounded text-sm font-medium">
                          {row.accuracy}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-foreground">{row.precision}</td>
                      <td className="py-3 px-4 text-foreground">{row.recall}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technicalSpecs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{spec.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {spec.specs.map((item, specIndex) => (
                      <div key={specIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-card px-8 py-6 rounded-2xl shadow-card">
            <div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Research Hours</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div>
              <div className="text-2xl font-bold text-accent">15M+</div>
              <div className="text-sm text-muted-foreground">Training Samples</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div>
              <div className="text-2xl font-bold text-warning">98.7%</div>
              <div className="text-sm text-muted-foreground">Peak Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;