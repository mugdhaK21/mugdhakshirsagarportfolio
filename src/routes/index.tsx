import { createFileRoute } from "@tanstack/react-router";
import profileAsset from "@/assets/mugdha-profile.jpeg"
import {
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  Instagram,
  Sparkles,
  Award,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mugdha Kshirsagar — AI Developer & Tech Content Creator" },
      {
        name: "description",
        content:
          "Portfolio of Mugdha Kshirsagar — AI Developer, Generative AI engineer, and tech content creator based in Melbourne. Ex-Dassault Systèmes, Masters in AI @ RMIT.",
      },
      { property: "og:title", content: "Mugdha Kshirsagar — AI Developer & Tech Content Creator" },
      {
        property: "og:description",
        content:
          "AI Developer & Generative AI engineer in Melbourne. Ex-Dassault Systèmes, Masters in AI @ RMIT, Influencer Marketing @ MyCreatorMate.",
      },
      { property: "og:image", content: profileAsset},
      { name: "twitter:image", content: profileAsset},
    ],
  }),
  component: Portfolio,
});

const skills = {
  "AI & ML": [
    "Generative AI",
    "LLMs",
    "Prompt Engineering",
    "RAG",
    "Deep Learning",
    "Neural Networks",
    "NLP",
    "OpenCV",
    "Azure ML",
  ],
  Programming: ["Python", "JavaScript", "C++", "DSA", "OOP"],
  Frameworks: ["PyTorch", "TensorFlow", "scikit-learn", "spaCy", "Pandas", "NumPy"],
  Web: ["React.js", "Node.js", "REST APIs", "HTML / CSS", "PHP"],
  Data: ["SQL", "MongoDB", "Data Analytics", "Data Visualization", "Statistics"],
  "Tools & Workflow": ["Git", "GitHub", "Linux", "VS Code", "Zapier", "n8n", "XAMPP"],
  "Beyond Engineering": [
    "Influencer Marketing",
    "Creator Strategy",
    "Negotiation",
    "Content Creation",
    "Public Speaking",
  ],
};

const experience = [
  {
    role: "Influencer Marketing Manager",
    org: "MyCreatorMate",
    where: "Melbourne, Australia · Hybrid",
    when: "Mar 2026 — Present",
    tag: "Current",
    bullets: [
      "Run end-to-end influencer marketing campaigns — outreach, briefing, negotiation, onboarding and delivery.",
      "Execute multiple concurrent campaigns while keeping quality and timelines tight.",
      "Build long-term relationships with creators and align brand vision with creator voice.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Dassault Systèmes Solutions Lab",
    where: "Pune, India · On-site",
    when: "Jun 2024 — May 2025",
    bullets: [
      "Led the development and deployment of AI-driven solutions enhancing 3D CAD workflows — 98% accuracy, 60% reduction in manual effort.",
      "Prototyped Generative AI and Retrieval-Augmented Generation (RAG) systems contributing to early-stage agentic AI.",
      "Delivered demos, documentation, and internal training that drove AI tool adoption inside engineering teams.",
    ],
  },
  {
    role: "Research & Development Intern",
    org: "Dassault Systèmes Solutions Lab",
    where: "Pune, India",
    when: "Jan 2024 — Jun 2024",
    bullets: [
      "Researched and prototyped ML algorithms for production engineering systems.",
      "Built data visualization tooling to accelerate model evaluation cycles.",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "Pimpri Chinchwad College of Engineering",
    where: "Pune, India",
    when: "Aug 2023 — Dec 2023",
    bullets: [
      "Mentored juniors in programming and DSA; supported lab and coursework.",
    ],
  },
  {
    role: "Martian Intern",
    org: "Persistent Systems",
    where: "Remote",
    when: "Jun 2023 — Aug 2023",
    bullets: [
      "Completed Persistent's flagship virtual training in DSA, Linux, DBMS and Python.",
    ],
  },
  {
    role: "Web Developer",
    org: "Pune University (PCCOE)",
    where: "Pune, India",
    when: "Sep 2022 — Jul 2023",
    bullets: [
      "Designed and led the PCCOE Civil Department website using PHP, JavaScript, HTML and CSS.",
      "Collaborated with a team of developers to ship responsive, user-friendly interfaces.",
    ],
  },
];

const projects = [
  {
    name: "DOCSCAN",
    tagline: "Document scanner with OCR & NER",
    body: "Intelligent document pipeline that extracts structured data from invoices, receipts and business cards. OpenCV preprocessing, Tesseract OCR, and spaCy NER exporting clean spreadsheets.",
    tags: ["OpenCV", "Tesseract", "spaCy", "Python"],
  },
  {
    name: "AI News Fetcher Agent",
    tagline: "No-code GenAI automation",
    body: "End-to-end Zapier workflow that fetches, summarizes and stores daily AI news from Google News and RSS, powered by the OpenAI API with keyword filtering and Slack delivery.",
    tags: ["Zapier", "OpenAI API", "Automation"],
  },
  {
    name: "Recommender Systems Research",
    tagline: "Published research",
    body: "Investigated cold-start problems, data sparsity and modern recommendation techniques — published work exploring hybrid approaches to improve relevance.",
    tags: ["Research", "Recommender Systems", "ML"],
  },
  {
    name: "@beingmugdhaau",
    tagline: "Tech content creator · Instagram",
    body: "Building a personal brand at the intersection of AI, tech and student life in Australia — sharing real-world insights with a growing creator community.",
    tags: ["Content", "AI Education", "Community"],
  },
];

const certifications = [
  { name: "The Rule of 100: Personal Development with Generative AI", issuer: "LinkedIn", year: "2026" },
  { name: "Google AI Essentials V1", issuer: "Coursera · Google", year: "2025" },
  { name: "Discover the Art of Prompting", issuer: "Google", year: "2025" },
  { name: "Maximize Productivity With AI Tools", issuer: "Google", year: "2025" },
  { name: "Introduction to AI", issuer: "Google", year: "2025" },
  { name: "Structuring Machine Learning Projects", issuer: "DeepLearning.AI", year: "2025" },
  { name: "Improving Deep Neural Networks", issuer: "DeepLearning.AI", year: "2025" },
  { name: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", year: "2024" },
  { name: "Statistics Foundations", issuer: "Meta", year: "2025" },
  { name: "Python Data Analytics", issuer: "Meta", year: "2025" },
  { name: "Data Analysis with Spreadsheets and SQL", issuer: "Meta", year: "2025" },
  { name: "Introduction to AI in Azure", issuer: "Microsoft Learn", year: "2025" },
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
      <CreatorStudio />
      <SkillsSection />
      <Certifications />
      <Education />
      <Melbourne />
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
        <nav className="hidden md:flex items-center gap-7 text-sm">
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#work" className="hover:text-accent transition">Work</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#creator" className="hover:text-accent transition">Creator</a>
          <a href="#skills" className="hover:text-accent transition">Skills</a>
          <a href="#certifications" className="hover:text-accent transition">Certs</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>
        <a
          href="mailto:mugdhakshirsagar2130@gmail.com"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition"
        >
          Let&apos;s talk <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 animate-fade-up">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            <span className="size-2 rounded-full bg-accent animate-pulse" />
            Open to AI / ML roles · Melbourne
          </div>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-balance">
            AI Developer learning out loud —{" "}
            <em className="text-accent not-italic font-display italic">building</em> a future
            around AI products & a personal brand.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            I&apos;m Mugdha Kshirsagar — a tech enthusiast and AI Developer just wrapping up my
            Masters in AI at RMIT in Melbourne. I&apos;m breaking into the AU market with a vision
            to build and sell AI services of my own, and I document the whole journey as a tech
            content creator on Instagram
            <a href="https://instagram.com/beingmugdhaau" target="_blank" rel="noreferrer" className="text-accent hover:underline"> @beingmugdhaau</a>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition">
              See projects <ArrowUpRight className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mugdha-kshirsagar/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-accent transition"
            >
              <Linkedin className="size-4" /> Connect on LinkedIn
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {[
              ["1.5+", "yrs in AI/ML"],
              ["3.8K+", "LinkedIn followers"],
              ["12", "certifications"],
              ["98%", "model accuracy"],
            ].map(([k, v]) => (
              <div key={v}>
                <dt className="font-display text-3xl text-primary">{k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden grain bg-secondary shadow-xl">
            <img
              src={profileAsset.url}
              alt="Mugdha Kshirsagar in Melbourne"
              width={1200}
              height={1500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-primary-foreground">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">Currently</p>
                <p className="font-display text-lg leading-tight">Melbourne, AU</p>
              </div>
              <a
                href="https://instagram.com/beingmugdhaau"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-background/90 text-foreground px-3 py-1.5 text-xs font-medium hover:bg-background transition"
              >
                <Instagram className="size-3.5" /> @beingmugdhaau
              </a>
            </div>
          </div>
          <div className="absolute -top-5 -right-5 bg-primary text-primary-foreground rounded-xl px-4 py-3 hidden md:block shadow-lg rotate-2">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">Focus</p>
            <p className="font-display text-lg">GenAI · RAG · Agents</p>
          </div>
          <div className="absolute -bottom-5 -left-5 bg-accent text-accent-foreground rounded-xl px-4 py-3 hidden md:block shadow-lg -rotate-2">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">Studying</p>
            <p className="font-display text-lg">MS AI · RMIT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Generative AI", "LLMs", "RAG", "Prompt Engineering", "PyTorch", "TensorFlow",
    "Python", "React", "spaCy", "OpenCV", "Azure ML", "DeepLearning.AI",
    "Creator Economy", "Content Strategy", "Melbourne",
  ];
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
        <h2 className="font-display text-4xl md:text-5xl text-balance max-w-3xl">{title}</h2>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader
        kicker="About"
        title="Engineer first, storyteller always — building at the intersection of AI, product and people."
      />
      <div className="grid md:grid-cols-3 gap-8 text-lg leading-relaxed">
        <p>
          I&apos;m an AI-focused engineer fascinated by how intelligent systems can solve real,
          everyday problems. At Dassault Systèmes I worked on AI-driven automation inside 3D CAD
          workflows — measurable accuracy gains and real time saved for the engineers using the
          product every day.
        </p>
        <p>
          Right now I&apos;m deep into Generative AI, RAG and agentic systems through my MS in
          Artificial Intelligence at RMIT University in Melbourne. I&apos;m actively breaking into
          the Australian tech market — open to AI / ML roles, and quietly working towards the
          long-term vision of building and selling AI services of my own.
        </p>
        <p>
          On <a href="https://instagram.com/beingmugdhaau" target="_blank" rel="noreferrer" className="text-accent hover:underline">@beingmugdhaau</a> I create content about AI, tech and student life
          in Australia for a community of 3,800+. What drives me: combining technology, creativity
          and business — and learning out loud while I build.
        </p>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="work" className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader kicker="Experience" title="A career across AI engineering, research and the creator economy." />
        <div className="space-y-10">
          {experience.map((job) => (
            <article
              key={`${job.org}-${job.when}`}
              className="grid md:grid-cols-12 gap-6 pb-10 border-b border-border last:border-0"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{job.when}</p>
                <p className="mt-1 text-sm text-muted-foreground">{job.where}</p>
                {job.tag && (
                  <span className="inline-block mt-3 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-full bg-accent/15 text-accent">
                    {job.tag}
                  </span>
                )}
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
      <SectionHeader kicker="Selected projects" title="Things I've designed, built, and learned from." />
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

function CreatorStudio() {
  const pillars = [
    { title: "AI, demystified", body: "Breaking down GenAI, LLMs and agents into bite-sized reels for students and early-career engineers." },
    { title: "Student life in AU", body: "Honest stories from doing a Masters in AI at RMIT — applications, scholarships, settling into Melbourne." },
    { title: "Build in public", body: "Behind-the-scenes of what I'm learning — projects, interview prep, the job hunt in Australia, and the long road to building my own AI services." },
    { title: "Creator economy", body: "What I'm learning from running campaigns at MyCreatorMate — brand × creator collaboration done right." },
  ];
  const posts = [
    { topic: "Reel", title: "What is RAG, in 45 seconds", meta: "AI · Explainer" },
    { topic: "Carousel", title: "5 GenAI tools I actually use weekly", meta: "Tools · Productivity" },
    { topic: "Reel", title: "A day as an AI Masters student in Melbourne", meta: "Vlog · RMIT" },
    { topic: "Post", title: "How I landed a role at Dassault Systèmes", meta: "Career · Story" },
    { topic: "Carousel", title: "Prompt engineering, beyond the basics", meta: "GenAI · Tips" },
    { topic: "Reel", title: "Inside an influencer campaign brief", meta: "Creator · BTS" },
  ];
  return (
    <section id="creator" className="relative border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          kicker="Creator studio"
          title="A second craft — turning AI, tech and student life into stories on Instagram."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <a
              href="https://instagram.com/beingmugdhaau"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 hover:border-accent transition"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-gradient-to-tr from-accent via-primary to-accent text-primary-foreground">
                <Instagram className="size-4" />
              </span>
              <span className="font-mono text-sm">@beingmugdhaau</span>
              <ArrowUpRight className="size-4 text-muted-foreground" />
            </a>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I run <a href="https://instagram.com/beingmugdhaau" target="_blank" rel="noreferrer" className="text-accent hover:underline">@beingmugdhaau</a> as
              my creative outlet — a small but growing tech corner of Instagram where I talk about
              Generative AI, student life in Australia, and the craft of building in public.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Content creation isn&apos;t a side hustle for me — it&apos;s how I think out loud, pay
              forward what I&apos;m learning, and stay close to the audiences I build products for.
            </p>
            <dl className="grid grid-cols-3 gap-4 pt-2">
              {[
                ["IG", "@beingmugdhaau"],
                ["3.8K+", "Community"],
                ["Weekly", "Posting cadence"],
              ].map(([k, v]) => (
                <div key={v} className="rounded-xl border border-border bg-card p-4">
                  <dt className="font-display text-xl text-primary">{k}</dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://instagram.com/beingmugdhaau"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition"
              >
                <Instagram className="size-4" /> Follow on Instagram
              </a>
              <a
                href="mailto:mugdhakshirsagar2130@gmail.com?subject=Brand%20collaboration"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-accent transition"
              >
                Collab inquiry <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {posts.map((p, i) => (
                <a
                  key={p.title}
                  href="https://instagram.com/beingmugdhaau"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative aspect-square rounded-xl overflow-hidden border border-border bg-card hover:border-accent transition"
                >
                  <div
                    className={`absolute inset-0 ${
                      i % 3 === 0
                        ? "bg-gradient-to-br from-primary via-primary/80 to-accent/60"
                        : i % 3 === 1
                          ? "bg-gradient-to-tr from-accent via-accent/70 to-primary/50"
                          : "bg-gradient-to-bl from-primary/80 via-secondary to-accent/40"
                    }`}
                  />
                  <div className="absolute inset-0 grain opacity-40 mix-blend-overlay" />
                  <div className="relative h-full p-4 flex flex-col justify-between text-primary-foreground">
                    <span className="self-start font-mono text-[10px] uppercase tracking-widest bg-background/20 backdrop-blur px-2 py-0.5 rounded-full">
                      {p.topic}
                    </span>
                    <div>
                      <p className="font-display text-lg leading-tight">{p.title}</p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider opacity-80">{p.meta}</p>
                    </div>
                    <Instagram className="absolute top-3 right-3 size-4 opacity-80 group-hover:scale-110 transition" />
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-4 text-center font-mono text-xs text-muted-foreground">
              A taste of what I post — tap any tile to see the latest on Instagram.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-accent mb-3">
                <Sparkles className="size-3.5" /> Content pillar
              </div>
              <h3 className="font-display text-xl leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
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
            The stack I reach for — and the muscles around it.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <h3 className="font-mono text-xs uppercase tracking-widest opacity-60 mb-3">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="text-sm rounded-full border border-primary-foreground/20 px-3 py-1.5 hover:bg-primary-foreground/10 transition"
                  >
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

function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="Certifications" title="12 credentials. Continuous, deliberate learning." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="rounded-xl border border-border bg-card p-5 hover:border-accent transition flex gap-4"
          >
            <div className="size-10 shrink-0 rounded-lg bg-secondary flex items-center justify-center text-accent">
              <Award className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="font-medium leading-tight">{c.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {c.issuer} <span className="text-accent">·</span> {c.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const items = [
    {
      school: "RMIT University",
      degree: "Master of Science — Artificial Intelligence",
      where: "Melbourne, Australia",
      when: "Jul 2025 — Jun 2027",
      gpa: "GPA 3.3 / 4",
    },
    {
      school: "Pimpri Chinchwad College of Engineering",
      degree: "B.Tech — Computer Engineering",
      where: "Pune, India",
      when: "Jul 2020 — Apr 2024",
      gpa: "GPA 9.1 / 10",
    },
  ];
  return (
    <section className="bg-secondary/40 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader kicker="Education" title="Always learning, deliberately." />
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
      </div>
    </section>
  );
}

function Melbourne() {
  const cards = [
    {
      icon: <Users className="size-5" />,
      title: "Meetups & community",
      body: "Active in Melbourne's AI, GenAI and creator-economy meetups. Always up to grab a coffee with builders, founders and fellow students.",
    },
    {
      icon: <Sparkles className="size-5" />,
      title: "Speaking & training",
      body: "Conducted corporate trainings on AI, Generative AI and AI Agents — and love demystifying tech for student communities.",
    },
    {
      icon: <Instagram className="size-5" />,
      title: "Creator community",
      body: "Sharing AI, tech and student-in-Australia stories on @beingmugdhaau — a growing community of 3,800+ on LinkedIn and Instagram.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeader kicker="In Melbourne" title="Building, speaking, and showing up — IRL." />
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c) => (
          <div key={c.title} className="rounded-2xl border border-border p-7 bg-card">
            <div className="size-10 rounded-full bg-secondary flex items-center justify-center text-accent mb-4">
              {c.icon}
            </div>
            <h3 className="font-display text-xl">{c.title}</h3>
            <p className="mt-2 text-foreground/80 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">— Let&apos;s talk</p>
        <h2 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl text-balance">
          Have a problem worth solving with AI — or a Melbourne coffee to share?{" "}
          <em className="not-italic text-accent">Let&apos;s build it.</em>
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <ContactCard icon={<Mail className="size-5" />} label="Email" value="mugdhakshirsagar2130@gmail.com" href="mailto:mugdhakshirsagar2130@gmail.com" />
          <ContactCard icon={<Phone className="size-5" />} label="Phone" value="+61 423 045 819" href="tel:+61423045819" />
          <ContactCard icon={<Linkedin className="size-5" />} label="LinkedIn" value="mugdha-kshirsagar" href="https://www.linkedin.com/in/mugdha-kshirsagar/" />
          <ContactCard icon={<Instagram className="size-5" />} label="Instagram" value="@beingmugdhaau" href="https://instagram.com/beingmugdhaau" />
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
      className="group rounded-2xl bg-primary-foreground/5 border border-primary-foreground/15 p-5 hover:bg-primary-foreground/10 hover:-translate-y-0.5 transition flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <span className="size-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-accent">
          {icon}
        </span>
        <ArrowUpRight className="size-4 opacity-60 group-hover:opacity-100 group-hover:text-accent transition" />
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-widest opacity-60">{label}</p>
        <p className="mt-1 font-medium truncate">{value}</p>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
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
