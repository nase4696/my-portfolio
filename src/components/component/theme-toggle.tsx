"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icon";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button disabled size="icon" variant="outline">
        <Icons.sun className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      aria-label="テーマ切り替え"
      className="relative transition-all duration-300 hover:scale-110"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      size="icon"
      variant="outline"
    >
      <Icons.sun
        className="!h-5 !w-5 text-orange-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        strokeWidth={2}
      />
      <Icons.moon
        className="absolute !h-5 !w-5 text-yellow-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        strokeWidth={2}
      />
    </Button>
  );
}
