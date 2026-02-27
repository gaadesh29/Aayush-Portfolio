import { motion } from 'motion/react';
import { Target, TrendingUp, FlaskConical, Shield } from 'lucide-react';

const frameworks = [
  {
    icon: Target,
    title: 'Jobs To Be Done',
    description: 'Understanding what users are truly hiring a product to do—not what they say they want, but the progress they seek.',
  },
  {
    icon: TrendingUp,
    title: 'Marketplace Liquidity Thinking',
    description: 'Balancing supply and demand dynamics, optimizing for fill rates, utilization, and minimizing request loss.',
  },
  {
    icon: FlaskConical,
    title: 'Experiment → Learn → Scale',
    description: 'Build lean, test fast, measure rigorously. Let data guide iteration, then scale what works.',
  },
  {
    icon: Shield,
    title: 'Trust & Integrity Risk Mapping',
    description: 'Identifying system vulnerabilities, fraud vectors, and building safeguards that scale with user behavior.',
  },
];

export function HowIThink() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 mb-16"
        >
          <h2 className="text-5xl font-semibold tracking-tight text-gray-900">How I Think</h2>
          <p className="text-xl text-gray-600 font-normal max-w-2xl">
            Frameworks and mental models that guide my product decisions
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-5">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 hover:border-blue-200"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <framework.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{framework.title}</h3>
              <p className="text-gray-600 leading-relaxed">{framework.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
