import { Briefcase, GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    type: "work",
    icon: Briefcase,
    title: "Front-End Developer & Systems Engineer",
    organization: "Various Organizations",
    period: "2020 - Present",
    description:
      "Building and optimizing web applications using React, Next.js, and Node.js. Managing IT infrastructure and providing technical support. Delivered ICT training to 300+ professionals.",
    highlights: [
      "Improved application speed by 40%",
      "Achieved 99.9% uptime for critical platforms",
      "Trained 300+ ICT professionals",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Systems Engineering",
    organization: "Academic Institution",
    period: "Ongoing",
    description:
      "Specialized in network administration, cybersecurity, and software development. Developed blockchain-based security frameworks and conducted extensive research in cyber threat mitigation.",
    highlights: [
      "Blockchain security research",
      "Network administration certification",
      "Software development specialization",
    ],
  },
  {
    type: "achievement",
    icon: Award,
    title: "Key Achievements",
    organization: "Career Highlights",
    period: "2020 - 2025",
    description:
      "Consistently delivered high-impact projects across multiple domains, from blockchain security to real-time news aggregation platforms.",
    highlights: [
      "50% improvement in page rendering speed",
      "30% increase in user engagement",
      "40% reduction in security vulnerabilities",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of professional growth, education, and achievements
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[19px] md:left-[27px] top-12 bottom-0 w-0.5 bg-border" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-2 top-2 p-2 bg-card border-2 border-primary rounded-full">
                <exp.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>

              {/* Content Card */}
              <div className="bg-card rounded-xl p-6 border border-border card-hover">
                {/* Period Badge */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {exp.period}
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-muted-foreground mb-4">{exp.organization}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm text-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
