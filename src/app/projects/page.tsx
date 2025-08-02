"use client";

import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 pt-28 pb-12 md:pt-32 md:pb-16">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Work & Case Studies
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Here are some of the projects I&apos;ve worked on. Since most of my work
          is proprietary, I&apos;ve created case studies to showcase my process and
          impact.
        </p>
      </div>

      <motion.div
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {caseStudies.map((study) => (
          <motion.div key={study.slug} variants={itemVariants}>
            <Link href={study.href} className="group block h-full">
              <Card className="flex h-full flex-col transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <CardHeader>
                  <CardTitle>{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow" />
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}