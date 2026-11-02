import Image from "next/image";

const PROJECTS = [
  {
    title: "Intersectional Gendered Experiences of Water Stress (2022–26)",
    funder: "Mark James Studentship, Birkbeck, UoL",
    description:
      "Independent ethnographic research exploring intersectional and intergenerational gendered experiences of climate change, focusing on water practices in urban India. The project highlights the everyday challenges faced by different gender groups and proposes pathways toward more inclusive and sustainable futures.",
    image: "/images/project-water.jpeg",
  },
  {
    title: "Buniyaad — Just Transition in Brick Kiln Industry in North India (2024–25)",
    funder: "MacArthur Foundation",
    description:
      "A multi-stakeholder initiative by Purpose India connecting brick kiln workers, owners, and policymakers. The project promotes fair wages, decent working conditions, and environmental sustainability within the brick kiln sector.",
    image: "/images/project-buniyaad.jpeg",
  },
  {
    title: "Mental Health Services for Domestic Abuse Survivors in London (2023–25)",
    funder: "",
    description:
      "Monitoring and evaluation research focused on understanding the effectiveness of mental health programs for domestic abuse survivors and proposing data-driven recommendations for more inclusive interventions.",
    image: "/images/project-mentalhealth.jpeg",
  },
  {
    title: "Strengthening Mother–Daughter Relationships to End Child Marriage (2020–22)",
    funder: "Bill & Melinda Gates Foundation (BMGF)",
    description:
      "At Project Concern International (PCI) India, contributed to programs empowering adolescent girls and mothers in rural India, strengthening communication and agency to reduce child marriage rates.",
  },
  {
    title: "Status of Migrant Labour in India — Social Protection Focus (2021–22)",
    funder: "Japan International Cooperation Agency (JICA)",
    description:
      "Mixed-method research assessing the vulnerabilities of migrant workers, evaluating social safeguards in JICA-financed projects, and designing a checklist to integrate social protection measures for site workers.",
  },
  {
    title: "Strengthening Women's Advocacy in Local Self Governance in Rural India",
    funder: "Azim Premji Foundation, AJWS, Dasra, BMZ",
    description:
      "Supported The Hunger Project India's initiatives to build leadership among elected women representatives across five states, enhancing their advocacy and governance capacities.",
  },
  {
    title: "Documenting UNICEF Communication 4 Development Initiatives",
    funder: "UNICEF C4D",
    description:
      "Documentation and evaluation of communication programs implemented by UNICEF to strengthen women's participation and advocacy in local governance across rural India.",
    image: "/images/project-unicef.jpeg",
  },
];

export default function ProjectsPage() {
  return (
    <main className="portfolio-page projects-page">
      <header className="page-shell section-block projects-intro">
        <p className="eyebrow">Selected work</p>
        <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl">Research and evaluation projects</h1>
        <p className="section-lede">
          A selection of projects focused on gender, climate justice, governance and social protection across India and the UK.
        </p>
      </header>

      <section className="section-tint" aria-label="Project details">
        <div className="page-shell project-list">
          {PROJECTS.map((project, index) => (
            <article className="project-row project-detail-row" key={project.title}>
              {project.image ? (
                <div className="project-image">
                  <Image
                    src={project.image}
                    alt={`Project image for ${project.title}`}
                    fill
                    sizes="(max-width: 700px) 88vw, 34vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="project-image project-placeholder" aria-hidden="true">
                  <span>Project {String(index + 1).padStart(2, "0")}</span>
                </div>
              )}
              <div className="project-copy">
                <p className="eyebrow">Project {String(index + 1).padStart(2, "0")}</p>
                <h2 className="heading-serif text-2xl sm:text-3xl">{project.title}</h2>
                <p>{project.description}</p>
                {project.funder && <p className="project-funder"><strong>Funder:</strong> {project.funder}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
