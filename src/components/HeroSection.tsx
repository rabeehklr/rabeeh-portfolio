
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-0 z-10">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-gradient text-5xl md:text-7xl mt-2">Mohammed Rabeeh</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto md:mx-0">
          An active learner diving into cloud and DevOps practices
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full text-center animate-pulse-glow">
        <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors">
          <ArrowDown className="mx-auto h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </a>
      </div>
      
      <div className="absolute top-1/4 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
