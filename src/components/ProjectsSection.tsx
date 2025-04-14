
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import containerizedBackendImg from '../assets/images/containerizedbackend.png';
import flutterAppImg from '../assets/images/flutterapp.png';
import neuralNetworkImg from '../assets/images/neuralnetworknilm.png';

const ProjectsSection = () => {
  const navigate = useNavigate();
  const projects = [{
    id: 'containerized-backend-for-power-analytics',
    title: 'Containerized Backend for Power Analytics',
    description: 'Developed a Docker-based backend with Docker Compose orchestration, integrating PostgreSQL and Flask-SocketIO for real-time energy data processing and API delivery, emphasizing DevOps practices.',
    tags: ['Docker', 'Containerization', 'PostgreSQL', 'Flask-SocketIO', 'DevOps'],
    image: containerizedBackendImg
  }, {
    id: 'enervue:-a-Real-time-Power-monitoring-mobile-app',
    title: 'EnerVue: A Real-Time Power Monitoring Mobile App',
    description: 'Developed a Flutter-based mobile app integrating real-time energy data via Socket.IO, featuring anomaly detection, cost estimation, and report generation for energy insights.',
    tags: ['Flutter', 'Firebase Auth', 'Socket.IO', 'Mobile Development'],
    image: flutterAppImg
  }, {
    id: 'machine-learning-model-for-energy-disaggregation',
    title: 'Machine Learning Model for Energy Disaggregation',
    description: 'Built a deep learning model using a hybrid CNN-LSTM architecture to disaggregate energy consumption, enabling appliance-level usage predictions and energy monitoring.',
    tags: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib'],
    image: neuralNetworkImg
  }];
  return <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Project Highlights</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Hands-on projects demonstrating my growing skills in cloud technologies and DevOps practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <Card key={project.id} className="glassmorphism overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map(tag => <span key={tag} className="px-2 py-1 bg-secondary text-xs rounded-full text-foreground/70">
                      {tag}
                    </span>)}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-between group" onClick={() => navigate(`/project/${project.id}`)}>
                  <span>View Project</span> 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>)}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-6 group" onClick={() => navigate('/projects')}>
            Explore More Projects
          </Button>
        </div>
      </div>
    </section>;
};

export default ProjectsSection;
