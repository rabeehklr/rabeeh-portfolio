
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gradient">Mohammed Rabeeh</a>
            <p className="mt-2 text-foreground/60 text-sm">
              Building robust cloud infrastructure for the future.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-right">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <div className="mt-2 space-x-4">
                <a href="#about" className="text-sm text-foreground/60 hover:text-primary transition-colors">About</a>
                <a href="#projects" className="text-sm text-foreground/60 hover:text-primary transition-colors">Projects</a>
                <a href="#experience" className="text-sm text-foreground/60 hover:text-primary transition-colors">Experience</a>
                <a href="#contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 bg-secondary rounded-full hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
