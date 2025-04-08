
import { ArrowRight, Link, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ProjectsSection = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: 'personal-cloud-lab',
      title: 'Personal Cloud Lab',
      description: 'Developed a home lab environment using Terraform to simulate cloud infrastructure, practicing IaC principles and AWS resource management.',
      tags: ['Terraform', 'AWS', 'IaC', 'Cloud Simulation'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80',
    },
    {
      id: 'containerized-web-app',
      title: 'Containerized Web Application',
      description: 'Created a Docker-based web application demonstrating containerization, GitHub Actions for CI/CD, and basic microservices architecture.',
      tags: ['Docker', 'GitHub Actions', 'Microservices', 'CI/CD'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    },
    {
      id: 'cloud-security-analysis',
      title: 'Cloud Security Analysis',
      description: 'Implemented a small-scale project analyzing cloud security best practices, including basic network security configurations and access management.',
      tags: ['Cloud Security', 'IAM', 'Network Configuration', 'Best Practices'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Learning Projects</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Hands-on projects demonstrating my growing skills in cloud technologies and DevOps practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glassmorphism overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-secondary text-xs rounded-full text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <span>View Project</span> 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 group animate-pulse-glow"
            onClick={() => navigate('/projects')}
          >
            <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            Explore More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
