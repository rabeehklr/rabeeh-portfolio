
import { ArrowRight, Link } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Enterprise Cloud Migration',
      description: 'Led the migration of a critical financial application from on-premises to AWS, resulting in 40% cost reduction and improved scalability.',
      tags: ['AWS', 'Terraform', 'CI/CD', 'Microservices'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80',
      link: '#',
    },
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Designed and implemented a Kubernetes platform spanning across AWS and Azure, enabling seamless application deployment and disaster recovery.',
      tags: ['Kubernetes', 'Helm', 'Docker', 'Multi-Cloud'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
      link: '#',
    },
    {
      title: 'Serverless Data Processing Pipeline',
      description: 'Built a serverless solution for processing large volumes of IoT data using event-driven architecture and automated scaling.',
      tags: ['Lambda', 'Event-driven', 'DynamoDB', 'S3'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            A selection of cloud infrastructure and architecture projects that showcase my expertise and problem-solving approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glassmorphism overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 h-full flex flex-col">
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
                <Button variant="ghost" className="w-full justify-between group" asChild>
                  <a href={project.link}>
                    <span>View Case Study</span> 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <Link className="mr-2 h-4 w-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
