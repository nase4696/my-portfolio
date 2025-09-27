import { mainNavConfig } from "@/config/navigation";

import { ThemeToggle } from "../component/theme-toggle";

import { MainNav } from "./main-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <div className="flex h-14 items-center justify-between p-2">
          <div className="font-bold text-3xl sm:text-4xl">
            <h1>NS</h1>
          </div>
          <div>
            <MainNav items={mainNavConfig.mainNav} />
          </div>
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
