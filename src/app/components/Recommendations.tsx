import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import joshuaImg from 'figma:asset/d7c0ec50da53911878f46fd53c809cb03adb5a7f.png';
import tonyImg from 'figma:asset/cb64d39cc7ba5c84d59cafcdf191c64bbd347987.png';
import highwireLogo from 'figma:asset/daaad6e423c8d9bd8035c32a711207d6c50254ee.png';

const recommendations = [
  {
    name: 'Tony Alves',
    title: 'Senior Vice President, Product Management',
    company: 'HighWire Press, Inc.',
    relationship: 'Tony was senior to G. but didn\'t manage G. directly',
    date: 'February 24, 2026',
    image: tonyImg,
    linkedin: 'https://www.linkedin.com/in/tonyhopedale/',
    quote: [
      'I had the pleasure of having Aayush Gogula on my team in the HighWire Press platforms product group, where he served as a Product Manager and consistently demonstrated strong product instincts, creativity, and execution.',
      'He did outstanding work leading the development of prototypes for two innovative modules in the scholarly communications publishing space. The first, Research Integrity Compass, brought together multiple research integrity check tools — both third-party and HighWire-developed — into a single, unified dashboard. This was a thoughtful and practical approach to a growing industry need, and it reflected his ability to understand complex workflows and translate them into usable product concepts.',
      'The second, SinoScholar, was especially impressive in both vision and purpose. It is an AI agent designed to support non-English-speaking and early-career researchers in China as they participate in peer review. The goal of helping expand and diversify the peer reviewer pool — while lowering language and experience barriers — is exactly the kind of forward-looking product thinking our industry needs, and Aayush helped bring that concept to life in a meaningful way. His work on SinoScholar also stood out for the effective use of vibe-coding as part of the prototyping process, which helped accelerate experimentation and translate ideas into working product concepts quickly.',
      'Across both projects, Aayush showed the ability to work at the intersection of product strategy, user needs, and emerging technology. He is thoughtful, mission-driven, and highly capable, and I would strongly recommend him to any organization looking for a product leader who can innovate in complex, high-impact environments.',
    ],
  },
  {
    name: 'Joshua Routh',
    title: 'Product Director',
    company: 'HighWire Press',
    relationship: 'Joshua managed G. directly',
    date: 'February 24, 2026',
    image: joshuaImg,
    linkedin: 'https://www.linkedin.com/in/joshuarouth/',
    quote: [
      'I gave Aayush some highly complex Product work, and was impressed by how he took complete ownership for it. The output was exactly what we needed, demonstrating excellent understanding of the design process. He is a safe pair of hands, and a pleasure to work with.',
    ],
  },
];

export function Recommendations() {
  return (
    <section className="py-20 bg-white" id="recommendations">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-start justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-violet-600" />
              <span className="text-sm font-medium text-violet-600 tracking-wide">
                Recommendations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-3">
              What my{' '}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                peers
              </span>{' '}
              say
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl">
              Recommendations from leaders I've worked closely with.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {recommendations.map((rec, index) => (
            <motion.div
              key={rec.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 lg:p-12"
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 md:top-10 md:right-10">
                <Quote className="w-8 h-8 text-violet-200" />
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={rec.image}
                  alt={rec.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {rec.linkedin ? (
                      <a
                        href={rec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-600 transition-colors underline decoration-gray-300 underline-offset-2 hover:decoration-violet-400"
                      >
                        {rec.name}
                      </a>
                    ) : (
                      rec.name
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {rec.title} at {rec.company}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {rec.date} · {rec.relationship}
                  </p>
                </div>
              </div>

              {/* Quote Text */}
              <div className="space-y-4">
                {rec.quote.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-gray-600 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}