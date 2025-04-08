
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Cloud particles
    const particles: {x: number, y: number, size: number, speedX: number, speedY: number, color: string}[] = [];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, ${Math.random() * 0.7 + 0.3})`
      });
    }
    
    // Animation function
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Border checking
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
      });
      
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(100, 180, 255, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    // Start animation
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-0 z-10">
        <div className="text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="text-gradient text-5xl md:text-7xl mt-2">Mohammed Rabeeh</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto md:mx-0">
            Architecting scalable, resilient cloud infrastructure solutions that power modern applications.
          </p>
          
          <div className="relative h-64 md:h-72 mt-10">
            <canvas 
              ref={canvasRef} 
              className="w-full h-full rounded-lg bg-background/20 backdrop-blur-sm shadow-inner"
              style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-primary/80 bg-background/30 backdrop-blur-md p-4 rounded-lg shadow-lg">
                <p className="text-lg font-medium">Cloud Infrastructure Enthusiast</p>
                <p className="text-sm mt-1">Building the backbone of tomorrow's applications</p>
              </div>
            </div>
          </div>
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
