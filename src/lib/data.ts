export const caseStudies = [
  {
    slug: "enterprise-e-commerce-platform-migration",
    title: "Enterprise E-commerce Platform Migration",
    description:
      "Led the frontend migration to a modern Jamstack architecture, improving performance by 40% and enhancing the developer experience.",
    tags: ["React", "Next.js", "GraphQL", "TypeScript", "Vercel"],
    href: "/projects/enterprise-e-commerce-platform-migration",
    role: "Senior Frontend Engineer",
    timeline: "6 Months",
    problem:
      "The legacy sales reporting system was slow, required manual data entry, and couldn't provide real-time insights, leading to significant lost productivity per week.",
    solution:
      "We chose to use GraphQL over a traditional REST API to reduce the number of network requests and allow the frontend to request only the data it needed. I implemented a virtualization strategy for a list that needed to render over 10,000 items, which reduced the initial render time by 80%.",
    outcome:
      "The new platform resulted in a 25% increase in user conversion rates and reduced server response times by 300ms.",
  },
  {
    slug: "internal-data-analytics-dashboard",
    title: "Internal Data Analytics Dashboard",
    description:
      "Designed and developed a real-time data analytics dashboard for the sales team, reducing manual reporting time by 10 hours per week.",
    tags: ["React", "Vite", "TanStack Query", "Chart.js", "Tailwind CSS"],
    href: "/projects/internal-data-analytics-dashboard",
    role: "Frontend Developer",
    timeline: "3 Months",
    problem:
      "The sales team lacked a centralized view of their performance metrics, relying on disparate spreadsheets and manual reports. This led to delays in decision-making and an inability to track real-time progress against goals.",
    solution:
      "I built an interactive dashboard using React and Chart.js that connected to multiple data sources via TanStack Query. The dashboard provided real-time visualizations of key metrics, with features for filtering by date range, region, and sales representative.",
    outcome:
      "The new tool automated a manual process, saving the team approximately 10 hours per week and providing leadership with immediate, actionable insights into sales performance.",
  },
  {
    slug: "mobile-first-component-library",
    title: "Mobile-First Component Library",
    description:
      "Architected and built a reusable component library, ensuring brand consistency and accelerating feature development across multiple applications.",
    tags: ["React", "Storybook", "Styled-Components", "Jest", "Testing Library"],
    href: "/projects/mobile-first-component-library",
    role: "Software Engineer",
    timeline: "Ongoing",
    problem:
      "As the company grew, inconsistencies in UI/UX appeared across different products. Development teams were rebuilding common components, leading to duplicated effort and a fragmented user experience.",
    solution:
      "I led the initiative to create a centralized, versioned component library in React, documented with Storybook. The library was built with a mobile-first approach and included a comprehensive suite of tests to ensure reliability and accessibility.",
    outcome:
      "The component library is now used by 5+ product teams, accelerating feature development by an estimated 20% and ensuring a consistent, high-quality user experience across all digital touchpoints.",
  },
];