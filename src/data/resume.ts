export const contact = {
  name: "Le Quynh Nhu Doan (Avery)",
  shortName: "Avery Doan",
  headline: "Data Analyst",
  location: "Darwin, NT",
  email: "harrymystogan@gmail.com",
  phone: "+61 431 574 462",
  github: "https://github.com/AveryDoan",
  linkedin: "https://www.linkedin.com/in/avery-doan/",
  summary:
    "Data Analyst in the NT Government (Department of Children and Families). Evidence-based reporting, Power BI dashboards and data pipelines, with insights explained in plain English.",
};

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
    degree: "Bachelor of Data Science – Dean’s List (CGPA 3.66)",
    timeline: "Graduated",
  },
];

export type Bullet = { label?: string; text: string };

export type Role = {
  role: string;
  company: string;
  location: string;
  timeline: string;
  teams: { name?: string; bullets: Bullet[] }[];
};

export const experience: Role[] = [
  {
    role: "Data Analyst",
    company: "Department of Children and Families, NT Government",
    location: "Darwin, NT",
    timeline: "Nov 2025 – Present",
    teams: [
      {
        name: "Domestic Violence Division",
        bullets: [
          {
            label: "Outcomes measurement and dashboards",
            text: "Designed and delivered Power BI dashboards aligned to agreed indicators and outcome measures for multiple DV programs, including RAMF, NTRAI, the Family Safety Framework and Women’s Safe House. Structured measures to evaluate outcomes from multiple perspectives rather than activity alone, enabling program owners to assess the effectiveness of services.",
          },
          {
            label: "Data engineering and integration",
            text: "Developed data pipelines to ingest multiple sources and formats and consolidate them into a single, standardised master dataset, establishing one authoritative source for program reporting.",
          },
          {
            label: "Executive and ministerial reporting",
            text: "Partnered with the DV team to author the biannual report and prepared DV Estimates Briefs for the Minister for the 2026 Estimates hearings, presenting complex data as clear, accurate and defensible messages.",
          },
        ],
      },
      {
        name: "Children and Families Division",
        bullets: [
          {
            label: "Indicator reporting and briefing",
            text: "Prepare Legislative Assembly (LA) Briefs on Out-of-Home Care indicators and measures, ensuring accuracy, consistency and clear interpretation of results.",
          },
          {
            label: "CARE system upgrade testing",
            text: "Led testing of the September CARE system upgrade to assess its impact on data integrity and reporting. Produced the Test Plan and Test Results and collaborated with the Business Alignment Unit to communicate impacts and implications of the upgrade to stakeholders.",
          },
        ],
      },
    ],
  },
  {
    role: "Neuroscience Lab Assistant",
    company: "SP Jain School of Global Management",
    location: "Sydney, NSW",
    timeline: "Sep 2023 – Sep 2024",
    teams: [
      {
        bullets: [
          {
            label: "Research methodology and analysis",
            text: "Co-authored a research paper on stress perception, decision-making and risk-taking. Designed and conducted four behavioural and psychological assessments, analysed participant data and identified a significant correlation between stress levels and engagement in holistic activities.",
          },
          {
            label: "Experimental program development",
            text: "Developed the Iowa Gambling Task program for the experimental setup, supporting rigorous and repeatable data collection.",
          },
        ],
      },
    ],
  },
  {
    role: "Digital Marketing Analyst",
    company: "Terra Sana Environmental Consultant",
    location: "Sydney, NSW",
    timeline: "Mar 2023 – Aug 2023",
    teams: [
      {
        bullets: [
          {
            text: "Shipped end-to-end SEO and analytics modernization—resolving media storage issues and improving page performance by 1000%.",
          },
          {
            text: "Built Tableau dashboards fed by Google Analytics + SEMrush to brief executives on growth levers.",
          },
        ],
      },
    ],
  },
  {
    role: "Digital Marketing Intern",
    company: "Wedded Wonderland",
    location: "Sydney, NSW",
    timeline: "Nov 2023 – Jan 2024",
    teams: [
      {
        bullets: [
          {
            text: "Set up Klaviyo automations for SMS + email journeys and mapped retention segments in Salesforce.",
          },
          {
            text: "Amplified community management loops through CRM-driven personalization.",
          },
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
      "OneLake: Lakehouse and Warehouse design",
      "Data Factory pipelines and Dataflows Gen2 for multi-source ingestion",
      "PySpark/SQL notebooks for transformation",
      "Medallion (bronze–silver–gold) modelling",
      "Semantic models and Power BI reporting",
      "Pipeline scheduling and data quality checks",
    ],
  },
  {
    title: "Azure",
    items: ["Databricks", "Purview"],
  },
  {
    title: "Reporting & BI",
    items: ["Power BI (DAX, Power Query, semantic modelling, row-level security)", "Tableau", "Alteryx"],
  },
  {
    title: "Programming & Analytics",
    items: ["SQL, PostgreSQL", "Python (Pandas, NumPy, scikit-learn)", "R (tidyverse)", "PySpark"],
  },
  {
    title: "Data Engineering & Delivery",
    items: [
      "ETL/ELT pipelines, Airflow",
      "Snowflake",
      "AWS (S3, Redshift, Glue)",
      "Git, CI/CD, workflow automation",
    ],
  },
];

export const certifications = [
  "Google Professional Data Analyst (Coursera)",
  "Alteryx: Data Preparation & Machine Learning",
  "DataCamp Data Analyst",
  "DataCamp Data Engineer",
  "GitHub Foundations",
];

export type Achievement = {
  title: string;
  result: string;
  summary: string;
  links: { label: string; href: string }[];
};

export const achievements: Achievement[] = [
  {
    title: "NT Digital Excellence Award 2025",
    result: "Winner · Most Outstanding Entrant at CDU Code Fair",
    summary: "Recognised for turning real community and workplace problems into working data products.",
    links: [{ label: "Award page", href: "https://ntdigitalawards.org.au/node/130" }],
  },
  {
    title: "RIMPA Global Hackathon 2025",
    result: "Winner · AUD $10K",
    summary:
      "Built a dashboard that tracks emissions and records, helping businesses spot where they can improve their environmental, social and governance (ESG) performance.",
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
      "Won multiple challenges and competitions across categories, using data and coding knowledge to build practical solutions to real business, research and technical problems.",
    links: [
      { label: "Business Innovation: try it out", href: "https://nt-surge-dfd0a514.base44.app/" },
      { label: "Research: view the poster", href: "/images/research-poster.webp" },
      {
        label: "Coding: try it out",
        href: "https://drive.google.com/drive/folders/1bSLj26ITS1G83oAH7SUViGNnkcyicS2D?usp=sharing",
      },
    ],
  },
  {
    title: "GovHack 2025",
    result: "Winner",
    summary:
      "Built a gamified application that helps new arrivals to Australia understand new policies, laws and their rights, turning complex government information into simple, interactive learning.",
    links: [{ label: "View the project", href: "https://github.com/AveryDoan/CivicConnect-GOVHACK2025" }],
  },
  {
    title: "GovHack 2024",
    result: "Honourable Mention",
    summary:
      "Led ML analysis on Canberra wellbeing data to identify high-risk domestic violence zones and inspire policy momentum.",
    links: [{ label: "View the project", href: "https://github.com/AveryDoan/GOV_HACK_2024" }],
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  /** Ordered steps, shown as a numbered list when order matters. */
  flow?: string[];
  highlights?: string[];
  link: string;
  linkLabel: string;
};

// Data and reporting projects first.
export const flagshipProjects: Project[] = [
  {
    name: "Microsoft Fabric end-to-end project",
    description:
      "Studied for the Microsoft Fabric Analytics Engineer certification and built an end-to-end Fabric project.",
    stack: ["Microsoft Fabric", "Data Factory", "Dataflows Gen2", "Lakehouse", "Notebooks", "Power BI"],
    flow: [
      "Ingest source data with Data Factory pipelines and Dataflows Gen2.",
      "Land it in a OneLake Lakehouse, organised bronze, silver and gold.",
      "Transform it in PySpark/SQL notebooks.",
      "Model it in a semantic model.",
      "Report on it in Power BI.",
    ],
    // TODO(avery): this is a private Fabric workspace, so visitors will hit a Microsoft sign-in.
    // Replace with a public write-up, repo or published report, and add screenshots.
    link: "https://app.fabric.microsoft.com/groups/0c4aa741-3f01-480d-8554-faa488df9cb5/lineage?experience=fabric-developer",
    linkLabel: "Open the Fabric workspace (sign-in required)",
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
    linkLabel: "View project",
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
    linkLabel: "View project",
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
    linkLabel: "View project",
  },
];

export const mediaSlides = [
  {
    title: "IT Code Fair ’25",
    src: "/images/award-medals.webp",
    alt: "Framed winner certificates and glass trophies on a round table",
  },
  {
    title: "At the Code Fair",
    src: "/images/event-team.webp",
    alt: "Avery and teammates at a table of exhibits at IT Code Fair 2025",
  },
  {
    title: "Digital Excellence",
    src: "/images/award-digital-excellence.webp",
    alt: "Winners in front of the Northern Territory Awards for Digital Excellence 2025 screen",
  },
  {
    title: "Business Innovation",
    src: "/images/award-nt-shift-surge-map.webp",
    alt: "NT Shift Surge map showing emergency workforce response across the Northern Territory",
  },
  {
    title: "Research Poster",
    src: "/images/research-poster-pair.webp",
    alt: "Avery and a teammate holding the AI Facial Analysis research poster",
  },
  {
    title: "Presenting Research",
    src: "/images/research-presenting.webp",
    alt: "Avery presenting in front of a slide of workforce statistics",
  },
  {
    title: "Rimpa Global",
    src: "/images/rimpa-dashboard-1.webp",
    alt: "Emissions dashboard showing a digital carbon footprint and priority actions",
  },
  {
    title: "Coding Champion",
    src: "/images/award-coding.webp",
    alt: "Winning coding team on stage in front of the sign-language recognition slide",
  },
  {
    title: "With the Trophies",
    src: "/images/stage-portrait.webp",
    alt: "Avery smiling with arms open beside a table of framed award certificates and glass trophies",
  },
  {
    title: "Business Innovation Pitch",
    src: "/images/award-business-innovation.webp",
    alt: "Team presenting the NT Shift Surge concept on stage beneath a slide reading Jobs when you need them. Staff when you need them.",
  },
  {
    title: "Research Competition",
    src: "/images/award-research-team.webp",
    alt: "Research Competition winners on stage in front of the winner slide",
  },
  {
    title: "Poster Competition",
    src: "/images/award-poster.webp",
    alt: "Poster Competition winners on stage in front of the winner slide",
  },
  {
    title: "The Research Poster",
    src: "/images/research-poster.webp",
    alt: "AI Facial Analysis research poster on detecting mental health risks in mining and construction",
  },
  {
    title: "Rimpa Dashboard",
    src: "/images/rimpa-dashboard-2.webp",
    alt: "Dashboard of priority actions for cutting a business's digital carbon footprint",
  },
  {
    title: "AI Challenge Runner-Up",
    src: "/images/award-ai-challenge.webp",
    alt: "Students receiving certificates on stage in front of the AI Challenge Runner-Up slide",
  },
];
