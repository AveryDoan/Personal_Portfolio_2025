import PortfolioHero from "@/components/ui/portfolio-hero";
import {
  RESUME_URL,
  achievements,
  certifications,
  contact,
  education,
  experience,
  flagshipProjects,
  mediaSlides,
  skillGroups,
} from "@/data/resume";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import { GithubStream } from "@/components/ui/github-stream";

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base text-muted-foreground">{description}</p>
      ) : null}
    </header>
  );
}

const isExternal = (href: string) => href.startsWith("http");

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <section id="top" className="min-h-screen">
        <PortfolioHero />
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 sm:px-8 lg:px-12">
        {/* Experience */}
        <section id="experience" className="space-y-10">
          <SectionTitle
            eyebrow="Experience"
            title="Evidence-based reporting that decision-makers can act on."
            description="Power BI dashboards, data pipelines and plain-English briefs for NT Government programs."
          />
          <div className="space-y-6">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-3xl border border-border/80 bg-card/40 p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      {item.timeline}
                    </p>
                    <h3 className="text-xl font-semibold">{item.role}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.company} • {item.location}
                  </p>
                </div>
                {item.teams.map((team) => (
                  <div key={team.name ?? item.role} className="mt-6">
                    {team.name ? (
                      <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                        {team.name}
                      </h4>
                    ) : null}
                    <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                      {team.bullets.map((bullet) => (
                        <li key={bullet.text} className="flex gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>
                            {bullet.label ? (
                              <strong className="font-semibold text-foreground">{bullet.label}: </strong>
                            ) : null}
                            {bullet.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="space-y-8 rounded-3xl border border-border/80 bg-card/30 p-8"
        >
          <SectionTitle
            eyebrow="Skills"
            title="End-to-end analytics, Microsoft Fabric first."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-border/60 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-10">
          <SectionTitle
            eyebrow="Projects"
            title="From reporting pipelines to civic-tech builds."
            description="Data and reporting projects first, then the prototypes."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {flagshipProjects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-3xl border border-border bg-card/60 p-6 shadow-sm"
              >
                <header className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </header>
                {project.flow ? (
                  <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-muted-foreground marker:text-primary">
                    {project.flow.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                ) : null}
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-border/70 px-3 py-1">
                      {tech}
                    </li>
                  ))}
                </ul>
                {project.highlights ? (
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
                >
                  {project.linkLabel} <ExternalLink className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <GithubStream />
        </section>

        {/* Awards */}
        <section
          id="awards"
          className="space-y-8 rounded-3xl border border-border/80 bg-card/40 p-10"
        >
          <SectionTitle
            eyebrow="Awards"
            title="Hackathon and competition wins."
            description="Real problems, working data products."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {achievements.map((award) => (
              <article
                key={award.title}
                className="flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm"
              >
                <header className="space-y-2">
                  <h3 className="text-xl font-semibold">{award.title}</h3>
                  <p className="text-sm font-semibold text-primary">{award.result}</p>
                </header>
                <p className="mt-3 text-sm text-muted-foreground">{award.summary}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {award.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={isExternal(link.href) ? "_blank" : undefined}
                      rel={isExternal(link.href) ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
                    >
                      {link.label} <ExternalLink className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div id="media" className="space-y-6 pt-8">
            <h3 className="text-2xl font-semibold tracking-tight">A visual timeline of builds.</h3>
            <p className="text-base text-muted-foreground">Hover over the titles to see the snapshots.</p>
            <HoverSlider className="min-h-[500px] place-content-center bg-transparent">
              <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
                <div className="flex flex-col space-y-2 md:space-y-4">
                  {mediaSlides.map((slide, index) => (
                    <TextStaggerHover
                      key={slide.title}
                      index={index}
                      className="cursor-pointer text-3xl font-bold uppercase tracking-tighter"
                      text={slide.title}
                    />
                  ))}
                </div>
                <HoverSliderImageWrap className="h-96 w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
                  {mediaSlides.map((slide, index) => (
                    <HoverSliderImage
                      key={slide.title}
                      index={index}
                      imageUrl={slide.src}
                      src={slide.src}
                      alt={slide.alt}
                      className="size-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ))}
                </HoverSliderImageWrap>
              </div>
            </HoverSlider>
          </div>
        </section>

        {/* Education + certifications */}
        <section
          id="education"
          className="grid gap-10 rounded-3xl border border-border/80 bg-card/30 p-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <SectionTitle eyebrow="Education" title="Always mixing theory and practice." />
            <div className="space-y-6">
              {education.map((entry) => (
                <div key={entry.school} className="rounded-2xl border border-border/60 p-5">
                  <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    {entry.timeline}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{entry.school}</h3>
                  <p className="text-sm text-muted-foreground">
                    {entry.degree} • {entry.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <SectionTitle eyebrow="Certifications" title="Continuous learning loops." />
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="rounded-2xl border border-border/60 bg-background/60 p-4 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-base text-foreground/90">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-8 text-center"
        >
          <SectionTitle
            eyebrow="Contact"
            title="Let’s talk about reporting and analytics."
            description="Open to reporting and analytics roles, and to civic innovation collaborations."
          />
          <div className="mt-8 grid gap-4 text-sm sm:grid-cols-3">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{contact.location}</span>
            </div>
            <Link
              href={`mailto:${contact.email}`}
              className="flex items-center justify-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>{contact.email}</span>
            </Link>
            <Link
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>{contact.phone}</span>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Email Avery <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={RESUME_URL}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <FileText className="h-4 w-4" />
              Resume (PDF)
            </Link>
            <Link
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub Profile
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
