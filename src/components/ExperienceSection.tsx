
import { Briefcase } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Senior Cloud Engineer',
      company: 'Tech Innovators Inc.',
      period: '2021 - Present',
      description: 'Lead cloud architect responsible for designing and implementing multi-region AWS infrastructure. Reduced deployment time by 70% through CI/CD pipeline optimization and introduced Infrastructure as Code practices.',
      achievements: [
        'Architected and implemented a comprehensive migration to AWS, reducing infrastructure costs by 35%',
        'Led a team of 5 engineers to implement a new Kubernetes-based platform',
        'Established cloud security best practices and achieved SOC2 compliance',
      ],
    },
    {
      role: 'DevOps Engineer',
      company: 'Global Solutions Ltd.',
      period: '2018 - 2021',
      description: 'Managed cloud infrastructure across AWS and Azure. Implemented monitoring, alerting, and automated scaling solutions. Collaborated with development teams to streamline deployment processes.',
      achievements: [
        'Reduced deployment failures by 65% through automated testing and infrastructure validation',
        'Implemented cost optimization strategies saving $150K annually',
        'Built disaster recovery solutions with 99.99% availability',
      ],
    },
    {
      role: 'Systems Administrator',
      company: 'Data Systems Corp.',
      period: '2016 - 2018',
      description: 'Managed on-premises and cloud infrastructure, focusing on Linux systems, networking, and initial cloud migration efforts. Introduced automation for routine tasks.',
      achievements: [
        'Led the initial migration of applications to cloud environments',
        'Implemented configuration management using Ansible',
        'Reduced system outages by 40% through proactive monitoring',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Professional Experience</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            My journey as a cloud professional, highlighting key roles and achievements.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                
                {/* Content */}
                <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} w-full md:w-1/2`}>
                  <div className="bg-card p-6 rounded-lg glassmorphism">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-1 mb-3 text-primary">
                      <span>{exp.company}</span>
                      <span className="hidden md:block">•</span>
                      <span className="text-foreground/60">{exp.period}</span>
                    </div>
                    
                    <p className="text-foreground/80 mb-4">{exp.description}</p>
                    
                    <Separator className="my-4" />
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-foreground/70 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-full md:w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
