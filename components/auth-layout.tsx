import * as React from "react";
import Link from "next/link";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row">
      {/* Left side: Branding/Marketing */}
      <div className="bg-zinc-950 relative hidden flex-col p-10 text-white lg:flex lg:w-3/5 lg:min-h-screen">
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <Link href="/">Acme Inc</Link>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      {/* Right side: Auth Component */}
      <div className="flex flex-1 items-center justify-center bg-background p-8 lg:w-2/5">
        <div className="w-full max-w-[400px]">{children}</div>
      </div>
    </div>
  );
}
