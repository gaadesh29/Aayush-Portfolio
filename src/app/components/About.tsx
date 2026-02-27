import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 tracking-tight text-gray-900 text-center">
            About
          </h2>
          <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
            <p>
              AI-focused Product Manager building scalable <strong className="font-semibold text-gray-900">SaaS platforms</strong> at the intersection of data, automation, and user experience.
              I lead 0→1 initiatives, turning complex systems into intuitive products that drive measurable business impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}