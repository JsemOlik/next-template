"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ColorToggle } from "@/components/color-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-end items-center p-4 gap-4 h-16 w-full border-b border-white bg-background/80 backdrop-blur-sm">
      <SignedOut>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/sign-up">
          <Button variant="cta">Sign Up</Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ColorToggle />
    </header>
  );
}
