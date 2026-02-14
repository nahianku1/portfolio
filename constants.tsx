
import { Skill, Project, EducationItem } from './types';

export const SKILLS: Skill[] = [
  { id: '1', name: 'React.js', description: 'Building complex interfaces with high performance.', icon: 'code' },
  { id: '2', name: 'Next.js', description: 'SSR, SSG, and edge-ready web applications.', icon: 'rocket_launch' },
  { id: '3', name: 'Tailwind CSS', description: 'Utility-first styling for unique design systems.', icon: 'palette' },
  { id: '4', name: 'Node.js', description: 'Scalable backend services and API design.', icon: 'storage' },
  { id: '5', name: 'TypeScript', description: 'Type-safe development for enterprise apps.', icon: 'javascript' },
  { id: '6', name: 'UI/UX Design', description: 'Creating intuitive user journeys and prototypes.', icon: 'layers' },
  { id: '7', name: 'Cloud Solutions', description: 'Deployment and management on AWS & Vercel.', icon: 'cloud' },
  { id: '8', name: 'Glassmorphism', description: 'Expert in high-end modern visual styles.', icon: 'blur_on' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Fantasy Recipe',
    description: 'A visual-heavy culinary platform featuring AI-driven ingredient pairing and immersive storytelling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyCjGGFA0DQP8k6MzjPn4DGq-iUoaRkzX0n8UbxnZ0_M2jtuUTpmmmoXEFRr4BI3_M6E7Y97IDqgsgJZ80hwBbwJ9eXbUejJv5bhWqTXKFjOXlX4BAYd3mYMUqSwbIgXDWgCDPu7GhDVPVzCgcfYHac0n0G8yIGXLPjpvqqJv1Qa4_QvmNqtkz21UYhpq2ohgsyRWoUPdqG0CrEz52nI3edZJ1D2IsVFW3ARdWXrKcQQlDpoy2VpIzG_tErWGXHu3bf3E6wlN2C1w',
    tags: ['React', 'Tailwind']
  },
  {
    id: '2',
    title: 'Edufun Toys',
    description: 'High-end e-commerce experience for educational toys, focused on seamless UX and conversion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_1aPc6ym7fk5n-EFdu7_iDxX_MQDS5EYJku_xb4y-di_wSpO52aQecEEAHsrFMqHQk4yNmtLmZJqlatApUwdyTnSr94e6-lIsMR-jwVg_-A7Nbs9yokgxMxmWCJZzbjQbO0SNZGZR7HG2EJ6L9AHjZ2cBpDC0mcV4NRDuB_DNqwJJ3gm_eihZ8AwQaBCiKzEM50dh7zMn9Ybd7g0JoxVAc7EZ-8eQrBKPhCWZ-aP5BU9IyMW3NkMC7mDyzMkMtlktS43nbxnmoh0',
    tags: ['Next.js', 'Stripe']
  },
  {
    id: '3',
    title: 'Lingua Master',
    description: 'Language learning application featuring gamified paths and real-time pronunciation feedback systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC73_RBgCdFSacyBeKxTjeHcOg3QKOXjxTr9hHtfF6ihAsQMJwfaYseQ_aGlpSfePqTrM4JBcQpRrYp3A48QMSUNEAafA5NhGvlC_kMIz3QWbbeCgEF43nSBGYuJr5nhDqel3_V1WBwwssE1XQgSCJY0gegm9h60Ek6xDgFus8hqEJtEUIc7GPXlJlxIEvu2zXx7WlizJY0dSX-QOSz1dfryipyeHiC4MHHFx_lw9Fz22cBZkzPFLMLZyDZrOATiILUQSyBar9QnBg',
    tags: ['UI/UX', 'Language Lab']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    degree: 'Master of Business Administration (MBA)',
    specialization: 'Business Strategy & Tech Management',
    description: 'Focused on bridging the gap between technical development and high-level business goals. Specialized in digital transformation and agile leadership.',
    highlight: true
  },
  {
    id: '2',
    degree: 'Bachelor of Computer Science',
    specialization: 'Software Engineering Focus',
    description: 'Graduated with honors, focusing on complex software architectures and distributed systems. Developed early interest in human-computer interaction.'
  }
];
