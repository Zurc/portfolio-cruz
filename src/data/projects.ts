import { Project } from "@/types";

export const projects: Project[] = [
  // Frontend Projects
  {
    id: "nationwide-platforms",
    title: "Nationwide Platforms apps",
    description: `Expansion of IoT web application for this powered access rental market leader, Features include business dashboards; maps to track location of machines or their history, sites, engineers, drivers; pages for: machines, operators, engineers, transport, technical support; internal machines status displaying info from all the tracking devices fitted to each machine, activity, fuel, battery, logged and secured states, engine usage, breakdown failures; geofence management, areas, alerts; associated charts among others.
    
Greenfield PWA multi-app platform using Nx, Angular 17, Ably to manage real-time data management and DexiJS to store info on IndexedDB for off-line mode. The main project is a mobile app for Engineers to organise daily shifts on Depots or in the Field. Some features include assign of their own vehicle, checking roadworthiness, viewing list and type of jobs, assessing place of work, taking photos, tasks management, parts management, engineer and customer completion, and more.
    
Creation of UI user flow diagram for engineers mobile app platform in order to help Business Managers and other Software Developers with the architecture of the app.
    
Development of Transport PWA app, based on angularJS original app. Similar frontend architecture than Engineering app. Helping project manager with frontend resources.
    
Upgrade project from Angular version 8 to 17. 
    
Lead small dev team of 4: frontend design and architecture, PR management, code reviews and  deployments to QA on Azure.
    
Code and styling support to developers on different projects.
    
Involved in the project’s time estimates and planning.`,
    image: "/images/cover-01.jpg",
    technologies: [
      "Angular",
      "RxJS",
      "TypeScript",
      "ChartJS",
      "GoogleMaps",
      "AGM maps",
      "PrimeNG",
      "GIT",
      "Azure",
      "SCSS",
      "Angular Material",
      "RESTful APIs",
      "Agile",
    ],
    category: "frontend",
    link: "https://example.com",
    github: "https://github.com/username/ecommerce",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with interactive charts and customizable widgets. Features responsive design and dark mode support.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    technologies: ["Vue.js", "D3.js", "SCSS", "REST API"],
    category: "frontend",
    link: "https://example.com",
    github: "https://github.com/username/analytics",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Clean, modern portfolio site with smooth animations and optimized performance. Features dynamic content loading and SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&h=300&fit=crop",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    category: "frontend",
    link: "https://example.com",
    github: "https://github.com/username/portfolio",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
    technologies: ["React", "Redux", "Socket.io", "Express"],
    category: "frontend",
    link: "https://example.com",
    github: "https://github.com/username/task-manager",
  },

  // UX/UI Projects
  {
    id: "mobile-banking",
    title: "Mobile Banking App",
    description:
      "Complete UI/UX redesign for a mobile banking application, focusing on security, accessibility, and user-friendly financial management.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    technologies: ["Figma", "User Research", "Prototyping", "iOS/Android"],
    category: "uxui",
    link: "https://example.com",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Dashboard Design",
    description:
      "Modern dashboard interface for a B2B SaaS platform with complex data visualization and workflow management capabilities.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop",
    technologies: ["Sketch", "InVision", "Design System", "Responsive"],
    category: "uxui",
    link: "https://example.com",
  },
  {
    id: "elearning-platform",
    title: "E-learning Platform",
    description:
      "Comprehensive UI design for an online learning platform with course management, progress tracking, and interactive learning modules.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&h=300&fit=crop",
    technologies: ["Adobe XD", "User Testing", "Wireframing", "Accessibility"],
    category: "uxui",
    link: "https://example.com",
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    description:
      "Patient-centered healthcare app design with appointment scheduling, medical records, and telemedicine capabilities.",
    image:
      "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&h=300&fit=crop",
    technologies: [
      "Figma",
      "Material Design",
      "HIPAA Compliance",
      "User Journey",
    ],
    category: "uxui",
    link: "https://example.com",
  },

  // Art Projects
  {
    id: "fantasy-portraits",
    title: "Fantasy Portrait Series",
    description:
      "A collection of fantasy character portraits featuring ethereal beings and mystical creatures, painted with detailed attention to lighting and atmosphere.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=500&h=300&fit=crop",
    technologies: [
      "Photoshop",
      "Digital Painting",
      "Character Design",
      "Concept Art",
    ],
    category: "art",
    link: "https://example.com",
  },
  {
    id: "abstract-landscapes",
    title: "Abstract Landscapes",
    description:
      "Surreal landscape compositions that blend reality with imagination, exploring color theory and atmospheric perspective in digital medium.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    technologies: ["Procreate", "Abstract Art", "Color Theory", "Composition"],
    category: "art",
    link: "https://example.com",
  },
  {
    id: "architectural-illustrations",
    title: "Architectural Illustrations",
    description:
      "Detailed architectural renderings and conceptual illustrations for urban planning and building design projects.",
    image:
      "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&h=300&fit=crop",
    technologies: [
      "Illustrator",
      "3D Modeling",
      "Technical Drawing",
      "Visualization",
    ],
    category: "art",
    link: "https://example.com",
  },
  {
    id: "brand-illustrations",
    title: "Brand Illustrations",
    description:
      "Custom illustrations for brand identity, marketing materials, and digital campaigns that capture brand personality and values.",
    image:
      "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca4?w=500&h=300&fit=crop",
    technologies: ["Vector Art", "Brand Design", "Marketing", "Illustration"],
    category: "art",
    link: "https://example.com",
  },
];

export const getProjectsByCategory = (
  category: "frontend" | "uxui" | "art"
) => {
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.slice(0, 6);
};
