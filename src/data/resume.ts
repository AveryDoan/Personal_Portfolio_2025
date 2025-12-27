export const contact = {
  name: "Le Quynh Nhu Doan (Avery)",
  headline: "Aspiring Data Scientist",
  location: "Darwin, NT",
  email: "harrymystogan@gmail.com",
  phone: "+61 431 574 462",
  github: "https://github.com/AveryDoan",
  linkedin: "https://www.linkedin.com/in/avery-doan/",
  summary:
    "A data scientist, a learner that never stops exploring.",
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

export const experience = [
  {
    role: "Vacation Trainee - Data Team",
    company: "Department of Children and Families, NT Government",
    location: "Darwin, NT",
    timeline: "November 2025 - current",
    bullets: [
      "Building ETL pipelines and dashboards to streamline data collection and reporting for domestic violence services across NT."
    ],
  },
  {
    role: "Neuroscience Lab Assistant",
    company: "SP Jain School of Global Management",
    location: "Sydney, NSW",
    timeline: "Sep 2023 – Sep 2024",
    bullets: [
      "Co-authored a research paper showing correlation among stress perception, decision-making, and physiological response.",
      "Built an Iowa Gambling Task application and ran four behavioral assessments to capture high-fidelity decision data.",
      "Analyzed participant activity to connect holistic routines with reduced stress markers.",
    ],
  },
  {
    role: "Digital Marketing Analyst",
    company: "Terra Sana Environmental Consultant",
    location: "Sydney, NSW",
    timeline: "Mar 2023 – Aug 2023",
    bullets: [
      "Shipped end-to-end SEO and analytics modernization—resolving media storage issues and improving page performance by 1000%.",
      "Built Tableau dashboards fed by Google Analytics + SEMrush to brief executives on growth levers.",
    ],
  },
  {
    role: "Digital Marketing Intern",
    company: "Wedded Wonderland",
    location: "Sydney, NSW",
    timeline: "Nov 2023 – Jan 2024",
    bullets: [
      "Set up Klaviyo automations for SMS + email journeys and mapped retention segments in Salesforce.",
      "Amplified community management loops through CRM-driven personalization.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Programming & Analytics",
    items: [
      "Python (NumPy, Pandas, TensorFlow, PyTorch, HuggingFace)",
      "R (tidyverse), SQL, PostgreSQL, MongoDB",
      "GeoPandas, PowerBI, Tableau, Alteryx",
      "Power BI (Excel, Power Query, VBA, DAX)",
    ],
  },
  {
    title: "Data Platforms",
    items: ["Snowflake", "Big Data (Hadoop, PySpark, Airflow)", "AWS (Redshift, Glue, EMR), Azure (Databricks, Purview)"],
  },
  {
    title: "DevOps & Delivery",
    items: ["Git & CI/CD Pipelines", "AWS S3/RDS", "Azure DevOps", "MLOps experimentation"],
  },
];

export const certifications = [
  "Alteryx: Data Preparation & Machine Learning",
  "GitHub Foundations",
  "Google Professional Data Analyst (Coursera)",
  "Datacamp Data Analyst",
];

export type Achievement = {
  title: string;
  detail: string;
  summary: string;
  skills: string[];
  features: string[];
  link: string;
};

export const achievements: Achievement[] = [
  {
    title: "IT Code Fair 2025 - Business Innovation - Winner",
    detail:
      "NT Shift Surge is an on-demand workforce platform that connects businesses with available workers during Darwin’s wet-season staffing shortages, operating like an “Uber for jobs.” It streamlines skills matching, safety tracking, and remote access through a mobile app and the Job Pod mobile unit, helping businesses maintain stable operations despite seasonal disruptions.",
    summary:
      "Built NT Shift Surge, a wet-season labour marketplace with compliance tracking and rapid skills matching for Darwin businesses.",
    skills: ["Product Strategy", "Ops Automation", "Service Design"],
    features: [
      "Mobile-first job dispatch coupled with Job Pod kiosks for remote intake.",
      "Safety tracking and credential rules ensure vetted talent for each shift.",
    ],
    link: "https://nt-surge-dfd0a514.base44.app/",
  },
  {
    title: "IT Code Fair 2025 - Research Competition - Winner",
    detail:
      "Developed a real-time, non-invasive stress-detection prototype for mining and construction using facial video (HRV), emotion analysis, and thermal imaging. Designed with a privacy-first approach, the system supports early intervention by alerting workers and supervisors when early risk indicators appear.",
    summary:
      "Shipped a privacy-first stress detection prototype fusing facial HRV, thermal data, and emotion cues for mining sites.",
    skills: ["Computer Vision", "Data Analytics", "Real time - Edge ML"],
    features: [
      "Multi-sensor readings trigger alerts before fatigue escalates on site.",
      "Zero raw video storage keeps the workforce comfortable adopting the tool.",
    ],
    link: "https://github.com/AveryDoan/RESUME/blob/main/Research%20competition%20IT%20Code%20Fair%202025.png",
  },
  {
    title: "IT Code Fair 2025 - Coding Competition - Winner",
    detail:
      "Built a full real-time action-recognition pipeline using MediaPipe Holistic (1662-D keypoints), LSTM sequence models, and a sliding-window inference engine for live prediction and on-frame visualization. Designed end-to-end data collection, preprocessing, training, and deployment with Gradio, enabling a production-ready prototype for gesture and sign-language recognition.",
    summary:
      "End-to-end action-recognition stack pairing MediaPipe Holistic data with LSTM models and live inference overlays.",
    skills: ["MediaPipe", "Deep Learning", "Realtime UX"],
    features: [
      "Sliding-window inference reduces latency for sign-language recognition.",
      "Gradio front-end showcases classification confidence to judges in real time.",
    ],
    link: "https://drive.google.com/drive/folders/1bSLj26ITS1G83oAH7SUViGNnkcyicS2D?usp=sharing",
  },
  {
    title: "NT Digital Excellence Award 2025 - Winner",
    detail:
      "Won multiple CDU Code Fair awards and received the NT Digital Excellence Awards’ Most Outstanding Entrant for exceptional technical skill and innovation. Recognised for impactful problem-solving, collaboration, and forward-thinking design.",
    summary:
      "Named Most Outstanding Entrant for translating civic problems into operational prototypes at CDU Code Fair.",
    skills: ["Civic Tech", "Stakeholder Facilitation", "Rapid Prototyping"],
    features: [
      "Combined multiple winning entries into a cohesive portfolio presented to NT leaders.",
      "Showcased repeatable delivery rituals to level-up the local tech community.",
    ],
    link: "https://ntdigitalawards.org.au/node/130",
  },
  {
    title: "RIMPA Global Hackathon 2025 - Winner (10k award)",
    detail:
      "Developed a carbon-emission tracking dashboard that helps organisations reduce their environmental footprint.",
    summary:
      "Delivered a records-management emissions dashboard to help enterprises surface remediation wins fast.",
    skills: ["Data Visualization", "Sustainability", "Storytelling"],
    features: [
      "Interactive layers let compliance teams model reduction targets per site.",
      "Executive-ready summaries translate ESG improvements into budget asks.",
    ],
    link: "https://www.linkedin.com/posts/national-archives-of-australia_rimpalive2025-rimpaglobal-activity-7389813114659201024-f-GI?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAClNcfQBA4SsvZ0alFSsHA7T5T-8BoxhgF0",
  },
  {
    title: "GovHack 2024 – Honourable Mention",
    detail:
      "Led ML analysis on Canberra wellbeing data to identify high-risk domestic violence zones and inspire policy momentum.",
    summary:
      "Used Canberra wellbeing data + ML clustering to identify DV hotspots and brief civic leaders.",
    skills: ["GeoML", "Gov Data", "Policy Storytelling"],
    features: [
      "Combined wellbeing indicators with police data to prioritise services.",
      "Packaged findings into briefing notes to accelerate funding conversations.",
    ],
    link: "https://github.com/AveryDoan/GOV_HACK_2024",
  },
];

export const flagshipProjects = [
  {
    name: "Virtual Mouse Control System",
    description:
      "Gesture-driven accessibility interface powered by MediaPipe, OpenCV, and PyAutoGUI to map hand pose to advanced cursor controls.",
    stack: ["Python", "MediaPipe", "Computer Vision"],
    link: "https://rawcdn.githack.com/AveryDoan/Capstone_Project/89bcee2c57efd6e36fa7b367339c9830fe42f2c8/landingpage.html#about",
    highlights: [
      "Hand-tracking pipeline processes click, scroll, and drag gestures",
      "Built as an inclusive interface for creators with limited mobility",
    ],
  },
  {
    name: "San Francisco Crime Analysis",
    description:
      "Geo-spatial analytics on 10k+ cleaned crime incidents to understand robbery, narcotics, and vandalism distribution.",
    stack: ["Python", "GeoPandas", "Matplotlib"],
    link: "https://github.com/AveryDoan/Geodata-Analysis-SanFrancisco-Crime-Incident",
    highlights: [
      "Temporal clustering to differentiate daytime vs nighttime risk",
      "Evidence used for smarter precinct coverage conversations",
    ],
  },
  {
    name: "CivicConnect",
    description:
      "GovHack 2025 prototype designed to streamline civic engagement and resource allocation through a unified digital interface.",
    stack: ["JavaScript", "React", "Node.js"],
    link: "https://github.com/AveryDoan/CivicConnect-GOVHACK2025",
    highlights: [
      "Developed a prototype to bridge communication gaps between citizens and local government",
      "Integrated real-time data feeds for community resource tracking and alerts",
      "Achieved 1st place Gov Hack 2025"
    ],
  },
];

export const githubProjects = [
  {
    name: "Advanced-Analytics",
    description: "Hands-on practice repository combining predictive dashboards and experimentation notebooks.",
    url: "https://github.com/AveryDoan/Advanced-Analytics",
    language: "HTML",
    updated: "Mar 28, 2025",
  },
  {
    name: "bank_campaign_datacamp_cleaning",
    description: "Notebook workflow for feature engineering and cleaning a financial marketing dataset.",
    url: "https://github.com/AveryDoan/bank_campaign_datacamp_cleaning",
    language: "Jupyter Notebook",
    updated: "Feb 18, 2025",
  },
  {
    name: "RAIN_Intro_DS",
    description: "Exploratory notebooks for Rainforest to Innovation (RAIN) initiative with 20k+ lines of Python.",
    url: "https://github.com/AveryDoan/RAIN_Intro_DS",
    language: "Jupyter Notebook",
    updated: "Apr 15, 2023",
  },
  {
    name: "Red-tape-GOVHACK2025",
    description: "GovHack 2025 prototype built with JavaScript to streamline compliance storytelling.",
    url: "https://github.com/AveryDoan/Red-tape-GOVHACK2025",
    language: "JavaScript",
    updated: "Aug 31, 2025",
  },
];

export type SpotlightEntry = {
  id: string;
  name: string;
  title: string;
  description: string;
  media: {
    alt: string;
    layers: {
      src: string;
      alt: string;
      className?: string;
      preset?: "fadeInScale" | "slideInRight" | "slideInLeft";
      delay?: number;
    }[];
  };
};

export const spotlightTimeline: SpotlightEntry[] = [
  {
    id: "01",
    name: "Business Innovation",
    title: "IT Code Fair 2025 – Winner",
    description:
      "NT Shift Surge is an on-demand workforce platform that connects businesses with available workers during Darwin’s wet-season staffing shortages, operating like an “Uber for jobs.” It streamlines skills matching, safety tracking, and remote access through a mobile app and the Job Pod mobile unit, helping businesses maintain stable operations despite seasonal disruptions.",
    media: {
      alt: "Business innovation demo",
      layers: [
        {
          src: "/assets/business-innovation-1.png",
          alt: "Presenting the NT Shift Surge concept",
          // Background layer: Top Left
          className: "w-[50%] left-[5%] top-[35%] shadow-lg",
          preset: "slideInLeft",
        },
        {
          src: "/assets/business-innovation-2.jpeg",
          alt: "Team recapping insights",
          // Foreground layer: Bottom Right overlap
          className: "w-[45%] left-[45%] top-[40%] shadow-xl",
          preset: "slideInRight",
          delay: 0.1,
        },
      ],
    },
  },
  {
    id: "02",
    name: "Research Competition",
    title: "IT Code Fair 2025 - Winner",
    description:
      "Built a privacy-first stress monitoring system using facial HRV, emotion cues, and thermal imaging for mining safety.",
    media: {
      alt: "Research competition showcase",
      layers: [
        {
          src: "/assets/research2.jpg",
          alt: "Experiment planning on a whiteboard",
          // Background layer: Top Left
          className: "w-[50%] left-[5%] top-[10%] shadow-lg",
          preset: "slideInLeft",
        },
        {
          src: "/assets/research3.jpg",
          alt: "Demonstrating biometrics workflow",
          // Foreground layer: Bottom Right overlap
          className: "w-[55%] left-[40%] top-[30%] shadow-xl",
          preset: "slideInRight",
          delay: 0.1,
        },
      ],
    },
  },
  {
    id: "03",
    name: "Coding Competition",
    title: "IT Code Fair 2025 - Winner",
    description:
      "Delivered a MediaPipe + LSTM pipeline for real-time action recognition and sliding-window gesture prediction.",
    media: {
      alt: "Coding competition run-through",
      layers: [
        {
          src: "/assets/research3.jpg",
          alt: "Showcasing inference dashboard",
          // Hero shot: Centered and Large
          className: "w-[85%] left-[7.5%] top-[15%] shadow-2xl",
          preset: "fadeInScale",
        },
      ],
    },
  },
  {
    id: "04",
    name: "NT Digital Excellence",
    title: "Most Outstanding Entrant CDU Code Fair 2025",
    description:
      "Recognised for sweeping CDU Code Fair categories and translating prototypes into civic-ready products.",
    media: {
      alt: "Digital Excellence award night",
      layers: [
        {
          src: "/assets/nt-digital-excellence.jpg",
          alt: "Receiving NT Digital Excellence trophy",
          // Hero shot: Centered and Large
          className: "w-[80%] left-[10%] top-[10%] shadow-2xl",
          preset: "fadeInScale",
        },
      ],
    },
  },
  {
    id: "05",
    name: "RIMPA Gglobal Hackathon",
    title: "RIMPA Global Hackathon Champion 2025",
    description:
      "Designed a carbon-emissions dashboard that visualises remediation paths for enterprise record systems.",
    media: {
      alt: "RIMPA prototype",
      layers: [
        {
          src: "/assets/rimpa1.png",
          alt: "Ideation board at hackathon",
          // Background layer: Top Left
          className: "w-[50%] left-[5%] top-[12%] shadow-lg",
          preset: "slideInLeft",
        },
        {
          src: "/assets/rimpa2.png",
          alt: "Dashboard mockups",
          // Foreground layer: Bottom Right overlap
          className: "w-[60%] left-[35%] top-[35%] shadow-xl",
          preset: "slideInRight",
          delay: 0.1,
        },
      ],
    },
  },
  {
    id: "06",
    name: "Award",
    title: "GovHack 2024 Honourable Mention",
    description:
      "Mapped Canberra wellbeing data with ML clustering to highlight domestic-violence hotspots and policy momentum.",
    media: {
      alt: "GovHack 2024 presentation",
      layers: [
        {
          src: "/assets/all-medals.jpg",
          alt: "GovHack ceremony",
          // Background layer: Top Left
          className: "w-[55%] left-[5%] top-[10%] shadow-lg",
          preset: "slideInLeft",
        },
        {
          src: "/assets/coding-winner.jpg",
          alt: "Team sprinting over dashboards",
          // Foreground layer: Bottom Right overlap
          className: "w-[50%] left-[45%] top-[40%] shadow-xl",
          preset: "slideInRight",
          delay: 0.1,
        },
      ],
    },
  },
];
