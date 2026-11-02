"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROFILE = {
  name: "Pooja Kini",
  email: "poojak.kini@gmail.com",
  linkedIn: "https://www.linkedin.com/in/pooja-k-369452b9/",
  cv: "/documents/Pooja_Kini_CV_2026.pdf",
  headshot: "/images/pooja-kini-homepage.jpg",
  introduction:
    "I am a feminist and decolonial researcher examining how institutions, policies and infrastructure shape urban environments and produce unequal experiences of everyday life. My work brings critical social science into conversation with applied research, evaluation and policy engagement.",
};

const THEMES = [
  {
    number: "01",
    title: "Urban and environmental governance",
    description: "How do institutions, policies and political decisions shape cities, environments and development outcomes?",
  },
  {
    number: "02",
    title: "Inequality, inclusion and justice",
    description: "How do intersecting relations of power shape people's access to resources, services and opportunities?",
  },
  {
    number: "03",
    title: "Infrastructure and everyday life",
    description: "How do policies and programmes translate into lived experiences, and how do people navigate and respond to these interventions?",
  },
  {
    number: "04",
    title: "Research, evaluation and policy",
    description: "How can rigorous mixed-methods research, programme evaluation and evidence synthesis inform policy, strengthen interventions and support institutional learning?",
  },
];

const ENGAGEMENTS = [
  {
    src: "/images/gallery1.jpeg",
    alt: "Pooja at the short course on Gender, Development, and Environment Governance in Uppsala",
    caption:
      "Short PhD Course on Gender, Development, and Environment Governance held in August and September 2024 at Swedish University of Agricultural Science, Uppsala, Sweden, by Professor Seema Arora Jonsson.",
  },
  {
    src: "/images/rgs-presentation.jpeg",
    alt: "Presenting PhD research at the Royal Geographical Society London Postgraduate Mid-Conference",
    caption:
      "Presenting first-round findings from PhD research titled ‘Beyond tanker, taps, and tanks’ at the Royal Geographical Society London Postgraduate Mid-Conference in 2025. Funded by the European Cooperation in Science and Technology (COST).",
  },
  {
    src: "/images/unesco-workshop.jpeg",
    alt: "At a workshop organised by UNESCO WWAP and the University of Pisa",
    caption:
      "Presented arguments based on my PhD study at a workshop organised by UNESCO World Water Assessment Programme and the University of Pisa. Partly funded by UNESCO.",
  },
  {
    src: "/images/bfwg-award.jpeg",
    alt: "At the British Federation of Women Graduates Presentation Day 2025",
    caption:
      "Awarded first place at the British Federation of Women Graduates Presentation Day 2025, presenting my PhD research and engaging in conversations across disciplines.",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-heading">
      <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl">{children}</h2>
    </div>
  );
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [carouselHovered, setCarouselHovered] = React.useState(false);
  const [carouselFocused, setCarouselFocused] = React.useState(false);
  const [carouselManuallyPaused, setCarouselManuallyPaused] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState("");
  const formSubmitted = React.useRef(false);
  const formResponseTimeout = React.useRef<number | null>(null);
  const carouselPauseTimeout = React.useRef<number | null>(null);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 20 },
    defaultAnimation: { duration: 450 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion || carouselHovered || carouselFocused || carouselManuallyPaused) return;
    const interval = window.setInterval(() => {
      if (instanceRef.current) {
        const slider = instanceRef.current;
        slider.moveToIdx(slider.track.details.abs + 1, true, { duration: 450 });
      }
    }, 7000);
    return () => window.clearInterval(interval);
  }, [carouselFocused, carouselHovered, carouselManuallyPaused, instanceRef, prefersReducedMotion]);

  React.useEffect(() => () => {
    if (formResponseTimeout.current) window.clearTimeout(formResponseTimeout.current);
    if (carouselPauseTimeout.current) window.clearTimeout(carouselPauseTimeout.current);
  }, []);

  const slideAnimation = { duration: prefersReducedMotion ? 0 : 450 };
  const pauseCarousel = () => {
    setCarouselManuallyPaused(true);
    if (carouselPauseTimeout.current) window.clearTimeout(carouselPauseTimeout.current);
    carouselPauseTimeout.current = window.setTimeout(() => setCarouselManuallyPaused(false), 15000);
  };

  const pauseAndMove = (move: () => void) => {
    pauseCarousel();
    move();
  };

  const handleContactSubmit = () => {
    formSubmitted.current = true;
    setFormStatus("Sending your message…");
    if (formResponseTimeout.current) window.clearTimeout(formResponseTimeout.current);
    formResponseTimeout.current = window.setTimeout(() => {
      if (!formSubmitted.current) return;
      formSubmitted.current = false;
      setFormStatus("We couldn’t confirm that your message was received. Please try again or email me directly.");
    }, 15000);
  };

  const handleContactResponse = () => {
    if (!formSubmitted.current) return;
    formSubmitted.current = false;
    if (formResponseTimeout.current) window.clearTimeout(formResponseTimeout.current);
    setFormStatus("Thank you! Your message has been sent. I’ll get back to you soon!");
    (document.getElementById("contact-form") as HTMLFormElement | null)?.reset();
  };

  return (
    <main>
      <section id="home" className="hero-section scroll-mt-24">
        <div className="page-shell hero-grid">
          <figure className="hero-portrait">
            <Image
              src={PROFILE.headshot}
              alt="Portrait of Pooja Kini."
              fill
              priority
              sizes="(max-width: 768px) 90vw, 42vw"
              className="object-contain"
            />
          </figure>
          <div className="hero-copy">
            <p className="hero-name heading-serif">{PROFILE.name.toUpperCase()}</p>
            <h1 className="heading-serif hero-title">
              <span>Urban and environmental</span>
              <span>governance. Inequality.</span>
              <span>Everyday life.</span>
            </h1>
            <p className="hero-intro">{PROFILE.introduction}</p>
            <div className="hero-actions">
              <Link href="#research-focus" className="text-link research-focus-link">
                Research focus ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="research-focus" className="page-shell section-block research-focus-section scroll-mt-24">
        <SectionHeading>Research Focus</SectionHeading>
        <p className="research-question">
          How are societies governed and resources distributed? How can research help us understand inequality, evaluate interventions and inform more just policy and practice?
        </p>
        <div className="theme-list">
          {THEMES.map((theme) => (
            <article key={theme.number} className="theme-item">
              <span className="theme-number">{theme.number}</span>
              <div>
                <h3 className="heading-serif text-xl sm:text-2xl">{theme.title}</h3>
                <p>{theme.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="engagements" className="page-shell section-block scroll-mt-24">
        <SectionHeading>Recent Engagements</SectionHeading>
        <div
          className="engagement-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Recent research engagements"
          onMouseEnter={() => setCarouselHovered(true)}
          onMouseLeave={() => setCarouselHovered(false)}
          onPointerDown={pauseCarousel}
          onFocusCapture={() => setCarouselFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setCarouselFocused(false);
          }}
        >
          <div ref={sliderRef} className="keen-slider" role="group" aria-label="Slides">
            {ENGAGEMENTS.map((item) => (
              <figure key={item.src} className="keen-slider__slide engagement-slide">
                <div className="engagement-image">
                  <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 90vw, 56vw" className="object-contain" />
                </div>
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="carousel-controls">
            <button type="button" className="carousel-button" onClick={() => pauseAndMove(() => { const slider = instanceRef.current; if (slider) slider.moveToIdx(slider.track.details.abs - 1, true, slideAnimation); })} aria-label="Show previous engagement">
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <div className="carousel-dots" aria-label="Choose an engagement">
              {ENGAGEMENTS.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  className={`carousel-dot${currentSlide === index ? " is-current" : ""}`}
                  onClick={() => pauseAndMove(() => instanceRef.current?.moveToIdx(index, true, slideAnimation))}
                  aria-label={`Show engagement ${index + 1}`}
                  aria-pressed={currentSlide === index}
                />
              ))}
            </div>
            <button type="button" className="carousel-button" onClick={() => pauseAndMove(() => { const slider = instanceRef.current; if (slider) slider.moveToIdx(slider.track.details.abs + 1, true, slideAnimation); })} aria-label="Show next engagement">
              <ChevronRight aria-hidden="true" size={20} />
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="section-tint contact-section scroll-mt-24">
        <div className="page-shell section-block">
          <SectionHeading>Get in touch</SectionHeading>
          <p className="contact-lede">Have a question or want to discuss a collaboration? Send a note using the form or contact me directly.</p>
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSd_k3cBlVW4PqNMcpD-BAJcUwSlDautaHVmwYkca9ghKo6SHA/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleContactSubmit}
            id="contact-form"
            className="contact-form"
          >
            <div className="form-field">
              <label htmlFor="name">Name <span aria-hidden="true">*</span></label>
              <input type="text" id="name" name="entry.893244811" autoComplete="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email <span aria-hidden="true">*</span></label>
              <input type="email" id="email" name="entry.1911860327" autoComplete="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
              <textarea id="message" name="entry.2080684950" rows={5} required />
            </div>
            <button type="submit" className="button-primary">Send message</button>
            <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
          </form>
          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            title="Contact form submission"
            className="hidden"
            onLoad={handleContactResponse}
          />
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <p>© {new Date().getFullYear()} {PROFILE.name}</p>
          <div className="footer-links">
            <a href={`mailto:${PROFILE.email}`} className="text-link">Contact</a>
            <a href={PROFILE.linkedIn} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
