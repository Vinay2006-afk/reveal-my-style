import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "from-primary to-primary-foreground"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tech: ["Vue.js", "Express.js", "MongoDB", "Socket.io"],
      gradient: "from-secondary to-secondary/70"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and real-time business insights.",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      gradient: "from-accent to-accent/70"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 200}>
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:glow-accent transition-all duration-500 hover:scale-105">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-muted/50 text-muted-foreground rounded-full border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary">
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-border/50 hover:border-primary/50">
                      Code
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:glow-primary">
              View All Projects
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;