"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ColorToggle } from "@/components/color-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex justify-end items-center p-4 gap-4 h-16 w-full border-b border-white bg-background/80 backdrop-blur-sm">
      <SignedOut>
        <SignInButton mode="modal" />
        <SignUpButton mode="modal">
          <Button variant="cta">Sign Up</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ColorToggle />
    </header>
  );
}
