import { Code, Database, Cloud, Shield, Wrench, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 78 },
        { name: 'TypeScript', level: 72 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Spring', level: 85 },
        { name: 'Hibernate', level: 82 },
        { name: 'Servlets', level: 88 },
        { name: 'Django', level: 75 },
        { name: 'Flask', level: 70 },
      ],
    },
    {
      title: 'Cloud & Databases',
      icon: Cloud,
      skills: [
        // { name: 'AWS', level: 80 },
        { name: 'MySQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'PL/SQL', level: 85 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      title: 'AI/ML & Data Science',
      icon: Shield,
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 82 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'Pandas', level: 88 },
        // { name: 'BERT/Transformers', level: 75 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 78 },
        { name: 'Jenkins', level: 75 },
        { name: 'Selenium', level: 85 },
      ],
    },
  ];

  const certifications = [
    'Linux Kernel Development',
    'AWS Educate - Introduction to Cloud',
    'Jira Work Management Fundamentals',
    'JAVA Full Stack + GenAI Course',
  ];

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
              'Agile/Scrum',
              'A/B Testing',
              'Penetration Testing',
              'OWASP ZAP',
              'Burp Suite',
              'Wireshark',
              'GitLab',
              'JIRA',
              'MLflow',
              'NLP',
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