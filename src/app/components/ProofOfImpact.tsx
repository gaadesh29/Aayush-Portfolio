import { motion } from 'motion/react';

interface Bullet {
  text: string;
  highlights: string[];
}

interface CompanyCard {
  company: string;
  role: string;
  domain: string;
  companyColor: string;
  accentBg: string;
  accentBorder: string;
  heroMetric: string;
  subtitle: string;
  bullets: Bullet[];
}

const companies: CompanyCard[] = [
  {
    company: 'LYBL (Live Your Best Life)',
    role: 'Associate PM',
    domain: 'US Healthcare',
    companyColor: 'bg-purple-600',
    accentBg: 'from-purple-50 to-indigo-50',
    accentBorder: 'border-purple-100',
    heroMetric: '0 → 2500+ paid users in 6 months',
    subtitle: 'Scaled Healthcare App from Zero with a Recommendation Engine',
    bullets: [
      {
        text: 'Built a 90% accurate question-based recommendation engine for personalised care plans, cutting doctor consultation time by 30%.',
        highlights: ['90% accurate', '30%'],
      },
      {
        text: 'Boosted activation rate by 45% by revamping patient onboarding UI/UX, identifying bottlenecks through 15+ usability tests.',
        highlights: ['45%'],
      },
      {
        text: 'Drove 20% new signups in 30 days by simplifying a 7-field signup to just 2 fields — Name & Number.',
        highlights: ['20% new signups'],
      },
      {
        text: 'Elevated notification CTR from 1.2% → 2% and lifted Daily Active Users from 15K → 25K via Clevertap campaigns.',
        highlights: ['1.2% → 2%', '15K → 25K'],
      },
      {
        text: 'Improved CSAT from 55 → 68 by reducing ticket TAT by ~85% (7 hrs → 1 hr) through help section redesign.',
        highlights: ['55 → 68'],
      },
      {
        text: 'Achieved M1 retention of 25% and feature adoption of 12% via 4 A/Bs on disease selection, design, and landing page.',
        highlights: ['M1 retention of 25%', '12%'],
      },
    ],
  },
  {
    company: 'Urban Company',
    role: 'Associate PM',
    domain: 'Beauty & Wellness',
    companyColor: 'bg-blue-600',
    accentBg: 'from-blue-50 to-cyan-50',
    accentBorder: 'border-blue-100',
    heroMetric: '0.6M+ DAU · Cart, Checkout & Chat Owner',
    subtitle: 'Driving Customer Activation & Repeat Rates at Scale',
    bullets: [
      {
        text: 'Increased real-time slot availability from 20% → 50% via matchmaking that preserved high-acceptance-rate partners for real-time orders.',
        highlights: ['20% → 50%'],
      },
      {
        text: 'Boosted partner utilisation from 1.8 → 2.4 (+33%) and job fill rate by 9% using a Branch & Bound algorithm for flexible booking slots.',
        highlights: ['+33%', '9%'],
      },
      {
        text: 'Achieved 17% rise in MAU & 3% reduction in CAC by integrating UC services with MyGate, setting up the entire booking flow in-app.',
        highlights: ['17% rise in MAU', '3% reduction in CAC'],
      },
      {
        text: 'Improved add-to-cart ratio from 1.2% → 1.9% through multiple consumer A/B tests on product detail views for salon services.',
        highlights: ['1.2% → 1.9%'],
      },
      {
        text: 'Boosted consult-to-service conversion from 20% → 36% by identifying and solving 6 glitches in the consultation scheduling journey.',
        highlights: ['20% → 36%'],
      },
      {
        text: 'Reduced average calls per order cost by 15% by leading E2E ownership of partner-customer chat for last-mile delivery instructions.',
        highlights: ['15%'],
      },
    ],
  },
  {
    company: 'Unacademy',
    role: 'Business Analyst',
    domain: 'Test Series Analytics',
    companyColor: 'bg-green-600',
    accentBg: 'from-green-50 to-emerald-50',
    accentBorder: 'border-green-100',
    heroMetric: 'Analytics & Process Improvement',
    subtitle: 'Data-Driven Strategy Across 250+ Exams & Courses',
    bullets: [
      {
        text: 'Delivered a 60% reduction in reporting time by building dashboards tracking 20+ metrics for 250+ exams & courses via SQL.',
        highlights: ['60% reduction'],
      },
      {
        text: 'Reduced in-house manual effort by 63% (~12.5 manhours/week) by outsourcing invoicing and payment processes for 500+ vendors.',
        highlights: ['63%'],
      },
      {
        text: 'Amplified learning outcomes of 5K students by ~35% by identifying ~80% cognitive gap via Python regression on 10 variables.',
        highlights: ['~35%', '~80% cognitive gap'],
      },
      {
        text: 'Drove 12% MoM growth in views, watch-time & test completion by automating KPI reporting to identify peak usage times & drop-off points.',
        highlights: ['12% MoM growth'],
      },
      {
        text: 'Improved test scores beyond SLAs by ~5% (88% → 93%) by formalising a 3-tier review process to reduce content errors.',
        highlights: ['~5% (88% → 93%)'],
      },
    ],
  },
];

function highlightText(text: string, highlights: string[]) {
  if (!highlights.length) return text;

  const parts: { text: string; isHighlight: boolean }[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let earliestIndex = remaining.length;
    let earliestHighlight = '';

    for (const h of highlights) {
      const idx = remaining.indexOf(h);
      if (idx !== -1 && idx < earliestIndex) {
        earliestIndex = idx;
        earliestHighlight = h;
      }
    }

    if (earliestHighlight) {
      if (earliestIndex > 0) {
        parts.push({ text: remaining.slice(0, earliestIndex), isHighlight: false });
      }
      parts.push({ text: earliestHighlight, isHighlight: true });
      remaining = remaining.slice(earliestIndex + earliestHighlight.length);
    } else {
      parts.push({ text: remaining, isHighlight: false });
      remaining = '';
    }
  }

  return (
    <>
      {parts.map((part, i) =>
        part.isHighlight ? (
          <span key={i} className="font-semibold text-gray-900">
            {part.text}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
}

export function ProofOfImpact() {
  return (
    <section className="py-20 bg-white" id="case-studies">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4">
            I build products that drive
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              measurable outcomes.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
            Across every role, my work has consistently moved the needle on activation, retention,
            engagement, and revenue — with numbers to prove it.
          </p>
        </motion.div>

        {/* Company Cards */}
        <div className="space-y-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${company.accentBg} rounded-2xl border ${company.accentBorder} p-8 md:p-10 lg:p-12`}
            >
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`${company.companyColor} w-2.5 h-2.5 rounded-full`} />
                    <span className="font-semibold text-gray-900 text-lg">{company.company}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full">{company.role}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-sm font-medium text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full">{company.domain}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-[1.65rem] font-semibold text-gray-900 leading-tight">
                    {company.subtitle}
                  </h3>
                </div>
                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-gray-200 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">
                      {company.heroMetric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {company.bullets.map((bullet, bIndex) => (
                  <div key={bIndex} className="flex items-start gap-3">
                    <div className="shrink-0 mt-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${company.companyColor}`} />
                    </div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {highlightText(bullet.text, bullet.highlights)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}