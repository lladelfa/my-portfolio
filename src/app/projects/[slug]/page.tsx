import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
  searchParams: { [key:string]: string | string[] | undefined };
};

export async function generateMetadata({
  params: { slug },
}: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} | Lorenzo LaDelfa`,
    description: study.description,
  };
}

export default function CaseStudyPage({ params: { slug } }: CaseStudyPageProps) {
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {study.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <span>{study.role}</span>
            <span className="text-sm">·</span>
            <span>{study.timeline}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <article className="prose prose-lg dark:prose-invert mt-12 max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">The Problem</h2>
              <p>{study.problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">The Solution</h2>
              <p>{study.solution}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">The Outcome</h2>
              <p>{study.outcome}</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}