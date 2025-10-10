// import { Github, ExternalLink, Code2, Database, Cloud, Brain } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: 'MagicMirror² | AI-Powered Smart Mirror',
//       description: 'Modular microservices with secure facial recognition and real-time WebSocket streams',
//       techStack: ['Flask', 'React.js', 'WebSockets', 'Gemini LLM', 'OpenCV', 'ArcFace', 'Firestore', 'Firebase Storage'],
//       highlights: [
//         'Implemented computer vision algorithms for user identification',
//         'Enabled family-based profiles storing gender, body shape, preferred styles',
//         'Integrated real-time image processing with WebSockets and OpenCV',
//         'Implemented metadata tagging and dynamic upload to Google Drive',
//       ],
//       github: '#',
//       icon: Brain,
//       gradient: 'from-blue-500 to-purple-500',
//     },
//     {
//       title: 'Fashion Recommendation System',
//       description: 'AI-powered fashion recommendation with virtual try-on capabilities',
//       techStack: ['TensorFlow', 'PyTorch', 'EfficientNetB3', 'Flask', 'SQLAlchemy', 'MLflow', 'AWS', 'Ensemble Learning'],
//       highlights: [
//         'Classified user body shapes with high accuracy using CNN models',
//         'Integrated virtual try-on system using ARToolkit',
//         'Connected with Amazon API for dynamic clothing recommendations',
//         'Implemented keyword-based search and filtering logic',
//       ],
//       github: '#',
//       icon: Code2,
//       gradient: 'from-pink-500 to-rose-500',
//     },
//     {
//       title: 'Advanced Sentiment Analysis System',
//       description: 'Deep learning platform for real-time sentiment analysis',
//       techStack: ['Python', 'PyTorch', 'BERT', 'TensorFlow', 'Flask', 'Docker', 'AWS EC2', 'NLTK', 'SpaCy'],
//       highlights: [
//         'Built sentiment analysis platform with deep learning models',
//         'Fine-tuned model performance through hyperparameter optimization',
//         'Deployed Flask API via Docker on AWS EC2 with Nginx',
//       ],
//       github: '#',
//       icon: Brain,
//       gradient: 'from-green-500 to-teal-500',
//     },
//     {
//       title: 'Cloud-Based Attendance System',
//       description: 'Responsive school attendance system with real-time updates',
//       techStack: ['React.js', 'Node.js', 'Firebase Auth', 'Cloud Firestore', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Pytest'],
//       highlights: [
//         'Built responsive system with secure login and real-time updates',
//         'Implemented modular backend with RBAC authentication',
//         'Achieved 90% test coverage using Pytest',
//         'Automated deployments through CI/CD pipelines',
//       ],
//       github: '#',
//       icon: Cloud,
//       gradient: 'from-indigo-500 to-blue-500',
//     },
//     {
//       title: 'E-commerce Fraud Detection System',
//       description: 'Real-time fraud detection platform using ML',
//       techStack: ['Python', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Apache Kafka', 'PostgreSQL'],
//       highlights: [
//         'Engineered real-time fraud detection with anomaly detection',
//         'Developed Kafka-based streaming system',
//         'Integrated PostgreSQL dashboard and Jenkins pipelines',
//         'Real-time alerting for proactive fraud prevention',
//       ],
//       github: '#',
//       icon: Database,
//       gradient: 'from-orange-500 to-red-500',
//     },
//   ];

//   return (
//     <div className="min-h-screen py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16 animate-fade-in">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
//             Featured <span className="gradient-text">Projects</span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Showcasing my work in AI/ML, Full Stack Development, and Cloud Technologies
//           </p>
//         </div>

//         {/* Projects Grid */}
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group bg-card hover:bg-card-hover rounded-xl overflow-hidden shadow-lg hover-lift animate-scale-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Project Header */}
//               <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
//               <div className="p-6 md:p-8">
//                 {/* Icon and Title */}
//                 <div className="flex items-start gap-4 mb-4">
//                   <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center flex-shrink-0`}>
//                     <project.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-heading font-bold mb-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-muted-foreground">
//                       {project.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-6">
//                   {project.techStack.slice(0, 4).map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                   {project.techStack.length > 4 && (
//                     <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
//                       +{project.techStack.length - 4} more
//                     </span>
//                   )}
//                 </div>

//                 {/* Highlights */}
//                 <ul className="space-y-2 mb-6">
//                   {project.highlights.slice(0, 2).map((highlight, i) => (
//                     <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
//                       <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
//                       <span>{highlight}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Actions */}
//                 <div className="flex gap-4">
//                   <a
//                     href={project.github}
//                     className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
//                   >
//                     <Github className="w-5 h-5" />
//                     <span className="font-medium">View Code</span>
//                   </a>
//                   <a
//                     href="#"
//                     className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
//                   >
//                     <ExternalLink className="w-5 h-5" />
//                     <span className="font-medium">Live Demo</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* More Projects CTA */}
//         <div className="text-center mt-16 animate-fade-in">
//           <p className="text-lg text-muted-foreground mb-6">
//             Want to see more of my work?
//           </p>
//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300"
//           >
//             <Github className="w-5 h-5" />
//             View GitHub Profile
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import { Github, ExternalLink, Code2, Database, Cloud, Brain, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MagicMirror² | AI-Powered Smart Mirror',
      description: 'Modular microservices with secure facial recognition and real-time WebSocket streams',
      techStack: ['Flask', 'React.js', 'WebSockets', 'Gemini LLM', 'OpenCV', 'ArcFace', 'Firestore', 'Firebase Storage'],
      highlights: [
        'Implemented computer vision algorithms for user identification',
        'Enabled family-based profiles storing gender, body shape, preferred styles',
        'Integrated real-time image processing with WebSockets and OpenCV',
        'Implemented metadata tagging and dynamic upload to Google Drive',
      ],
      github: '#',
      icon: Brain,
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Fashion Recommendation System',
      description: 'AI-powered fashion recommendation with virtual try-on capabilities',
      techStack: ['TensorFlow', 'PyTorch', 'EfficientNetB3', 'Flask', 'SQLAlchemy', 'MLflow', 'AWS', 'Ensemble Learning'],
      highlights: [
        'Classified user body shapes with high accuracy using CNN models',
        'Integrated virtual try-on system using ARToolkit',
        'Connected with Amazon API for dynamic clothing recommendations',
        'Implemented keyword-based search and filtering logic',
      ],
      github: 'https://github.com/Nieldave/Fashion-Recommendation-system',
      icon: Code2,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Digital Wardrobe',
      description: 'Smart wardrobe management system with background removal and real-time sync',
      techStack: ['React', 'Flask', 'Flask-SocketIO', 'Firebase', 'Firestore', 'Firebase Storage', 'Rembg', 'OpenCV'],
      highlights: [
        'Built an AI-powered wardrobe system that removes image backgrounds for clean clothing uploads using rembg + OpenCV',
        'Integrated real-time profile and wardrobe data sync with Firebase Firestore and Storage',
        'Enabled socket-based communication between frontend and backend using Flask-SocketIO',
        'Designed structured clothing categories (gender, type, subcategories, size) for easy catalog management',
      ],
      github: 'https://github.com/monisha-rao11/Digital_Wardrobe',
      icon: Brain,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Cloud-Based Attendance System',
      description: 'Scalable attendance management platform with cloud integration and real-time tracking',
      techStack: ['React.js', 'Node.js', 'Firebase Auth', 'Cloud Firestore', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Pytest'],
      highlights: [
        'Built responsive system with secure login and real-time updates across multiple devices',
        'Implemented modular backend with role-based access control (RBAC) authentication',
        'Achieved 90% test coverage using Pytest with comprehensive unit and integration tests',
        'Automated deployments through CI/CD pipelines with GitHub Actions and Jenkins',
      ],
      github: 'https://github.com/Nieldave/Cloud-Based-Attendance-System',
      icon: Cloud,
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Firewall Implementation System',
      description: 'Network security firewall with packet filtering and advanced traffic monitoring',
      techStack: ['Python', 'Socket Programming', 'Network Security', 'Packet Analysis', 'Threading', 'JSON', 'Iptables', 'Linux'],
      highlights: [
        'Developed comprehensive firewall system with real-time packet filtering and rule-based traffic control',
        'Implemented deep packet inspection for analyzing network traffic patterns and detecting suspicious activities',
        'Built multi-threaded architecture for handling concurrent network connections and monitoring',
        'Created customizable rule engine with logging and alerting system for security events and anomaly detection',
      ],
      github: 'https://github.com/Nieldave/Firewall_Implementation',
      icon: Shield,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in AI/ML, Full Stack Development, and Cloud Technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card hover:bg-card-hover rounded-xl overflow-hidden shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6 md:p-8">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-medium">View Code</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Nieldave"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;