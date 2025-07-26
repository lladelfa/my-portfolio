import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { caseStudies } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          My Work & Case Studies
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Here are some of the projects I've worked on. Since most of my work
          is proprietary, I've created case studies to showcase my process and
          impact.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Link href={study.href} key={study.title} className="group block">
            <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}