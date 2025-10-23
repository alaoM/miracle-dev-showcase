import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "Blockchain Quarantine Framework",
    description:
      "Developed a blockchain-based framework using Hyperledger Fabric to strengthen cybersecurity in broadband networks. Reduced vulnerability exposure by 40% through decentralized data validation.",
    tech: ["Hyperledger Fabric", "Go", "Node.js", "Smart Contracts"],
    impact: "40% reduction in vulnerability exposure",
  },
  {
    title: "InsiderLens.org",
    description:
      "Global AI-powered news aggregator. Built the front-end and integrated live news APIs. Improved page rendering speed by 50% and enabled real-time updates for thousands of users.",
    tech: ["Next.js", "Tailwind CSS", "REST APIs", "TypeScript"],
    impact: "50% faster page rendering",
    link: "https://insiderlens.org",
  },
  {
    title: "LucalmHub.com",
    description:
      "Academic & business support platform. Set up complete server infrastructure and built the front-end. Achieved 99.9% uptime and improved client interaction speed significantly.",
    tech: ["Node.js", "cPanel", "Cloudflare", "Next.js"],
    impact: "99.9% uptime achieved",
    link: "https://lucalmhub.com",
  },
  {
    title: "CareerBox.com",
    description:
      "Job & talent matching platform with an intuitive and responsive front-end. Increased user engagement and job match accuracy by 30% through optimized UI/UX design.",
    tech: ["React", "Next.js", "REST APIs", "Responsive Design"],
    impact: "30% increase in engagement",
    link: "https://careerbox.com",
  },
  {
    title: "Tulupay Platforms",
    description:
      "Conducted comprehensive system and UI testing for payment services using automated testing tools. Ensured seamless user transactions and identified critical bugs before production.",
    tech: ["Selenium", "Postman", "Jira", "API Testing"],
    impact: "100% transaction reliability",
  },
];

export const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in web development and systems engineering
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border card-hover animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setExpandedProject(index)}
              onMouseLeave={() => setExpandedProject(null)}
            >
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-gradient group-hover:glow-text transition-all duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Impact Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {project.impact}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {project.link && (
                <div className="flex gap-3 mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit
                    </a>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
