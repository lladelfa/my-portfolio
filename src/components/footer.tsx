import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Lorenzo LaDelfa. All Rights Reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}