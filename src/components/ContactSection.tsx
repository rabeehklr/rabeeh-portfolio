
import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS
      emailjs.init("y7oXXtmyERXZdBaL4");
      
      // Send email directly with EmailJS
      const response = await emailjs.send(
        "service_5bfcikw",
        "template_n8zf65m",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mohammedrabeehpt@gmail.com',
        }
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      detail: 'mohammedrabeehpt@gmail.com',
      link: 'mailto:mohammedrabeehpt@gmail.com',
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Location',
      detail: 'Malappuram, Kerala, India',
      link: 'https://maps.google.com/?q=Malappuram,Kerala,India',
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me directly or use the form below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glassmorphism rounded-lg p-6 space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="p-3 bg-secondary/50 rounded-full mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <a 
                      href={item.link} 
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      {item.detail}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glassmorphism rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/rabeehklr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary/50 rounded-md hover:bg-primary/20 transition-colors text-sm text-foreground/70 hover:text-primary flex items-center gap-2"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mohammedrabeeh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-secondary/50 rounded-md hover:bg-primary/20 transition-colors text-sm text-foreground/70 hover:text-primary flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glassmorphism rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-secondary/30 border-border focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-secondary/30 border-border focus-visible:ring-primary"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="bg-secondary/30 border-border focus-visible:ring-primary"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="bg-secondary/30 border-border focus-visible:ring-primary"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
