export const caseStudies = [
  {
    slug: "investor-relations-application",
    title: "IROD: Investor Relations Application",
    description:
      "Crafted a custom, award-winning web/mobile app to automate quarterly earnings, which was later strategically decommissioned to simplify the ecosystem.",
    tags: ["React", "D3.js", "Snowflake", "JumpStart Framework", "AWS", "Python","Docker"],
    href: "/projects/investor-relations-application",
    role: "Senior Manager, Software Engineering",
    timeline: "1 Year",
    problem:
      "The quarterly earnings process for the CFO and investor relations was manual and inefficient. An existing UI also needed to be replaced with a modern, internally-sourced solution.",
    solution:
      "I led the team that built a custom web and mobile application (IROD) to automate the process. We later evolved the application to use a modern UI sourced from internal APIs and the data lake, leveraging our reusable JumpStart framework.",
    outcome:
      "Our CEO, CFO and Investor Relations team used it to improve the quarterly investor relations earning call.  Improving access to information and communication across the parties involved.  The application earned the prestigious Circle of Excellence award.",
  },
  {
    slug: "cloud-migration-finance-platforms",
    title: "Cloud Migration of Finance Platforms",
    description:
      "Led the migration of mission-critical finance platforms to AWS, including the general ledger, and modernized monolithic applications to a microservices architecture.",
    tags: ["AWS", "Microservices", "Python", "Java", "Docker", "CICD", "API", "SQL"],
    href: "/projects/cloud-migration-finance-platforms",
    role: "Manager, Software Engineering",
    timeline: "Multi-Year",
    problem:
      "Critical finance platforms, including the general ledger and enterprise reconciliation, were running on-premise. Monolithic applications were inefficient and not cloud-compliant.",
    solution:
      "I coordinated multiple cloud migration teams, architected technical build components on AWS, and led the modernization of monolithic applications to a microservices-based API architecture. This included migrating over 1,000 interfaces and associated data.",
    outcome:
      "The initiative ensured a smooth transition of critical finance platforms to the cloud allowing us to exit out datacenter, accelerated the adoption of AWS best practices, and achieved seamless cloud compliance.",
  },
  {
    slug: "rapid-liquidity-dashboard",
    title: "Rapid Liquidity Dashboard Development",
    description:
      "In response to the pandemic, led a task force to build and deliver a critical liquidity dashboard to production in just one week.",
    tags: ["React", "D3.js", "Snowflake", "JumpStart Framework"],
    href: "/projects/rapid-liquidity-dashboard",
    role: "Technical Lead",
    timeline: "1 Week",
    problem:
      "At the onset of the pandemic, there was an immediate and urgent need for a dashboard to display diverse liquidity data from across various lines of business.",
    solution:
      "I rapidly formed and led a task force of engineers, providing technical guidance and leveraging the reusable JumpStart framework to quickly produce the liquidity dashboard.",
    outcome:
      "The team delivered the first feature to production within one week, demonstrating strong leadership and technical execution under pressure. The patterns developed were reused in future projects.",
  },
  {
    slug: "personal-portfolio-platform",
    title: "Personal Portfolio & Blog Platform",
    description:
      "A dynamic, responsive portfolio built from the ground up with Next.js, TypeScript, and Tailwind CSS, and deployed on Vercel.",
    tags: [
      "Next.js",
      "Vercel",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "CI/CD",
    ],
    href: "/projects/personal-portfolio-platform",
    role: "Full-Stack Developer & DevOps",
    timeline: "Ongoing",
    problem:
      "The initial challenge was to create a modern, performant, and easily maintainable personal portfolio from scratch. The project required a robust technical stack that could handle dynamic content, ensure excellent SEO, and support a professional CI/CD workflow for seamless deployments.",
    solution:
      "We chose Next.js with the App Router, TypeScript, and Tailwind CSS for a strong foundation. The development process was iterative, focusing on building out core pages (Home, Resume, Projects), implementing a responsive navigation system with light/dark mode, and establishing a main/develop branching strategy for Vercel deployments. A key part of the process involved debugging and resolving complex, version-specific issues with Next.js 15.",
    outcome:
      "The result is a fully-featured, statically-generated portfolio site deployed on Vercel. It features a dynamic case study system, a polished and responsive UI, and a professional deployment pipeline. This project itself serves as a testament to modern web development practices.",
  },
];

export const resumeData = {
  summary:
    "Strategic and technically adept Software Engineering Leader with 20+ years of experience in driving complex cloud architectures, infrastructure automation, and software development initiatives. As an adept engineering director and technical architect, I have consistently delivered dependable, scalable, and cost-effective solutions tailored for extensive corporate environments.",
  experience: [
    {
      company: "Capital One",
      role: "Director, Software Engineering – Card Loyalty",
      dates: "October 2023 – October 2024",
      description: [
        "Orchestrated 6 engineering teams (30+ engineers) in delivering distributed, scalable, and highly resilient enterprise applications.",
        "Managed a $10M organizational budget, successfully recruiting and developing high-performing teams that consistently met KPIs.",
        "Led the design and implementation of the Loyalty Management Platform, enabling real-time customer benefit adjustments to align with business objectives.",
        "Drove the implementation of a security enhancement for the miles transfer program, addressing $300k of monthly fraudulent activity.",
        "Established an SRE team, setting up SLOs/SLIs and driving adoption of best practices, leading to over 70% of components transitioning to serverless infrastructure.",
      ],
    },
    {
      company: "Capital One",
      role: "Director, Software Engineering – Finance Tech",
      dates: "August 2022 – October 2023",
      description: [
        "Directed 4 teams (20+ engineers), driving modernization initiatives and fostering a culture of engineering excellence.",
        "Conducted an ROI analysis of high-cost applications, devising and executing a strategy that delivered over $2.8M in annual savings.",
        "Replaced a vendor tool with an internal microservice solution, cutting exposure by over $1M annually and reducing a monthly 2-day process to just 2 hours.",
        "Automated financial close processes, saving analysts 400 person-hours per month.",
      ],
    },
    {
      company: "Capital One",
      role: "Senior Manager, Software Engineering",
      dates: "January 2019 – August 2022",
      description: [
        "Led 2 engineering teams in developing custom web applications, significantly improving the efficiency and accuracy of financial processes.",
        "Crafted a custom web and mobile app to automate quarterly earnings, earning the prestigious Circle of Excellence award.",
        "Designed and implemented a cloud-based pilot environment for OneStream on AWS, leading to its successful implementation to replace Oracle Essbase.",
      ],
    },
    {
      company: "Capital One",
      role: "Manager, Software Engineering",
      dates: "August 2013 – January 2019",
      description: [
        "Coordinated cloud migration teams, overseeing the transition of critical business processes and applications to AWS.",
        "Architected technical build components and frameworks on AWS, driving the migration of finance platforms, including the general ledger and enterprise reconciliation.",
        "Modernized monolithic applications, transitioning them to a microservices-based API architecture for cloud compliance.",
      ],
    },
    {
      company: "Capital One",
      role: "Principal Associate, Software Engineering",
      dates: "July 2011 – August 2013",
      description: [],
    },
    {
      company: "Sodexo",
      role: "Business Technology Specialist",
      dates: "April 2006 – June 2011",
      description: [],
    },
    {
      company: "Citigroup, Commercial Business Group",
      role: "Senior Recon Automation Developer",
      dates: "November 2004 – April 2006",
      description: [],
    },
  ],
  education: [
    {
      institution: "University at Buffalo",
      degree: "B.S. in Business Administration – Management Information Systems",
      dates: "",
    },
    {
      institution: "AWS",
      degree: "AWS Certified Solutions Architect - Associate",
      dates: "",
    },
    {
      institution: "Capital One Tech College",
      degree: "CSSE",
      dates: "",
    },
    {
      institution: "University of Virginia Darden School of Business",
      degree: "Technology Leadership Development Program",
      dates: "",
    },
  ],
  skills: [
    {
      category: "Core Expertise",
      items: [
        "Software Development",
        "Employee Development",
        "Cloud Architecture & Strategy",
        "Infrastructure Automation",
        "DevOps",
        "Software Engineering Leadership",
        "Data Architecture",
        "Enterprise System Solutions",
        "Agile Frameworks",
        "API Integration",
        "Tech Strategy & Innovation",
        "Technology Roadmaps",
        "Cybersecurity",
        "Product Management",
        "Budget Management",
        "Hiring & Team Management",
        "Process Automation",
      ],
    },
    {
      category: "Technologies",
      items: [
        "Python", "AWS", "JavaScript", "NodeJS", "Typescript", "PHP",
        "HTML", "SQL", "CSS", "Java", "Linux (Bash)", "CICD", "Git",
        "Docker & Container Systems", "Oracle", "Jira", "Tableau",
        "ServiceNow", "Splunk", "Swagger", "Postman", "Jenkins",
      ],
    },
  ],
};