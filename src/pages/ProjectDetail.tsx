import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Check, FileText, Server, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardContent } from '@/components/ui/card';

// Project data with unique GitHub repo links
const projectsData = {
  'containerized-backend-for-power-analytics': {
    title: 'Containerized Backend for Power Analytics',
    subtitle: 'DevOps-Driven Real-Time Monitoring Solution',
    date: 'September 2024 - November 2024',
    tags: ['Docker', 'Containerization', 'PostgreSQL', 'Flask-SocketIO', 'DevOps'],
    github: 'https://github.com/rabeehklr/EnervueNILM.git',
    overview: 'Created a Docker-based backend to process real-time energy data and serve predictions via APIs and streams, emphasizing DevOps practices for scalability and deployment efficiency.',
    requirements: [
      'Deploy isolated services for data ingestion, prediction, and API delivery',
      'Ensure real-time processing with minimal latency',
      'Maintain scalability and portability across environments',
      'Integrate persistent storage for energy data'
    ],
    technologies: [
      { name: 'Docker', description: 'Containerization for service isolation' },
      { name: 'Containerization', description: 'General practice of isolating services (via Docker Compose)' },
      { name: 'PostgreSQL', description: 'Database for storing energy data and predictions' },
      { name: 'Flask-SocketIO', description: 'API and real-time streaming framework' },
      { name: 'DevOps', description: 'Practices for deployment and system management' }
    ],
    implementation: [
      {
        "title": "Service Containerization",
        "description": "Defined containers for database, data ingestion, predictor, and API services using Docker, ensuring modularity."
      },
      {
        "title": "Orchestration Setup",
        "description": "Used Docker Compose to manage service dependencies, networking, and health checks for reliable operation."
      },
      {
        "title": "Real-Time Integration",
        "description": "Integrated Flask-SocketIO for live data streaming and PostgreSQL for persistent storage and retrieval."
      },
      {
        "title": "Data Ingestion Pipeline",
        "description": "Developed a Mechanism to ingest the received power consumption data from ESP32 into the database via a Flask endpoint."
      },
      {
        "title": "NILM Predictive Modeling",
        "description": "Deployed a CNN-LSTM model to predict appliance-specific power usage and status from aggregated data."
      },
      {
        "title": "Anomaly and Cost Analytics",
        "description": "Enabled real-time anomaly detection and cost estimation using dynamic thresholds and usage calculations."
      }
    ],
    results: 'Deployed a scalable backend with consistent real-time performance, achieving target latency and portability across environments, validated through simulated energy data processing.',
    conclusion: 'This project highlighted DevOps expertise in containerization and orchestration, preparing me for scalable system design and deployment in production environments.'
  },
  'enervue:-a-Real-time-Power-monitoring-mobile-app': {
    title: 'EnerVue: A Real-Time Power Monitoring Mobile App',
    subtitle: 'Real-Time Energy Insights Interface',
    date: 'December 2024 - February 2025',
    tags: ['Flutter', 'Firebase Auth', 'Socket.IO', 'Mobile Development'],
    github: 'https://github.com/rabeehklr/EnervueFlutter.git',
    overview: 'Developed a Flutter-based mobile app integrating real-time energy data via Socket.IO, with Firebase Auth for secure access, delivering appliance monitoring, anomaly detection, and cost insights.',
    requirements: [
      'Secure user authentication with email and password',
      'Real-time display of appliance statuses and usage metrics',
      'Anomaly detection with notifications and cost estimation features',
      'Cross-platform compatibility with a responsive UI'
    ],
    technologies: [
      { name: 'Flutter', description: 'Framework for cross-platform mobile development' },
      { name: 'Firebase Auth', description: 'Authentication for secure user access' },
      { name: 'Socket.IO', description: 'Real-time data streaming from backend' },
      { name: 'Mobile Development', description: 'Building for Android' }
    ],
    implementation: [
      {
        title: 'Authentication Module',
        description: 'Implemented Firebase Auth for email/password login with loading and error handling.'
      },
      {
        title: 'Real-Time Dashboard',
        description: 'Built a dashboard with Socket.IO integration to display live appliance data and anomalies.'
      },
      {
        title: 'Detailed Appliance Consumption and Anomaly data',
        description: 'Consumption and anomaly data of each and every appliance can be viewed .'
      },
      {
        title: 'Cost and Reporting',
        description: 'Added cost estimation using regional rates and report generation.'
      },
      {
        title: 'Notification System',
        description: 'Developed a push notification system to alert users of anomalies and usage thresholds.'
      },
      {
        title: 'UI Customization',
        description: 'Designed customizable themes for enhanced user experience.'
      }
    ],
    results: 'Delivered a responsive app with real-time updates, accurate cost projections, and anomaly alerts, successfully running on Android.',
    conclusion: 'EnerVue showcased mobile development skills and real-time system integration, offering a practical energy management tool and reinforcing UI/UX design capabilities.'
  },
  'machine-learning-model-for-energy-disaggregation': {
    title: 'Machine Learning Model for Energy Disaggregation',
    subtitle: 'Deep Learning for Appliance Usage Prediction',
    date: 'June 2024 - August 2024',
    tags: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/rabeehklr/NILM_ModelTraining.git',
    overview: 'Developed a deep learning model using a CNN-LSTM architecture to disaggregate total energy consumption into individual appliance usage, providing a foundation for non-intrusive load monitoring (NILM) applications.',
    requirements: [
      'Process electrical data to predict appliance statuses and power usage',
      'Develop a scalable model for real-time energy disaggregation',
      'Visualize training progress and performance metrics',
      'Handle synthetic or real-world energy datasets'
    ],
    technologies: [
      { name: 'Python', description: 'Core language for model development' },
      { name: 'PyTorch', description: 'Framework for building and training the CNN-LSTM model' },
      { name: 'Pandas', description: 'Data manipulation and preprocessing' },
      { name: 'NumPy', description: 'Numerical operations for data handling' },
      { name: 'Matplotlib', description: 'Visualization of training loss and metrics' }
    ],
    implementation: [
      {
        title: 'Data Preprocessing',
        description: 'Loaded and transformed energy data into time-series sequences using Pandas and NumPy for model input.'
      },
      {
        title: 'Model Architecture',
        description: 'Designed a hybrid CNN-LSTM model to extract spatial features and capture temporal dependencies in energy data.'
      },
      {
        title: 'Training and Visualization',
        description: 'Trained the model with PyTorch, optimizing for status and power prediction, and visualized results with Matplotlib.'
      },
      {
        title: 'Hyperparameter Tuning',
        description: 'Adjusted learning rates and layer sizes to optimize model performance and convergence.'
      },
      {
        title: 'Model Validation',
        description: 'Performed cross-validation to ensure robustness across different datasets.'
      },
      {
        title: 'Deployment Preparation',
        description: 'Packaged the model for integration with real-time energy monitoring systems.'
      }
    ],
    results: 'Achieved over 85% accuracy in appliance status prediction and a low error margin in power estimation, with training progress effectively visualized for analysis.',
    conclusion: 'This project solidified skills in deep learning and time-series analysis, proving the potential of AI in energy management solutions and laying groundwork for real-time applications.'
  },
  'real-time-exercise-pose-correction-system': {
    title: 'Real-Time Exercise Pose Correction System',
    subtitle: 'Computer Vision Fitness Tracking Tool',
    date: 'March 2025 - May 2025',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'Tkinter', 'Real-Time'],
    github: 'https://github.com/rabeehklr/Exercise-Pose-Detection-System.git',
    overview: 'Built a desktop application using MediaPipe and OpenCV to monitor exercise poses in real-time, providing feedback and rep counting through a Tkinter GUI for fitness improvement.',
    requirements: [
      'Real-time pose detection and angle tracking for exercises',
      'Feedback on form correctness and repetition counting',
      'Interactive GUI with live video and demo playback',
      'Data logging for exercise analysis'
    ],
    technologies: [
      { name: 'Python', description: 'Core language for application logic' },
      { name: 'OpenCV', description: 'Video capture and image processing' },
      { name: 'MediaPipe', description: 'Pose landmark detection' },
      { name: 'Tkinter', description: 'GUI framework for desktop interface' },
      { name: 'Real-Time', description: 'Processing for live feedback' }
    ],
    implementation: [
      {
        title: 'Pose Tracking',
        description: 'Integrated MediaPipe with OpenCV to detect landmarks and calculate joint angles for exercise states.'
      },
      {
        title: 'State Machine',
        description: 'Designed a state machine to track exercise phases and provide feedback on form accuracy.'
      },
      {
        title: 'GUI Development',
        description: 'Created a Tkinter interface with live video, demo playback, and rep stats, updated via threading.'
      },
      {
        title: 'Feedback Calibration',
        description: 'Calibrated angle thresholds and timing to improve feedback accuracy for various exercises.'
      },
      {
        title: 'Data Logging System',
        description: 'Implemented a logging mechanism to record exercise data for post-session analysis.'
      },
      {
        title: 'User Profile Management',
        description: 'Added functionality to save and load user-specific settings and exercise history.'
      }
    ],
    results: 'Achieved over 90% accuracy in rep counting and provided real-time feedback, with a stable GUI displaying live data and logged metrics for analysis.',
    conclusion: 'This project demonstrated computer vision and GUI development expertise, delivering a practical fitness tool and reinforcing real-time system design skills.'
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const animationRef = useRef<HTMLDivElement>(null);
  
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;
  
  useEffect(() => {
    document.title = project ? `${project.title} | Rabeeh Portfolio` : "Project Not Found";
    
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
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-end">
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
                  <div key={index} className="glassmorphism rounded-lg p-4">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
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
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <Code className="h-4 w-4 mr-2" />
                        <span>Source Code</span>
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