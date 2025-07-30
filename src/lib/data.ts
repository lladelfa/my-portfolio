export const caseStudies = [
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
  {
    slug: "loyalty-management-platform",
    title: "Enterprise Loyalty Platform Modernization",
    description:
      "Led the modernization of a critical, customer-facing loyalty platform to improve scalability, real-time capabilities, and developer velocity.",
    tags: ["AWS", "Java", "Microservices", "API Integration", "DevOps"],
    href: "/projects/loyalty-management-platform",
    role: "Director, Software Engineering",
    timeline: "1 Year",
    problem:
      "The existing loyalty platform was built on legacy technology, making it difficult to scale, slow to release new features, and unable to support real-time benefit management required by the business.",
    solution:
      "I orchestrated 6 engineering teams to re-architect and modernize the platform on AWS using a microservices-based approach. This involved streamlining complex workflows, establishing a robust CI/CD pipeline, and implementing an event-driven architecture to enable real-time processing.",
    outcome:
      "The modernized platform enhanced system resiliency, reduced feature delivery time from months to weeks, and provided the business with critical, real-time control over customer benefits, future-proofing our servicing solutions.",
  },
  {
    slug: "finsight-application-optimization",
    title: "FinSight Application Optimization",
    description: "Devised an architectural optimization plan projected to save $2.8M annually and achieve a 164% ROI by simplifying a complex financial application.",
    tags: ["Cloud Architecture", 
      "DevOps", "Data Architecture", "Python", "React","SQL","Node.js","AWS"],
    href: "/projects/finsight-application-optimization",
    role: "Director, Software Engineering",
    timeline: "Ongoing",
    problem: "The FinSight application's architecture was overly complex, requiring a large team of 15 engineers to support it, leading to high operational costs.",
    solution: "I partnered with senior engineers to design a simplified, domain-driven architecture for the application. I successfully communicated this detailed plan and garnered buy-in from product and business partners.",
    outcome: "This optimization initiative established a new benchmark for how all future software projects are evaluated, leading to more efficient staffing models and streamlined execution methodologies across the organization. The reduction in required engineering support demonstrated a paradigm shift in resource allocation and project management."
  },
  {
    slug: "investor-relations-application",
    title: "IROD: Investor Relations Application",
    description:
      "Crafted a custom, award-winning web/mobile app to automate quarterly earnings, which was later strategically decommissioned to simplify the ecosystem.",
    tags: ["React", "D3.js", "Snowflake", "JumpStart Framework", "AWS", "Python","Node.js","Docker"],
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
];

export const resumeData = {
  summary:
    "Strategic and technically adept Software Engineering Leader with 20+ years of experience in driving complex cloud architectures, infrastructure automation, and software development initiatives. As an adept engineering director and technical architect, I have consistently delivered dependable, scalable, and cost-effective solutions tailored for extensive corporate environments.",
  experience: [
    {
      company: "M & T Bank",
      role: "Domain Solutions Architect",
      dates: "October 2024 - Current",
      description: [
        "Modernized enterprise applications by architecting and deploying scalable Azure-based solutions, establishing a standardized DevOps pipeline that significantly reduced infrastructure provisioning time while enhancing overall system resiliency and scalability.",
        "Drove modernization of data lifecycle management across the portfolio, implementing a standardized framework for evaluating and assigning data retention requirements to application datasets. This strategy resulted in the compliant decommissioning of multiple legacy systems and significant reductions in storage costs.",
        "Facilitated comprehensive Software Architecture Document reviews, contributing to their continuous refinement and improvement. Ensured solution compliance with systems engineering standards, enabling application teams to modernize their systems for enhanced scalability and resilience, directly supporting data center exit strategies.",
      ],
    },
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
      description: [
        "Led the technical delivery of the Recon engineering team, successfully completing major finance initiatives including SSO migration, IE11 upgrade, and resiliency improvements.",
        "Implemented data enrichment on the Reconciliation system, automating reclassifications to reduce risk and eliminate a manual task, resulting in significant time savings for the business.",
      ],
    },
    {
      company: "Sodexo",
      role: "Business Technology Specialist",
      dates: "April 2006 – June 2011",
      description: [
        "Contributed as an integral member of a team to develop processes for an accurate and automated payroll reconciliation.",
        "Implemented a sub-account banking structure that improved automated reconciliation and enhanced the accuracy of bank and GL data.",
        "Completed an in-house upgrade of ReconPlus, optimizing the reconciliation system.",
        "Developed a custom ACH application to analyze daily ACH transfers and transmit files in standard NACHA format, resulting in a 75% reduction in bank fees.",
        "Created a custom program to automatically retrieve bank balances and data files, retiring a manual process.",
      ],
    },
    {
      company: "Citigroup, Commercial Business Group",
      role: "Senior Recon Automation Developer",
      dates: "November 2004 – April 2006",
      description: [
        "Translated business logic into regular and ad-hoc reports using Acrobat and Excel.",
        "Utilized VBA and Access to prototype new account logic before implementation into the production ReconPlus application.",
        "Saved hundreds of person-hours by developing a workaround for a complex import process.",
      ],
    },
  ],
  education: [
    {
      institution: "University at Buffalo",
      degree: "B.S. in Business Administration – Management Information Systems",
      dates: "",
    },
    {
      institution: "University of Virginia Darden School of Business",
      degree: "Technology Leadership Development Program",
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