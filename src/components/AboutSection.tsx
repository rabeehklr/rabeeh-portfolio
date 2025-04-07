
import { Cloud, Server, Shield, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: 'Cloud Foundations',
      description: 'Actively learning cloud platforms with a focus on AWS, Azure, and GCP fundamentals.',
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: 'Infrastructure Learning',
      description: 'Studying Infrastructure as Code principles and exploring Terraform, CloudFormation basics.',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Security Awareness',
      description: 'Building foundational knowledge in cloud security best practices and compliance standards.',
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'DevOps Exploration',
      description: 'Learning CI/CD principles, containerization, and exploring automation tools.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="text-foreground/80 space-y-4">
              <p>
                I'm an aspiring Cloud Engineer passionate about transforming my technical knowledge into innovative cloud solutions. Currently, I'm focusing on building a strong foundation in cloud technologies and DevOps practices.
              </p>
              <p>
                My journey involves continuous learning, hands-on projects, and a commitment to understanding the intricate world of cloud infrastructure. I'm actively acquiring skills through online courses, certifications, and personal projects.
              </p>
              <p>
                My goal is to contribute to cutting-edge cloud architectures that drive efficiency, scalability, and innovation in modern technological ecosystems.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Learning Path</h3>
              <div className="flex flex-wrap gap-3">
                {["AWS Fundamentals", "Azure Basics", "Terraform", "Docker", "Kubernetes", "CI/CD", "Python", "Cloud Security"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="glassmorphism overflow-hidden animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{skill.title}</h3>
                  <p className="text-sm text-foreground/70">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
