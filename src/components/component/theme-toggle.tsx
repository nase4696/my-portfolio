"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { Button, ButtonStyleProps } from "@/components/ui/button";
import { Icons } from "@/components/icon";
import { cn } from "@/lib/utils";

type ThemeToggleProps = ButtonStyleProps & {
  className?: string;
  showLabel?: boolean;
};

// テーマラベル
function ThemeLabel({ theme }: { theme: string | undefined }) {
  return (
    <span className="flex items-center">
      <span>{theme === "dark" ? "ダークモード" : "ライトモード"}</span>
    </span>
  );
}

// テーマアイコン
function ThemeIcons() {
  return (
    <div className="flex items-center">
      <Icons.sun
        className="!h-5 !w-5 text-orange-500 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        strokeWidth={2}
      />
      <Icons.moon
        className="absolute !h-5 !w-5 text-yellow-400 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        strokeWidth={2}
      />
    </div>
  );
}

export function ThemeToggle({
  className,
  variant = "outline",
  size = "icon",
  showLabel = false,
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button className={className} disabled size={size} variant={variant}>
        {showLabel && <span className="mr-2">テーマ</span>}
        <Icons.sun className="!h-5 !w-5 text-orange-500" />
      </Button>
    );
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      aria-label="テーマ切り替え"
      className={cn(showLabel && "justify-start", className)}
      onClick={handleClick}
      size={size}
      variant={variant}
    >
      {showLabel ? (
        <>
          <ThemeIcons />
          <ThemeLabel theme={resolvedTheme} />
        </>
      ) : (
        <ThemeIcons />
      )}
    </Button>
  );
}
