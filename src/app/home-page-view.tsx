"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HomePageView() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 p-8 text-center">
      <div className="max-w-2xl">
        <motion.h1
          className="text-4xl font-bold tracking-tight md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lorenzo LaDelfa
        </motion.h1>
        <motion.h2
          className="mt-2 text-lg font-semibold tracking-tight md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Strategic Engineering Leader | Cloud Modernization | Solutions Architect
        </motion.h2>
        <motion.p
          className="mt-4 text-balance text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I&apos;m a hands-on engineering leader who excels at architecting solutions
          for complex cloud challenges. I have a proven track record of
          organizing and directing cross-functional teams to modernize
          mission-critical applications, aligning technology roadmaps with
          business objectives to drive impactful results.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" asChild>
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </motion.div>
      </div>
    </main>
  );
}