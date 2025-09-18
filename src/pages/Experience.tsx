import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'Indian Institute of Science (IISc)',
      location: 'Bengaluru',
      duration: 'Feb 2025 – May 2025',
      description: [
        'Developed "MagicMirror²", an AI-powered personalized fashion advisor using OpenCV and TensorFlow',
        'Built recommendation system for outfits based on weather, occasion, and user preferences',
        'Integrated Firebase for user authentication and Google Cloud for hosting and scalability',
        'Integrated Gemini LLM and OpenCV/ArcFace for personalized UX; set up A/B testing for behavior modeling',
        'Developed cloud-connected CI/CD pipelines',
      ],
      current: true,
    },
    {
      title: 'Test Engineer',
      company: 'Ducom Instruments',
      location: 'Bengaluru',
      duration: 'Feb 2022 – Sept 2022',
      description: [
        'Developed Python automation scripts for data extraction and visualization, reducing report time by 40%',
        'Enhanced analysis precision by 15% with statistical tools, ensuring ISO/ASTM compliance',
        'Collaborated with developers to improve QA coverage, implementing validation for complex logic and UI workflows',
      ],
      current: false,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions and gaining hands-on experience in cutting-edge technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-glow">
                  {exp.current && (
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="ml-20 bg-card hover:bg-card-hover rounded-xl p-6 md:p-8 shadow-lg hover-lift">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Current Badge */}
                  {exp.current && (
                    <div className="inline-block px-3 py-1 bg-gradient-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
                      Current Position
                    </div>
                  )}

                  {/* Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;