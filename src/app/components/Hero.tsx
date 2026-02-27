import { motion } from 'motion/react';
import profilePic from 'figma:asset/73e26863efeab5c1fd99b0513258258b06ce96a3.png';
import isbLogo from 'figma:asset/94c969912b1204730c8b660acc560fc7740de4ae.png';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Exciting animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-blue-400/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Overlay to soften the effect */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
      </div>
      
      <div className="relative max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        {/* Main content container with improved spacing */}
        <div className="flex flex-col items-center">
          {/* Profile image with enhanced design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="relative mb-8"
          >
            {/* Gradient glow effect behind profile */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-full blur-2xl opacity-20 scale-110" />
            
            <motion.img 
              src={profilePic}
              alt="G. Aayush Kumar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-2xl ring-4 ring-white/50"
            />
          </motion.div>

          {/* Name with larger typography */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-[0.95]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          >
            G. Aayush Kumar
          </motion.h1>

          {/* Role badge with sophisticated styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col items-center mb-6"
          >
            {/* Removed Product Manager badge */}
          </motion.div>

          {/* Experience badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-50 border border-blue-100">
              <span className="text-base md:text-lg font-semibold text-blue-700">5 years experience</span>
              <span className="w-1 h-1 rounded-full bg-blue-300" />
              <span className="text-base md:text-lg font-semibold text-blue-700">~4 years in PM</span>
            </div>
          </motion.div>

          {/* ISB credentials with enhanced design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2">
              <a
                href="https://www.isb.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-gray-200/60 hover:border-gray-300 hover:shadow-md transition-all duration-300 group"
              >
                <img 
                  src={isbLogo} 
                  alt="ISB" 
                  className="h-7 w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity drop-shadow-sm"
                />
                <div className="flex flex-col items-start">
                  <span className="text-sm md:text-base text-gray-900 font-medium group-hover:text-gray-900 transition-colors">PGP (MBA) · IT & Strategy · Class of 2025</span>
                  <span className="text-xs text-gray-500">Indian School of Business (ISB) · GMAT 760, Top 1%</span>
                </div>
              </a>
            </div>
          </motion.div>
          
          {/* Main headline with massive typography */}
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-gray-900 mb-8 leading-[1.08] max-w-5xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          >
            Led 0→1 product builds across{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent font-bold">platforms, marketplaces, and healthcare</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 opacity-20 blur-xl -z-10" aria-hidden="true"></span>
            </span>
          </motion.h2>
          
          {/* Supporting text with better hierarchy */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
          >
            Designing intelligent, scalable systems at the intersection of AI, trust, and real-world user workflows.
          </motion.p>
          
          {/* Companies worked with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.75 }}
            className="mb-12"
          >
            <p className="text-sm text-gray-500 mb-3 text-center">Managed and shipped products across:</p>
            <div className="flex items-center gap-3 text-base md:text-lg font-medium text-gray-700">
              <a href="https://www.highwirepress.com/solutions/highwire-jcore/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Highwire Press</a>
              <span className="text-gray-300">•</span>
              <a href="https://www.urbancompany.com/delhi-ncr?srsltid=AfmBOoqjiBqnn6zMWhq4higQzIrQ1W3xGcpoYV1t0fEjVVl3b-y9i4I7" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Urban Company</a>
              <span className="text-gray-300">•</span>
              <a href="https://www.lybl.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LYBL</a>
              <span className="text-gray-300">•</span>
              <a 
                href="https://unacademy.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors duration-300 cursor-pointer border-b border-gray-400/30 hover:border-blue-400/50"
              >
                Unacademy
              </a>
            </div>
          </motion.div>
          
          {/* Enhanced CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
          >
            <motion.a 
              href="#case-studies" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full text-base font-semibold hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Business Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full text-base font-semibold hover:border-gray-900 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}