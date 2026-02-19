"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import "../app/globals.css";

export function ClerkThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const appearance = useMemo(
    () => ({
      baseTheme: mounted && resolvedTheme === "dark" ? dark : undefined,
      variables: {
        colorPrimary: "oklch(0.586 0.253 17.585)", // Use raw value if possible or keep var
        colorPrimaryForeground: "var(--primary-foreground)",
        colorBackground: "var(--background)",
        colorNeutral: "var(--foreground)",
        colorForeground: "var(--foreground)",
        colorInputForeground: "var(--input-foreground)",
        colorInput: "var(--input)",
      },
    }),
    [mounted, resolvedTheme],
  );

  return <ClerkProvider appearance={appearance}>{children}</ClerkProvider>;
}
