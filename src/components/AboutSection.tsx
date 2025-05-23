
import { Cloud, Server, Shield, Database, Star, Network, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

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
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: 'Networking Expertise',
      description: 'Understanding cloud networking concepts, VPCs, subnets, and implementing secure network architectures.',
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Python Proficiency',
      description: 'Developing automation scripts and cloud management tools using Python to enhance infrastructure workflows.',
    },
  ];

  const techSkills = [
    { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', level: 2 },
    { name: 'Azure', logo: 'https://cdn.worldvectorlogo.com/logos/azure-1.svg', level: 1 },
    { name: 'Linux', logo: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg', level: 3 },
    { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg', level: 2 },
    { name: 'Networking', logo: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg', level: 3 },
    { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg', level: 3 },
    { name: 'Git', logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg', level: 4 },
    { name: 'Terraform', logo: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg', level: 1 },
    { name: 'CI/CD', logo: 'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg', level: 1 },
    { name: 'Kubernetes', logo: 'https://cdn.worldvectorlogo.com/logos/kubernets.svg', level: 1 },
  ];

  const renderStars = (level) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i <= level ? 'text-primary fill-primary' : 'text-muted-foreground'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6">Technology Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {techSkills.map((tech, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-background rounded-md overflow-hidden p-1">
                        <img
                          src={tech.logo}
                          alt={`${tech.name} logo`}
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/24x24/primary/white?text=' + tech.name.charAt(0);
                          }}
                        />
                      </div>
                      <span className="font-medium">{tech.name}</span>
                      <div className="flex ml-auto">
                        {renderStars(tech.level)}
                      </div>
                    </div>
                    <Progress value={tech.level * 20} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
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
      </div>
    </section>
  );
};

export default AboutSection;
