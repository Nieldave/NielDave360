import { Code, Database, Cloud, Brain, Wrench, Server, BarChart3 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'C#', level: 90 },
    ],
  },

  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring Security', level: 86 },
      { name: 'Hibernate / JPA', level: 85 },
      { name: '.NET', level: 72 },
    ],
  },

  {
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 92 },
      { name: 'MongoDB', level: 84 },
      { name: 'Firebase Firestore', level: 88 },
      { name: 'PL/SQL', level: 86 },
    ],
  },

  {
    title: 'Cloud Technologies',
    icon: Cloud,
    skills: [
      { name: 'AWS S3', level: 84 },
      { name: 'AWS Lambda', level: 80 },
      { name: 'Microsoft Azure', level: 78 },
      { name: 'Firebase', level: 90 },
    ],
  },

  {
    title: 'AI / Machine Learning',
    icon: Brain,
    skills: [
      { name: 'TensorFlow', level: 86 },
      { name: 'PyTorch', level: 82 },
      { name: 'Scikit-learn', level: 88 },
      { name: 'OpenCV', level: 85 },
    ],
  },

  {
    title: 'Data Analytics',
    icon: BarChart3,
    skills: [
      { name: 'Power BI', level: 88 },
      { name: 'Power Automate', level: 84 },
      { name: 'Dataverse', level: 82 },
      { name: 'Pandas', level: 88 },
    ],
  },

  {
    title: 'DevOps & Tools',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Docker', level: 82 },
      { name: 'Kubernetes', level: 76 },
      { name: 'MLflow', level: 82 },
    ],
  },
];

const certifications = [
  'Linux Kernel Development',
  'AWS Educate - Introduction to Cloud',
  'Java Full Stack + GenAI',
  'Jira Work Management Fundamentals',
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 hover:bg-card-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (i * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Professional <span className="gradient-text">Certifications</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="max-w-4xl mx-auto mt-12 text-center animate-slide-up">
          <h3 className="text-2xl font-heading font-semibold mb-6">
            Additional <span className="gradient-text">Competencies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Data Structures & Algorithms',
              'System Design',
              'Microservices',
              'JWT Authentication',
              'Spring MVC',
              'Spring Data JPA',
              'WebSockets',
              'Firebase Authentication',
              'Power BI',
              'Power Automate',
              'Dataverse',
              'OpenCV',
              'MLflow',
              'Git',
              'JIRA',
              'Agile/Scrum',
              'Linux',
              'CI/CD',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;