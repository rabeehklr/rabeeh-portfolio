import { useState } from 'react';
import { Cloud, Server, Shield, Database, Star, Network, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AboutSection = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const skills = [
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: 'Network Fundamentals',
      description: 'Actively learning core networking concepts, including OSI model, TCP/IP, and routing protocols.',
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: 'Network Infrastructure',
      description: 'Studying network hardware, switches, routers, and exploring Cisco IOS and Juniper Junos basics.',
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Network Security',
      description: 'Building knowledge in firewall configurations, VPNs, and network security best practices.',
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: 'Cloud Networking',
      description: 'Learning cloud-based networking, including VPCs, subnets, and hybrid network architectures in AWS and Azure.',
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Automation for Networking',
      description: 'Developing skills in network automation using Python and tools like Ansible for efficient network management.',
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Monitoring & Analytics',
      description: 'Exploring network monitoring tools like Wireshark and SolarWinds to analyze and optimize network performance.',
    },
  ];

  const networkingSkills = [
    {
      name: 'Routing & Switching Configuration',
      description: 'Configure and manage routers and switches for small to medium-sized networks, implementing static and dynamic routing protocols like RIP and OSPF.',
      tools: [
        { name: 'Cisco Packet Tracer', level: 5 },
        { name: 'GNS3', level: 4 },
        { name: 'Cisco IOS CLI (Routing Commands)', level: 5 },
      ],
    },
    {
      name: 'IP Addressing & Subnetting',
      description: 'Design and implement IPv4 addressing schemes, including subnetting and VLSM, to optimize IP allocation for network efficiency.',
      tools: [
        { name: 'IP Subnet Calculator', level: 5 },
        { name: 'Subnetting Practice Tools', level: 4 },
        
      ],
    },
    {
      name: 'Network Security & Access Control',
      description: 'Apply basic security measures like access control lists (ACLs) and port security to protect network devices and restrict unauthorized access.',
      tools: [
        { name: 'Cisco IOS CLI (ACLs, Port Security)', level: 5 },
        { name: 'Cisco Packet Tracer', level: 5 },
      ],
    },
    {
      name: 'Network Protocol Analysis',
      description: 'Analyze network traffic to identify connectivity issues and protocol behavior using packet capture and analysis tools.',
      tools: [
        { name: 'Wireshark', level: 4 },
        { name: 'Packet Tracer (Packet Capture)', level: 5 },
        { name: 'PingPlotter', level: 3 },
      ],
    },
    {
      name: 'VLAN & Spanning Tree Configuration',
      description: 'Configure VLANs and Spanning Tree Protocol (STP) to segment networks and prevent switching loops in LAN environments.',
      tools: [
        { name: 'Cisco IOS CLI (VLAN/STP Commands)', level: 5 },
        { name: 'Cisco Packet Tracer', level: 5 },
        { name: 'GNS3', level: 4 },
      ],
    },
    {
      name: 'Network Troubleshooting & Diagnostics',
      description: 'Diagnose and resolve network issues using CLI commands and diagnostic tools to ensure connectivity and performance.',
      tools: [
        { name: 'Cisco IOS CLI (Ping, Traceroute, Show Commands)', level: 5 },
        { name: 'Nslookup', level: 3 },
        { name: 'Netstat', level: 3 },
      ],
    },
    {
      name: 'Wireless LAN Fundamentals',
      description: 'Configure and manage basic wireless networks, including access points and WPA2 security, for small-scale deployments.',
      tools: [
        { name: 'Cisco Packet Tracer', level: 5 },
        { name: 'Cisco WLC (Simulator)', level: 4 },
        { name: 'TP-Link/Consumer Router Interfaces', level: 3 },
      ],
    },
    {
      name: 'Network Device Management',
      description: 'Manage network devices, including backups, password recovery, and IOS upgrades, to ensure operational reliability.',
      tools: [
        { name: 'Tera Term', level: 4 },
        { name: 'PuTTY', level: 5 },
        { name: 'TFTP Server', level: 3 },
      ],
    },
    {
      name: 'Basic Network Automation',
      description: 'Automate repetitive network tasks, such as interface status checks or configuration backups, using basic scripting in Python and Bash.',
      tools: [
        { name: 'Python', level: 4 },
        { name: 'Bash', level: 3 },
        { name: 'Cisco IOS CLI', level: 5 },
      ],
    },
    {
      name: 'Network Monitoring',
      description: 'Monitor network performance and device health using basic tools to track connectivity, bandwidth usage, and status in small networks.',
      tools: [
        { name: 'Cisco IOS CLI (Show Commands)', level: 5 },
        { name: 'PingPlotter', level: 3 },
        { name: 'NetFlow Analyzer (Basic)', level: 3 },
      ],
    },
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
                I'm an aspiring Network Engineer passionate about designing, implementing, and optimizing robust network infrastructures. My focus is on mastering networking technologies and protocols to build secure and efficient systems.
              </p>
              <p>
                My journey involves hands-on experience with network tools, continuous learning through certifications, and practical projects to deepen my understanding of network architectures.
              </p>
              <p>
                My goal is to contribute to scalable, secure, and high-performance network solutions that power modern connectivity and innovation.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Learning Path</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Routing & Switching',
                  'IP Addressing & Subnetting',
                  'Network Security',
                  'Network Analysis',
                  'VLANs & STP',
                  'Network Troubleshooting',
                  'Wireless LAN',
                  'Network Management',
                  'Network Automation',
                  'Network Monitoring',
                ].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-6">Networking Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {networkingSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <div
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="w-8 h-8 flex items-center justify-center bg-background rounded-md overflow-hidden p-1">
                        <Network className="w-6 h-6 text-primary" />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                      <div className="ml-auto">
                        {openSections[index] ? (
                          <ChevronUp className="h-5 w-5 text-primary" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary" />
                        )}
                      </div>
                    </div>
                    {openSections[index] && (
                      <div className="ml-11 space-y-2">
                        <p className="text-sm text-foreground/70">{skill.description}</p>
                        {skill.tools.map((tool, toolIndex) => (
                          <div key={toolIndex} className="flex items-center gap-3">
                            <div className="w-6 h-6 flex items-center justify-center bg-background rounded-md overflow-hidden p-1">
                              <Network className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm">{tool.name}</span>
                            <div className="flex ml-auto">
                              {renderStars(tool.level)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <Progress value={skill.tools[0].level * 20} className="h-1.5" />
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