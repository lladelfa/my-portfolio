import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Lorenzo LaDelfa</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/lladelfa" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/lorenzo-ladelfa/" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}