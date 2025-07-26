import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";

// This function tells Next.js which slugs to pre-render at build time.
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <article className="prose prose-gray dark:prose-invert mx-auto max-w-4xl">
        <div className="space-y-4 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {study.title}
          </h1>
          <p className="text-lg text-muted-foreground">{study.description}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-y py-4">
            <div>
              <h3 className="font-semibold">Role</h3>
              <p className="text-muted-foreground">{study.role}</p>
            </div>
            <div>
              <h3 className="font-semibold">Timeline</h3>
              <p className="text-muted-foreground">{study.timeline}</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {study.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h2>The Challenge</h2>
        <p>{study.problem}</p>

        <h2>The Solution</h2>
        <p>{study.solution}</p>

        <h2>The Outcome & Impact</h2>
        <blockquote>
          <p>{study.outcome}</p>
        </blockquote>
      </article>
    </main>
  );
}