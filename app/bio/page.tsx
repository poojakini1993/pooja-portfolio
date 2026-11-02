"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const PROFILE = {
  name: "Pooja Kini",
  headshot: "/images/pooja-kini-homepage.jpg",
  resume: "/documents/Pooja_Kini_CV_2026.pdf",
  bio: `Pooja Kini is an interdisciplinary social researcher working across human geography, urban and environmental governance, applied research and evaluation. Her work examines how institutions, policies and infrastructure shape everyday life, distribute resources and produce unequal experiences of urban environments.

She recently submitted her PhD in Geography, Environment and Development Studies at Birkbeck, University of London (2022–2026) and was funded by Mark James Studentship. Her doctoral research, based on 12 months of ethnographic fieldwork in Jaipur, India, investigates the intersectional and multiscalar politics of water infrastructure and scarcity, with particular attention to how inequalities are produced and experienced across different scales of urban life.

Alongside her academic research, Pooja has ten years of experience designing and managing mixed-methods research, programme evaluation and monitoring, evaluation and learning (MEL) initiatives across India and the UK. She has worked with research organisations, NGOs, institutional funders and development programmes, translating evidence into practical insights for policy, programme design and organisational learning.

Her approach brings feminist, decolonial and intersectional perspectives into conversation with applied research and policy practice, with a broader interest in how research can contribute to more equitable and just forms of development.`,
};

const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Guest Teacher",
    organization: "London School of Economics (LSE)",
    location: "London, UK",
    period: "Sep 2025 – Present",
    type: "Current",
    description: [
      "Assisting with the delivery of the module Environment: Science and Society at LSE",
      "Leading small-group seminars and facilitated discussions to support student engagement with course material",
      "Provided academic support and guidance to students, including feedback on assignments and class participation"
    ]
  },
  {
    id: 2,
    title: "Postgraduate Teaching Assistant",
    organization: "University College London (UCL)",
    location: "London, UK",
    period: "Sep 2025 – Dec 2025",
    description: [
      "Assisting with the delivery of the module Geographies of Infrastructure at UCL",
      "Leading small-group seminars and facilitated discussions to support student engagement with course material",
      "Provided academic support and guidance to students, including feedback on assignments and class participation"
    ]
  },
  {
    id: 3,
    title: "Data Consultant (Part-time)",
    organization: "Woman's Trust",
    location: "London, UK",
    period: "Feb 2023 – Aug 2023; Jan 2025 – Dec 2025",
    description: [
      "Improved data systems (Oasis CRM, CORE, Excel, Power BI); transitioned from MS Access and Excel to Power BI",
      "Produced impact reports for funders, Councils, and Trustees",
      "Trained staff in internal data systems and audited data entry"
    ]
  },
  {
    id: 4,
    title: "IML Consultant (Part-time)",
    organization: "Purpose India",
    location: "India",
    period: "Oct 2023 – Aug 2024",
    description: [
      "Led research on Just Transition in the brick kiln sector in North India funded by MacArthur",
      "Designed and implemented project-level indicators, logframes, and secondary research",
      "Collaborated with partners and a national educational institute for knowledge management",
      "Developed knowledge products, co-authored a journal article (forthcoming)"
    ]
  },
  {
    id: 5,
    title: "Doctoral Researcher",
    organization: "Birkbeck, University of London",
    location: "London, UK",
    period: "Oct 2022 – Present",
    type: "Current",
    description: [
      "Leading a fully funded field-based research on intersectional and intergenerational gendered experiences of water stress in urban India, with a focus on informal settlements in Jaipur",
      "Designed and implemented a year-long qualitative study using life history interviews, focus groups, and participatory methods, engaging residents, government officials, and CSOs",
      "Applied feminist and decolonial frameworks to analyse urban climate adaptation; produced policy-relevant insights in collaboration with local NGOs and city actors",
      "Presented at international conferences (RGS-IBG, POLLEN, UNESCO WWAP); forthcoming publication with UNESCO WWAP based on research findings"
    ]
  },
  {
    id: 6,
    title: "Manager, Research and Knowledge Management",
    organization: "PCI India",
    location: "India",
    period: "Dec 2020 – Aug 2022",
    description: [
      "Led knowledge management for programmes funded by the Bill & Melinda Gates Foundation",
      "Designed and led more than 10 India-wide impact assessments for gender-focused projects, specifically on ending child marriage and violence against women",
      "Produced evidence-based learning products, policy briefs, and advocacy materials"
    ]
  },
  {
    id: 7,
    title: "National Programme Associate – Monitoring and Evaluation",
    organization: "The Hunger Project India",
    location: "India",
    period: "Aug 2018 – Nov 2020",
    description: [
      "Managed M&E for women's political leadership and early marriage prevention programmes across six states funded by BMZ, AJWS, Azim Premji Foundation",
      "Developed digital MIS in collaboration with consultants; conducted baseline, midline, and endline studies"
    ]
  },
  {
    id: 8,
    title: "Team Lead",
    organization: "CMS India",
    location: "India",
    period: "Aug 2016 – Apr 2017",
    description: [
      "Led evaluations on agriculture, health, and sanitation for programmes by Cotton Connect, AKRSP, TATA Trusts, Solidaridad, UNICEF C4D",
      "Drafted competitive proposals and designed data collection tools"
    ]
  }
];

const EDUCATION = [
  {
    id: 1,
    degree: "PhD in Geography, Environment and Development Studies",
    institution: "Birkbeck, University of London",
    period: "2022–2026",
    note: "Thesis submitted September 2026; degree pending. Funded by Mark James Studentship."
  },
  {
    id: 2,
    degree: "Master's in Sustainable Development Practice",
    institution: "TERI School of Advanced Studies",
    location: "Delhi, India",
    period: "Aug 2014 – Jun 2016"
  },
  {
    id: 3,
    degree: "Bachelor's (Honors) in Anthropology",
    institution: "Hansraj, University of Delhi",
    location: "India",
    period: "Jul 2011 – Jun 2014"
  }
];

const SKILLS = [
  {
    category: "Research and evaluation",
    items: ["Mixed-methods research design", "Programme evaluation and impact assessment", "Monitoring, evaluation and learning", "Theory of Change and logframe development", "Baseline, midline and endline studies"]
  },
  {
    category: "Research methods",
    items: ["Ethnographic research", "Semi-structured interviews and life histories", "Focus group discussions", "Participatory mapping and observation", "Survey design and quantitative analysis", "Policy and documentary analysis"]
  },
  {
    category: "Data and analytical tools",
    items: ["STATA, SPSS, Microsoft Excel and Power BI", "ATLAS.ti and NVivo"]
  },
  {
    category: "Research and policy communication",
    items: ["Policy briefs and evidence synthesis", "Evaluation and donor reports", "Peer-reviewed publications", "Stakeholder workshops and knowledge-sharing"]
  },
  {
    category: "Research areas",
    items: ["Urban and environmental governance", "Water, infrastructure and inequality", "Feminist and decolonial geography", "Gender and social justice", "Just transitions and sustainable development"]
  }
];
interface TimelineItemProps {
  item: {
    id: number;
    title?: string;
    degree?: string;
    organization?: string;
    institution?: string;
    location?: string;
    period: string;
    type?: string;
    description?: string[];
    note?: string;
  };
  index: number;
  isLeft: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index, isLeft }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      id={item.title === "Guest Teacher" ? "teaching" : undefined}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`flex gap-4 md:gap-8 items-start`}
    >
      {/* Timeline Dot - Always on left for mobile */}
      <div className="relative flex flex-col items-center flex-shrink-0 md:order-2">
        <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-600 border-4 border-white dark:border-neutral-950 shadow-lg z-10"></div>
      </div>

      {/* Content Card - Always on right for mobile, alternating on desktop */}
      <div className={`flex-1 ${isLeft ? 'md:order-1' : 'md:order-3'}`}>
        <div className="bg-white dark:bg-neutral-800 rounded-2xl p-4 md:p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-xl transition-shadow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3">
            <div className="text-left">
              <h3 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {item.title || item.degree}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm md:text-base">
                {item.organization || item.institution}
              </p>
              {item.location && (
                <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400">
                  {item.location}
                </p>
              )}
            </div>
            {item.type && (
              <span className="current-badge">
                {item.type}
              </span>
            )}
          </div>
          
          <p className="text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3 md:mb-4">
            {item.period}
          </p>

          {item.description && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-xs md:text-sm font-semibold mb-3"
              >
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                {isExpanded ? 'Show Less' : 'Show Details'}
              </button>
              
              {isExpanded && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm"
                >
                  {item.description.map((point: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </motion.ul>
              )}
            </>
          )}
          
          {item.note && (
            <p className="text-xs md:text-sm italic text-neutral-600 dark:text-neutral-400 mt-3">
              {item.note}
            </p>
          )}
        </div>
      </div>

      {/* Empty space for desktop alternating layout */}
      <div className={`hidden md:block md:flex-1 ${isLeft ? 'md:order-3' : 'md:order-1'}`}></div>
    </motion.div>
  );
};

export default function ProfilePage() {
  return (
    <div className="portfolio-page bio-page min-h-screen overflow-x-clip bg-white dark:bg-neutral-950">
      {/* Compact Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950 dark:via-cyan-950 dark:to-blue-900 py-12">
        <div className="absolute top-10 right-20 w-48 h-48 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-cyan-200/20 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"
          >
            About Pooja Kini
          </motion.h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:col-span-2 lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-900 aspect-[3/4]">
                <Image
                  src={PROFILE.headshot}
                  alt={`${PROFILE.name} headshot`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed whitespace-pre-line mb-6">
                {PROFILE.bio}
              </p>
            </div>
            
            <a
              href={PROFILE.resume}
              download
              className="cv-link about-cv-link mt-6"
            >
              <Download className="w-5 h-5" aria-hidden="true" /> Download CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto mb-4"></div>
            <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Interdisciplinary researcher with 10 years&apos; experience across India and the UK in applied research, evaluation, and knowledge management.
            </p>
          </motion.div>

          {/* Timeline Line */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-8 md:space-y-12">
              {WORK_EXPERIENCE.map((job, index) => (
                <TimelineItem
                  key={job.id}
                  item={job}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {EDUCATION.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  index={index}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {SKILLS.map((skill, index) => (
              <motion.article
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="border-t border-neutral-200 pt-5"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  {skill.category}
                </h3>
                <ul className="skills-list">
                  {skill.items.map((item) => <li className="skill-bubble" key={item}>{item}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
