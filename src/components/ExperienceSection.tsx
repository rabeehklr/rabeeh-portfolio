import { GraduationCap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Network Engineering Learner',
      company: 'Personal Development',
      period: '2024 - Present',
      description: 'Engaged in self-directed learning to master network engineering concepts, focusing on practical skills in network design, security, and automation.',
      achievements: [
        'Exploring network configuration with Cisco Packet Tracer and GNS3',
        'Gaining expertise in IP addressing and subnetting using IPcalc and VLSM tools',
        'Learning network security practices with pfSense and Cisco ACLs',
        'Developing network automation scripts using Python and Netmiko',
        'Studying network monitoring with Wireshark and SolarWinds'
      ],
    },
    {
      role: 'Computer Science Graduate',
      company: 'MEA Engineering College',
      period: '2021 - 2025',
      description: 'Pursued a B.Tech in Computer Science at KTU, building a strong foundation in networking, system administration, and programming through academic training and practical projects.',
      achievements: [
        'Developed skills in network design and optimization',
        'Gained knowledge of network protocols and TCP/IP stack',
        'Learned fundamentals of system administration in Linux',
        'Acquired experience in scripting for network automation'
      ],
    },
    {
      role: 'Higher Secondary Education',
      company: 'NHSS Kolathur',
      period: '2019 - 2021',
      description: 'Focused period of foundational learning in computer science, with an introduction to networking concepts and programming principles.',
      achievements: [
        'Learned programming fundamentals in Python and JavaScript',
        'Explored basic networking concepts like IP addressing',
        'Completed online courses in computer networks and protocols',
        'Built foundational understanding of software and network principles'
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Learning Journey</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Advancing as a Network Engineer through relentless learning and hands-on skill mastery
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                
                <div className={`pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} w-full md:w-1/2`}>
                  <div className="bg-card p-6 rounded-lg glassmorphism">
                    <h3 className="text-xl font-bold text-left">{exp.role}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-1 mb-3 text-primary text-left">
                      <span>{exp.company}</span>
                      <span className="hidden md:block">•</span>
                      <span className="text-foreground/60">{exp.period}</span>
                    </div>
                    
                    <p className="text-foreground/80 mb-4 text-left">{exp.description}</p>
                    
                    <Separator className="my-4" />
                    
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-left">Key Learnings:</h4>
                      <ul className="list-disc list-inside text-foreground/70 space-y-1 text-left pl-0">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
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