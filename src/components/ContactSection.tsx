
import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Define form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize the form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });
  
  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key (before sending)
      emailjs.init("y7oXXtmyERXZdBaL4");
      
      // Send the email using EmailJS
      await emailjs.send(
        "service_5bfcikw",  // Service ID
        "template_n8zf65m",  // Template ID
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        }
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset the form after successful submission
      form.reset();
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="glassmorphism rounded-lg p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field}
                            className="bg-secondary/30 border-border focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field}
                            className="bg-secondary/30 border-border focus-visible:ring-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How can I help you?" 
                          {...field}
                          className="bg-secondary/30 border-border focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Your message here..." 
                          rows={5}
                          {...field}
                          className="bg-secondary/30 border-border focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} 
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
