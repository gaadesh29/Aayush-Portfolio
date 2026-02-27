import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-2xl shadow-sm border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[980px] mx-auto px-6">
        <div className="flex items-center justify-between h-11">
          <motion.a 
            href="#" 
            className="text-[21px] font-semibold text-gray-900 -tracking-[0.01em]"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            G. Aayush Kumar
          </motion.a>
          
          <nav className="hidden md:flex items-center gap-8">
            <motion.a 
              href="#case-studies" 
              className="text-xs text-gray-900 hover:text-gray-600 transition-colors"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              Work Experience
            </motion.a>
            <motion.a 
              href="#projects" 
              className="text-xs text-gray-900 hover:text-gray-600 transition-colors"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              Case Studies
            </motion.a>
            <motion.a 
              href="#contact" 
              className="text-xs text-gray-900 hover:text-gray-600 transition-colors"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1R80-rcao1ChUUWK1OUPSVgEkyNPhoACs/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </motion.a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}