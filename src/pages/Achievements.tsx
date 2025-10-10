import { Trophy, Medal, Award, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Silver Medalist',
      event: 'IndiaSkills Regional 2021',
      category: 'Industrial Control',
      icon: Medal,
      color: 'from-gray-400 to-gray-600',
      description: 'Secured 2nd position in the regional round of IndiaSkills competition',
      year: '2021',
    },
    {
      title: '6th Place',
      event: 'IndiaSkills National 2022',
      category: 'Industrial Control',
      icon: Trophy,
      color: 'from-blue-400 to-blue-600',
      description: 'Achieved 6th position at the national level IndiaSkills competition',
      year: '2022',
    },
    {
      title: 'Gold Medalist',
      event: 'Karnataka Skills State 2021',
      category: 'Industrial Control',
      icon: Trophy,
      color: 'from-yellow-400 to-yellow-600',
      description: 'Won first place in the Karnataka state skills competition',
      year: '2021',
    },
    {
      title: '8th Place',
      event: 'Kalpana Hackathon',
      category: 'Innovation',
      icon: Award,
      color: 'from-purple-400 to-purple-600',
      description: 'Developed a disaster tracking and resource coordination system',
      year: '2023',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Achievements & <span className="gradient-text">Awards</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and accomplishments throughout my academic and professional journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-card hover:bg-card-hover rounded-xl overflow-hidden shadow-lg hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color}`}></div>
              
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {achievement.event}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4" />
                    <span>{achievement.category}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Competition <span className="gradient-text">Statistics</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Competitions', value: '4+', icon: Trophy },
              { label: 'Gold Medals', value: '1', icon: Medal },
              { label: 'Silver Medals', value: '1', icon: Medal },
              { label: 'National Level', value: '1', icon: Award },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-3 group"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold gradient-text">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto mt-16 text-center animate-slide-up">
          <blockquote className="text-xl md:text-2xl text-muted-foreground italic">
            "Success is not just about winning; it's about pushing boundaries, 
            learning from every experience, and constantly evolving."
          </blockquote>
          <div className="mt-4">
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;