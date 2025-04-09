
import { useEffect } from 'react';
import { ArrowLeft, Code, Database, Server, Cloud, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Projects = () => {
  const navigate = useNavigate();
  
  // Set page title
  useEffect(() => {
    document.title = "Projects | Rabeeh Portfolio";
  }, []);

  const additionalProjects = [
    {
      id: 'serverless-api',
      title: 'Serverless API Development',
      description: 'Built a serverless REST API using AWS Lambda, API Gateway, and DynamoDB, demonstrating event-driven architecture and cloud-native development.',
      tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
      icon: <Cloud className="h-10 w-10 text-primary" />,
    },
    {
      id: 'monitoring-stack',
      title: 'Cloud Monitoring Stack',
      description: 'Implemented a monitoring solution using Prometheus, Grafana, and ELK stack to track infrastructure performance and detect anomalies.',
      tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Monitoring'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      id: 'iac-templates',
      title: 'Infrastructure as Code Templates',
      description: 'Created reusable Terraform and CloudFormation templates for standardized cloud resource provisioning and environment consistency.',
      tags: ['Terraform', 'CloudFormation', 'IaC', 'AWS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
      icon: <Server className="h-10 w-10 text-primary" />,
    },
    {
      id: 'automation-scripts',
      title: 'Cloud Automation Scripts',
      description: 'Developed Python scripts for automating routine cloud maintenance tasks, resource optimization, and automated reporting.',
      tags: ['Python', 'Boto3', 'Azure SDK', 'Automation'],
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80',
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      id: 'aws-networking',
      title: 'AWS Networking Architecture',
      description: 'Designed and implemented a multi-tier VPC architecture with public/private subnets, NAT gateways, and network ACLs for secure workload isolation.',
      tags: ['AWS', 'VPC', 'Network Security', 'Cloud Architecture'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
      icon: <Laptop className="h-10 w-10 text-primary" />,
    },
  ];
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-8">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-1" 
                onClick={() => navigate('/')}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Cloud Projects Portfolio</h1>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                A collection of hands-on cloud engineering and DevOps projects showcasing my technical skills and learning journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalProjects.map((project) => (
                <Card key={project.id} className="glassmorphism overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                      {project.icon}
                    </div>
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
                      variant="outline" 
                      className="w-full justify-between group"
                      onClick={() => navigate(`/project/${project.id}`)}
                    >
                      <span>View Project Details</span> 
                      <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <div className="text-center py-6 text-foreground/70 text-sm">
        Designed by Mohammed Rabeeh
      </div>
    </div>
  );
};

export default Projects;
