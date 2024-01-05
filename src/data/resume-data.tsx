import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  ZeepayLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Emmanuel Nkrumah-Sarpong",
  initials: "ENS",
  location: "Accra, Ghana, GMT",
  locationLink: "https://www.google.com/maps/place/Accra",
  about:
    "Software Engineer (Backend preferred) building tools to improve lives",
  summary:
    "As a Software Engineer, I have a passion for crafting cool solutions. I love learning new things and have working knowledge of multiple technologies, languages and frameworks. Currently, I work mostly with Javascript, PHP, React, Node.js, and Vue. I have over 5 years of experience in working both remotely and on site with companies in the US and Africa.",
  avatarUrl: "https://avatars.githubusercontent.com/u/42615665?v=4",
  personalWebsiteUrl: "https://nkrumahsarpong.com",
  contact: {
    email: "nkrumahthis@gmail.com",
    tel: "+233242359842",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/nkrumahthis",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nkrumahthis/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/nkrumahthis",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Science and Technology",
      degree: "Bachelor's Degree in Computer Science and Engineering",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Zeepay",
      link: "https://myzeepay.com",
      badges: ["On-site"],
      title: "Senior Technology Manager Band 1",
      logo: ZeepayLogo,
      start: "2023",
      end: "Present",
      achievements: [
        "Upgraded Zeepay Ghana's core services from Laravel 6/7 to 10, enhancing security and performance for a platform processing over US$ 93 million in daily transactions.",
        "Improved deployment speed at Zeepay, slashing time from idea/bug discovery to release by hours through a custom CI/CD pipeline leveraging Github Actions with Jenkins. Saving at least 1 hour per deployment.",
        "Championed the adoption of industry-standard tools like Sentry (error logging) and Docker (containerization), boosting development efficiency, code quality, and observability."
      ],
      technologies: ["Laravel", "Php", "Vue", "Javascript", "Docker"],
      description:
        "Working at Ghana's top company (2022), maintaining and extending platforms processing over US$ 93 million in daily transactions."
    },
    {
      company: "Plato Solutions Inc",
      link: "https://platosolutions.io",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2023",
      description: "Developed and architected full-stack software solutions, adhering to rigorous coding standards, testing methodologies, and Agile principles, while demonstrating expertise in REST APIs, GraphQL, Yii framework customization, and CI/CD usage.",
      technologies: ["JavaScript", "Typescript", "PHP", "GraphQL", "Docker", "Yii2", "JIRA", "GitlabAPI", "Pipedrive API", "nodemation"],
      achievements: [
        "Architected and build an ETL system for transforming JSON data into products for a Magento store fully automatically",
        "Wrote a NodeJs library for executing promises on a cron in a clean syntax. Then used it in the ETL System in Production",
        "Forked, customized and published a variation of a PHP GraphQL library for Yii2",
        "Developed full stack PHP (Yii framework) software that exposes a Graphql API using the self customized GraphQL library with 2000 installs.",
        "Built RESTful APIs that provided data for a Machine Learning system, integrating with JIRA, Gitlab and PipeDrive",
        "Built a Chrome extension to aid in automated collection of data into Pipedrive"
      ]
    },
    {
      company: "Dext Technologies",
      link: "https://thescienceset.com/",
      badges: ["Hybrid"],
      title: "Lead Developer",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2021",
      achievements: [
        "Built tight software team, created Android apps for students", 
        "Set up cloud infrastructure", 
        "Built and maintained wordpress and woocommerce store", 
        "Led a team to build an affordable Smart Board for classrooms using a camera, LED pen and ComputerVision"
      ],
      technologies: ["Python", "Java", "JavaScript", "PHP"],
      description:
        "Served as the startup's main software engineer, and then Lead Engineer for R&D education technology projects",
    },
    {
      company: "Glivion Technologies",
      link: "https://www.glivion.tech",
      badges: ["Part-time"],
      title: "Junior Android Developer",
      logo: NSNLogo,
      start: "2014",
      end: "2016",
      achievements: [
        "Contributed to, debugged and tested Android apps like TimeTab"
      ],
      technologies: ["Java", "Android", "Php", "SlimPhp"],
      description: "",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
