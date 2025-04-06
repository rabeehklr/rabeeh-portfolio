
import { Cloud, Server, Shield, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const skills = [
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: 'Cloud Platforms',
      description: 'Expert in AWS, Azure, and GCP with hands-on experience designing and implementing cloud solutions.',
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: 'Infrastructure as Code',
      description: 'Proficient with Terraform, CloudFormation, and Pulumi for automated, version-controlled infrastructure.',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Security & Compliance',
      description: 'Implementing secure cloud architectures following well-architected frameworks and compliance standards.',
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'DevOps & CI/CD',
      description: 'Creating seamless pipeline automation with GitHub Actions, Jenkins, and cloud-native CI/CD tools.',
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
                I'm a passionate Cloud Engineer with extensive experience in designing, implementing, and managing cloud infrastructure for enterprise applications. My expertise spans across multi-cloud environments, with a focus on building scalable, reliable, and secure solutions.
              </p>
              <p>
                With a background in DevOps practices and infrastructure automation, I bridge the gap between development and operations, enabling teams to deliver faster and more reliably through CI/CD pipelines and Infrastructure as Code.
              </p>
              <p>
                I'm constantly learning and exploring new technologies, with a particular interest in serverless architectures, containerization, and cloud-native development practices.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker", "CI/CD", "Python", "Go", "Linux", "Monitoring"].map((tech) => (
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
