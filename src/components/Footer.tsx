import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                Alex Johnson
              </h3>
              <p className="text-muted-foreground">
                Full-Stack Developer & UI/UX Designer
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary transition-smooth">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="border-t border-border/30 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;