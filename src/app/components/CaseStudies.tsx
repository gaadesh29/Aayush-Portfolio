import { motion } from 'motion/react';
import urbanCompanyLogo from 'figma:asset/0c442f021a92aa87445e776563f198c824e77c9f.png';

const caseStudies = [
  {
    title: 'Research Integrity Check Systems',
    company: 'Highwire Press',
    tags: ['Research Integrity', 'Trust Infrastructure', 'Verification Systems'],
    focus: [
      'Building end-to-end systems that make scientific and technical information trustworthy',
      'Automatic quality, authenticity, and compliance checks for researchers and institutions',
      'Creating workflows that reduce verification effort for PhD students and universities',
      'Developing the first platform of its kind to solve a billion-dollar problem in global research credibility',
    ],
    tone: 'Currently building one of the first scalable, trusted research integrity platforms in the world',
  },
  {
    title: 'Marketplace Scale & Optimization',
    company: 'Urban Company',
    logo: urbanCompanyLogo,
    tags: ['Marketplace', 'Supply-Demand Optimization'],
    focus: [
      'Real-time supply availability optimization serving 0.6M+ daily active users',
      'Booking funnel conversion improvements reducing request loss',
      'Customer-partner communication systems at scale',
      'Marketplace liquidity management across service categories',
    ],
    tone: 'Scale operations, real-time systems, marketplace economics',
  },
  {
    title: '0→1 Healthtech Product',
    company: 'LYBL',
    tags: ['Healthtech', 'Personalization', 'Early Stage Build'],
    focus: [
      'Built mental wellness platform from 0 → 2500+ paid users',
      'Recommendation engine for therapist matching based on user behavior',
      'Onboarding optimization improving activation by 3x',
      'Behavior-based engagement systems driving 65% D7 retention',
    ],
    tone: 'Early-stage product building, personalization, user psychology',
  },
  {
    title: 'Data → Learning Outcomes',
    company: 'Unacademy',
    tags: ['EdTech', 'Product Analytics'],
    focus: [
      'Improved learning outcomes by 35% using data models and personalization',
      'Built internal analytics automation reducing reporting time by 80%',
      'Designed adaptive learning paths based on proficiency and pace',
      'Led product analytics serving 2M+ learners',
    ],
    tone: 'Data-driven product thinking, measurable educational impact',
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-3">
            Work Experiences
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building products across trust systems, marketplaces, and behavior-driven platforms.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="space-y-5">
                <div>
                  {study.logo ? (
                    <div className="text-xs font-semibold mb-2 tracking-wider uppercase text-blue-600 invisible">
                      {study.company}
                    </div>
                  ) : (
                    <div className="text-xs font-semibold mb-2 tracking-wider uppercase text-blue-600">
                      {study.company}
                    </div>
                  )}
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                    {study.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {study.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="space-y-2.5">
                  {study.focus.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-700 text-base leading-relaxed">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-xs text-gray-500 italic pt-4 border-t border-gray-100">
                  {study.tone}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}