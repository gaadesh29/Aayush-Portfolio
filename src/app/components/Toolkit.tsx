import { motion } from 'motion/react';

const skills = [
  'AI / LLM Integration',
  'Agentic & Gen AI',
  'Vibe Coding',
  '0→1 Product Builds',
  'Product Strategy',
  'A/B Testing',
  'User Research',
  'MySQL / SQL',
  'Python',
  'Figma',
  'JIRA',
  'Mixpanel',
  'HotJar',
  'Tableau',
  'Clevertap',
  'REST APIs',
  'SaaS Platforms',
  'Agile / Scrum',
  'Roadmapping',
  'Stakeholder Management',
];

export function Toolkit() {
  return (
    <section className="py-20 bg-white" id="toolkit">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Label */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-blue-600 tracking-wide">Tools & Skills</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-10">
            The{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              toolkit
            </span>
          </h2>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="px-5 py-2.5 rounded-full bg-gray-50 border border-gray-200 text-sm md:text-base text-gray-700 font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
