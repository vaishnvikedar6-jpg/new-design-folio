export const personalInfo = {
  name: "Vaishnavi Kedar",
  role: "UI/UX Designer & Creative Engineer",
  tagline: "An engineer by education. A designer by curiosity.",
  location: "Mumbai Metropolitan Region, India",
  education: {
    institution: "SIES Graduate School of Technology, Nerul",
    degree: "B.E. Computer Engineering (2024 – 2028)",
    cgpa: "9.86 (2nd Yr) · 9.5 (1st Yr)",
    highlights: "HSC: 84.17% | SSC: 88.60%"
  },
  contacts: {
    email: "vaishnavikedar459@gmail.com",
    emailAlt: "vaishnavikedar697@gmail.com",
    linkedin: "https://www.linkedin.com/in/vaishnavi-kedar-5a306039b/",
    github: "https://github.com/vaishnvikedar6-jpg",
    behance: "https://www.behance.net/vaishnavikedar_31",
    portfolioPrev: "https://vaishnvikedar6-jpg.github.io/My-Design-Folio/",
  },
  stats: [
    { label: "CGPA (2nd Yr)", value: "9.86", detail: "SIES GST Nerul" },
    { label: "Hackathon Finalist", value: "Top 6", detail: "out of 193+ teams" },
    { label: "Design Sprints", value: "8+", detail: "End-to-End Cases" },
    { label: "Internship", value: "Oasis Infobyte", detail: "Web Dev & Design" },
  ]
};

export const projects = [
  {
    id: "avira",
    title: "AVIRA",
    subtitle: "Safety-First Transit Companion for Women Commuters",
    tagline: "Empowering every late-night journey with proactive vigilance and zero-panic clarity.",
    category: "Mobile UI/UX · Hackathon Finalist",
    badge: "Top 6 Finalist — Drishti Designathon (193+ Teams)",
    year: "2026",
    role: "Lead UI/UX Designer & Design System Architect",
    figmaUrl: "https://www.figma.com/design/4z78d3naEOI0XzCR0oc4J7/AVIRA?node-id=12-790&t=FlMtIR4sxAwxxGSA-1",
    accentColor: "#FF526F",
    secondaryColor: "#34D399",
    overview: "AVIRA was engineered during the Drishti UI/UX Designathon (CESA, VIT Mumbai in partnership with Friends of Figma Mumbai & .xyz). It addresses the psychological vulnerability of solitary female transit through non-intrusive safety scores, automated check-ins, and a rapid, zero-friction emergency pipeline.",
    designDecisions: [
      {
        title: "Color Psychology & Panic Control",
        description: "Strictly reserved coral red (#FF526F) for SOS alerts and high-risk triggers to avoid alert fatigue. Verified safe transit paths, well-lit corridors, and safe arrivals are rendered in soothing mint teal (#34D399) over a high-contrast dark charcoal canvas for instant scannability on moving transport."
      },
      {
        title: "Proactive Avira Pulse",
        description: "Replaces manual anxious texting with smart micro-vibrations prompting 'Are you safe?'. A one-tap silent tap confirms wellbeing, while an unattended countdown triggers automated circle pings."
      },
      {
        title: "Geofenced Arrival Confirmation",
        description: "Silent background geofence triggers automated WhatsApp & SMS alerts to parents/roommates the moment transit finishes inside designated safe zones."
      }
    ],
    screens: [
      {
        id: "route",
        label: "Safety-Rated Navigation",
        tag: "Live Transit Corridors",
        image: "./assets/designs/avira-screen-route.png",
        caption: "Live 98% safe corridor routing with street illumination audit and crowd density tracking."
      },
      {
        id: "pulse",
        label: "Avira Pulse Check-in",
        tag: "Proactive Vigilance",
        image: "./assets/designs/avira-screen-pulse.png",
        caption: "Timed silent check-in prompt: rapid reassurance with one tap to avoid manual typing in transit."
      }
    ],
    tags: ["Figma Design System", "Transit Safety", "Empathetic UX", "Mobile Prototyping", "Color Psychology"]
  },
  {
    id: "design-for-her",
    title: "DESIGN FOR HER",
    subtitle: "Empathetic Holistic Women's Wellness & Grounding App",
    tagline: "Soft tactile interactions and physiological tracking designed with profound care.",
    category: "Mobile UI/UX · Tactile Design",
    badge: "Interactive Prototype",
    year: "2026",
    role: "UI/UX Researcher & Interaction Designer",
    figmaUrl: "https://www.figma.com/proto/SywpLu8fhcY5Wv4sHlgL6T/Design-for-Her?node-id=1-2&starting-point-node-id=1%3A2",
    accentColor: "#F8C7CE",
    secondaryColor: "#DDA7F5",
    overview: "Design for Her (Aura series) re-imagines female digital wellbeing beyond clinical medical charts. Built with organic curves, soothing blush tones, and guided sensory grounding routines.",
    designDecisions: [
      {
        title: "Tactile Soft Aesthetics",
        description: "Gentle blush pinks (#F8C7CE) paired with calming muted lavenders (#DDA7F5) designed to downregulate cortisol and provide visual shelter."
      },
      {
        title: "5-4-3-2-1 Sensory Grounding",
        description: "Interactive rhythmic breathing prompts allowing users to regain somatic balance during sudden panic or overwhelming anxiety."
      },
      {
        title: "Private Safety Vault",
        description: "Discrete circle sharing ensuring sensitive emotional and cycle milestones are visible only to chosen trusted guardians."
      }
    ],
    screens: [
      {
        id: "wellness",
        label: "Wellness Sanctuary",
        tag: "Cycle & Mind Sync",
        image: "./assets/designs/aura-safety-mobile.png",
        caption: "Tactile dashboard integrating daily emotional baseline, cycle tracking, and safety circles."
      }
    ],
    tags: ["Figma Prototype", "Emotional Design", "Micro-Interactions", "Wellness UX"]
  },
  {
    id: "civic-fix",
    title: "CIVIC FIX",
    subtitle: "Hyper-Local Civic Infrastructure Issue Reporter",
    tagline: "Bridging the gap between citizen frustration and municipal execution.",
    category: "Mobile UI/UX · Civic Tech",
    badge: "PixelVerse UI/UX Hackathon",
    year: "2026",
    role: "Product Designer & Information Architect",
    figmaUrl: "https://www.figma.com/proto/7ua1fjJwYSe9NK58SMV0k3/civic_fix?node-id=29-104",
    accentColor: "#38BDF8",
    secondaryColor: "#FF526F",
    overview: "Designed for the PixelVerse UI/UX Hackathon at SIES GST. Civic Fix allows residents to report damaged streetlights, potholes, and waterlogging with geo-tagged photographic proof and inspect real-time municipal resolution pipelines.",
    designDecisions: [
      {
        title: "Frictionless 3-Tap Reporting",
        description: "Automated GPS coordinate detection and AI defect tagging eliminate tedious manual address entry on mobile devices."
      },
      {
        title: "Public Works Transparency Pipeline",
        description: "Visual status stepper (Submitted → PWD Assigned → In Progress → Resolved with Post-Fix Photo) gives citizens accountability."
      },
      {
        title: "Community Upvoting & Priority Index",
        description: "Ward neighbors can upvote dangerous spots (e.g. 42 upvotes on Nerul D'Mart road pothole) pushing urgent repairs up municipal queues."
      }
    ],
    screens: [
      {
        id: "report",
        label: "Geo-Tagged Report Hub",
        tag: "Ward 14 Nerul Issue Tracker",
        image: "./assets/designs/civic-fix-screen.png",
        caption: "Real-time issue breakdown with photographic evidence, PWD assignment, and neighborhood upvoting."
      }
    ],
    tags: ["Civic Tech", "Mobile Workflow", "Rapid Hackathon Prototype", "Information Hierarchy"]
  },
  {
    id: "aura",
    title: "AURA — DIGITAL EXPERIENCE",
    subtitle: "Minimalist Sensory Mobile Interface",
    tagline: "Designing how digital software resonates emotionally with its user.",
    category: "Design System & Interaction",
    badge: "Featured Interaction",
    year: "2026",
    role: "Visual & Interaction Designer",
    figmaUrl: "https://www.figma.com/proto/Ampa8dUqHSzoXFItj7pm28/Untitled?node-id=1-3&starting-point-node-id=1%3A3",
    accentColor: "#DDA7F5",
    secondaryColor: "#F8C7CE",
    overview: "An experimental exploration into sensory UI aesthetics, minimal layouts, and high-frequency tactile feedback tailored for next-generation mobile devices.",
    designDecisions: [
      {
        title: "Spatial Breathing Room",
        description: "Generous negative space, large editorial serif titles, and zero cognitive clutter."
      },
      {
        title: "Layered Depth",
        description: "Subtle parallax depth, floating contextual indicators, and fluid gestures."
      }
    ],
    screens: [
      {
        id: "aura-main",
        label: "Aura Interface",
        tag: "Sensory UI",
        image: "./assets/designs/aura-safety-mobile.png",
        caption: "Deep charcoal palette contrasted with luminous lavender and blush pink accents."
      }
    ],
    tags: ["Sensory UI", "Figma", "Visual Hierarchy", "Design Systems"]
  }
];

export const secondaryProjects = [
  {
    title: "AyushLink",
    domain: "Healthcare-Tech / Offline-First System",
    description: "Offline-first mobile healthcare platform linking ASHA community health workers, physicians, and rural patients. Built responsive touch screens for ABHA card scanning, AI symptom checking, and digital prescriptions. Showcased at Rotary Club.",
    tags: ["React.js", "Healthcare UX", "Offline-First", "Rotary Showcase"],
    role: "Frontend Developer & UI Architect",
    status: "Ongoing Engineering"
  },
  {
    title: "Anuvaad — Regional AI Translator",
    domain: "AI-NLP / Multi-Language Experience",
    description: "Indian regional language conversational translator supporting all 22 scheduled official languages. Integrates speech-to-text, real-time contextual translation, and cultural linguistic showcases.",
    tags: ["JavaScript", "NLP / AI", "Voice UX", "Inclusive Design"],
    role: "UI/UX & Engineering",
    link: "https://vaishnvikedar6-jpg.github.io/Anuvaad-chatbot/",
    status: "Live Deployed"
  },
  {
    title: "Smart City Planning Dashboard",
    domain: "Data Analytics & Geographic Benchmarking",
    description: "Interactive analytics suite computing composite Smart City scores across traffic congestion, air quality index, and green cover. Benchmarks healthcare, transport, and municipal safety coverage.",
    tags: ["React.js", "Recharts", "Data Visualization", "GIS Mapping"],
    role: "Backend & Data Handling",
    status: "Academic Capstone"
  },
  {
    title: "CyberGuard Suite",
    domain: "Web Development / Security Platform",
    description: "Responsive web product landing page for a cybersecurity suite featuring malware defense shields, VPN throughput gauges, and 24/7 security monitoring. Built during Oasis Infobyte internship.",
    tags: ["HTML5", "CSS3 / JS", "Oasis Infobyte", "Responsive UI"],
    role: "Web Development Intern",
    link: "https://vaishnvikedar6-jpg.github.io/OIBSIP/Level1_Task1/",
    status: "Internship Project"
  }
];

export const designProcess = [
  {
    step: "01",
    phase: "DISCOVER",
    subtitle: "Empathy & Field Context",
    description: "Immersing in real human constraints. For AVIRA, researching solitary commute anxieties; for Civic Fix, mapping bureaucratic delays in neighborhood ward reporting.",
    deliverables: ["User Journey Maps", "Empathy Interviews", "Contextual Inquiries", "Anxiety Heatmaps"]
  },
  {
    step: "02",
    phase: "DEFINE",
    subtitle: "Problem Framing & Psychology",
    description: "Translating emotional pain points into concrete interface requirements. Establishing color psychology protocols (e.g. limiting alert red strictly to panic states).",
    deliverables: ["Information Architecture", "Core User Stories", "Safety Protocols", "Color Rules"]
  },
  {
    step: "03",
    phase: "DESIGN",
    subtitle: "Systematic Craft & Spatial Form",
    description: "Building scalable Figma component libraries, auto-layouts, responsive typography scales, and high-contrast dark mode canvases.",
    deliverables: ["Figma Design System", "High-Fidelity Screens", "Design Tokens", "Accessibility Check (WCAG)"]
  },
  {
    step: "04",
    phase: "PROTOTYPE",
    subtitle: "Tactile Motion & Logic Testing",
    description: "Wiring micro-interactions, spring transitions, smart animate states, and testing physical thumb zones on real mobile viewports.",
    deliverables: ["Interactive Figma Prototypes", "Micro-Animations", "Vibration / Haptic Flows"]
  },
  {
    step: "05",
    phase: "REFINE",
    subtitle: "Engineering Bridge & Production",
    description: "Partnering across design and code. Implementing pixel-perfect React components, Framer Motion transitions, and responsive web performance.",
    deliverables: ["React / Frontend Code", "Production Handoff", "Motion Design Standards"]
  }
];

export const experienceData = [
  {
    period: "Oct 2026",
    role: "Top 6 Finalist — AVIRA Women's Transit Companion",
    org: "Drishti: A UI/UX Designathon",
    affiliations: "CESA, VIT Mumbai · Friends of Figma Mumbai · .xyz",
    details: "Ranked in the top 6 out of 193+ competitor registrations. Designed AVIRA end-to-end as a team of two: safety-rated route planning, proactive Avira Pulse check-ins, automated arrival confirmations, and instant SOS workflows. Praised by industry judges for rigorous color psychology."
  },
  {
    period: "Mar 2026",
    role: "Hackathon Competitor — Civic Fix Prototype",
    org: "PixelVerse UI/UX Hackathon",
    affiliations: "Google Developer Groups on Campus · SIES GST",
    details: "Designed Civic Fix under stringent hackathon deadlines, creating an intuitive geo-reporting flow, visual municipal hierarchy, and accessible citizen feedback loops."
  },
  {
    period: "Nov 2024 – Dec 2024",
    role: "Web Development & Designing Intern",
    org: "Oasis Infobyte",
    affiliations: "Remote Internship",
    details: "Developed dynamic, responsive web applications and landing pages using HTML, CSS, and JavaScript. Managed source control via Git/GitHub, structured documentation, and met production milestones."
  },
  {
    period: "2024 – 2028",
    role: "B.E. Computer Engineering Scholar",
    org: "SIES Graduate School of Technology, Nerul",
    affiliations: "Mumbai University · CGPA 9.86 (2nd Year)",
    details: "Maintaining top academic rank (9.86 in 2nd Year, 9.5 in 1st Year). Balancing core engineering principles (DSA, DBMS, Full-Stack, AI) with dedicated product design craft."
  }
];

export const certifications = [
  {
    name: "Figma Web Design",
    issuer: "Simplilearn",
    tag: "Design Systems & UI",
    verified: true
  },
  {
    name: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    tag: "Jun 2026",
    verified: true
  },
  {
    name: "SQL & Relational Databases 101",
    issuer: "IBM / CognitiveClass.ai",
    tag: "Jun 2026",
    verified: true
  },
  {
    name: "AWS Solutions Architecture Simulation",
    issuer: "AWS Job Simulation",
    tag: "Cloud Architecture",
    verified: true
  },
  {
    name: "Web Development (HTML/CSS/JS)",
    issuer: "Udemy",
    tag: "Frontend Development",
    verified: true
  },
  {
    name: "Generative AI Career Essentials",
    issuer: "Microsoft & LinkedIn",
    tag: "GenAI Fundamentals",
    verified: true
  },
  {
    name: "Canva Design Certification",
    issuer: "Canva",
    tag: "Visual Design",
    verified: true
  }
];

export const skillsCategories = [
  {
    title: "UI/UX & Product Design",
    skills: ["Figma (Advanced)", "Wireframing", "Interactive Prototyping", "Design Systems", "User Research", "Usability Testing", "Color Psychology", "WCAG Accessibility", "Information Architecture"]
  },
  {
    title: "Engineering & Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5 & Semantic Web", "Modern CSS & Tailwind", "Vite", "Git & GitHub Pages", "REST APIs", "Node.js Basics"]
  },
  {
    title: "Data, Cloud & AI",
    skills: ["Python", "Prompt Engineering", "Generative AI Integration", "SQL & Relational DBs", "MongoDB", "Data Analytics Basics", "Cloud Fundamentals"]
  }
];
