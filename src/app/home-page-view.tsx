"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HomePageView() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center pt-36 md:pt-44">
      {/* Abstract Background Banner */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 dark:opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Lorenzo LaDelfa
            </h1>
            <h2 className="mt-2 text-lg font-semibold tracking-tight md:text-xl text-primary">
              Strategic Engineering Leader | Cloud Modernization | Solutions
              Architect
            </h2>
            <p className="mt-4 max-w-xl text-balance text-lg text-muted-foreground">
              I&apos;m a hands-on engineering leader who excels at architecting
              solutions for complex cloud challenges, modernizing
              mission-critical applications to drive impactful results.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/profile.png"
              alt="A photo of Lorenzo LaDelfa"
              width={350}
              height={350}
              priority
              className="rounded-full object-cover border-4 border-background shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}