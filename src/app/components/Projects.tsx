import blinkitLogo from "figma:asset/d3d7af63d4ba4388c10004f0f1ff87fe8b2a2613.png";
import spotifyLogo from "figma:asset/206d082b895ebb9e107c0d16ea75a216d34ca7fe.png";
import cultfitLogo from "figma:asset/c2a1e574daeaa603bfbd5567f20607236e86b60f.png";
import tinderLogo from "figma:asset/1f1401c9237d5846af6f10714e341fc5ff8f17f7.png";
import bookmyshowLogo from "figma:asset/1ee0dbc5fb630d17d7b6cb6b117c059c50eb910d.png";
import mediumLogo from "figma:asset/de808da6a9e1cee2bbe928d0f37d8418061c518a.png";
import tripadvisorLogo from "figma:asset/33d889bf20f76958648f8451614848c4e7f7e13d.png";
import swiggyLogo from "figma:asset/bca2c8bb3d885c987e3d58683c9184db21f76ca5.png";
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    company: 'Blinkit',
    logo: blinkitLogo,
    logoBg: 'bg-[#F8E71C]',
    fillCircle: true,
    problem: 'Increasing the Gross Order Value (GOV) Throughput per Store',
    description: 'Analyzed dark store inventory management and delivery radius optimization to reduce stockouts while maintaining 10-minute delivery promise.',
    tags: ['Operations', 'Supply Chain', 'Last-Mile'],
    caseStudyUrl: 'https://drive.google.com/file/d/1SBcGsV-xvuHVsUc3HgRPVUZl3p4QhGOh/view?usp=drive_link',
  },
  {
    company: 'Spotify',
    logo: spotifyLogo,
    logoBg: 'bg-[#191414]',
    fillCircle: true,
    problem: 'Increasing the time spent listening on the app',
    description: 'Explored engagement loops, personalized playlists, and session-based recommendations to drive longer listening sessions and reduce churn.',
    tags: ['Engagement', 'Personalization', 'Retention'],
    caseStudyUrl: 'https://drive.google.com/file/d/1bdBABy_uGmt5odE2G9DyFEcKZw-I0HQ_/view?usp=sharing',
  },
  {
    company: 'Cult.fit',
    logo: cultfitLogo,
    logoBg: 'bg-[#000000]',
    fillCircle: true,
    problem: 'Unlocking New Revenue Streams to Drive Monthly Revenue Growth',
    description: 'Deconstructed product search and recommendation algorithms to improve conversion rates and reduce zero-result searches.',
    tags: ['Discovery', 'ML/Ranking', 'E-commerce'],
    caseStudyUrl: 'https://drive.google.com/file/d/1WTbkZVOF_ZZEFSrLP_jswtMKyPbklWnA/view?usp=drive_link',
  },
  {
    company: 'Tinder',
    logo: tinderLogo,
    logoBg: 'bg-transparent',
    fillCircle: true,
    problem: 'Efficient Discovery of Meaningful Romantic Connections',
    description: 'Explored matching algorithms, profile optimization, and engagement loops to improve connection quality and user retention in the dating space.',
    tags: ['Matching', 'Engagement', 'Social'],
    caseStudyUrl: 'https://drive.google.com/file/d/1eGja3HrrfZJ-qg4n5cTbekYUTY6Mjuhp/view?usp=drive_link',
  },
  {
    company: 'BookMyShow',
    logo: bookmyshowLogo,
    logoBg: 'bg-[#E63946]',
    fillCircle: true,
    problem: 'Optimizing High-Demand Event Booking Experience to Retain Customers & Partners',
    description: 'Examined supply-side acquisition funnels and quality control mechanisms to maintain platform trust.',
    tags: ['Supply Growth', 'Quality', 'Marketplaces'],
    caseStudyUrl: 'https://drive.google.com/file/d/1GtvTEkT5ymhx1IP3-0CfyayRDlzBrPZq/view?usp=drive_link',
  },
  {
    company: 'Medium',
    logo: mediumLogo,
    logoBg: 'bg-[#000000]',
    fillCircle: true,
    problem: 'Increase the number of Monthly Active Users on Medium',
    description: 'Explored content discovery, creator monetization, and reader engagement strategies to grow the platform\'s active user base and deepen habitual reading behavior.',
    tags: ['Content Platform', 'Growth', 'Engagement'],
    caseStudyUrl: 'https://drive.google.com/file/d/1LEjnVtgdU0iSku7uEGgGxlj_fLEVGeU-/view?usp=drive_link',
  },
  {
    company: 'Tripadvisor',
    logo: tripadvisorLogo,
    logoBg: 'bg-[#34E0A1]',
    fillCircle: true,
    problem: 'Increasing User-Generated Reviews & Ratings to Drive Platform Revenue',
    description: 'Details will be added soon.',
    tags: ['TBD'],
    caseStudyUrl: 'https://drive.google.com/file/d/1luiYr3DHCFy4yT2YAnGXgqtJ8_rqKKDO/view?usp=drive_link',
  },
  {
    company: 'Swiggy',
    logo: swiggyLogo,
    logoBg: 'bg-white',
    fillCircle: true,
    problem: 'Providing Fresh and Hot Home-Cooked Meals to Users',
    description: 'Details will be added soon.',
    tags: ['TBD'],
    caseStudyUrl: 'https://drive.google.com/file/d/1SLcc3atYB_1oPb24ROG5bhoRRJDtMO0F/view?usp=drive_link',
  },
];

export function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-3">
            Problem Thinking
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep-dives into product problems—exploring systems thinking, metrics, and trade-offs.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              
              {/* Company Name */}
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 text-center transition-colors duration-300 group-hover:text-blue-600">
                {project.company}
              </h3>
              
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="group flex flex-col items-center text-center w-full"
              >
                {/* Circular Card */}
                <div className="relative mb-4">
                  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-200 overflow-hidden transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-lg group-hover:scale-105 ${project.logoBg} flex items-center justify-center cursor-pointer`}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.caseStudyUrl) {
                        window.open(project.caseStudyUrl, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    {/* Company Logo */}
                    <ImageWithFallback
                      src={project.logo}
                      alt={project.company}
                      className={project.fillCircle ? "w-full h-full object-cover drop-shadow-sm" : "w-3/5 h-3/5 object-contain drop-shadow-sm"}
                    />
                  </div>
                  
                  {/* Expand Indicator */}
                  <motion.div
                    className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shadow-sm"
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <ChevronDown className="w-4 h-4 text-gray-600" strokeWidth={2} />
                  </motion.div>
                </div>

                <p className="text-xs md:text-sm text-gray-600 mb-2 px-2">
                  {project.problem}
                </p>
              </button>

              {/* Expanded Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden w-full"
              >
                <div className="pt-3 px-2">
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed text-left">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}