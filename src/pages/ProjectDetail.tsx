
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
  },
  'serverless-api': {
    title: 'Serverless API Development',
    subtitle: 'Event-Driven Architecture with AWS Lambda',
    date: 'October 2023 - December 2023',
    tags: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Serverless'],
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    overview: 'Developed a serverless API using AWS Lambda, API Gateway, and DynamoDB, demonstrating event-driven architecture and cloud-native development practices for scalable and cost-effective solutions.',
    requirements: [
      'Design a RESTful API for data management',
      'Implement serverless functions using AWS Lambda',
      'Create a DynamoDB database for data persistence',
      'Set up API Gateway for request routing',
      'Implement authentication and authorization'
    ],
    technologies: [
      { name: 'AWS Lambda', description: 'Serverless compute service' },
      { name: 'API Gateway', description: 'API management and routing' },
      { name: 'DynamoDB', description: 'NoSQL database service' },
      { name: 'AWS IAM', description: 'Identity and access management' },
      { name: 'Node.js', description: 'Runtime environment for Lambda functions' }
    ],
    implementation: [
      {
        title: 'API Design',
        description: 'Designed a RESTful API with endpoints for creating, reading, updating, and deleting resources, following API design best practices.',
        image: 'https://images.unsplash.com/photo-1566666179953-40d183d4b2ed?auto=format&fit=crop&q=80'
      },
      {
        title: 'Lambda Functions',
        description: 'Implemented Lambda functions for each API endpoint, with proper error handling and input validation.',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80'
      },
      {
        title: 'Database Integration',
        description: 'Set up DynamoDB tables with appropriate primary keys and indexes for efficient querying.',
        image: 'https://images.unsplash.com/photo-1603322327561-7eae6af66eb6?auto=format&fit=crop&q=80'
      }
    ],
    results: 'Successfully created a functional serverless API that scales automatically based on demand. The API provides robust data management capabilities with minimal operational overhead.',
    conclusion: 'This project demonstrated the power of serverless architecture for building scalable and cost-effective cloud solutions. The event-driven approach simplified development and improved system responsiveness.'
  },
  'monitoring-stack': {
    title: 'Cloud Monitoring Stack',
    subtitle: 'Comprehensive Monitoring Solution',
    date: 'January 2024 - February 2024',
    tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Monitoring'],
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80',
    overview: 'Implemented a comprehensive monitoring solution using Prometheus, Grafana, and ELK stack to track infrastructure performance, detect anomalies, and provide real-time insights into system behavior.',
    requirements: [
      'Set up metrics collection and storage',
      'Create visualizations and dashboards',
      'Implement log aggregation and analysis',
      'Configure alerting for critical events',
      'Ensure secure access to monitoring tools'
    ],
    technologies: [
      { name: 'Prometheus', description: 'Metrics collection and storage' },
      { name: 'Grafana', description: 'Visualization and dashboards' },
      { name: 'Elasticsearch', description: 'Log storage and search' },
      { name: 'Logstash', description: 'Log processing pipeline' },
      { name: 'Kibana', description: 'Log visualization' }
    ],
    implementation: [
      {
        title: 'Metrics Collection',
        description: 'Set up Prometheus to scrape metrics from various services and store them efficiently.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
      },
      {
        title: 'Dashboard Creation',
        description: 'Created Grafana dashboards for visualizing key performance indicators and system health metrics.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
      },
      {
        title: 'Log Management',
        description: 'Implemented ELK stack for collecting, processing, and analyzing logs from all system components.',
        image: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?auto=format&fit=crop&q=80'
      }
    ],
    results: 'Established a robust monitoring infrastructure that provides comprehensive visibility into system performance and behavior. The solution enables proactive issue detection and faster troubleshooting.',
    conclusion: 'This project highlighted the importance of comprehensive monitoring in cloud environments. The implemented solution improved operational efficiency and helped maintain high system reliability.'
  },
  'iac-templates': {
    title: 'Infrastructure as Code Templates',
    subtitle: 'Standardized Cloud Resource Provisioning',
    date: 'March 2024 - Present',
    tags: ['Terraform', 'CloudFormation', 'IaC', 'AWS'],
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    overview: 'Created reusable Terraform and CloudFormation templates for standardized cloud resource provisioning, ensuring environment consistency and enabling rapid deployment of infrastructure.',
    requirements: [
      'Design modular and reusable IaC templates',
      'Support multiple environments (dev, staging, production)',
      'Implement best practices for security and compliance',
      'Create documentation and usage examples',
      'Establish version control and change management processes'
    ],
    technologies: [
      { name: 'Terraform', description: 'Infrastructure as Code tool' },
      { name: 'AWS CloudFormation', description: 'AWS-native IaC service' },
      { name: 'Git', description: 'Version control' },
      { name: 'GitHub Actions', description: 'CI/CD for infrastructure' },
      { name: 'AWS', description: 'Cloud provider' }
    ],
    implementation: [
      {
        title: 'Template Design',
        description: 'Designed modular templates for various infrastructure components, including networking, compute, storage, and security.',
        image: 'https://images.unsplash.com/photo-1561883088-039e53143d73?auto=format&fit=crop&q=80'
      },
      {
        title: 'Environment Configuration',
        description: 'Created environment-specific configurations to support development, staging, and production deployments.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80'
      },
      {
        title: 'CI/CD Pipeline',
        description: 'Implemented automated testing and deployment pipeline for infrastructure changes.',
        image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80'
      }
    ],
    results: 'Created a library of reusable infrastructure templates that significantly reduce the time and effort required to provision new environments. The templates ensure consistency and adherence to best practices across all deployments.',
    conclusion: 'This project demonstrated the value of Infrastructure as Code for managing cloud resources. The standardized templates improve efficiency, reduce errors, and enhance security in cloud deployments.'
  },
  'automation-scripts': {
    title: 'Cloud Automation Scripts',
    subtitle: 'Streamlining Cloud Operations',
    date: 'January 2024 - March 2024',
    tags: ['Python', 'Boto3', 'Azure SDK', 'Automation'],
    coverImage: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80',
    overview: 'Developed a suite of Python scripts for automating routine cloud maintenance tasks, resource optimization, and automated reporting, improving operational efficiency and reducing manual effort.',
    requirements: [
      'Automate resource cleanup and optimization',
      'Create scheduled reporting scripts',
      'Implement cost management automation',
      'Develop user management scripts',
      'Create backup and recovery automation'
    ],
    technologies: [
      { name: 'Python', description: 'Programming language' },
      { name: 'Boto3', description: 'AWS SDK for Python' },
      { name: 'Azure SDK', description: 'Azure SDK for Python' },
      { name: 'AWS Lambda', description: 'Serverless compute for automation' },
      { name: 'GitHub Actions', description: 'CI/CD for scripts' }
    ],
    implementation: [
      {
        title: 'Resource Optimization',
        description: 'Created scripts to identify and remediate underutilized resources, including idle EC2 instances and unused storage volumes.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
      },
      {
        title: 'Automated Reporting',
        description: 'Developed scripts to generate and distribute regular reports on resource usage, costs, and security findings.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80'
      },
      {
        title: 'Backup Management',
        description: 'Implemented automated backup and snapshot management for critical resources.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80'
      }
    ],
    results: 'Achieved significant time savings and operational improvements through automation. The scripts perform routine tasks consistently and reliably, reducing the risk of human error and freeing up time for more strategic activities.',
    conclusion: 'This project highlighted the value of automation in cloud operations. The developed scripts improved efficiency, enhanced consistency, and reduced operational overhead in managing cloud resources.'
  },
  'aws-networking': {
    title: 'AWS Networking Architecture',
    subtitle: 'Secure and Scalable Network Design',
    date: 'February 2024 - April 2024',
    tags: ['AWS', 'VPC', 'Network Security', 'Cloud Architecture'],
    coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
    overview: 'Designed and implemented a multi-tier VPC architecture with public/private subnets, NAT gateways, and network ACLs for secure workload isolation, providing a foundation for secure and scalable application deployment.',
    requirements: [
      'Design a secure network architecture',
      'Implement isolation between different environments',
      'Set up secure internet access for private resources',
      'Configure network monitoring and logging',
      'Implement transit gateways for multi-VPC connectivity'
    ],
    technologies: [
      { name: 'AWS VPC', description: 'Virtual Private Cloud' },
      { name: 'AWS Transit Gateway', description: 'Network hub for VPC connectivity' },
      { name: 'AWS Network ACLs', description: 'Network-level filtering' },
      { name: 'AWS Security Groups', description: 'Instance-level filtering' },
      { name: 'AWS Flow Logs', description: 'Network traffic logging' }
    ],
    implementation: [
      {
        title: 'VPC Design',
        description: 'Designed a multi-tier VPC architecture with public, private, and data subnets across multiple availability zones.',
        image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80'
      },
      {
        title: 'Security Implementation',
        description: 'Implemented network ACLs, security groups, and NACLs to control traffic flow and secure resources.',
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80'
      },
      {
        title: 'Connectivity',
        description: 'Set up internet and VPC connectivity using internet gateways, NAT gateways, and transit gateways.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80'
      }
    ],
    results: 'Successfully created a secure and scalable network architecture that provides proper isolation between environments and controls access to resources. The architecture supports both internal and external connectivity while maintaining security.',
    conclusion: 'This project demonstrated the importance of proper network design in cloud environments. The implemented architecture provides a solid foundation for secure application deployment and meets the requirements for scalability and security.'
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
