import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Name */}
          <div className="text-2xl font-bold">
            <span className="text-gradient">MA</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/alaoM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub - alaoM"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/miracle-msmes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub - miracle-msmes"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:olaoluwaalao@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center gap-2 justify-center">
              © {currentYear} Miracle Olaoluwa ALAO. Built with
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
