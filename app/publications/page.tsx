"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileText, Award, ExternalLink } from "lucide-react";

type Publication = {
  title: string;
  authors?: string;
  journal?: string;
  year?: string;
  image?: string;
  gradient?: string;
  link?: string;
  description?: string;
  type?: "publication" | "presentation";
};

const PUBLICATIONS: Publication[] = [
  {
    title: "A contextual understanding of Just Transitions in Uttar Pradesh's brick industry",
    authors: "Bhullar, H. & Kini, P.",
    journal: "GeoProgress Journal",
    year: "2025",
    gradient: "from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-900",
    type: "publication",
    description: "Research on Just Transition in the brick kiln sector in North India, examining labor conditions and environmental impacts.",
    link: "https://www.geoprogress-edition.eu/a-contextual-understanding-of-just-transitions-in-uttar-pradeshs-brick-industry/",
  },
  {
    title: "Intersectional gendered experiences of water infrastructure: A case study of Lakshman Basti",
    authors: "Kini, P.",
    journal: "UNESCO WWAP",
    year: "2026",
    image: "/images/project-water.jpeg",
    type: "publication",
    description: "Forthcoming publication examining intersectional experiences of water access in informal settlements.",
  },
  {
    title: "Tanker, Taps, and Tanks: Case Study of Lakshman Basti",
    journal: "UNESCO WWAP Workshop",
    year: "2025",
    image: "/images/unesco-workshop.jpeg",
    type: "presentation",
    description: "Presented arguments on the reproduction of intersectionality based on religion, caste, class, and migration status in the lives of women in informal settlements in urban India. Stressed the importance of access to water infrastructure in relation to climate change.",
    link: "https://www.unesco.org/en/wwap"
  },
  {
    title: "Best Presentation Award for PhD Research",
    journal: "BFWG Presentation Day",
    year: "2024",
    image: "/images/bfwg-award.jpeg",
    type: "presentation",
    description: "Won the Best Presentation Award for PhD research work at the British Federation of Women Graduates Presentation Day.",
    link: "https://bfwg.org.uk/bfwg2/research-presentation-day/",
  },
  {
    title: "Water Practices in Urban India using a Feminist Political Ecology Approach",
    journal: "RGS-IBG Annual Conference",
    year: "2023",
    image: "/images/rgs-presentation.jpeg",
    type: "presentation",
    description: "Presented research on water practices in urban India through a feminist political ecology lens at the Royal Geographical Society conference in London.",
  },
  {
    title: "Intersectional and Intergenerational Water Practices in Urban India",
    journal: "POLLEN Conference",
    year: "2023",
    gradient: "from-violet-100 via-purple-100 to-fuchsia-100 dark:from-violet-900 dark:via-purple-900 dark:to-fuchsia-900",
    type: "presentation",
    description: "Conference presentation in Durban, South Africa, exploring intergenerational dimensions of water access and practices.",
  },
  {
    title: "Exploring Mother-Daughter Relationships in Jharkhand",
    journal: "International Population Conference",
    year: "2021",
    gradient: "from-sky-100 via-blue-100 to-indigo-100 dark:from-sky-900 dark:via-blue-900 dark:to-indigo-900",
    type: "presentation",
    description: "Presented research on intergenerational relationships and their impact on development outcomes in Jharkhand, India.",
  }
];

export default function PublicationsPage() {
  const publications = PUBLICATIONS.filter(p => p.type === "publication");
  const presentations = PUBLICATIONS.filter(p => p.type === "presentation");

  return (
    <div className="portfolio-page publications-page min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section id="publications" className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-950 dark:via-cyan-950 dark:to-blue-900 py-20">
        <div className="absolute top-10 right-20 w-48 h-48 bg-blue-200/20 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-cyan-200/20 dark:bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent mb-6">
              Publications & Presentations
            </h1>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              Research on just transitions, gender equity, and urban water infrastructure across India and international contexts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                Publications
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  {pub.image ? (
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${pub.gradient}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
                    {pub.title}
                  </h3>
                  
                  {pub.authors && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                      {pub.authors}
                    </p>
                  )}
                  
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {pub.journal} {pub.year && `(${pub.year})`}
                  </p>

                  {pub.description && (
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3">
                      {pub.description}
                    </p>
                  )}

                  {pub.link && (
                    <Link
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors text-sm"
                    >
                      Learn More <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className="bg-neutral-50 dark:bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                Conference Presentations
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentations.map((pres, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  {pres.image ? (
                    <Image
                      src={pres.image}
                      alt={pres.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${pres.gradient}`} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-neutral-100 line-clamp-2">
                    {pres.title}
                  </h3>
                  
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {pres.journal}
                  </p>

                  {pres.year && (
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                      {pres.year}
                    </p>
                  )}

                  {pres.description && (
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3 mb-3">
                      {pres.description}
                    </p>
                  )}

                  {pres.link && (
                    <Link
                      href={pres.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors text-sm"
                    >
                      Learn More <ExternalLink className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
