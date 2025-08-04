import { Card } from '@/components/ui/card';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "SASS"],
      color: "primary"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express.js", "FastAPI"],
      color: "secondary"
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "Figma", "Photoshop", "Linux"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 200}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:glow-accent transition-all duration-300 group">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                  <div className={`w-16 h-1 bg-gradient-to-r from-${category.color} to-${category.color}/50 mx-auto`}></div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="text-center py-3 px-4 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 transition-colors duration-300 group-hover:scale-105"
                      style={{ 
                        animationDelay: `${skillIndex * 100}ms`,
                        animation: 'fade-in 0.6s ease-out forwards'
                      }}
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={600}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground">
              Always learning and exploring new technologies to stay current with industry trends
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;