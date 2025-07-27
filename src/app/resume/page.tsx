import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Resume
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Here you can download a PDF version of my resume. It contains a
          comprehensive overview of my skills, experience, and education.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}