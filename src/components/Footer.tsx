const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Your Name</h3>
            <p className="text-muted-foreground">Building the future, one line of code at a time</p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-12 h-12 bg-muted/20 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:glow-accent"
              >
                <span className="text-muted-foreground hover:text-foreground transition-colors">
                  {social.charAt(0)}
                </span>
              </a>
            ))}
          </div>
          
          <div className="border-t border-border/30 pt-6">
            <p className="text-muted-foreground">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;