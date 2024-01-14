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
  mercury,
  yappy,
  altarix,
  simbirsoft,
  quickView,
  streamingApp,
  artistapp,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack JavaScript Developer",
    company_name: "YAPPY",
    icon: yappy,
    iconBg: "#00e2b8",
    date: "Oct 2020 - Present",
    points: [
      "Performed the application from scratch until it reached four million users.",
      `
        Developed Frontend, Backend, relational databases, and Continuous Integration
        for ARM-moderation system that allows moderators to check and moderate it faster for
        45%
        `,
      "Covered all features with API / E2E/ Unit testing by BDD and TDD methodologies for all projects that decreased bug quantity by 35%",
      "Implemented metrics for the landing. Increased UX/UI by 20%",
      "Supported software systems by design patterns and team conventions that reduced speed quantity by 25% and decreased bug quantity by 20%.",
      "Made a presentation about Micro Frontend and monorepository for colleagues.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Altarix",
    icon: altarix,
    iconBg: "#daf8ff",
    date: "Mar 2019 - Oct 2020",
    points: [
      "Invented a business application that targets B2B and B2C financial clients that increased the speed of mortgage product selection by 23%..",
      "Made a UI-kit library system that increased the speed of building new features by 15%.",
      "Implemented the quiz with step-by-step navigation for B2C clients, which improved user experience",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Migrated React Components from Class Components to Function Components",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SimbirSoft",
    icon: simbirsoft,
    iconBg: "#166dfa",
    date: "Jun 2018 - Mar 2019",
    points: [
      "Developed Task Tracker application that targets for IT-companies. Added local internationalization & localization for three languages that increased quantity of clients on 15%.",
      "Built a Music Label community that supports beginning artists. (React, Redux, ReduxSaga). Developed authorization, video player, upload tracks, and about artists sections. Developed authorization, video player, upload tracks and about artists sections",
      "Implemented software system for renting Power Banks. I have created forms and map sections.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Mercury Development",
    icon: mercury,
    iconBg: "#fff",
    date: "Feb 2018 - Jun 2018",
    points: [
      "Implemented Profile and Bets section for Golf's Club Application.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "Qick-View Social Media",
    description: "It's a similar Instagram application. In the future, I want to add an AI bot there.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: quickView,
    source_code_link: "https://github.com/alembikovm/quick-view",
  },
  {
    name: "Social Media Streaming",
    description:
      "Social media streaming platform that targets a young audience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nest",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: streamingApp,
  },
  {
    name: "Music Label Community",
    description:
      "A Music Label Community application that supports beginning artists.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: artistapp,
  },
];

export { services, technologies, experiences, projects };
