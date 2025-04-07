
import { Briefcase } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Cloud Engineering Student',
      company: 'Self-Directed Learning',
      period: '2023 - Present',
      description: 'Actively pursuing cloud engineering skills through comprehensive online courses, certifications, and hands-on projects.',
      achievements: [
        'Completed AWS Cloud Practitioner fundamentals',
        'Pursuing Azure fundamentals certification',
        'Building practical skills through personal cloud infrastructure projects',
        'Continuous learning in cloud technologies and DevOps practices',
      ],
    },
    {
      role: 'Technical Intern',
      company: 'Academic/Training Program',
      period: '2022 - 2023',
      description: 'Participated in intensive cloud and software engineering training, focusing on practical skills and industry-relevant technologies.',
      achievements: [
        'Completed intensive cloud computing and DevOps training',
        'Developed foundational skills in infrastructure automation',
        'Worked on collaborative projects simulating real-world cloud scenarios',
        'Learned basic networking and cloud security principles',
      ],
    },
    {
      role: 'Learning & Development',
      company: 'Personal Growth',
      period: '2021 - 2022',
      description: 'Dedicated period of systematic learning, building foundational knowledge in computer science, programming, and cloud technologies.',
      achievements: [
        'Learned programming fundamentals in Python and JavaScript',
        'Started exploring cloud platform basics',
        'Completed online courses in computer science fundamentals',
        'Built initial understanding of software development principles',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Learning Journey</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            My progression towards becoming a Cloud Engineer, highlighting continuous learning and skill development.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative">
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                
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
                      <h4 className="text-sm font-semibold mb-2">Key Learnings:</h4>
                      <ul className="list-disc list-inside text-foreground/70 space-y-1">
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
