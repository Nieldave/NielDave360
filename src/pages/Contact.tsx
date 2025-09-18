import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:nielabhishek6265852@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: 'Opening your email client...',
      description: 'Your message will be sent via your default email application.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg animate-slide-up">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Send Me a <span className="gradient-text">Message</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Project Collaboration"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium shadow-glow hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in">
            {/* Direct Contact */}
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Direct <span className="gradient-text">Contact</span>
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:+916360701051"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 6360701051</p>
                  </div>
                </a>
                <a
                  href="mailto:nielabhishek6265852@gmail.com"
                  className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">nielabhishek6265852@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Bangalore 560 058, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-heading font-bold mb-6">
                Connect on <span className="gradient-text">Social</span>
              </h2>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors group"
                >
                  <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-primary text-primary-foreground rounded-xl p-8 shadow-glow">
              <h3 className="text-xl font-heading font-bold mb-3">
                Currently Available For
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Full-time opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Freelance projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span>Technical consultations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;