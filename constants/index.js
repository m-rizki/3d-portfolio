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
  indore,
  unj,
  shareprompt,
  portfolio3d,
  carhub,
  compai,
} from '@/public/assets/images'

export const socialMedia = {
  githubLink: 'https://github.com/m-rizki/',
  linkedinLink: 'https://www.linkedin.com/in/rizki1998/',
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
    title: 'Web Developer',
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
    name: 'Typescript',
    icon: typescript,
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
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb
  // },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
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
    title: 'Front End Dev - React Js',
    company_name: 'Archsoft',
    icon: archsoft,
    iconBg: '#E6DEDD',
    date: 'Nov 2022 - Present',
    points: [
      'Developing and maintaining web applications using React.js, Next Js and other related technologies.',
      'Collaborating with cross-functional teams including designers, and other developers to create high-quality products.',
      'Participating in code reviews and providing constructive feedback to other developers.',
      'Projects: Riuconnect insurance administration, PT Reasuransi Indonesia Utama as front end developer (React Js), AIA Vitality Live (Event Registration website)',
    ],
  },
  // {
  //   title: 'Front End Dev - React Js',
  //   company_name: 'PT Reasuransi Indonesia Utama (as vendor)',
  //   icon: indore,
  //   iconBg: '#E6DEDD',
  //   date: 'December 2022 - Present',
  //   points: [
  //     'Developing and maintaining Insurance administration website applications using React.js, Next Js and other related technologies.',
  //     'Collaborating with cross-functional teams including project administrator and IT staff to create high-quality products.',
  //   ],
  // },
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
    name: 'compai',
    description:
      'SaaS AI Companion Platform that allows users to discover, CRUD companion and chat with AI Companion Models',
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
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'shadcn-ui',
        color: 'text-white',
      },
      {
        name: 'zod',
        color: 'green-text-gradient',
      },
      {
        name: 'react-hook-form',
        color: 'pink-text-gradient',
      },
      {
        name: 'zustand',
        color: 'text-white',
      },
      {
        name: 'clerk',
        color: 'blue-text-gradient',
      },
      {
        name: 'prisma',
        color: 'text-white',
      },
      {
        name: 'postgresql',
        color: 'blue-text-gradient',
      },
    ],
    image: compai,
    source_code_link: 'https://github.com/m-rizki/compai',
  },
  {
    name: '3D Portfolio',
    description: 'Personal web portfolio',
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
    name: 'Car Showcase (CarHub)',
    description: 'Web-based platform that allows users to discover cars',
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
        name: 'tailwind',
        color: 'blue-text-gradient',
      },
      {
        name: 'headlesui',
        color: 'pink-text-gradient',
      },
    ],
    image: carhub,
    source_code_link: 'https://github.com/m-rizki/car-showcase',
  },
]

export { services, technologies, experiences, testimonials, projects }
