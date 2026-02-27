import { motion } from 'motion/react';
import { Music as MusicIcon } from 'lucide-react';
import soundcloudLogo from "figma:asset/1ca290c9f87ab14c43ec293af0ca58d99aee56f7.png";

export function Music() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Premium Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gray-100 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1574988846886-a066407f9f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMG1peGluZyUyMGNvbnNvbGUlMjBkYXJrJTIwbmVvbnxlbnwxfHx8fDE3NzIwOTI0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/95 to-gray-100/85" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-gray-100/60" />
            </div>

            {/* Decorative gradient accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-200/30 to-pink-200/25 rounded-full blur-3xl" />

            <div className="relative z-10 p-10 md:p-14">
              {/* Equalizer decoration */}
              <div className="flex items-end gap-[3px] mb-8 h-10">
                {[0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 0.3, 0.75, 0.55, 0.85, 0.45, 0.65, 0.95, 0.35, 0.78, 0.5, 0.88, 0.42, 0.72, 0.6, 0.92, 0.48, 0.82].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 rounded-full"
                    style={{
                      background: `linear-gradient(to top, ${
                        i % 3 === 0 ? '#f97316, #ec4899' :
                        i % 3 === 1 ? '#8b5cf6, #3b82f6' :
                        '#06b6d4, #a855f7'
                      })`,
                    }}
                    initial={{ height: '15%' }}
                    animate={{ height: [`${h * 100}%`, `${h * 30}%`, `${h * 100}%`] }}
                    transition={{
                      duration: 0.8 + i * 0.1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>

              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-6 shadow-sm cursor-pointer select-none"
                whileHover={{ scale: 1.05, boxShadow: '0 4px 20px rgba(147, 51, 234, 0.15)' }}
                whileTap={{ scale: 0.95, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <MusicIcon className="w-5 h-5 text-purple-600" strokeWidth={2} />
                </motion.div>
                <span className="text-sm font-semibold text-gray-600 tracking-wide">Beyond Product</span>
                <motion.span
                  className="text-xs"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  🎧
                </motion.span>
              </motion.div>

              {/* Main Content */}
              <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-5 leading-tight tracking-tight">
                Music & Creative Outlet
              </h3>
              
              <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl">
                I pursue music as a creative outlet and occasionally DJ at clubs or private gatherings. 
                Music helps me think in real-time feedback loops, read the room, and understand audience behaviour — insights that influence my product thinking.
              </p>

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* SoundCloud Link */}
                <motion.a
                  href="https://soundcloud.com/g-aayush-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-gray-200 hover:border-orange-300 shadow-sm hover:shadow-md hover:shadow-orange-100 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon container */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md group-hover:shadow-orange-300/40 transition-all duration-300">
                    <img src={soundcloudLogo} alt="SoundCloud" className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Text */}
                  <div className="relative z-10 flex-1">
                    <span className="text-sm text-gray-900 font-semibold">SoundCloud</span>
                    <p className="text-xs text-gray-500">Listen to mixes</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="relative z-10">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>

                {/* YouTube Link */}
                <motion.a
                  href="https://youtu.be/ruGCdxaD1u8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-gray-200 hover:border-red-300 shadow-sm hover:shadow-md hover:shadow-red-100 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon container */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-sm group-hover:shadow-md group-hover:shadow-red-300/40 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <div className="relative z-10 flex-1">
                    <span className="text-sm text-gray-900 font-semibold">YouTube</span>
                    <p className="text-xs text-gray-500">Watch performances</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="relative z-10">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>

                {/* Instagram Link */}
                <motion.a
                  href="https://www.instagram.com/gakrecords?igsh=MTYwZmJ1YjYxb3ZlbQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-gray-200 hover:border-pink-300 shadow-sm hover:shadow-md hover:shadow-pink-100 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon container */}
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-sm group-hover:shadow-md group-hover:shadow-pink-300/40 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <div className="relative z-10 flex-1">
                    <span className="text-sm text-gray-900 font-semibold">Instagram</span>
                    <p className="text-xs text-gray-500">Follow @gakrecords</p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="relative z-10">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}