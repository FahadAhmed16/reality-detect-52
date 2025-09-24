import { Shield, Github, FileText, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const footerLinks = {
    project: [
      { name: "Overview", href: "overview" },
      { name: "Technology", href: "technology" },
      { name: "Demo", href: "demo" },
      { name: "Results", href: "results" }
    ],
    resources: [
      { name: "Research Paper", href: "#", icon: FileText },
      { name: "GitHub Repository", href: "#", icon: Github },
      { name: "Technical Documentation", href: "#", icon: FileText },
      { name: "Dataset Details", href: "#", icon: ExternalLink }
    ],
    contact: [
      { name: "Research Team", href: "team" },
      { name: "Email Contact", href: "mailto:contact@deepguard.research", icon: Mail, external: true },
      { name: "University Lab", href: "#", icon: ExternalLink, external: true }
    ]
  };

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Deepfake Video Detector</span>
            </div>
            <p className="text-primary-light/80">
              Advanced AI-powered deepfake detection system developed as part of university research 
              to combat synthetic media manipulation.
            </p>
            <div className="text-sm text-primary-light/60">
              © 2025 University Research Lab. Academic Project.
            </div>
          </div>

          {/* Project Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Project</h3>
            <div className="space-y-2">
              {footerLinks.project.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-light/80 hover:text-primary-foreground transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              {footerLinks.resources.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-2 text-primary-light/80 hover:text-primary-foreground transition-colors"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              {footerLinks.contact.map((link, index) => {
                const Icon = link.icon;
                return link.external ? (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-2 text-primary-light/80 hover:text-primary-foreground transition-colors"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center space-x-2 text-primary-light/80 hover:text-primary-foreground transition-colors"
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-light/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-light/60">
              This is an academic research project. All detection results are for demonstration purposes.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-light/60">
              <span>Final Year Project 2025</span>
              <span>•</span>
              <span>Information Technology Department</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;