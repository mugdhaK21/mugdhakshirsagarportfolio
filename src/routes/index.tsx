import { createFileRoute } from "@tanstack/react-router";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { ArrowUpRight, Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mugdha Kshirsagar — AI/ML Software Engineer" },
      { name: "description", content: "Portfolio of Mugdha Kshirsagar — AI/ML Software Engineer with 1.5+ years building scalable AI systems, RAG prototypes, and intelligent automation." },
      { property: "og:title", content: "Mugdha Kshirsagar — AI/ML Software Engineer" },
      { property: "og:description", content: "Portfolio of Mugdha Kshirsagar — AI/ML Software Engineer building real-world AI-driven systems." },
    ],
  }),
  component: Portfolio,
});

const skills = {
  "Languages": ["Python", "JavaScript", "C++", "SQL"],
  "AI & ML": ["LLMs", "RAG", "Deep Learning", "NLP", "OpenCV", "Data Science"],
  "Frameworks": ["PyTorch", "TensorFlow", "scikit-learn", "spaCy", "Pandas", "NumPy"],
  "Web": ["React.js", "Node.js", "REST APIs", "HTML / CSS"],
  "Data": ["SQL", "MongoDB", "Matplotlib"],
  "Tooling": ["Git", "GitHub", "Zapier", "n8n", "VS Code"],
};

const experience = [
  {
    role: "Software Development Engineer",
    org: "Dassault Systèmes",
    where: "Pune, India",
    when: "Jan 2024 — May 2025",
    bullets: [
      "Led development and deployment of AI-driven solutions for 3D CAD workflows — 98% accuracy, 60% reduction in manual effort.",
      "Prototyped Generative AI and Retrieval-Augmented Generation (RAG) systems contributing to early-stage agentic AI.",
      "Delivered demos, documentation and knowledge-sharing sessions that drove internal AI adoption.",
    ],
  },
  {
    role: "Web Developer",
    org: "Pune University",
    where: "Pune, India",
    when: "Sep 2022 — Jun 2023",
    bullets: [
      "Designed and shipped a responsive departmental website with PHP, JavaScript, HTML and CSS.",
      "Integrated RESTful APIs using XAMPP, Git and modern stacks including Node.js and React.",
      "Collaborated cross-functionally to improve performance and scale of the platform.",
    ],
  },
];

const projects = [
  {
    name: "DOCSCAN",
    tagline: "Document Scanner with OCR & NER",
    body: "Intelligent document pipeline that extracts structured data from invoices, receipts and business cards. OpenCV preprocessing, Tesseract OCR, and spaCy NER exporting clean spreadsheets.",
    tags: ["OpenCV", "Tesseract", "spaCy", "Python"],
  },
  {
    name: "AI News Fetcher Agent",
    tagline: "No-code automation workflow",
    body: "End-to-end Zapier workflow that fetches, summarizes and stores daily AI news from Google News and RSS, powered by the OpenAI API with keyword filtering and Slack delivery.",
    tags: ["Zapier", "OpenAI API", "Automation"],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <SkillsSection />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight">
          Mugdha<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#work" className="hover:text-accent transition">Work</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#skills" className="hover:text-accent transition">Skills</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>
        <a
          href="mailto:mugdhakshirsagar2130@gmail.com"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition"
        >
          Get in touch <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Available for AI/ML roles
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance">
            Building <em className="text-accent not-italic font-display italic">intelligent</em> systems
            that ship to real users.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I&apos;m Mugdha Kshirsagar — an AI/ML Software Engineer with 1.5+ years
            of experience designing, shipping and scaling AI-driven products.
            Currently pursuing my Masters in AI at RMIT University, Melbourne.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition">
              See projects <ArrowUpRight className="size-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-accent transition">
              Contact
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["1.5+", "yrs in AI/ML"],
              ["98%", "model accuracy"],
              ["60%", "manual effort cut"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-primary">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="md:col-span-5 relative">
          <div className="relative aspect-square rounded-2xl overflow-hidden grain bg-secondary">
            <img
              src={heroPortrait}
              alt="Stylized portrait of Mugdha Kshirsagar"
              width={1024}
              height={1024}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-card border border-border rounded-xl px-4 py-3 shadow-sm hidden md:block">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Based in</p>
            <p className="font-display text-lg">Melbourne, AU</p>
          </div>
          <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-xl px-4 py-3 hidden md:block">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">Focus</p>
            <p className="font-display text-lg">LLMs · RAG · Agents</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Python", "PyTorch", "TensorFlow", "LLMs", "RAG", "spaCy", "OpenCV", "React", "Node.js", "MongoDB", "Automation", "Generative AI"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border bg-secondary/50 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-5">
        {row.map((t, i) => (
          <span key={i} className="mx-8 font-display text-2xl text-muted-foreground">
            {t} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 flex items-end justify-between gap-6 flex-wrap">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">— {kicker}</p>
        <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl">{title}</h2>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="About" title="A research-minded engineer with a builder's bias for shipping." />
      <div className="grid md:grid-cols-3 gap-8 text-lg leading-relaxed">
        <p>
          I work at the intersection of applied machine learning and product engineering — building
          GenAI prototypes, RAG systems, and AI tooling that integrate cleanly into real workflows.
        </p>
        <p>
          At Dassault Systèmes, I led AI features inside 3D CAD environments — measurable accuracy
          gains and meaningful time savings for engineers who use the product every day.
        </p>
        <p>
          Outside of work I publish in recommender systems research, contribute to open source
          (Hacktoberfest 2021 & 2023), and run corporate trainings on Generative AI and AI agents.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader kicker="Experience" title="Where I've built and shipped." />
        <div className="space-y-10">
          {experience.map((job) => (
            <article key={job.org} className="grid md:grid-cols-12 gap-6 pb-10 border-b border-border last:border-0">
              <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{job.when}</p>
                <p className="mt-1 text-sm text-muted-foreground">{job.where}</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl md:text-3xl">
                  {job.role} <span className="text-accent">·</span>{" "}
                  <span className="text-primary">{job.org}</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-foreground/80">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="Selected projects" title="Things I've designed, built, and broken." />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="group relative rounded-2xl border border-border bg-card p-8 hover:border-accent transition overflow-hidden"
          >
            <div className="absolute top-6 right-6 font-mono text-xs text-muted-foreground">
              0{i + 1}
            </div>
            <h3 className="font-display text-3xl">{p.name}</h3>
            <p className="mt-1 text-accent font-mono text-sm">{p.tagline}</p>
            <p className="mt-5 text-foreground/80 leading-relaxed">{p.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://github.com/mugdhaK21"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-mono text-muted-foreground hover:text-accent transition"
        >
          More on GitHub <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-3">— Toolkit</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance max-w-2xl">
            The stack I reach for.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 mb-3">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="text-sm rounded-full border border-primary-foreground/20 px-3 py-1.5 hover:bg-primary-foreground/10 transition">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const items = [
    {
      school: "RMIT University",
      degree: "Masters — Artificial Intelligence",
      where: "Melbourne, Australia",
      when: "Jul 2025 — Jun 2027",
      gpa: "GPA 3.3 / 4",
    },
    {
      school: "Pimpri Chinchwad College of Engineering",
      degree: "B.Tech — Computer Science",
      where: "Pune, India",
      when: "Jul 2020 — Jun 2024",
      gpa: "GPA 9.1 / 10",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="Education & credentials" title="Always learning, deliberately." />
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((e) => (
          <div key={e.school} className="rounded-2xl border border-border p-7 bg-card">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.when}</p>
            <h3 className="mt-2 font-display text-2xl">{e.school}</h3>
            <p className="mt-1 text-foreground/80">{e.degree}</p>
            <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
              <span>{e.where}</span>
              <span className="text-accent">·</span>
              <span>{e.gpa}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl border border-dashed border-border p-6 bg-card flex flex-wrap items-center gap-4 justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-1">Certification</p>
          <p className="font-display text-xl">Statistics Foundations — Meta, 2025</p>
        </div>
        <p className="font-mono text-xs text-muted-foreground">+ Hacktoberfest contributor (2021, 2023)</p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-secondary/40 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">— Let&apos;s talk</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-balance">
          Have a problem worth solving with AI? <em className="not-italic text-accent">Let&apos;s build it.</em>
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ContactCard icon={<Mail className="size-5" />} label="Email" value="mugdhakshirsagar2130@gmail.com" href="mailto:mugdhakshirsagar2130@gmail.com" />
          <ContactCard icon={<Phone className="size-5" />} label="Phone" value="+61 423 045 819" href="tel:+61423045819" />
          <ContactCard icon={<Linkedin className="size-5" />} label="LinkedIn" value="mugdha-kshirsagar" href="https://www.linkedin.com/in/mugdha-kshirsagar/" />
          <ContactCard icon={<Github className="size-5" />} label="GitHub" value="mugdhaK21" href="https://github.com/mugdhaK21" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group rounded-2xl bg-card border border-border p-5 hover:border-accent hover:-translate-y-0.5 transition flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="size-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-accent-foreground transition">
          {icon}
        </span>
        <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent transition" />
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
        <p className="mt-1 font-medium truncate">{value}</p>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p className="font-display text-base text-foreground">Mugdha Kshirsagar</p>
        <p className="flex items-center gap-2 font-mono text-xs">
          <MapPin className="size-3.5" /> Melbourne, Australia
        </p>
        <p className="font-mono text-xs">© {new Date().getFullYear()} — Designed & built with care.</p>
      </div>
    </footer>
  );
}
