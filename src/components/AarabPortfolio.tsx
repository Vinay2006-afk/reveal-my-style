import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Github, Instagram, ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AarabPortfolio = () => {
  const skills = {
    languages: ["C/C++", "HTML5", "CSS3", "Java", "JavaScript", "TypeScript", "Python"],
    databases: ["MongoDB", "MySQL", "Oracle SQL"],
    frameworks: ["Bootstrap", "Express.js", "Framer Motion", "Next.js", "React", "Tailwind CSS"],
    tools: ["Git", "GitHub", "Netlify", "Postman", "Replit", "Vercel", "Firebase"],
    specialties: ["API Design", "Accessibility", "BERT", "CI/CD", "LSTM", "Machine Learning", "Performance Optimization", "Responsive Design", "SEO Optimization", "Software Development", "Test Automation", "Version Control"]
  };

  const projects = [
    {
      title: "AN",
      description: "A personal portfolio built with a focus on performance, SEO, and analytics. Includes structured metadata, full integration with modern analytics tools, and scores 91+ in real-world performance tests.",
      tech: ["Framer Motion", "EmailJS", "Vercel Analytics"],
      github: "https://github.com/aarabii/an",
      demo: "https://aarab.vercel.app/",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Orphia",
      description: "An AI-powered music generator that turns text prompts into original soundtracks. Designed for musicians and content creators, it features a clean, modern UI and customizable music generation workflows.",
      tech: ["Hugging Face", "Clerk", "API Integration"],
      github: "https://github.com/aarabii/Orphia-AI-Music-Generator",
      demo: "https://orphia.vercel.app/",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Ideascribe",
      description: "A collaborative workspace that supports real-time editing, authentication, file uploads, and autosaving — all built to boost creativity and productivity in team environments.",
      tech: ["Convex", "Clerk", "Edgestore"],
      github: "https://github.com/aarabii/ideascribe",
      demo: "https://ideascribe.vercel.app/",
      gradient: "from-green-500 to-blue-500"
    },
    {
      title: "CppTestGenAI",
      description: "A smart test case generator for C++ projects, powered by LLMs. It analyzes source and header files, creates comprehensive test scenarios, and reduces manual testing time by up to 80%.",
      tech: ["Ollama", "Caching", "Test Pipeline"],
      github: "https://github.com/aarabii/CppTestGenAI",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "CraftoGram",
      description: "An AI-driven tool for generating Instagram bios and content. Features dynamic prompt handling and real-time streaming output to help creators craft engaging profiles effortlessly.",
      tech: ["Groq", "Vercel AI SDK", "Zod"],
      github: "https://github.com/aarabii/crafto",
      demo: "https://craftogram.vercel.app/",
      gradient: "from-pink-500 to-purple-500"
    }
  ];

  const experience = [
    {
      period: "Sep'24 - Present",
      title: "Content Development Intern (Tech)",
      company: "UnStop",
      description: [
        "Curated and crafted 6-12 coding challenges daily with the finesse of a quizmaster and the precision of a compiler, ensuring each problem was unique enough to confuse even your overconfident CS friend.",
        "Collaborated with backend teams like a bug bounty hunter, eliminating 400+ data related issues in a two week sprint basically played whack a bug at enterprise scale.",
        "Transformed abstract concepts into developer-friendly content, marrying technical depth with educational clarity, while secretly flexing my stack knowledge across AI and code logic."
      ],
      tech: ["Inhouse CMS", "Artificial Intelligence", "Code Interpretation"]
    },
    {
      period: "Nov'23 - Dec'24",
      title: "Graphic Designer",
      company: "Team Negative (Team under KIIT-DU Fashion Society)",
      description: [
        "Designed scroll-stopping visuals for social media and event promotions, making sure even the algorithm couldn't ignore our team's drip.",
        "Turned vague design briefs into crisp creative assets—because 'make it pop' is not a real instruction but I delivered anyway.",
        "Blended creativity with speed using Illustrator, Canva, and DaVinci Resolve to bring aesthetic harmony across posters, reels, and everything in between—basically the design department's Swiss Army knife."
      ],
      tech: ["Adobe Illustrator", "Canva", "DaVinci Resolve"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-white font-semibold">Aarab Nishchal</span>
          </div>
          <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
            Resume
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mb-4 script-font">
              Aarab Nishchal
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-6">Chief Problem Solver</p>
            <p className="text-lg text-purple-100/80 max-w-2xl mx-auto leading-relaxed">
              I'm a student developer passionate about crafting digital experiences. I love building intuitive web apps, exploring new technologies, and turning creative ideas into accessible tools.
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-purple-400/30 rounded-full floating"></div>
        <div className="absolute top-1/3 right-16 w-6 h-6 bg-pink-400/20 rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-300/40 rounded-full floating" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6">
                  <p className="text-lg text-purple-100/80 leading-relaxed">
                    Hi, I'm a student developer who likes breaking things just to figure out how to fix them usually with JavaScript and snacks. I build web apps that try their best to work on the first try (no promises though).
                  </p>
                  <p className="text-lg text-purple-100/80 leading-relaxed">
                    React and Tailwind are my daily tools, and I'm currently exploring the mysterious land of backend development where bugs go to multiply. Full-stack dreams, coffee-fueled nights, and lots of console.log.
                  </p>
                  <p className="text-lg text-purple-100/80 leading-relaxed">
                    When I'm not coding, I'm either daydreaming startup ideas, lurking on GitHub, or explaining to my friends why 'it works on my machine' is totally valid. I love creating stuff that's fun, functional, and maybe a little chaotic.
                  </p>
                  <div className="flex items-center gap-2 text-purple-200">
                    <MapPin className="w-4 h-4" />
                    <span>Bhubaneswar, Odisha</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <ScrollReveal key={category} delay={index * 100}>
                <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4 capitalize">
                    {category === 'specialties' ? 'Specialties' : category}
                  </h3>
                  <div className="space-y-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-purple-500/20 text-purple-100 border-purple-400/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="md:w-40 flex-shrink-0">
                      <span className="text-purple-300 font-medium">{exp.period}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <p className="text-purple-200 mb-4">{exp.company}</p>
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-purple-100/80 leading-relaxed flex items-start">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-purple-400/30 text-purple-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 150}>
                <Card className="group overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-purple-100/80 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-100 border-purple-400/30 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="flex-1 border-purple-400/30 text-purple-200 hover:bg-purple-500/20" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-500 hover:to-pink-500" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
              <p className="text-lg text-purple-100/80 mt-6">
                Open to any adventure that involves learning and making cool stuff!
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <a href="mailto:aarab.nishchal@gmail.com" className="text-purple-200 hover:text-purple-100">
                        aarab.nishchal@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Instagram</h4>
                      <a href="https://instagram.com/aarab.ii" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-purple-100">
                        @aarab.ii
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <span className="text-purple-200">Bhubaneswar, Odisha, India</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default AarabPortfolio;