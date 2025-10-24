export const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in-up space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-semibold">Front-End Developer</span> and{" "}
                <span className="text-foreground font-semibold">Systems Engineer</span> with over{" "}
                <span className="text-primary font-semibold">4 years of experience</span> building,
                optimizing, and maintaining modern web applications and IT systems.
              </p>

              <p>
                I specialize in <span className="text-foreground font-semibold">React</span>,{" "}
                <span className="text-foreground font-semibold">Next.js</span>, and{" "}
                <span className="text-foreground font-semibold">Node.js</span>, with strong
                foundations in network administration, technical support, and software deployment.
              </p>

              <p>
                My work has improved application speed by{" "}
                <span className="text-primary font-semibold">40%</span>, boosted SEO visibility,
                and delivered ICT training to{" "}
                <span className="text-primary font-semibold">300+ professionals</span>.
              </p>

              <div className="pt-4 border-l-4 border-primary pl-6 italic">
                <p className="text-foreground font-medium">
                  "Build products that work beautifully while helping teams work smarter."
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Trained</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
