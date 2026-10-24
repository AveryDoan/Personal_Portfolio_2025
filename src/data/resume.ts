export const contact = {
  name: "Le Quynh Nhu Doan (Avery)",
  shortName: "Avery Doan",
  headline: "Data Analyst",
  location: "Darwin, NT",
  email: "harrymystogan@gmail.com",
  github: "https://github.com/AveryDoan",
  linkedin: "https://www.linkedin.com/in/avery-doan/",
  summary:
    "Evidence-based reporting for NT Government programs: Power BI dashboards, data pipelines, and insights explained in plain English.",
};

// TODO(avery): drop your current resume PDF at public/avery-doan-resume.pdf.
// The "Resume" links appear automatically once the file exists.
export const RESUME_FILE = "avery-doan-resume.pdf";

export const education = [
  {
    school: "Charles Darwin University",
    location: "Darwin, NT",
    degree: "Master of Information Technology (Information Systems)",
    timeline: "Expected completion July 2027",
  },
  {
    school: "SP Jain School of Global Management",
    location: "Sydney, NSW",
    degree: "Bachelor of Data Science",
    timeline: "Graduated · CGPA 3.66 · Dean’s List",
  },
];

export const certifications = [
  "Google Professional Data Analyst (Coursera)",
  "Alteryx: Data Preparation & Machine Learning",
  "DataCamp Data Analyst",
  "DataCamp Data Engineer",
  "GitHub Foundations",
];

export type Role = {
  role: string;
  organisation: string;
  location: string;
  timeline: string;
  teams: { name?: string; bullets: string[] }[];
};

export const experience: Role[] = [
  {
    role: "Data Analyst",
    organisation: "Department of Children and Families, NT Government",
    location: "Darwin, NT",
    timeline: "Nov 2025 – Present",
    teams: [
      {
        name: "Domestic Violence Division",
        bullets: [
          "Built Power BI dashboards tied to agreed indicators and outcome measures for RAMF, NTRAI, the Family Safety Framework and Women’s Safe House. The measures judge outcomes from several angles, not only activity.",
          "Built data pipelines that bring multiple sources and formats into one standardised master dataset, giving program reporting one authoritative source.",
          "Authored the biannual report with the DV team and prepared DV Estimates Briefs for the Minister for the 2026 Estimates hearings.",
        ],
      },
      {
        name: "Children and Families Division",
        bullets: [
          "Wrote Legislative Assembly (LA) Briefs on Out-of-Home Care indicators and measures.",
          "Prepared Child in Care data for sharing with the Department of Education and immunisation data for sharing with the Department of Health, with data quality checks and privacy and ethical handling.",
          "Led testing of the September CARE system upgrade: produced the Test Plan and Test Results and worked with the Business Alignment Unit to explain the impact on data.",
        ],
      },
    ],
  },
  {
    role: "Neuroscience Lab Assistant",
    organisation: "SP Jain School of Global Management",
    location: "Sydney, NSW",
    timeline: "Sep 2023 – Sep 2024",
    teams: [
      {
        bullets: [
          "Co-authored a research paper on stress perception, decision-making and risk-taking.",
          "Designed and ran four behavioural and psychological assessments.",
          "Found a significant correlation between stress levels and engagement in holistic activities.",
          "Built the Iowa Gambling Task program.",
        ],
      },
    ],
  },
];

// Microsoft Fabric first.
export const skillGroups = [
  {
    title: "Microsoft Fabric",
    items: [
      "OneLake",
      "Lakehouse",
      "Data Factory pipelines",
      "Dataflows Gen2",
      "Notebooks",
      "Semantic models",
      "Power BI reporting",
    ],
  },
  { title: "Azure", items: ["Databricks", "Purview"] },
  {
    title: "Reporting & BI",
    items: ["Power BI (DAX, Power Query, semantic modelling)", "Tableau", "Alteryx"],
  },
  {
    title: "Programming & Analytics",
    items: [
      "SQL",
      "PostgreSQL",
      "Python (Pandas, NumPy, scikit-learn)",
      "R (tidyverse)",
      "PySpark",
    ],
  },
  {
    title: "Data Engineering & Delivery",
    items: ["ETL/ELT", "Airflow", "Snowflake", "AWS (S3, Redshift, Glue)", "Git, CI/CD"],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  /** Ordered steps, shown as a numbered list when order matters. */
  flow?: string[];
  highlights?: string[];
  link: string | null;
  /** Shown instead of a link while `link` is still a TODO. */
  pendingNote?: string;
};

// Data and reporting projects first.
export const projects: Project[] = [
  {
    name: "Microsoft Fabric end-to-end project",
    description:
      "Studied for the Microsoft Fabric Analytics Engineer certification and built an end-to-end Fabric project.",
    stack: ["Microsoft Fabric", "Data Factory", "Dataflows Gen2", "Lakehouse", "Notebooks", "Power BI"],
    flow: [
      "Ingest source data with Data Factory pipelines and Dataflows Gen2.",
      "Land it in a Lakehouse in OneLake.",
      "Transform it in notebooks.",
      "Model it in a semantic model.",
      "Report on it in Power BI.",
    ],
    // TODO(avery): add the project link (repo, write-up or report) and any screenshots.
    link: null,
    pendingNote: "Project link and screenshots coming soon.",
  },
  {
    name: "San Francisco Crime Analysis",
    description:
      "Geo-spatial analytics on 10k+ cleaned crime incidents to understand robbery, narcotics, and vandalism distribution.",
    stack: ["Python", "GeoPandas", "Matplotlib"],
    highlights: [
      "Temporal clustering to differentiate daytime vs nighttime risk",
      "Evidence used for smarter precinct coverage conversations",
    ],
    link: "https://github.com/AveryDoan/Geodata-Analysis-SanFrancisco-Crime-Incident",
  },
  {
    name: "CivicConnect",
    description:
      "GovHack 2025 prototype designed to streamline civic engagement and resource allocation through a unified digital interface.",
    stack: ["JavaScript", "React", "Node.js"],
    highlights: [
      "Developed a prototype to bridge communication gaps between citizens and local government",
      "Integrated real-time data feeds for community resource tracking and alerts",
      "GovHack 2025 Winner",
    ],
    link: "https://github.com/AveryDoan/CivicConnect-GOVHACK2025",
  },
  {
    name: "Virtual Mouse Control System",
    description:
      "Gesture-driven accessibility interface powered by MediaPipe, OpenCV, and PyAutoGUI to map hand pose to advanced cursor controls.",
    stack: ["Python", "MediaPipe", "Computer Vision"],
    highlights: [
      "Hand-tracking pipeline processes click, scroll, and drag gestures",
      "Built as an inclusive interface for creators with limited mobility",
    ],
    link: "https://rawcdn.githack.com/AveryDoan/Capstone_Project/89bcee2c57efd6e36fa7b367339c9830fe42f2c8/landingpage.html#about",
  },
];

export type AwardImage = { src: string; alt: string; width: number; height: number; caption: string };

export type Award = {
  title: string;
  result: string;
  summary: string;
  /** Optional: no picture means the stage keeps the previous one. */
  image?: AwardImage;
  links: { label: string; href: string }[];
  /** Winning categories, each with its own picture. */
  categories?: { name: string; image: AwardImage; link?: { label: string; href: string } }[];
};

export const awards: Award[] = [
  {
    title: "NT Digital Excellence Award 2025",
    result: "Winner · Most Outstanding Entrant at CDU Code Fair",
    summary:
      "Recognised for turning real community and workplace problems into working data products.",
    image: {
      src: "/images/award-digital-excellence.webp",
      alt: "Winners standing in a row in front of the Northern Territory Awards for Digital Excellence 2025 screen",
      width: 1600,
      height: 1200,
      caption: "NT Digital Excellence Award 2025",
    },
    links: [{ label: "Award page", href: "https://ntdigitalawards.org.au/node/130" }],
  },
  {
    title: "RIMPA Global Hackathon 2025",
    result: "Winner · AUD $10K",
    summary:
      "Built a dashboard that tracks emissions and records, helping businesses spot where to improve their ESG performance.",
    image: {
      src: "/images/rimpa-dashboard-2.webp",
      alt: "Dashboard of priority actions for cutting a business’s digital carbon footprint, with savings and emissions figures",
      width: 1599,
      height: 824,
      caption: "RIMPA Global Hackathon 2025: the emissions dashboard",
    },
    links: [
      {
        label: "RIMPA announcement",
        href: "https://www.linkedin.com/posts/national-archives-of-australia_rimpalive2025-rimpaglobal-activity-7389813114659201024-f-GI",
      },
    ],
  },
  {
    title: "IT Code Fair 2025",
    result: "Multiple Category Winner · Business Innovation, Research, Coding and Poster",
    summary:
      "Won multiple challenges across categories using data and coding to build practical solutions to real problems.",
    image: {
      src: "/images/award-medals.webp",
      alt: "Framed winner certificates and glass trophies on a round table",
      width: 1400,
      height: 1050,
      caption: "IT Code Fair 2025: the winners’ trophies",
    },
    links: [],
    categories: [
      {
        name: "Business Innovation",
        image: {
          src: "/images/award-business-innovation.webp",
          alt: "Team presenting the NT Shift Surge concept on stage beneath a slide reading “Jobs when you need them. Staff when you need them.”",
          width: 1600,
          height: 1066,
          caption: "Business Innovation: presenting NT Shift Surge",
        },
        link: { label: "Try it out", href: "https://nt-surge-dfd0a514.base44.app/" },
      },
      {
        name: "Research",
        image: {
          src: "/images/award-research.webp",
          alt: "Avery and a teammate holding the AI Facial Analysis research poster",
          width: 1400,
          height: 1050,
          caption: "Research: the AI Facial Analysis poster",
        },
        link: { label: "View the poster", href: "/images/research-poster.webp" },
      },
      {
        name: "Coding",
        image: {
          src: "/images/award-coding.webp",
          alt: "Winning coding team on stage in front of the slide for the sign-language recognition project",
          width: 1400,
          height: 1050,
          caption: "Coding: real-time sign-language recognition",
        },
        link: {
          label: "Try it out",
          href: "https://drive.google.com/drive/folders/1bSLj26ITS1G83oAH7SUViGNnkcyicS2D?usp=sharing",
        },
      },
      {
        name: "Poster",
        image: {
          src: "/images/award-poster.webp",
          alt: "Winning poster team on stage in front of the Poster Competition winner slide",
          width: 1400,
          height: 1050,
          caption: "Poster: the winning team",
        },
      },
    ],
  },
  {
    title: "GovHack 2025",
    result: "Winner",
    summary:
      "A gamified app that helps new arrivals to Australia understand new policies, laws and their rights.",
    links: [{ label: "View the project", href: "https://github.com/AveryDoan/CivicConnect-GOVHACK2025" }],
  },
];
