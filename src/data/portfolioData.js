export const personalInfo = {
  name: "Shashank Arava",
  title: "Full Stack Developer",
  subtitle: "Building elegant solutions to complex problems",
  bio: "I'm an aspiring software developer with interests across AI, ML, and DevOps. I also dabble in game development, graphics programming, and embedded systems.",
  email: "aravashashank@gmail.com",
  location: "Washington DC-Baltimore Area",
  resume: "./ShashankAravaResume.pdf"
};

export const socialLinks = {
  github: "https://github.com/ssarava",
  linkedin: "https://linkedin.com/in/shashank-arava",
  email: "mailto:aravashashank@gmail.com"
};

export const skills = [
  {
    category: "Frameworks",
    items: ["Express", "Node.js", "PostgreSQL", "MongoDB", "MySQL", "Next.js", "React.js", "REST APIs", "Tailwind CSS"]
  },
  {
    category: "Languages",
    items: ["Bash Shell", "C/", "C++", "HTML/CSS", "Go", "Java", "JavaScript", "OCaml", "Python", "Rust", "SQL", "TypeScript"]
  },
  {
    category: "Tools & Others",
    items: ["AWS", "CI/CD", "Docker", "Firebase", "Git", "MongoDB", "OpenGL", "SDL", "SFML"]
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory management, payment processing, and order tracking. Built with microservices architecture for scalability.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe API"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "https://github.com/shashankarava/ecommerce-platform",
    demo: "https://demo.shashankarava.io/ecommerce",
    highlights: [
      "Handles 10K+ concurrent users",
      "99.9% uptime with auto-scaling",
      "Integrated payment gateway"
    ]
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "An AI-powered content generation tool that helps marketers create engaging copy. Leverages GPT-4 for generating high-quality marketing content at scale.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    github: "https://github.com/shashankarava/ai-content-gen",
    demo: "https://demo.shashankarava.io/ai-content",
    highlights: [
      "50+ content templates",
      "Multi-language support",
      "Real-time collaboration"
    ]
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "A collaborative project management tool with real-time updates, team analytics, and customizable workflows. Perfect for agile teams.",
    technologies: ["React", "Firebase", "Material-UI", "Chart.js"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    github: "https://github.com/shashankarava/task-dashboard",
    demo: "https://demo.shashankarava.io/tasks",
    highlights: [
      "Real-time collaboration",
      "Custom workflow builder",
      "Advanced analytics"
    ]
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A beautiful weather application with 7-day forecasts, interactive maps, and severe weather alerts. Features a clean, intuitive interface.",
    technologies: ["React Native", "OpenWeather API", "Redux", "Maps SDK"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    github: "https://github.com/shashankarava/weather-app",
    demo: "https://demo.shashankarava.io/weather",
    highlights: [
      "Cross-platform (iOS/Android)",
      "Offline mode support",
      "Location-based alerts"
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: "Leading development of enterprise web applications and mentoring junior developers.",
    achievements: [
      "Architected and deployed microservices infrastructure serving 1M+ users",
      "Reduced application load time by 60% through performance optimization",
      "Led team of 5 developers in building customer-facing dashboard",
      "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
  },
  {
    id: 2,
    company: "Digital Solutions Agency",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    location: "Remote",
    description: "Developed custom web solutions for diverse clients across various industries.",
    achievements: [
      "Built 15+ client websites and web applications from concept to deployment",
      "Increased client engagement by 40% through UX improvements",
      "Implemented RESTful APIs integrating with third-party services",
      "Collaborated with design team to create responsive, accessible interfaces"
    ],
    technologies: ["React", "Express", "MongoDB", "Firebase"]
  },
  {
    id: 3,
    company: "StartUp Labs",
    position: "Junior Developer",
    duration: "2019 - 2020",
    location: "Austin, TX",
    description: "Contributed to development of SaaS products for startup ventures.",
    achievements: [
      "Developed features for MVP that secured $500K in seed funding",
      "Participated in agile development with 2-week sprint cycles",
      "Created reusable component library used across 3 products",
      "Fixed 200+ bugs and improved application stability"
    ],
    technologies: ["Vue.js", "Python", "Django", "MySQL"]
  }
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of California",
    year: "2019",
    description: "Focus on Software Engineering and Web Development"
  }
];
