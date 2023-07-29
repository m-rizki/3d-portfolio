import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  archsoft,
  unj,
  shareprompt,
  portfolio3d
} from '@/public/assets/images'

export const socialMedia = {
  githubLink: 'https://github.com/m-rizki/',
  linkedinLink: 'https://www.linkedin.com/in/rizki1998/'
}

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer (Javascript)',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Next Js Developer',
    icon: backend,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Next Js',
    icon: nextjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
]

const experiences = [
  {
    title: 'Python Developer (Student)',
    company_name: 'State University of Jakarta',
    icon: unj,
    iconBg: '#E6DEDD',
    date: 'Graduation Date: Aug 2022',
    points: [
      'Using Python, NumPy, Matplotlib, SciPy, and Scikit-Image to develop algorithm for contour detection and experimenting with chronic wound dataset',
      'Thesis : Detection of Chronic Wound Circumference using Active Contour (snake) and Active Contour with added Interpolation',
    ],
  },
  {
    title: 'React Developer',
    company_name: 'Archsoft',
    icon: archsoft,
    iconBg: '#E6DEDD',
    date: 'Nov 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js, Next Js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Projects: riuconnect (insurance administration), AIA vitality live 2023',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Share Prompt',
    description:
      'Web-based platform that allows users to discover, create, and share creative AI prompts',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'text-white',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: shareprompt,
    source_code_link: 'https://github.com/m-rizki/share-prompt',
  },
  {
    name: '3D Portfolio',
    description:
      'Personal web portfolio',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'text-white',
      },
      {
        name: 'framermotion',
        color: 'green-text-gradient',
      },
      {
        name: 'threejs',
        color: 'text-white',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio3d,
    source_code_link: 'https://github.com/m-rizki/3d-portfolio',
  },
]

export { services, technologies, experiences, testimonials, projects }
