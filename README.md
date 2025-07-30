# Lorenzo LaDelfa - Personal Portfolio

This is the source code for my personal portfolio website, built to showcase my professional experience, projects, and skills as a software engineering leader.

**Live Demo:** You can view the live site here: [lorenzoladelfa.com](https://lorenzoladelfa.com)

---

## About The Project

This portfolio was built from the ground up using a modern, performant, and type-safe technology stack. It serves not only as a professional resume but also as a living case study demonstrating best practices in web development, from initial setup and CI/CD to advanced feature implementation and responsive design.

### Key Features

*   **Fully Responsive Design:** A polished, mobile-first UI that looks great on all devices, featuring a custom hero section and slide-out navigation.
*   **Light & Dark Mode:** Theme toggling for user preference, with persistence across sessions.
*   **Dynamic Content:** Case studies and resume data are managed centrally in a `data.ts` file, making updates simple and clean.
*   **Dynamic Routing:** Project pages are generated dynamically based on a `slug` (`/projects/[slug]`), with full static-site generation (SSG) for optimal performance.
*   **Engaging Animations:** Subtle page and component animations using Framer Motion to enhance user experience.
*   **SEO Optimized:** Page-specific metadata (`title`, `description`) for better search engine visibility.
*   **CI/CD Pipeline:** Automated deployments to Vercel with a professional Git workflow.

## Built With

*   **Next.js** - React Framework for Production
*   **React** - UI Library
*   **TypeScript** - Typed JavaScript
*   **Tailwind CSS** - Utility-First CSS Framework
*   **shadcn/ui** - Re-usable components
*   **Framer Motion** - Animations Library
*   **Vercel** - Deployment Platform

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.
*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/lorenzoladelfa/my-portfolio.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```
    Open http://localhost:3000 with your browser to see the result.

## Deployment

This site is automatically deployed on Vercel. Every push to the `develop` branch triggers a preview deployment, and every merge into `main` triggers a production deployment to the live domain.

## Branching Strategy

This project uses a simple and effective Git branching strategy:

*   **`main`**: This branch contains production-ready code. Merging into `main` deploys to the live domain.
*   **`develop`**: This is the primary development branch. All feature branches are merged into `develop` first, which creates a preview deployment on Vercel.
*   **`feature/*`**: Individual features are developed on these branches, branched off from `develop`, and also receive their own preview deployments upon creating a pull request.