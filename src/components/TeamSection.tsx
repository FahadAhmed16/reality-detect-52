import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Fahad Ahmed",
      role: "Lead Researcher",
      department: "Final Year Student",
      expertise: "IT Department",
      image: "/api/placeholder/150/150",
      links: {
        email: "fahad.ahmed@student.university.edu",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Yasir Hassan", 
      role: "Research Assistant",
      department: "Final Year Student",
      expertise: "IT Department",
      image: "/api/placeholder/150/150",
      links: {
        email: "yasir.hassan@student.university.edu",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Junaid Ali",
      role: "Research Assistant", 
      department: "Final Year Student",
      expertise: "IT Department",
      image: "/api/placeholder/150/150",
      links: {
        email: "junaid.ali@student.university.edu",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Raja Osama Khan",
      role: "Research Assistant", 
      department: "Final Year Student",
      expertise: "IT Department",
      image: "/api/placeholder/150/150",
      links: {
        email: "raja.osama@student.university.edu",
        github: "#",
        linkedin: "#"
      }
    },
    {
      name: "Muhammad Jawaid",
      role: "Research Assistant", 
      department: "Final Year Student",
      expertise: "IT Department",
      image: "/api/placeholder/150/150",
      links: {
        email: "muhammad.jawaid@student.university.edu",
        github: "#",
        linkedin: "#"
      }
    }
  ];

  const achievements = [
    {
      title: "Research Publications",
      description: "2 papers submitted to CVPR 2025",
      icon: GraduationCap
    },
    {
      title: "Conference Presentations",
      description: "Presented at 3 academic conferences",
      icon: GraduationCap
    },
    {
      title: "Industry Recognition",
      description: "Featured in AI Research Weekly",
      icon: GraduationCap
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Research Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the dedicated researchers and academics behind this innovative deepfake detection system.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.department}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.expertise}</p>
                
                {/* Links */}
                <div className="flex justify-center space-x-3">
                  {member.links.email && (
                    <a 
                      href={`mailto:${member.links.email}`}
                      className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {member.links.github && (
                    <a 
                      href={member.links.github}
                      className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a 
                      href={member.links.linkedin}
                      className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card key={index} className="bg-gradient-card border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* University Affiliation */}
        <div className="mt-16 text-center">
          <Card className="inline-block bg-gradient-card border-0 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-foreground">University Research Lab</h3>
                  <p className="text-muted-foreground">Information Technology & AI Department</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;