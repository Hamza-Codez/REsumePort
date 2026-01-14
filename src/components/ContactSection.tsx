import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import contact from '@/assets/contact.webp';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ha01257890@email.com',
      href: 'ha01257890@email.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 3058777185',
      href: 'tel:+923058777185'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hailey street Faisalabad, Pakistan',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="pt-20 relative bg-gradient-to-b from-slate-900/40 via-black to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-6 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Let's <span className="text-gradient bg-gradient-to-bl from-blue-100 to-slate-400/50 border-gray-300/60 ">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="fade-in-up pt-16">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6 ">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex border border-slate-400/30  items-center p-4 rounded-xl glass hover-glow group transition-all duration-300"
                >
                  <div className="w-12 h-12 border border-slate-400/40 rounded-xl bg-blue-400/20 flex items-center justify-center mr-4 group-hover:bg-blue-400/30 transition-colors">
                    <info.icon className="w-6 h-6 text-sky-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.title}</h4>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>


          <div className="fade-in-right">
            <div className="img mb-10 animate-float">
              <img src={contact} alt="Contact" className="w-[33rem] pt-6 pl-10 object-cover h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;