import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { resumeData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Resume
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A comprehensive overview of my skills, experience, and education.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download as PDF
              </a>
            </Button>
          </div>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full" defaultValue="item-1">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-2xl font-bold">Experience</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-8">
                {resumeData.experience.map((job) => (
                  <div key={job.company}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xl font-semibold">{job.role}</h3>
                      <p className="text-sm text-muted-foreground">{job.dates}</p>
                    </div>
                    <p className="text-lg text-muted-foreground">{job.company}</p>
                    <ul className="mt-2 list-disc space-y-1 pl-4">
                      {job.description.map((point, i) => (
                        <li key={`${job.company}-desc-${i}`}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-2xl font-bold">Skills</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {resumeData.skills.map((skillSet) => (
                  <div key={skillSet.category}>
                    <h3 className="text-lg font-semibold">{skillSet.category}</h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {skillSet.items.map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-2xl font-bold">Education</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                {resumeData.education.map((edu) => (
                  <div key={edu.institution}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.dates}
                      </p>
                    </div>
                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}
