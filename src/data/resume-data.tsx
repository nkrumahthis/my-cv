
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { DevToIcon } from "@/components/icons/DevToIcon";

export const RESUME_DATA = {
  name: "Emmanuel Nkrumah-Sarpong",
  initials: "ENS",
  location: "Accra, Ghana, GMT",
  locationLink: "https://www.google.com/maps/place/Accra",
  about:
    "Software Engineer, 6yoe. Full stack, backend focused.",
  summary:
    "Backend Engineer with 6+ years, building robust systems for growing companies. 2023 eCedi Hackathon finalist. Upgraded a crucial fintech server that handles significant throughput of transactions (now over $93 million daily on average and doubling each year). Maintainer of 3 Open Source packages. Focused on creating tools and automations for smooth development and maintenance amidst ongoing growth. Always eager to try new technologies.",
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
      title: "Senior Technology Manager (Band 1)",
      start: "2023",
      end: "Present",
      achievements: [
        "Upgraded Zeepay Ghana's core services from Laravel 6/7 to 10, enhancing security, performance and stability",
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
      start: "2021",
      end: "2023",
      description: "Developed and architected full-stack software solutions, adhering to rigorous coding standards, testing methodologies, and Agile principles, while demonstrating expertise in REST APIs, GraphQL, Yii framework customization, and CI/CD usage.",
      technologies: ["JavaScript", "Typescript", "PHP", "GraphQL", "Docker", "Yii2", "JIRA", "GitlabAPI", "Pipedrive API", "nodemation", "Devops"],
      achievements: [
        "Architected and implemented real-time ETL that streamlined live product data and media updates in Magento via REST and GraphQL APIs.",
        "Published open-source Node.js libraries (Scheduler Engine, HTML Denormalizer) and a composer library (Yii2 GraphQL), each with 2000+ installs.",
        "Developed full stack PHP (Yii framework) software that exposes a GraphQL API, using composer library above, that managed automation data for thousands of intricate processes.",
        "Facilitated AI efforts through RESTful APIs that provided data for a Machine Learning system, integrating with JIRA, Gitlab and PipeDrive.",
        "Delivered a Chrome extension for internal use to aid in automated collection of data into Pipedrive, saving worker time."
      ]
    },
    {
      company: "Dext Technology",
      link: "https://thescienceset.com/",
      badges: ["Hybrid"],
      title: "Lead Developer",
      start: "2018",
      end: "2021",
      achievements: [
        "Created an Augmented Reality app for students to make science education interactive. (Award: Winner, Kumasi Hive & British Commission CARE Hackathon, 2018)",
        "Crafted cross-platform content-rich eTextbook app, enhancing product value for wider audience.",
        "Wrote backend for software gathering comprehensive STEM data (120,000+ students) for Ghana Education Service and National Teachers' Council",
        "Set up cloud infrastructure on AWS, self-hosting our store and tools for less than $25/month total",
        "Developed a wordpress/woocommerce store which generated US$100,000+ in sales over time",
        "Spearheaded innovative touch interactive smart board development (camera, Computer Vision) with interactive lessons - engaging novel product, potential revenue."
      ],
      technologies: ["Python", "Java", "JavaScript", "PHP", "AR", "OpenCV", "Ionic 4", "Wordpress"],
      description:
        "Served as a sole and (later) lead developer of this startup, interfacing between the engineers and the business executives, onboarding other engineers and managing all interns",
    },
    {
      company: "Glivion Technologies",
      link: "https://www.glivion.tech",
      badges: ["Part-time"],
      title: "Junior Android Developer",
      start: "2014",
      end: "2015",
      achievements: [
        "Demonstrated expertise in developing, debugging, and testing Android apps like TimeTab. We successfully scaled the app to over 5,000 users, but encountered a challenge when the keystore was lost. We reached 1,000 users again before ceasing development to pursue new projects."
      ],
      technologies: ["Java", "Android", "Php", "SlimPhp"],
      description: "Tested products and implemented features and bugfixes, updated dependencies.",
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
      title: "go-chain",
      techStack: [
        "CryptoCurrency",
        "Go"
      ],
      description: "Blockchain implemented in Go",
      link: {
        label: "go-chain",
        href: "https://github.com/nkrumahthis/go-chain",
      },
    },
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
      description: "Bank of Ghana Hackathon Finalist. A user friendly platform to automate payments using Ghana's CBDC: The eCedi.",
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
      link: {
        label: "github slapc",
        href: "https://github.com/nkrumahthis/slapc",
      },
    },
    {
      title: "Science Set Shop",
      techStack: ["eCommerce", "WooCommerce", "Wordpress", "Javascript", "Php", "Paystack"],
      description:
        "eCommerce store for Dext Technology for selling Science Sets. > US$100k sales",
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
      link: {
        label: "yii2-graphql",
        href: "https://packagist.org/packages/plato-solutions/yii2-graphql",
      },
    },
    {
      title: "HTML Denormalizer",
      techStack: ["Library", "Javascript", "Nodejs"],
      description: "Transforms JSON to HTML",
      link: {
        label: "html-denormalizer github",
        href: "https://github.com/Plato-solutions/html-denormalizer",
      },
    },
    {
      title: "Clever Bell",
      techStack: ["IoT", "Raspberry Pi", "Python", "Php"],
      description:
        "A battery powerd smart alarm system with a simple UI and School Management System integrability",
      link: {
        label: "CleverBell",
        href: "https://github.com/nkrumahthis/clever-bell",
      },
      
    },
    {
      title: "Timetab",
      techStack: ["Android", "Java"],
      description:
        "An app for students to the plan/schedule of their day to day lectures and activities.",
      link: {
        label: "Timetab",
        href: "https://play.google.com/store/apps/details?id=glivion.timetab",
      },
      
    }
  ],
} as const;
