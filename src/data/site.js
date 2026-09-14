export const profile = {
  firstName: 'Swayam',
  lastName: 'Parmar',
  name: 'Swayam Parmar',
  initials: 'SP',
  role: 'Full Stack Developer',
  shortRole: 'Full Stack Developer',
  greeting: "Hello, I'm",
  tagline: 'Building production-grade web and mobile applications.',
  intro: 'Full Stack Developer with 3 years of experience building production-grade web and mobile applications with React.js, Next.js, React Native, Node.js, TypeScript, and Laravel.',
  location: 'Mumbai, India',
  email: 'swayam.parmar.dev@gmail.com',
  phone: '+91 9359082545',
  availability: 'Open to full-time opportunities',
  availabilityShort: 'Open to opportunities',
  responseTime: 'Reach me by email for professional enquiries.',
  resumeFile: 'Swayam_Parmar_Full_Stack_Developer.pdf',
  resumeUrl: `${process.env.PUBLIC_URL || ''}/assets/Swayam_Parmar_Full_Stack_Developer.pdf`,
  photo: '/assets/images/developer-portrait.svg',
  heroImage: '/assets/images/developer-hero.svg',
};

export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/SwayamParmar', handle: 'SwayamParmar' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/swayam-parmar-988a45214', handle: 'swayam-parmar' },
  { id: 'email', label: 'Email', href: 'mailto:swayam.parmar.dev@gmail.com', handle: 'swayam.parmar.dev@gmail.com' },
];

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const heroStats = [
  { id: 'experience', value: 3, suffix: '', label: 'Years Experience', icon: 'calendar' },
  { id: 'sprints', value: 6, suffix: '+', label: 'Agile Sprints', icon: 'layers' },
  { id: 'api', value: 30, suffix: '%', label: 'API Response Improvement', icon: 'gauge' },
  { id: 'load', value: 35, suffix: '%', label: 'Page Load Improvement', icon: 'zap' },
];

export const heroBadges = [
  { id: 'react', label: 'React.js', icon: 'react', top: '4%', left: '0%', delay: 0 },
  { id: 'typescript', label: 'TypeScript', icon: 'typescript', top: '16%', left: '74%', delay: 0.35 },
  { id: 'node', label: 'Node.js', icon: 'node', top: '30%', left: '-4%', delay: 0.5 },
  { id: 'laravel', label: 'Laravel', icon: 'php', top: '40%', left: '82%', delay: 0.7 },
  { id: 'socket', label: 'Socket.IO', icon: 'api', top: '56%', left: '-6%', delay: 0.85 },
  { id: 'mysql', label: 'MySQL', icon: 'mysql', top: '64%', left: '80%', delay: 0.9 },
  { id: 'react-native', label: 'React Native', icon: 'react', top: '84%', left: '64%', delay: 1.1 },
];

export const about = {
  eyebrow: 'About Me',
  title: 'I build systems that feel reliable from the first interaction',
  paragraphs: [
    'I work across web and mobile product surfaces, from architecture and REST API design to responsive interfaces and production deployments.',
    'My focus is on real-time systems, performance, secure authentication, and component-driven development that keeps products maintainable as they grow.',
    'I studied Information Technology at Hinduja College, University of Mumbai, graduating with a GPA of 9.2.',
  ],
  experienceBadge: { value: '3+', label: 'Years of Experience' },
  quickFacts: [
    { id: 'name', label: 'Name', value: 'Swayam Parmar', icon: 'user' },
    { id: 'email', label: 'Email', value: 'swayam.parmar.dev@gmail.com', icon: 'mail' },
    { id: 'location', label: 'Location', value: 'Mumbai, India', icon: 'pin' },
    { id: 'education', label: 'Education', value: 'B.Sc. IT · GPA 9.2', icon: 'clock' },
  ],
  strengths: [
    { id: 'architecture', title: 'System Thinking', description: 'Designing dependable frontend, backend, and API boundaries for production products.', icon: 'puzzle' },
    { id: 'realtime', title: 'Real-Time Products', description: 'Building chat, presence, notifications, and live updates around WebSockets and Socket.IO.', icon: 'target' },
    { id: 'performance', title: 'Performance Focus', description: 'Improving response times, page loads, database queries, and everyday product feel.', icon: 'sparkles' },
  ],
  services: [
    { id: 'web', title: 'Web Applications', description: 'Responsive product interfaces with React.js, Next.js, TypeScript, and Tailwind CSS.', icon: 'code', accent: 'teal' },
    { id: 'backend', title: 'Backend & APIs', description: 'REST APIs, authentication, data models, and business logic with Node.js, Express.js, and Laravel.', icon: 'server', accent: 'emerald' },
    { id: 'mobile', title: 'Mobile Applications', description: 'Cross-platform mobile experiences with React Native and Expo.', icon: 'phone', accent: 'amber' },
    { id: 'quality', title: 'Performance & Delivery', description: 'Query optimization, code review, CI/CD pipelines, and AWS deployments.', icon: 'gauge', accent: 'teal' },
  ],
};

export const skillCategories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'data', label: 'Data & Cloud' },
  { id: 'tools', label: 'Tools & Concepts' },
];

export const skills = [
  { id: 'react', name: 'React.js', category: 'frontend', icon: 'react', color: '#61DAFB' },
  { id: 'next', name: 'Next.js', category: 'frontend', icon: 'layers', color: '#64748B' },
  { id: 'typescript', name: 'TypeScript', category: 'frontend', icon: 'typescript', color: '#3178C6' },
  { id: 'javascript', name: 'JavaScript (ES6+)', category: 'frontend', icon: 'javascript', color: '#F7DF1E' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend', icon: 'palette', color: '#06B6D4' },
  { id: 'node', name: 'Node.js', category: 'backend', icon: 'node', color: '#5FA04E' },
  { id: 'express', name: 'Express.js', category: 'backend', icon: 'server', color: '#94A3B8' },
  { id: 'laravel', name: 'Laravel', category: 'backend', icon: 'php', color: '#FF2D20' },
  { id: 'rest', name: 'REST API Design', category: 'backend', icon: 'api', color: '#10B981' },
  { id: 'realtime', name: 'WebSockets / Socket.IO', category: 'backend', icon: 'api', color: '#14B8A6' },
  { id: 'react-native', name: 'React Native (Expo)', category: 'mobile', icon: 'react', color: '#61DAFB' },
  { id: 'mysql', name: 'MySQL', category: 'data', icon: 'mysql', color: '#00758F' },
  { id: 'mongodb', name: 'MongoDB', category: 'data', icon: 'database', color: '#47A248' },
  { id: 'redis', name: 'Redis', category: 'data', icon: 'database', color: '#DC382D' },
  { id: 'aws', name: 'AWS (EC2, S3)', category: 'data', icon: 'layers', color: '#FF9900' },
  { id: 'git', name: 'Git & GitHub', category: 'tools', icon: 'github', color: '#14B8A6' },
  { id: 'cicd', name: 'CI/CD Pipelines', category: 'tools', icon: 'gauge', color: '#F59E0B' },
  { id: 'figma', name: 'Figma', category: 'tools', icon: 'figma', color: '#F24E1E' },
];

export const skillHighlights = [
  { id: 'stack', value: 'Web + mobile', label: 'Product surfaces' },
  { id: 'realtime', value: 'Real-time', label: 'Systems experience' },
  { id: 'api', value: '30%', label: 'API response improvement' },
  { id: 'load', value: '35%', label: 'Page load improvement' },
];

export const experience = [
  {
    id: 'enats', period: 'Oct 2023 — Present', role: 'Full Stack Developer', company: 'ENATS technology LLP', type: 'Full-time · Mumbai', current: true,
    description: 'Building and enhancing production web platforms across job marketplaces, interior design experiences, APIs, and CMS integrations.',
    achievements: [
      'Developed Djobzy, a global job portal and gig marketplace with dual-role employer and job seeker workflows.',
      'Built real-time chat, secure escrow payment workflows, and AI recommendation API integrations.',
      'Reduced average API response times by 30% through composite indexing and N+1 query elimination.',
      'Improved Bonito page load speeds by 35% and resolved 20+ UI/UX bottlenecks with cross-browser responsive layouts.',
      'Delivered production features across 6+ Agile sprints through code reviews, testing, and collaborative QA.',
    ],
    technologies: ['React.js', 'Laravel', 'MySQL', 'PHP', 'JavaScript', 'REST APIs'],
  },
];

export const education = [
  { id: 'bsc-it', period: 'Aug 2020 — May 2023', title: 'Bachelor of Computer Science (Information Technology)', org: 'Hinduja College, University of Mumbai', description: 'Mumbai, India · GPA: 9.2' },
];

export const projectFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'website', label: 'Website' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'fullstack', label: 'Full Stack' },
];

export const projects = [
  {
    id: 'djobzy-web', title: 'Djobzy — Global Job Portal & Gig Marketplace', category: 'website', year: 'ENATS technology LLP', featured: true,
    summary: 'Production-scale global job portal and gig marketplace supporting dual-role workflows for employers and job seekers.',
    description: 'Developed and enhanced a production-scale global job portal and gig marketplace with React.js, Laravel and MySQL. Built dual-role dashboards, real-time chat with Pusher and Laravel Echo, and secure escrow-based payment workflows. Integrated third-party AI recommendation APIs into the backend to improve user engagement and platform traffic, and optimized MySQL query performance through composite indexing and N+1 query elimination.',
    image: '/assets/images/project-commerce-dashboard.svg', accent: 'teal', technologies: ['React.js', 'Laravel', 'MySQL', 'Pusher', 'Laravel Echo', 'REST APIs'],
    metrics: [{ label: 'API Response Time', value: '-30%' }, { label: 'Agile Sprints', value: '6+' }],
    links: { demo: 'https://djobzy.com' },
  },
  {
    id: 'bonito', title: 'Bonito — Interior Design Platform', category: 'website', year: 'ENATS technology LLP', featured: false,
    summary: 'Customer-facing interior design platform with CMS-backed asset management and mobile-first responsive layouts.',
    description: 'Optimized core customer-facing pages with PHP, JavaScript and Bootstrap for faster load speeds and full cross-browser support. Built REST APIs and CMS backend integrations for scalable asset management and secure data delivery, resolved critical UI/UX bottlenecks, and engineered mobile-first responsive layouts using CSS Grid and Flexbox.',
    image: '/assets/images/project-portfolio-cms.svg', accent: 'amber', technologies: ['PHP', 'JavaScript', 'Bootstrap', 'REST APIs', 'CMS', 'CSS Grid', 'Flexbox'],
    metrics: [{ label: 'Page Load Speed', value: '+35%' }, { label: 'UI/UX Issues Fixed', value: '20+' }],
    links: { demo: 'https://bonito.in' },
  },
  {
    id: 'djobzy-mobile', title: 'Djobzy Mobile Application', category: 'mobile', year: 'Early Access', featured: true,
    summary: 'Cross-platform mobile experience for job discovery, gig workflows, messaging, and job updates.',
    description: 'Led full-stack mobile development from Figma wireframes to production-ready UI, REST API design, Laravel backend architecture, authentication, real-time chat, and push notifications.',
    image: '/assets/images/project-chat-app.svg', accent: 'teal', technologies: ['React Native (Expo)', 'Laravel', 'MySQL', 'Laravel Sanctum', 'Zustand', 'REST APIs', 'Figma'],
    metrics: [{ label: 'Platform', value: 'Android' }, { label: 'Stage', value: 'Early Access' }],
    links: { demo: 'https://play.google.com/store/apps/details?id=com.djobzy.www' },
  },
  {
    id: 'talkstream', title: 'TalkStream', category: 'fullstack', year: 'Personal Project', featured: true,
    summary: 'Full-stack real-time messaging with private conversations, presence, typing indicators, and delivery status.',
    description: 'A MERN and TypeScript messaging application with Socket.IO real-time events, JWT authentication, media and file uploads, Cloudinary integration, lazy loading, MongoDB query optimization, and text-search indexing.',
    image: '/assets/images/project-chat-app.svg', accent: 'emerald', technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'Socket.IO', 'Tailwind CSS'],
    metrics: [{ label: 'Architecture', value: 'MERN' }, { label: 'Transport', value: 'Socket.IO' }],
    links: { demo: 'https://talkstream-realtime.vercel.app' },
  },
];

export const projectsCta = { label: 'View GitHub', href: 'https://github.com/SwayamParmar' };

export const contact = {
  eyebrow: 'Contact', title: "Let's connect", subtitle: 'For professional opportunities, technical conversations, or questions about my work, reach me through the details below.',
  channels: [
    { id: 'email', label: 'Email', value: 'swayam.parmar.dev@gmail.com', href: 'mailto:swayam.parmar.dev@gmail.com', icon: 'mail' },
    { id: 'phone', label: 'Phone', value: '+91 9359082545', href: 'tel:+919359082545', icon: 'phone' },
    { id: 'location', label: 'Location', value: 'Mumbai, India', href: null, icon: 'pin' },
    { id: 'availability', label: 'Availability', value: 'Open to full-time opportunities', href: null, icon: 'check' },
  ],
  subjects: ['Full-time opportunity', 'Technical conversation', 'Project enquiry', 'Something else'],
};

export const footer = {
  description: 'Full Stack Developer building production-grade web and mobile applications with thoughtful architecture, real-time systems, and measurable performance improvements.',
  columns: [{ id: 'navigate', title: 'Navigate', links: navLinks.slice(0, 4) }, { id: 'more', title: 'More', links: navLinks.slice(4) }],
  legal: [],
  builtWith: 'Built with React, Tailwind CSS & Framer Motion',
};

const site = { profile, socials, navLinks, heroStats, heroBadges, about, skills, skillCategories, skillHighlights, experience, education, projects, projectFilters, projectsCta, contact, footer };
export default site;
