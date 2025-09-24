import Link from "next/link";

import { NavItem } from "@/types/config";

import { MobileNav } from "./mobile-nav";

type MainNavProps = {
  items: NavItem[];
};

export function MainNav({ items }: MainNavProps) {
  return (
    <>
      <nav className="hidden md:flex gap-5 font-medium text-xl">
        {items.map((item, index) => (
          <Link
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            href={item.href}
            key={index}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex md:hidden">
        <MobileNav items={items} />
      </div>
    </>
  );
}
