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
import { DevToIcon } from "@/components/icons/DevToIcon";

export const RESUME_DATA = {
  name: "Emmanuel Nkrumah-Sarpong",
  initials: "ENS",
  location: "Accra, Ghana, GMT",
  locationLink: "https://www.google.com/maps/place/Accra",
  about:
    "Software Engineer with 7yoe building useful tools",
  summary:
    "Backend Engineer with 7+ years, building robust systems for growing companies. Upgraded a crucial fintech server that handles significant throughput of transactions (now over $93 million daily on average and doubling each year). Focused on creating tools and automations for smooth development and maintainance amidst ongoing growth. Always eager to try new technologies. A polyglot.",
  avatarUrl: "https://avatars.githubusercontent.com/u/42615665?v=4",
  personalWebsiteUrl: "https://nkrumahsarpong.com",
  blogUrl: "https://dev.to/nkrumahthis",
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
      {
        name: "Dev.to",
        url: "https://dev.to/nkrumahthis",
        icon: DevToIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Mines and Technology, Tarkwa, Ghana",
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
        "Upgraded Zeepay Ghana's core services from Laravel 6/7 to 10, enhancing security and performance",
        "Accelerated Zeepay deployments by hours per release using a custom CI/CD pipeline with GitHub Actions and Jenkins.",
        "Introduced Sentry for error logging and Docker for containerization, enhancing dev efficiency, code quality, and observability."
      ],
      technologies: ["Laravel", "Php", "Vue", "Javascript", "Docker"],
      description:
        "Working at Ghana's top company (2022), maintaining and extending critical platforms processing over US$ 93 million in daily transactions."
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
      description: "Junior android developer and App Tester",
    },
  ],
  skills: [
    "JavaScript",
    "Php",
    "Laravel",
    "TypeScript",
    "Go",
    "React",
    "Vue",
    "Node.js",
    "GraphQL",
    "REST",
    "MySQL",
    "AWS",
    "Docker",
    "Jenkins",
    "Git",
  ],
  projects: [
    {
      title: "Autocedi",
      techStack: [
        "CryptoCurrency",
        "JavaScript",
        "Next.js",
        "Vite",
        "REST",
        "cron",
      ],
      description: "Bank of Ghana Hackathon Finalist. A platform to automate payments using Ghana's CBDC: The eCedi.",
      logo: ConsultlyLogo,
      link: {
        label: "autocedi",
        href: "https://autocedi-web.vercel.app/",
      },
    }, 
    {
      title: "Assorted Jollof",
      techStack: [
        "REST API",
        "TypeScript",
        "Rust",
        "Go",
        "PHP",
        "Java",
        "Python",
        "Practice"
      ],
      description:
        "One same basic REST api server. Rewritten in 6 languages: typescript, go, python, php, java and rust.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/nkrumahthis/assorted-jollof",
      },
    },
    {
      title: "SLAPC",
      techStack: [
        "Side Project",
        "Go",
        "HTML",
        "ssh",
      ],
      description:
        "Easy interface to monitor logs and deploy new code for laravel servers",
      logo: EvercastLogo,
      link: {
        label: "github slapc",
        href: "https://github.com/nkrumahthis/slapc",
      },
    },
    {
      title: "Clever Bell",
      techStack: ["IoT", "Raspberry Pi", "Python", "Php"],
      description:
        "A battery powerd smart alarm system with a simple UI and School Management System integrability",
      logo: MonitoLogo,
      link: {
        label: "CleverBell",
        href: "https://github.com/nkrumahthis/clever-bell",
      },
    },
    {
      title: "Science Set Shop",
      techStack: ["eCommerce", "WooCommerce", "Wordpress", "Javascript", "Php", "Paystack"],
      description:
        "eCommerce store for Dext Technology for selling Science Sets. > US$100k sales",
      logo: JarockiMeLogo,
      link: {
        label: "thescienceset.com",
        href: "https://thescienceset.com",
      },
    },
    {
      title: "Scheduler Engine",
      techStack: ["Library", "TypeScript", "NodeJs"],
      description:
        "A library that allows you to set tasks and their schedules then executes tasks at specified times/intervals.",
      logo: Minimal,
      link: {
        label: "scheduler-engine",
        href: "https://www.npmjs.com/package/@plato2/scheduler-engine",
      },
    },
    {
      title: "Yii2 Graphql",
      techStack: ["Library", "Graphql", "Yii2", "Php"],
      description:
        "Fork: graphql server side for yii2 php framework",
      logo: BarepapersLogo,
      link: {
        label: "yii2-graphql",
        href: "https://packagist.org/packages/plato-solutions/yii2-graphql",
      },
    },
    {
      title: "HTML Denormalizer",
      techStack: ["Library", "Javascript", "Nodejs"],
      description: "Transforms JSON to HTML",
      logo: YearProgressLogo,
      link: {
        label: "html-denormalizer github",
        href: "https://github.com/Plato-solutions/html-denormalizer",
      },
    }
  ],
} as const;
