import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import PortfolioHero from "@/components/ui/portfolio-hero";
import {
  achievements,
  certifications,
  contact,
  education,
  experience,
  flagshipProjects,
  githubProjects,
  skillGroups,
} from "@/data/resume";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
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

const badges = [
  "Python & R",
  "Marketing Analytics",
  "Product Thinking",
  "Neuroscience Lab Ops",
  "GovHack 2024 Honourable Mention",
];

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

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <section id="top" className="min-h-screen">
        <PortfolioHero />
      </section>

      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 py-16 sm:px-8 lg:px-12">
        {/* About + contact */}
        <section id="about" className="grid gap-8 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
          <SectionTitle
            eyebrow="About"
            title={contact.name}
            description={contact.summary}
          />
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border/60 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{contact.location}</span>
            </div>
            <Link
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>{contact.email}</span>
            </Link>
            <Link
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>{contact.phone}</span>
            </Link>
            <Link
              href={contact.github}
              target="_blank"
              className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4 text-primary" />
              <span>GitHub</span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:harrymystogan@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Contact Avery <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-2 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-10">
          <SectionTitle
            eyebrow="Experience"
            title="Evidence-based storytelling across science, retail, and civic tech."
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
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Education + skills */}
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
            <SectionTitle eyebrow="Skills" title="End-to-end product data stack." />
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-border/60 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </h4>
                  <ul className="mt-3 space-y-1 text-sm text-foreground/80">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-8 rounded-3xl border border-border/80 bg-card/40 p-10">
          <SectionTitle
            eyebrow="Certifications"
            title="Continuous learning loops."
            description="Formal credentials across analytics, automation, and platform operations to keep delivery sharp."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-2xl border border-border/60 bg-background/60 p-5 text-left shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                  <p className="text-base text-foreground/90">{cert}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spotlight */}
        <section
          id="Little achievements"
          className="space-y-8 rounded-3xl border border-border/80 bg-card/40 p-10"
        >
          <span id="writing" className="-mt-24 block h-0" aria-hidden="true" />
          <SectionTitle
            eyebrow="Little achievements"
            title="Awards and builds in one motion."
            description="Multiple wins from hackathons competitions."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            {achievements.map((award) => (
              <article
                key={award.title}
                className="flex flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm"
              >
                <header className="space-y-2">
                  <h3 className="text-xl font-semibold">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.summary}</p>
                </header>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {award.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-border/60 px-3 py-1">
                      {skill}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {award.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={award.link}
                    target={award.link.startsWith("http") ? "_blank" : undefined}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
                  >
                    Try it out <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Media */}
        <section id="media" className="rounded-3xl border border-border/80 bg-card/40 p-10">
          <SectionTitle
            eyebrow="Media"
            title="A visual timeline of builds."
            description="Hover over the projects to see the snapshots."
          />
          <HoverSlider className="mt-10 min-h-[500px] place-content-center bg-transparent">
            <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
              <div className="flex flex-col space-y-2 md:space-y-4">
                {[
                  { title: "IT Code Fair '25", src: "/assets/all-medals.jpg" },
                  { title: "Digital Excellence", src: "/assets/nt-digital-excellence.jpg" },
                  { title: "Business Innovation", src: "/assets/business-innovation-1.png" },
                  { title: "Rimpa Global", src: "/assets/rimpa1.png" },
                  { title: "Coding Champion", src: "/assets/coding-winner.jpg" },
                ].map((slide, index) => (
                  <TextStaggerHover
                    key={slide.title}
                    index={index}
                    className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
                    text={slide.title}
                  />
                ))}
              </div>
              <HoverSliderImageWrap className="h-96 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                {[
                  { title: "IT Code Fair '25", src: "/assets/all-medals.jpg" },
                  { title: "Digital Excellence", src: "/assets/nt-digital-excellence.jpg" },
                  { title: "Business Innovation", src: "/assets/business-innovation-1.png" },
                  { title: "Rimpa Global", src: "/assets/rimpa1.png" },
                  { title: "Coding Champion", src: "/assets/coding-winner.jpg" },
                ].map((slide, index) => (
                  <HoverSliderImage
                    key={slide.title}
                    index={index}
                    imageUrl={slide.src}
                    src={slide.src}
                    alt={slide.title}
                    className="size-full object-cover"
                    loading="eager"
                  />
                ))}
              </HoverSliderImageWrap>
            </div>
          </HoverSlider>
        </section>


        {/* Projects */}
        <section id="projects" className="space-y-10">
          <SectionTitle
            eyebrow="Projects"
            title="From ML prototypes to production-grade insights."
            description="Mixing resume case studies with live GitHub work."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {flagshipProjects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-3xl border border-border bg-card/60 p-6 shadow-sm"
              >
                <header className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground">
                    Flagship build
                  </p>
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </header>
                <ul className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-border/70 px-3 py-1">
                      {tech}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.link}
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:opacity-80"
                >
                  View project <ExternalLink className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <GithubStream />
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-8 text-center"
        >
          <SectionTitle
            eyebrow="Contact"
            title="Let’s build human-centered, data-led products together."
            description="Open to research fellowships, analytics product roles, and civic innovation collaborations."
          />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="mailto:harrymystogan@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              <Mail className="h-4 w-4" />
              Email Avery
            </Link>
            <Link
              href={contact.github}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" />
              GitHub Profile
            </Link>
            <Link
              href={contact.linkedin}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/AveryDoan/RESUME"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
            >
              Resume Repo <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
