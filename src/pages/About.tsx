import { GraduationCap, MapPin, Code, Brain } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions at the intersection of technology and creativity
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <div className="relative animate-scale-in">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl opacity-20 blur-2xl"></div>
                <img
                  src={profileImage}
                  alt="Niel Abhishek J David"
                  className="relative w-full rounded-2xl shadow-xl hover-lift"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl font-heading font-bold">
                Hi, I'm <span className="gradient-text">Niel Abhishek</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science Engineering student at PES University with a passion for 
                building innovative solutions. My journey in tech spans across full-stack development, 
                AI/ML implementations, and cloud-native applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in software testing, cybersecurity, and DevOps practices, 
                I enjoy tackling complex problems and creating scalable, user-centric applications 
                that make a real impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm focused on expanding my expertise in AI/ML while building projects 
                that combine cutting-edge technology with practical applications.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                icon: GraduationCap,
                title: 'Education',
                content: 'B.Tech CSE',
                detail: 'PES University',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Bangalore',
                detail: 'Karnataka, India',
              },
              {
                icon: Code,
                title: 'Focus',
                content: 'Full Stack',
                detail: 'Web & Mobile',
              },
              {
                icon: Brain,
                title: 'Interests',
                content: 'AI/ML',
                detail: 'Deep Learning',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card hover:bg-card-hover rounded-xl p-6 text-center space-y-3 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">
                  {item.content}
                  <span className="block text-sm mt-1">{item.detail}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Professional Summary */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Professional <span className="gradient-text">Summary</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Computer Science Engineering student with hands-on experience in software testing, 
              full stack development, cybersecurity, and AI/ML implementations. Proven expertise 
              in test automation, cloud-native application development, machine learning model 
              deployment, and security testing. Demonstrated ability to integrate DevOps practices, 
              implement CI/CD pipelines, and develop scalable microservices architectures across 
              diverse technology stacks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;