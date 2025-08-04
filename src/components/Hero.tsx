import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="slide-in-down" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">Hello, I'm</h2>
        </div>
        
        <div className="slide-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text">
            Your Name
          </h1>
        </div>
        
        <div className="slide-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer
          </p>
        </div>
        
        <div className="slide-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Crafting digital experiences with modern technologies and innovative design solutions
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-up" style={{ animationDelay: '1s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform duration-300 glow-primary"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary transition-colors duration-300 hover:glow-accent"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-primary/30 rounded-full floating" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-16 w-6 h-6 bg-secondary/20 rounded-full floating" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent/40 rounded-full floating" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;