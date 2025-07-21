import { Project } from "@/types";

export const projects: Project[] = [
  // Frontend Projects
  {
    id: "nationwide-platforms",
    title: "Nationwide Platforms",
    description: `Expansion of IoT web application for this powered access rental market leader, Features include business dashboards; maps to track location of machines or their history, sites, engineers, drivers; pages for: machines, operators, engineers, transport, technical support; internal machines status displaying info from all the tracking devices fitted to each machine, activity, fuel, battery, logged and secured states, engine usage, breakdown failures; geofence management, areas, alerts; associated charts among others.
    
Greenfield PWA multi-app platform using Nx, Angular 17, Ably to manage real-time data management and DexiJS to store info on IndexedDB for off-line mode. The main project is a mobile app for Engineers to organise daily shifts on Depots or in the Field. Some features include assign of their own vehicle, checking roadworthiness, viewing list and type of jobs, assessing place of work, taking photos, tasks management, parts management, engineer and customer completion, and more.
    
Creation of UI user flow diagram for engineers mobile app platform in order to help Business Managers and other Software Developers with the architecture of the app.
    
Development of Transport PWA app, based on angularJS original app. Similar frontend architecture than Engineering app. Helping project manager with frontend resources.
    
Upgrade project from Angular version 8 to 17. 
    
Lead small dev team of 4: frontend design and architecture, PR management, code reviews and  deployments to QA on Azure.
    
Code and styling support to developers on different projects.
    
Involved in the project’s time estimates and planning.`,
    image: "/images/nw-platforms_asset-details.jpg",
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
    id: "finantial-dashboard",
    title: "Finantial Dashboard",
    description: `Project building a fully integrated SaaS Cloud based CLM (client lifecycle management) solution for banks, wealth and asset management firms on a single platform.

Features would include a dashboard with the latest changes, customisable client journeys, clients account and compliance data, e-signatures, behavioural risk profiling, requests, proposals, marketing, onboarding, lead and pipeline management, real time communication (notes, phone calls, related records, timelines), suggested opportunities, related documents and articles.

Use of Atomic Design to build responsive app components`,
    image: "/images/wd-clmi.webp",
    technologies: [
      "HTML5",
      "CSS3 (SCSS)",
      "JS",
      "JSON",
      "GIT",
      "Bootstrap 4",
      "Angular 12",
      "RxJS",
      "Typescript",
      "Agile",
      "NgRx",
      "Jest",
    ],
    category: "frontend",
    link: "https://example.com",
    github: "https://github.com/username/analytics",
  },
  {
    id: "srt-marine",
    title: "Maritime application",
    description: `Built front-end for a global project to enhance maritime domain awareness for vessels, ports, environment agencies, fisheries and coast guards.

Component features included reports, alerts, geofence filters, details of transceivers, managing users and roles, trips, different types of vessels, tagging system, sensor stations, internal chat, observers and reported activity, targeting different devices, historic data, showing catches, managing licenses, notifications.

Worked with modules, routing, dynamic templates, reactive forms and validation, maps, graphs, lists, tables, vanilla JS to connect with another system built with Unity, RESTful API's, JSON, migration from SVN to Git, custom styles.
`,
    image: "/images/maritime_app.png",
    technologies: [
      "HTML5",
      "CSS3 (SCSS)",
      "JS",
      "JSON",
      "GIT",
      "Bootstrap 4",
      "Angular 12",
      "Rxjs",
      "Typescript",
      "Agile",
      "Webpack",
    ],
    category: "frontend",
    link: "https://example.com",
    github: "https://github.com/username/portfolio",
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
    id: "big-data",
    title: "Big Data company",
    description: `Creation of Company’s website (WP) and maintenance of several web applications.

Working in close collaboration with Developers, Marketing and Sales departments, Project Managers, Commercial Directors, CTO and CEO.

Conception (design) and implementation (frontend) of one of their unicorn projects.

Designing wireframes, prototypes, marketing imagery, banners, logos, cards. Visual design, visual identity, typography, interaction design and animation.

Creation of Brand guidelines intranet (CodeIgniter)

Conception of new landing pages for some of their products.`,
    image: "/images/bd-overview.jpg",
    technologies: [
      "Photoshop",
      "Illustrator",
      "Prototyping",
      "InDesign",
      "Wordpress",
      "Pen and paper",
    ],
    category: "uxui",
    link: "https://example.com",
  },
  {
    id: "turism",
    title: "Web and Logo Design",
    description: `Designed a custom website and logo for a tourism company, focusing on building a strong brand identity and engaging user experience.

Worked closely with stakeholders through successive meetings and feedback sessions, refining the logo through several iterations to ensure it effectively represented the company's vision and values.

Developed detailed wireframes and prototypes to outline the website's structure and user flow, ensuring intuitive navigation and accessibility. Created imagery, iconography, and visual elements that reflect the company’s brand personality and mission, maintaining consistency across all design components.

Completed the project by delivering a cohesive visual identity that enhances the company's online presence and supports its growth objectives.`,
    image: "/images/africa.png",
    technologies: ["UX", "UI", "Design", "Logo"],
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
    id: "digital-delicassy",
    title: "Digital Delicassy",
    description: `This captivating painting presents an intimate yet poetic portrayal of a young woman, positioned amidst a lush, blossoming garden. The artist masterfully captures a moment of introspection and tranquility, inviting viewers into a serene garden scene infused with subtle emotional depth.

The subject is depicted from behind, her head gently tilted downward, suggesting a moment of quiet reflection or gentle contemplation. Her soft, flowing brown hair is styled in a loose bun, with delicate strands escaping, adding to the sense of natural elegance. The woman’s skin is rendered with meticulous attention to tone and texture, highlighting the subtle nuances of light and shadow across her shoulders and neck, evoking a quiet vulnerability and grace.

She wears a delicate, white dress characterized by intricate lacework and elegant bows, with an open back that reveals a glimpse of her delicate skin, emphasizing both innocence and vulnerability. The dress’s fabric appears light and airy, contrasting beautifully with the vibrant, lively background of the garden.

The garden itself is alive with color and movement—an array of pink and purple flowers bloom abundantly, their petals rendered with delicate brushstrokes that suggest softness and fragility. Surrounding greenery is lush and verdant, painted with rich, layered textures that evoke a sense of depth and abundance. The background employs warm earthy tones and soft lighting, which imbues the scene with a gentle, almost nostalgic ambiance.

Throughout the composition, the artist employs a harmonious balance of light and shadow, achieving a painterly quality that captures both the fleeting beauty of the moment and the enduring serenity of nature. The textured canvas background enhances the artwork’s tactile richness, grounding the scene in a subtle rustic charm.

Overall, this piece eloquently explores themes of femininity, introspection, and harmony with nature. It invites viewers to linger on the quiet elegance of the figure and the exuberance of the garden, creating a poetic dialogue between human fragility and the timeless beauty of the natural world.
    `,
    image: "/images/delicassy.jpg",
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
    id: "house-wren",
    title: "House Wren",
    description: `This painting is a masterful depiction of a small bird perched delicately on a textured, rugged branch, set against a lush, vibrant background of verdant foliage. Executed with meticulous attention to detail, the artist captures both the fragility and vitality of this feathered creature, evoking a profound sense of natural harmony.

The bird, a house wren hitherto observed during a camping trip in Argentina, is rendered with exquisite realism. Its delicate feathers showcase a subtle gradation of browns and soft earth tones, highlighting the bird's energetic presence and exquisite plumage. The artist has skillfully conveyed the bird’s alert gaze and poised posture, emphasizing its songbird nature and the vivacious spirit typical of this species.

The branch on which the wren is perched exhibits a rich texture, with weathered bark and intricate knots that add depth and realism to the composition. The surrounding background is a lush explosion of green, painted with expressive brushstrokes that evoke a sense of dense foliage and the serenity of the Argentine wilderness. Light filters through the canopy, creating a luminous, almost ethereal atmosphere that underscores the tranquility of the scene.

The predominant green palette, with its varying shades and tones, signifies not just the lushness and vitality of the natural habitat but also conveys themes of growth, renewal, and peaceful coexistence with nature. The artist’s careful balance of light and shadow enhances the three-dimensionality of the scene, inviting viewers to feel immersed in a quiet moment of connection between the bird and its environment.

Overall, this piece exemplifies a harmonious blend of realism and expressive painterly techniques, capturing the fleeting beauty of a moment in nature. It invites viewers to appreciate the subtle elegance of wildlife and the importance of preserving such delicate ecosystems, resonating with a sense of tranquility and reverence for the natural world.`,
    image: "/images/house-wren.jpg",
    technologies: [
      "Acrylic",
      "Art",
      "Color Theory",
      "Composition",
      "Nature",
      "Hand painted",
    ],
    category: "art",
    link: "https://example.com",
  },
  {
    id: "purple-fingers",
    title: "Purple Fingers",
    description: `This exquisite painting vividly captures the delicate beauty of a flowering digitalis plant, set against an abstract, softly blended background. The artist employs a harmonious combination of realism and expressive brushwork to evoke both the intricate details of the flower and the ephemeral quality of nature’s fleeting moments.

The composition centers on a gracefully cascading spike of digitalis blossoms, their bell-shaped petals rendered with meticulous attention to detail and a keen eye for color variation. The flowers range from soft blush pinks to deeper violet hues, exhibiting subtle gradations and intricate markings that highlight the plant’s characteristic speckled patterns and delicate textures. The artist’s skillful use of light and shadow accentuates the gentle curvature of the petals, bringing a three-dimensional sense of volume and depth to each blossom.

The background is an abstract, dreamlike blend of muted greens, purples, and earthy tones, achieved through fluid brushwork and soft transitions. This ethereal backdrop reinforces the vibrant clarity of the flowers, making them appear almost luminous and suspended within their environment. The gentle contrast between the detailed foreground and the painterly background creates a compelling visual tension, drawing the viewer’s eye and emphasizing the fragile elegance of the digitalis.

The overall mood conveyed by this work is one of serenity, grace, and reverence for botanical beauty. The artist’s signature, signed in the lower-left corner with the date “2010,” hints at a mature, contemplative approach to nature’s delicate forms. As a whole, this painting functions as both a botanical tribute and a meditation on the transient, exquisite moments found in the natural world, celebrated through a masterful combination of technical precision and poetic vision.`,
    image: "/images/purple-fingers.jpg",
    technologies: [
      "Art",
      "Hand painted",
      "Acrylic",
      "Nature",
      "Flowers",
      "Color",
    ],
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
