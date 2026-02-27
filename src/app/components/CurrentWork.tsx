import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const ricsFeatures = [
  {
    title: 'LLM-Powered Risk Intelligence',
    description:
      'Embedded AI "Key Insights" summarising 30+ signals into 4-5 actionable risk flags per manuscript, boosting editorial confidence by ~15%.',
    borderColor: 'border-l-blue-500',
    bg: 'bg-blue-50/60',
  },
  {
    title: 'Fraud Detection at Scale',
    description:
      'Reduced paper-mill fraud exposure tied to 10K+ annual retractions (~$22K avg cost/case). Scaled to handle 10K+ manuscripts/year with ~50% less manual review effort.',
    borderColor: 'border-l-green-500',
    bg: 'bg-green-50/60',
  },
  {
    title: 'Publisher Configuration Engine',
    description:
      'Enabled publishers to toggle services and adjust weight sliders across 20 parameters at journal level \u2014 giving fine-grained control over risk thresholds.',
    borderColor: 'border-l-red-500',
    bg: 'bg-red-50/60',
  },
];

const sinoFeatures = [
  {
    title: 'AI-Driven Translation & Analysis',
    description:
      'Trained on 100K+ AJE Chinese-English records, improving manuscript analysis accuracy ~18% vs baseline LLM models.',
    borderColor: 'border-l-blue-500',
    bg: 'bg-blue-50/60',
  },
  {
    title: 'Unlocking a Global Reviewer Pool',
    description:
      'Targeted 5M+ Chinese researchers (2M early-career), unlocking 10K+ new English-language reviewers \u2014 addressing a critical global bottleneck in peer review.',
    borderColor: 'border-l-green-500',
    bg: 'bg-green-50/60',
  },
  {
    title: 'Real-Time Analytics & Review Checklist',
    description:
      'Bilingual dashboard with a 12-point review checklist, reducing review time by ~50% while improving assessment quality.',
    borderColor: 'border-l-red-500',
    bg: 'bg-red-50/60',
  },
];

function ProductCard({
  tags,
  title,
  description,
  features,
  metrics,
  prototypeUrl,
  delay = 0,
}: {
  tags: string[];
  title: string;
  description: string;
  features: typeof ricsFeatures;
  metrics: { label: string; color: string }[];
  prototypeUrl?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-gray-50/70 rounded-2xl p-6 md:p-8 border border-gray-100"
    >
      {/* Top row: Tags + Prototype Link */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2 text-xs tracking-wide text-gray-500 uppercase">
          {tags.map((tag, i) => (
            <span key={i}>
              {i > 0 && <span className="mr-2">&middot;</span>}
              {tag}
            </span>
          ))}
        </div>
        {prototypeUrl && (
          <a
            href={prototypeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-blue-600 bg-white border border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-full transition-all duration-300 shadow-sm hover:shadow-md group shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-white animate-pulse" />
            View Live Prototype
            <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
        {description}
      </p>

      {/* Feature Tiles */}
      <div className="space-y-3 mb-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`border-l-4 ${feature.borderColor} ${feature.bg} rounded-lg p-4`}
          >
            <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">
              {feature.title}
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Metric Badges */}
      <div className="flex flex-wrap items-center gap-2">
        {metrics.map((metric, i) => (
          <span
            key={i}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${metric.color}`}
          >
            {metric.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function CurrentWork() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-700">What I Work On Today</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 max-w-5xl">
            Building Research Integrity Systems at{' '}
            <a
              href="https://www.highwirepress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors italic"
            >
              Highwire Press
            </a>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl">
            At MPS Ltd (Highwire Press), I built RICS — a platform that helps publishers detect research fraud and integrity risks before a paper gets published — and SinoScholar from 0&rarr;1, scaling
            integrity automation for 10,000+ manuscripts annually and unlocking 6M+ potential global
            reviewers through AI-powered platforms.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductCard
            tags={['B2B Platform', 'Research Integrity', 'AI']}
            title="RICS — Research Integrity Check System"
            description="A B2B platform checking manuscripts & author identities to catch fraud and risk before publication. Supports 50+ concurrent submissions across 4 risk categories and 20+ automated checks, integrated with 10 external APIs."
            features={ricsFeatures}
            metrics={[
              { label: '10K+ manuscripts/year', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { label: '~50% less manual review', color: 'bg-green-50 text-green-700 border-green-200' },
              { label: '+15% editorial confidence', color: 'bg-red-50 text-red-700 border-red-200' },
            ]}
            delay={0}
          />

          <ProductCard
            tags={['AI Product', 'Peer Review', '10 Languages']}
            title="SinoScholar — AI Peer Review Assistant"
            description="An AI assistant helping Mandarin researchers review English manuscripts faster and more accurately. Built E2E using AI-driven vibe-coding, deployed in 10 languages in production, informed by 300+ user interviews."
            features={sinoFeatures}
            metrics={[
              { label: '6M+ potential reviewers', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { label: '~50% faster review', color: 'bg-green-50 text-green-700 border-green-200' },
              { label: '+18% AI accuracy', color: 'bg-red-50 text-red-700 border-red-200' },
            ]}
            prototypeUrl="https://sino-scholar-ai.pages.dev/?screen=review"
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}