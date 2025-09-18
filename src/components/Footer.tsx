import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-secondary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:+916360701051"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                <span>+91 6360701051</span>
              </a>
              <a
                href="mailto:nielabhishek6265852@gmail.com"
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                <span>nielabhishek6265852@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Bangalore 560 058</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="/" className="hover:opacity-80 transition-opacity">Home</a>
              <a href="/projects" className="hover:opacity-80 transition-opacity">Projects</a>
              <a href="/experience" className="hover:opacity-80 transition-opacity">Experience</a>
              <a href="/contact" className="hover:opacity-80 transition-opacity">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xl mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/niel-abhishek-j-david-a81b49230/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Nieldave"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:nielabhishek6265852@gmail.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-80">
            © {currentYear} Niel Abhishek J David. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;