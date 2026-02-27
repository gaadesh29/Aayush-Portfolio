import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export function Contact() {
  const contactLinks = [
    {
      href: 'mailto:gaayushkumar@gmail.com',
      icon: Mail,
      label: 'Email',
      sublabel: 'gaayushkumar@gmail.com',
    },
    {
      href: 'tel:+919470327811',
      icon: Phone,
      label: 'Phone',
      sublabel: '+91 9470327811',
    },
    {
      href: 'https://www.linkedin.com/in/g-aayush-6160ab188/',
      icon: Linkedin,
      label: 'LinkedIn',
      sublabel: 'Connect with me',
      external: true,
    },
    {
      href: 'https://github.com/GAAYUSHKR',
      icon: Github,
      label: 'GitHub',
      sublabel: 'Check out my AI projects',
      external: true,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight text-gray-900">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Whether you have a PM role in mind, want to collaborate on something ambitious, or just want to talk product — I'm always happy to connect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-200 min-w-[240px]"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                  <link.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-gray-900">
                    {link.label}
                  </div>
                  <div className="text-xs text-gray-600">{link.sublabel}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}