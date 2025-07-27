import Link from "next/link";
import { Github, Linkedin, Menu } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Lorenzo LaDelfa</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {/* <Link href="/projects">Projects</Link> */}
            <Link href="/resume">Resume</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="hidden items-center md:flex">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/lladelfa" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/lorenzo-ladelfa/"
                target="_blank"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <ModeToggle />
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="mt-8 grid gap-6 text-lg font-medium">
                  <SheetClose asChild>
                    <Link href="/resume">Resume</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/contact">Contact</Link>
                  </SheetClose>
                  {/* <SheetClose asChild><Link href="/projects">Projects</Link></SheetClose> */}
                  <Separator />
                  <div className="flex items-center justify-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href="https://github.com/lladelfa"
                        target="_blank"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <Link
                        href="https://www.linkedin.com/in/lorenzo-ladelfa/"
                        target="_blank"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                    <ModeToggle />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}