import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;
      heroRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-mesh animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div 
            ref={heroRef}
            className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center transition-transform duration-200 ease-out"
          >
            {/* Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-2">
                <p className="text-primary font-medium text-lg">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-heading font-bold">
                  Niel Abhishek
                  <span className="block text-3xl md:text-5xl gradient-text mt-2">
                    J David
                  </span>
                </h1>
              </div>

              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Full Stack Developer & AI/ML Engineer
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Computer Science Engineering student with expertise in building scalable applications, 
                  implementing AI solutions, and creating exceptional user experiences.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/projects"
                  className="group px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center space-x-2"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://github.com/Nieldave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover-lift"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/niel-abhishek-j-david-a81b49230/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover-lift"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://leetcode.com/u/Niel_dave/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover-lift"
                >
                  <Code2 className="w-6 h-6" />
                </a>
                <a
                  href="mailto:nielabhishek6265852@gmail.com"
                  className="w-12 h-12 rounded-full bg-card hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover-lift"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-scale-in">
              <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -inset-4 bg-gradient-secondary rounded-full opacity-10 animate-pulse-glow"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-500 hover-lift">
                  <img
                    src={profileImage}
                    alt="Niel Abhishek J David"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full font-medium shadow-glow animate-float">
                  Open to Work
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Experience', value: '2+ Years' },
              { label: 'CGPA', value: '7.73' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;