import { Code, Server, Wrench, Network } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Back-End / Systems",
    icon: Server,
    skills: ["Node.js", "Express", "Docker", "cPanel", "Cloudflare"],
  },
  {
    title: "Tools & Testing",
    icon: Wrench,
    skills: ["Git", "Jira", "Postman", "Selenium", "VS Code"],
  },
  {
    title: "Other",
    icon: Network,
    skills: ["Network Administration", "Technical Support", "ICT Training", "REST APIs"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and managing IT infrastructure
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-xl p-6 border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
