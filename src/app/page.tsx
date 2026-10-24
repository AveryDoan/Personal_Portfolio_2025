import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { MailPrompt } from "@/components/mail-prompt";
import { Stage, type StageImage } from "@/components/stage";
import {
  RESUME_FILE,
  awards,
  certifications,
  contact,
  education,
  experience,
  projects,
  skillGroups,
  type AwardImage,
} from "@/data/resume";

const slug = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const awardKey = (title: string, category?: string) =>
  `award-${slug(title)}${category ? `-${slug(category)}` : ""}`;

const fromAward = (key: string, image: AwardImage): StageImage => ({
  key,
  src: image.src,
  alt: image.alt,
  caption: image.caption,
  width: image.width,
  height: image.height,
  fit: image.width / image.height > 1.2 ? "contain" : "cover",
});

const stageImages: StageImage[] = [
  {
    key: "portrait",
    src: "/images/stage-portrait.webp",
    alt: "Avery smiling with arms open beside a table of framed award certificates and glass trophies",
    caption: "With the IT Code Fair 2025 awards",
    width: 1200,
    height: 1600,
    fit: "cover",
  },
  {
    key: "dashboard",
    src: "/images/rimpa-dashboard-1.webp",
    alt: "Dashboard showing a business’s digital carbon footprint, cost savings and priority actions",
    caption: "An emissions and records dashboard, built at the RIMPA Global Hackathon 2025",
    width: 1599,
    height: 824,
    fit: "contain",
  },
  ...awards.flatMap((award) => [
    ...(award.image ? [fromAward(awardKey(award.title), award.image)] : []),
    ...(award.categories ?? []).map((category) =>
      fromAward(awardKey(award.title, category.name), category.image),
    ),
  ]),
];

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Awards", href: "#awards" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const bulletList = "mt-3 list-disc space-y-3 pl-5 marker:text-ink";

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-h2 text-ink">
      {children}
    </h2>
  );
}

export default function Home() {
  const resumeHref = existsSync(path.join(process.cwd(), "public", RESUME_FILE)) ? `/${RESUME_FILE}` : null;

  return (
    <>
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-24 bg-ink px-4 py-2 text-paper focus:translate-y-0"
      >
        Skip to content
      </a>

      <main id="main">
        <div id="top" className="lg:grid lg:grid-cols-2">
          <Stage images={stageImages} />

          <div className="px-6 sm:px-10 lg:pl-16 lg:pr-8">
            {/* First screen */}
            <div className="flex flex-col py-8 lg:min-h-svh lg:py-12">
              <nav aria-label="Sections">
                <ul className="flex flex-wrap gap-x-6 gap-y-1 text-small lg:justify-between">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="inline-block py-2">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="intro my-16 space-y-7 lg:my-auto">
                <h1 className="text-head text-ink">
                  <span className="block">{contact.shortName},</span>
                  <span className="block">{contact.headline}</span>
                </h1>
                <p className="max-w-[42ch] text-lead">{contact.summary}</p>
                <p className="text-soft">
                  Department of Children and Families, NT Government · {contact.location}
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link href={`mailto:${contact.email}`} className="btn">
                    Email me
                  </Link>
                  {resumeHref ? (
                    <Link href={resumeHref} className="py-2">
                      Resume (PDF)
                    </Link>
                  ) : null}
                  <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="py-2">
                    LinkedIn
                  </Link>
                  <Link href={contact.github} target="_blank" rel="noopener noreferrer" className="py-2">
                    GitHub
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-40 pb-40 pt-16 lg:space-y-48 lg:pb-32">
              {/* Experience */}
              <section aria-labelledby="experience-title" data-stage="portrait" className="space-y-12">
                <div className="space-y-5" data-reveal>
                  <Heading id="experience-title">Experience</Heading>
                  <p className="max-w-[44ch] text-lead">
                    I turn program data into dashboards, briefs and datasets that decision-makers can trust and act on.
                  </p>
                </div>
                {experience.map((job) => (
                  <article key={job.role} className="space-y-6" data-reveal>
                    <header>
                      <h3 className="text-lead text-ink">{job.role}</h3>
                      <p>
                        {job.organisation} · {job.location}
                      </p>
                      <p className="text-soft tabular-nums">{job.timeline}</p>
                    </header>
                    {job.teams.map((team) => (
                      <div key={team.name ?? job.role}>
                        {team.name ? <h4 className="font-semibold">{team.name}</h4> : null}
                        <ul className={bulletList}>
                          {team.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </article>
                ))}
              </section>

              {/* Skills */}
              <section aria-labelledby="skills-title" data-stage="portrait" className="space-y-10">
                <div data-reveal>
                  <Heading id="skills-title">Skills</Heading>
                </div>
                <div className="gap-x-10 sm:columns-2" data-reveal>
                  {skillGroups.map((group) => (
                    <div key={group.title} className="mb-8 break-inside-avoid">
                      <h3 className="text-soft">{group.title}</h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section aria-labelledby="projects-title" data-stage="dashboard" className="space-y-12">
                <div data-reveal>
                  <Heading id="projects-title">Projects</Heading>
                </div>
                {projects.map((project) => (
                  <article key={project.name} className="space-y-4" data-reveal>
                    <h3 className="text-lead text-ink">{project.name}</h3>
                    <p>{project.description}</p>
                    {project.flow ? (
                      <ol className="list-decimal space-y-1 pl-6 marker:text-ink">
                        {project.flow.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    ) : null}
                    {project.highlights ? (
                      <ul className={bulletList}>
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    ) : null}
                    <p className="text-soft">Built with {project.stack.join(", ")}</p>
                    {project.link ? (
                      <p>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block py-1 font-semibold"
                        >
                          View project →
                        </Link>
                      </p>
                    ) : (
                      <p className="text-soft">{project.pendingNote}</p>
                    )}
                  </article>
                ))}
              </section>

              {/* Awards */}
              <section aria-labelledby="awards-title" className="space-y-12">
                <div data-reveal>
                  <Heading id="awards-title">Awards</Heading>
                </div>
                {awards.map((award) => (
                  <article
                    key={award.title}
                    data-stage={award.image ? awardKey(award.title) : undefined}
                    className="space-y-4"
                    data-reveal
                  >
                    <h3 className="text-lead text-ink">{award.title}</h3>
                    <p className="font-semibold">{award.result}</p>
                    <p>{award.summary}</p>
                    {award.image ? <AwardPicture image={award.image} /> : null}
                    {award.categories ? (
                      <ul className="space-y-8 pt-2">
                        {award.categories.map((category) => (
                          <li
                            key={category.name}
                            data-stage={awardKey(award.title, category.name)}
                            className="space-y-3"
                          >
                            <p>
                              <span className="font-semibold">{category.name}</span>
                              {category.link ? (
                                <>
                                  {" · "}
                                  <Link
                                    href={category.link.href}
                                    target={category.link.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="inline-block py-1"
                                  >
                                    {category.link.label} →
                                  </Link>
                                </>
                              ) : null}
                            </p>
                            <AwardPicture image={category.image} />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {award.links.length > 0 ? (
                      <p className="flex flex-wrap gap-x-6">
                        {award.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block py-1 font-semibold"
                          >
                            {link.label} →
                          </Link>
                        ))}
                      </p>
                    ) : null}
                  </article>
                ))}
              </section>
            </div>
          </div>
        </div>

        {/* Closing band: breaks the split and runs full width */}
        <div className="on-field bg-field text-field-ink">
          <div className="mx-auto max-w-[90rem] space-y-32 px-6 py-32 sm:px-10 lg:px-16 lg:py-40">
            <div className="grid gap-20 lg:grid-cols-2 lg:gap-24">
              <section aria-labelledby="education-title" className="space-y-8">
                <h2 id="education-title" className="text-h2">
                  Education
                </h2>
                <ul className="space-y-8">
                  {education.map((entry) => (
                    <li key={entry.school}>
                      <h3 className="text-lead">{entry.degree}</h3>
                      <p>
                        {entry.school} · {entry.location}
                      </p>
                      <p className="text-field-soft">{entry.timeline}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="certifications-title" className="space-y-8">
                <h2 id="certifications-title" className="text-h2">
                  Certifications
                </h2>
                <ul className="space-y-2">
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section aria-labelledby="contact-title" className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <div className="space-y-8">
                <h2 id="contact-title" className="text-h2">
                  Contact
                </h2>
                <MailPrompt email={contact.email} />
              </div>
              <dl className="space-y-5 lg:pt-24">
                <div>
                  <dt className="text-field-soft">Email</dt>
                  <dd>
                    <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-field-soft">Based in</dt>
                  <dd>{contact.location}</dd>
                </div>
                <div>
                  <dt className="text-field-soft">LinkedIn</dt>
                  <dd>
                    <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/avery-doan
                    </Link>
                  </dd>
                </div>
                <div>
                  <dt className="text-field-soft">GitHub</dt>
                  <dd>
                    <Link href={contact.github} target="_blank" rel="noopener noreferrer">
                      github.com/AveryDoan
                    </Link>
                  </dd>
                </div>
                {resumeHref ? (
                  <div>
                    <dt className="text-field-soft">Resume</dt>
                    <dd>
                      <Link href={resumeHref}>Download the PDF</Link>
                    </dd>
                  </div>
                ) : null}
              </dl>
            </section>
          </div>
        </div>
      </main>

      <footer className="on-field bg-field px-6 pb-10 text-field-ink sm:px-10 lg:px-16">
        <p className="mx-auto max-w-[90rem] text-[clamp(3rem,13vw,12rem)] leading-[0.9] tracking-[-0.04em]">
          {contact.shortName}
        </p>
        <p className="mx-auto mt-8 max-w-[90rem] text-small text-field-soft">
          © {new Date().getFullYear()} {contact.name}. Photographs are my own.
        </p>
      </footer>
    </>
  );
}

/** On a phone the stage scrolls away, so each award carries its own picture inline. */
function AwardPicture({ image }: { image: AwardImage }) {
  return (
    <figure className="lg:hidden">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="100vw"
        loading="lazy"
        className="h-auto w-full"
      />
      <figcaption className="mt-2 text-small text-soft">{image.caption}</figcaption>
    </figure>
  );
}
