
import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Link as LinkIcon, Calendar, Tag, Check, FileText, Server, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardContent } from '@/components/ui/card';

// Project data - in a real app, this would come from a database or API
const projectsData = {
  'personal-cloud-lab': {
    title: 'Personal Cloud Lab',
    subtitle: 'Infrastructure as Code Learning Environment',
    date: 'January 2023 - March 2023',
    tags: ['Terraform', 'AWS', 'IaC', 'Cloud Simulation'],
    coverImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80',
    overview: 'A personal home lab environment set up to simulate cloud infrastructure, providing a hands-on platform to practice Infrastructure as Code principles and AWS resource management without incurring significant costs.',
    requirements: [
      'Create a cost-effective environment for learning cloud infrastructure',
      'Implement infrastructure as code using Terraform',
      'Set up automated provisioning and teardown of resources',
      'Configure networking similar to cloud providers',
      'Implement security best practices for access management'
    ],
    technologies: [
      { name: 'Terraform', description: 'Used for defining infrastructure as code' },
      { name: 'AWS', description: 'Primary cloud provider being simulated' },
      { name: 'VirtualBox', description: 'Virtualization platform for local resources' },
      { name: 'Git', description: 'Version control for infrastructure code' },
      { name: 'Bash Scripting', description: 'Automation of repetitive tasks' }
    ],
    implementation: [
      {
        title: 'Infrastructure Setup',
        description: 'Created Terraform modules to define the lab environment, including networking, compute, and storage resources.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
      },
      {
        title: 'Networking Configuration',
        description: 'Implemented virtual networks mimicking AWS VPC architecture with subnets, routing tables, and security groups.',
        image: 'https://images.unsplash.com/photo-1545161296-d9c2c241f2ad?auto=format&fit=crop&q=80'
      },
      {
        title: 'Resource Provisioning',
        description: 'Developed automated workflows for provisioning and deprovisioning resources as needed to minimize resource usage.',
        image: 'https://images.unsplash.com/photo-1560732488-7b5f4d50cb6b?auto=format&fit=crop&q=80'
      }
    ],
    results: 'Successfully created a functional local cloud lab that closely resembles AWS infrastructure. Gained hands-on experience with infrastructure as code principles and AWS resource management without incurring significant cloud costs.',
    conclusion: 'This project demonstrated the value of learning cloud technologies through practical implementation. The skills gained have laid a foundation for more advanced cloud engineering projects and have provided confidence in working with cloud infrastructure at scale.'
  },
  'containerized-web-app': {
    title: 'Containerized Web Application',
    subtitle: 'Microservices Architecture with CI/CD Pipeline',
    date: 'April 2023 - June 2023',
    tags: ['Docker', 'GitHub Actions', 'Microservices', 'CI/CD'],
    coverImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    overview: 'A simple web application built using containerization principles and deployed with a continuous integration and continuous deployment pipeline, demonstrating modern DevOps practices.',
    requirements: [
      'Implement a web application using microservices architecture',
      'Containerize all components using Docker',
      'Set up automated testing and deployment with GitHub Actions',
      'Ensure components can scale independently',
      'Implement monitoring and logging'
    ],
    technologies: [
      { name: 'Docker', description: 'Containerization platform' },
      { name: 'GitHub Actions', description: 'CI/CD pipeline' },
      { name: 'Node.js', description: 'Backend services' },
      { name: 'React', description: 'Frontend interface' },
      { name: 'MongoDB', description: 'Database' }
    ],
    implementation: [
      {
        title: 'Microservices Design',
        description: 'Designed and implemented independent services for user authentication, data processing, and frontend rendering.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80'
      },
      {
        title: 'Containerization',
        description: 'Created Docker images for each service with optimized builds and minimal footprints.',
        image: 'https://images.unsplash.com/photo-1605745341289-27e3dea5deb1?auto=format&fit=crop&q=80'
      },
      {
        title: 'CI/CD Pipeline',
        description: 'Implemented GitHub Actions workflows for automated testing, building, and deployment of container images.',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80'
      }
    ],
    results: 'Successfully created a containerized web application with automated deployment processes. The application demonstrates proper separation of concerns and scalability potential.',
    conclusion: 'This project provided valuable experience with containerization and CI/CD principles. The microservices architecture proved effective for independent component development and deployment, and the automated pipelines significantly improved the development workflow.'
  },
  'cloud-security-analysis': {
    title: 'Cloud Security Analysis',
    subtitle: 'Security Best Practices Implementation',
    date: 'July 2023 - September 2023',
    tags: ['Cloud Security', 'IAM', 'Network Configuration', 'Best Practices'],
    coverImage: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80',
    overview: 'A comprehensive analysis of cloud security best practices, implemented as a practical project to understand and apply security configurations in cloud environments.',
    requirements: [
      'Analyze common cloud security vulnerabilities',
      'Implement AWS security best practices',
      'Configure proper identity and access management',
      'Set up network security configurations',
      'Create security monitoring and alerting'
    ],
    technologies: [
      { name: 'AWS IAM', description: 'Identity and access management' },
      { name: 'AWS CloudTrail', description: 'Audit logging' },
      { name: 'AWS Config', description: 'Configuration compliance' },
      { name: 'AWS Security Hub', description: 'Security posture management' },
      { name: 'AWS GuardDuty', description: 'Threat detection' }
    ],
    implementation: [
      {
        title: 'IAM Configuration',
        description: 'Implemented least privilege access policies and multi-factor authentication for all user accounts.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80'
      },
      {
        title: 'Network Security',
        description: 'Configured security groups, network ACLs, and VPC flow logs to secure network traffic.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80'
      },
      {
        title: 'Monitoring & Alerting',
        description: 'Set up CloudWatch alarms and Security Hub to monitor for security events and compliance violations.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
      }
    ],
    results: 'Created a secure cloud environment with properly configured access controls, network security, and monitoring. Identified and remediated several potential security vulnerabilities.',
    conclusion: 'This project highlighted the importance of security in cloud environments and provided practical experience in implementing security best practices. The knowledge gained has proven valuable in ensuring the security of all subsequent cloud projects.'
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const animationRef = useRef<HTMLDivElement>(null);
  
  // Get project data
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;
  
  useEffect(() => {
    // Set page title
    document.title = project ? `${project.title} | Cloud Engineer Portfolio` : "Project Not Found";
    
    // Animation effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all sections with animation
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [project]);
  
  if (!project) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <ParticleBackground />
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8">The project you're looking for doesn't exist or has been moved.</p>
            <Button onClick={() => navigate('/')}>Return to Home</Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Navbar />
      
      <div className="h-[40vh] relative overflow-hidden">
        <img 
          src={project.coverImage} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-background flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8">
            <Button 
              variant="outline" 
              className="mb-4 bg-background/50 backdrop-blur-sm"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <p className="text-xl md:text-2xl text-foreground/80 mt-2">{project.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center text-sm text-foreground/70">
                <Calendar className="h-4 w-4 mr-1" />
                {project.date}
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-secondary/80 backdrop-blur-sm text-xs rounded-full flex items-center"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <section className="mb-12 animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-foreground/80">{project.overview}</p>
            </section>
            
            <section className="mb-12 animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-4">Requirements</h2>
              <ul className="space-y-2">
                {project.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <section className="mb-12 animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-4">Implementation</h2>
              <div className="space-y-8">
                {project.implementation.map((step, index) => (
                  <div key={index} className="glassmorphism rounded-lg overflow-hidden">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-foreground/80">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-12 animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <p className="text-foreground/80">{project.results}</p>
            </section>
            
            <section className="animate-on-scroll opacity-0">
              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="text-foreground/80">{project.conclusion}</p>
            </section>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card className="glassmorphism mb-8 animate-on-scroll opacity-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Server className="h-5 w-5 mr-2" />
                    Technologies Used
                  </h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-4">
                    {project.technologies.map((tech, index) => (
                      <li key={index}>
                        <div className="font-semibold">{tech.name}</div>
                        <div className="text-sm text-foreground/70">{tech.description}</div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism animate-on-scroll opacity-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Project Files
                  </h3>
                  <Separator className="mb-4" />
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <Code className="h-4 w-4 mr-2" />
                        <span>Source Code</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <LinkIcon className="h-4 w-4 mr-2" />
                        <span>Live Demo</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <FileText className="h-4 w-4 mr-2" />
                        <span>Documentation</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <div className="text-center py-8 text-sm text-foreground/50">
        Designed by Mohammed Rabeeh
      </div>
    </div>
  );
};

export default ProjectDetail;
