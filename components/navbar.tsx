"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ColorToggle } from "@/components/color-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/sign-in" || pathname === "/sign-up") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 flex justify-end items-center px-4 gap-4 h-16 w-full border-b border-white bg-background/80 backdrop-blur-sm">
      <SignedOut>
        <div className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghostCta" className="text-md px-2">
              Sign In
            </Button>
          </Link>
        </div>
        <Link href="/sign-up" className="h-full self-stretch flex">
          <Button variant="cta" className="h-full border-y-0 p-6 text-md">
            Get Started
          </Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ColorToggle />
    </header>
  );
}
