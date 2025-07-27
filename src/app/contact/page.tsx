import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:lorenzo.ladelfa@example.com", // Replace with your actual email
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/lorenzoladelfa",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/lorenzoladelfa",
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 text-center md:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get In Touch
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of an amazing team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="outline" asChild>
              <Link href={link.href} target={link.name !== "Email" ? "_blank" : undefined}>
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
}