import { ThemeToggle } from "../component/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between p-2">
        <div className="font-bold text-2xl">
          <h1>NS</h1>
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
