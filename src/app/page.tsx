import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 p-8 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          Lorenzo LaDelfa
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          A Senior Software Engineer building scalable and user-friendly
          solutions for the modern web.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/resume.pdf" download>Download Resume</a>
          </Button>
        </div>
      </div>
    </main>
  );
}