const LSE_RESPONSIBILITIES = [
  "Facilitate seminar discussions and support students in engaging critically with key concepts, academic debates and empirical examples.",
  "Connect theoretical perspectives to contemporary social, environmental and development challenges.",
  "Provide formative feedback and support students in developing analytical arguments and academic writing.",
  "Offer individual office hours and dissertation guidance through the Methodology Surgery.",
  "Support students with qualitative and mixed-methods research design, developing research questions and strengthening their methodological approach.",
  "Participate in teaching team meetings and collaborate with module convenors on teaching and assessment planning.",
];

const UCL_RESPONSIBILITIES = [
  "Led seminar discussions engaging with feminist, postcolonial and political ecology perspectives.",
  "Supported students in critically examining relationships between infrastructure, environment, knowledge and power.",
  "Encouraged critical engagement with academic literature and the development of analytical arguments.",
  "Supported students' understanding of complex theoretical debates and their application to geographical questions.",
];

const APPROACHES = [
  {
    title: "Connecting theory and lived experience",
    text: "I encourage students to approach theoretical debates through empirical examples, contemporary issues and everyday experiences. This helps make abstract concepts accessible while retaining their analytical depth.",
  },
  {
    title: "Critical and interdisciplinary perspectives",
    text: "My teaching draws on human geography, feminist and postcolonial scholarship, political ecology and critical development studies. I encourage students to question dominant explanations, examine how knowledge is produced, and consider whose perspectives are included or marginalised.",
  },
  {
    title: "Participatory and inclusive learning",
    text: "I aim to create classroom environments where students feel able to ask questions, test ideas and learn from different perspectives. Seminar discussion, collaborative engagement and the careful use of examples are central to this approach.",
  },
  {
    title: "Developing research and analytical confidence",
    text: "I support students to formulate research questions, assess evidence, engage with qualitative and mixed-methods approaches, construct coherent arguments and communicate their ideas clearly.",
  },
];

const TEACHING_AREAS = [
  "Human geography",
  "Sustainable development",
  "Urban and environmental governance",
  "Gender, space and power",
  "Political ecology",
  "Infrastructure and everyday life",
  "Environment, science and society",
  "Feminist and postcolonial approaches to knowledge",
  "Inequality, development and social justice",
  "Qualitative and mixed-methods research",
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="heading-serif teaching-section-title">{children}</h2>;
}

function Module({ title, level }: { title: string; level: string }) {
  return (
    <li className="teaching-module">
      <span className="teaching-module-title">{title}</span>
      <span className="teaching-module-level">{level}</span>
    </li>
  );
}

export default function TeachingPage() {
  return (
    <main className="portfolio-page teaching-page">
      <header className="page-shell section-block teaching-intro">
        <p className="eyebrow">Teaching</p>
        <h1 className="heading-serif">Teaching</h1>
        <div className="teaching-intro-copy">
          <p>My teaching brings critical perspectives in human geography, environmental studies and social science into conversation with students&apos; everyday experiences and contemporary policy challenges. I aim to create inclusive, participatory learning environments in which students can question established assumptions, engage with diverse forms of knowledge, and develop the confidence to construct and communicate their own arguments.</p>
          <p>My teaching draws on feminist, postcolonial and decolonial scholarship, political ecology and critical approaches to infrastructure, development and the environment. I am particularly interested in helping students connect theoretical debates to empirical examples, and in supporting them to develop strong research questions, methodological confidence and analytical writing skills.</p>
        </div>
      </header>

      <section className="section-tint teaching-experience" aria-labelledby="teaching-experience-title">
        <div className="page-shell section-block">
          <SectionTitle><span id="teaching-experience-title">Teaching experience</span></SectionTitle>
          <div className="institution-list">
            <article className="institution-entry">
              <header className="institution-heading">
                <div>
                  <p className="eyebrow">London School of Economics and Political Science</p>
                  <h3 className="heading-serif">LSE</h3>
                </div>
                <p className="teaching-role">Guest Teacher <span aria-hidden="true">|</span> 2025–present</p>
              </header>
              <div className="institution-content">
                <div>
                  <h4>Undergraduate modules</h4>
                  <ul className="module-list">
                    <Module title="Sustainable Development (GY121)" level="First-year undergraduate" />
                    <Module title="Gender, Space and Power (GY316)" level="Third-year undergraduate" />
                  </ul>
                </div>
                <div>
                  <h4>Teaching and student support</h4>
                  <ul className="responsibility-list">{LSE_RESPONSIBILITIES.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </article>

            <article className="institution-entry">
              <header className="institution-heading">
                <div>
                  <p className="eyebrow">Department of Geography</p>
                  <h3 className="heading-serif">University College London (UCL)</h3>
                </div>
                <p className="teaching-role">Postgraduate Teaching Assistant <span aria-hidden="true">|</span> 2025</p>
              </header>
              <div className="institution-content">
                <div>
                  <h4>Modules</h4>
                  <ul className="module-list">
                    <Module title="Geographies of Infrastructure" level="Third-year undergraduate" />
                    <Module title="Environmental Knowledges" level="Master's level" />
                  </ul>
                </div>
                <div>
                  <h4>Teaching responsibilities</h4>
                  <ul className="responsibility-list">{UCL_RESPONSIBILITIES.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-shell section-block teaching-approach" aria-labelledby="teaching-approach-title">
        <SectionTitle><span id="teaching-approach-title">Teaching approach</span></SectionTitle>
        <div className="approach-list">
          {APPROACHES.map((item, index) => (
            <article className="approach-item" key={item.title}>
              <span className="approach-number" aria-hidden="true">0{index + 1}</span>
              <div><h3 className="heading-serif">{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-tint teaching-areas-section" aria-labelledby="teaching-areas-title">
        <div className="page-shell section-block">
          <SectionTitle><span id="teaching-areas-title">Areas of teaching</span></SectionTitle>
          <ul className="teaching-areas-list">{TEACHING_AREAS.map((area, index) => <li key={area}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{area}</li>)}</ul>
        </div>
      </section>

      <section className="page-shell section-block research-informed" aria-labelledby="research-informed-title">
        <div>
          <p className="eyebrow">Research-informed teaching</p>
          <SectionTitle><span id="research-informed-title">Research-informed teaching</span></SectionTitle>
        </div>
        <div className="research-informed-copy">
          <p>My teaching is informed by interdisciplinary research on urban and environmental governance, infrastructure and inequality. My doctoral research examines how water infrastructure and scarcity shape everyday life in informal settlements in Jaipur, India. Drawing on ethnographic research, this work offers opportunities to bring questions of infrastructure, environmental justice, gender, caste, class and urban inequality into discussions of broader geographical and social science debates.</p>
          <p>I use research examples to help students understand how institutions, policies and infrastructures are experienced in everyday life, and how empirical evidence can challenge abstract or universal explanations.</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-inner">
          <p>© {new Date().getFullYear()} Pooja Kini</p>
          <div className="footer-links">
            <a href="mailto:poojak.kini@gmail.com" className="text-link">Contact</a>
            <a href="https://www.linkedin.com/in/pooja-k-369452b9/" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
