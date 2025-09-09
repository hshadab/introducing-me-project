import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with 5+ years of experience creating 
              beautiful, functional digital solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <p className="text-lg leading-relaxed mb-6">
                I'm a full-stack developer who believes in the power of clean code and 
                beautiful design. My journey started with a curiosity about how things work 
                on the web, and it has evolved into a passion for creating digital experiences 
                that make people's lives easier.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community through blogs and mentoring.
              </p>
            </div>
            
            <div className="grid gap-6">
              <Card className="glass-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Development</h3>
                      <p className="text-muted-foreground">
                        Building scalable applications with modern tech stacks
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <Palette className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Design</h3>
                      <p className="text-muted-foreground">
                        Creating intuitive user experiences and interfaces
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Performance</h3>
                      <p className="text-muted-foreground">
                        Optimizing for speed, accessibility, and user satisfaction
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;