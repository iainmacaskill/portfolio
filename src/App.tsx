const SECONDARY_PROJECTS = [
  {
    tag: '02',
    title: "Minecraft with Claude Code: a parent's guide",
    description:
      'A one-page guide to running a safe family Minecraft server at home, with an AI builder that turns "build us a waterpark" into a real one in twenty minutes. Real logins only, a guest list controlled name by name, every join logged.',
    href: 'https://iainmacaskill.github.io/kids-minecraft-claude-code/',
    linkLabel: 'Read the guide',
  },
  {
    tag: '03',
    title: 'Wing foil performance analysis',
    description:
      'Six months of Garmin GPS data (around 110,000 points across 22 sessions) turned into a measured answer: longest unbroken flight went from 78 seconds in January to 23 minutes in June. Flight detection, speed analysis and offshore wind data, matched and visualised.',
  },
  {
    tag: '04',
    title: 'Second brain pipelines',
    description:
      'Local, zero-cost pipelines that turn meeting audio and podcast archives into searchable, linked knowledge bases: automatic transcription with speaker recognition, then ingestion into a structured vault an LLM can query and maintain.',
  },
]

function FeaturedIllustration() {
  return (
    <svg
      viewBox="0 0 480 240"
      className="h-full w-full"
      role="img"
      aria-label="Abstract diagram of the job search and CV drafting pipeline"
    >
      <rect width="480" height="240" fill="var(--color-paper)" />
      <g stroke="var(--color-navy-mid)" strokeWidth="1" opacity="0.35">
        <line x1="60" y1="40" x2="60" y2="200" />
        <line x1="180" y1="40" x2="180" y2="200" />
        <line x1="300" y1="40" x2="300" y2="200" />
        <line x1="420" y1="40" x2="420" y2="200" />
      </g>
      <g stroke="var(--color-navy-deep)" strokeWidth="1.5" fill="none">
        <line x1="60" y1="120" x2="180" y2="80" />
        <line x1="180" y1="80" x2="300" y2="150" />
        <line x1="300" y1="150" x2="420" y2="100" />
      </g>
      <g fill="var(--color-navy-deep)">
        <circle cx="60" cy="120" r="7" />
        <circle cx="180" cy="80" r="7" />
        <circle cx="300" cy="150" r="7" />
        <circle cx="420" cy="100" r="7" />
      </g>
      <g
        fill="var(--color-navy-mid)"
        fontFamily="var(--font-mono)"
        fontSize="10"
        letterSpacing="0.08em"
      >
        <text x="36" y="150">
          FIND
        </text>
        <text x="152" y="65">
          SCORE
        </text>
        <text x="270" y="180">
          DRAFT
        </text>
        <text x="392" y="130">
          TRACK
        </text>
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="479"
        height="239"
        fill="none"
        stroke="var(--color-navy-deep)"
        strokeOpacity="0.15"
      />
    </svg>
  )
}

function TopRail() {
  return (
    <div className="sticky top-0 z-10 border-b border-navy-deep/10 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-navy-mid">
          <span className="h-1.5 w-1.5 rounded-full bg-navy-light" aria-hidden="true" />
          Available for contract
        </div>
        <div className="flex gap-6 font-mono text-[11px] uppercase tracking-widest">
          <a
            href="https://www.linkedin.com/in/iainmacaskill/"
            className="text-navy-mid transition-colors hover:text-navy-light"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/iainmacaskill"
            className="text-navy-mid transition-colors hover:text-navy-light"
          >
            GitHub
          </a>
          <a
            href="mailto:i.macaskill@gmail.com"
            className="text-navy-mid transition-colors hover:text-navy-light"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  )
}

function SidebarRail() {
  return (
    <aside className="hidden lg:col-span-2 lg:block">
      <div className="sticky top-20 border-r border-navy-deep/10 pr-6">
        <p className="font-display text-lg font-bold text-navy-deep">Iain Macaskill</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-navy-mid">
          AI Delivery Lead
        </p>
        <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-navy-mid">
          <p className="text-navy-deep/40">Sectors</p>
          <p className="mt-2">Enterprise</p>
          <p>Healthcare</p>
          <p>Regulated Data</p>
        </div>
        <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-navy-mid">
          <p className="text-navy-deep/40">Location</p>
          <p className="mt-2">United Kingdom</p>
        </div>
      </div>
    </aside>
  )
}

function Hero() {
  return (
    <section className="animate-fade-up pt-14 pb-10">
      <p className="font-mono text-xs uppercase tracking-widest text-navy-light">
        [ AI Delivery Lead · Contract ]
      </p>
      <h1 className="mt-4 text-balance font-display text-4xl font-bold leading-tight text-navy-deep md:text-6xl">
        AI delivery that survives contact with governance.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-mid">
        I find the process quietly eating a team's time, rebuild it with AI, prove the saving,
        then move it onto local, governed models so it runs at near zero cost with the data
        staying put. Most recently: AI in production within six weeks of joining a distressed
        programme, and a regulated healthcare AI system live with frontline emergency call
        handlers.
      </p>
      <div className="animate-scale-x mt-10 border-t border-navy-deep/20" />
    </section>
  )
}

function About() {
  return (
    <section className="animate-fade-up grid grid-cols-12 gap-x-8 border-t border-navy-deep/10 py-10 delay-100">
      <div className="col-span-12 md:col-span-3">
        <h2 className="font-mono text-xs uppercase tracking-widest text-navy-mid">About</h2>
      </div>
      <div className="col-span-12 space-y-4 leading-relaxed text-navy-mid md:col-span-9">
        <p>
          My test for any AI system is not how much it can produce, but what it is not allowed to
          do, and who signs it off. That governance discipline sits alongside delivery in
          everything below: a pan-European data and AI programme taken from a 2,000-plus ticket
          backlog with no delivery process to AI in production in six weeks (quote automation
          running at roughly 93% accuracy, a natural-language assistant handling 100 to 150
          queries a day); a regulated healthcare AI programme spanning clinical safety,
          information governance and assurance, with decision support deployed to frontline
          emergency call handlers; and a data platform re-governed under Purview and Unity
          Catalog while cutting platform costs by around 30%.
        </p>
        <p>
          I cannot write code, and that is rather the point of this site. Everything in the
          project index below was built by describing outcomes clearly to AI tools, then
          governing what came back: testing it, documenting it, deciding what it is not allowed to
          do. It is the same discipline as the delivery work above, just applied to spare hours
          instead of a client's programme.
        </p>
      </div>
    </section>
  )
}

function ProjectIndex() {
  return (
    <section className="animate-fade-up border-t border-navy-deep/10 py-10 delay-200">
      <div className="flex items-end justify-between">
        <h2 className="font-display text-2xl font-bold text-navy-deep">Project Index</h2>
        <p className="font-mono text-[11px] uppercase tracking-widest text-navy-mid">
          04 entries
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
        <a
          href="https://github.com/iainmacaskill/local-ai-job-hunter"
          className="block aspect-[2/1] grayscale transition-all duration-300 hover:grayscale-0"
        >
          <FeaturedIllustration />
        </a>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-navy-deep/40">01</p>
          <h3 className="mt-2 font-display text-lg font-bold text-navy-deep md:text-xl">
            <a
              href="https://github.com/iainmacaskill/local-ai-job-hunter"
              className="hover:text-navy-light"
            >
              Local AI Job Hunter
            </a>
          </h3>
          <p className="mt-2 leading-relaxed text-navy-mid">
            A free, local-first job search assistant: it finds and scores roles, tracks every
            application, and drafts tailored CVs only for roles chosen to pursue. The guardrails
            are the product: it will not spray generic applications, it will not claim a skill
            that can't be defended in an interview, and nothing goes out unread.
          </p>
          <a
            href="https://github.com/iainmacaskill/local-ai-job-hunter"
            className="mt-3 inline-block border-b border-transparent font-mono text-xs uppercase tracking-widest text-navy-light hover:border-navy-light"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {SECONDARY_PROJECTS.map((project) => (
          <div key={project.tag} className="border-t border-navy-deep/20 pt-4">
            <p className="font-mono text-xs uppercase tracking-widest text-navy-deep/40">
              {project.tag}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-navy-deep">
              {project.href ? (
                <a href={project.href} className="hover:text-navy-light">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-navy-mid">{project.description}</p>
            {project.href && (
              <a
                href={project.href}
                className="mt-3 inline-block border-b border-transparent font-mono text-xs uppercase tracking-widest text-navy-light hover:border-navy-light"
              >
                {project.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function Writing() {
  return (
    <section className="animate-fade-up mt-10 bg-navy-deep py-16 text-paper delay-300">
      <div className="mx-auto max-w-7xl px-6 lg:pl-[calc(2/12*100%+2rem)]">
        <h2 className="font-mono text-xs uppercase tracking-widest text-paper/60">Writing</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-paper/85">
          Writing on LinkedIn about AI adoption from a delivery perspective: governance before
          headcount, measurement before spend, and what non-developers can now build for
          themselves.
        </p>
        <div className="mt-8 flex border-t border-paper/20 pt-6">
          <a
            href="https://www.linkedin.com/in/iainmacaskill/"
            className="font-mono text-xs uppercase tracking-widest text-paper hover:text-navy-light"
          >
            Follow along on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-navy-deep/10 py-10">
      <p className="text-sm leading-relaxed text-navy-mid">
        &copy; 2026 Iain Macaskill &middot;{' '}
        <a href="mailto:i.macaskill@gmail.com" className="text-navy-light hover:underline">
          i.macaskill@gmail.com
        </a>{' '}
        &middot; This site was built the same way as the projects on it: described in plain
        English, delivered by AI, signed off by Iain.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-body">
      <TopRail />
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-x-8 px-6">
        <SidebarRail />
        <main className="col-span-12 lg:col-span-10">
          <Hero />
          <About />
          <ProjectIndex />
        </main>
      </div>
      <Writing />
      <div className="mx-auto max-w-7xl grid grid-cols-12 gap-x-8 px-6">
        <div className="hidden lg:col-span-2 lg:block" />
        <div className="col-span-12 lg:col-span-10">
          <Footer />
        </div>
      </div>
    </div>
  )
}
