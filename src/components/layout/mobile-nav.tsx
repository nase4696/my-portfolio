import Link from "next/link";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { NavItem } from "@/types/config";

import { Icons } from "../icon";
import { ThemeToggle } from "../component/theme-toggle";

type MobileNavProps = {
  items: NavItem[];
};

export function MobileNav({ items }: MobileNavProps) {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger area-label="メニューを開く">
            <Icons.menu />
          </MenubarTrigger>
          <MenubarContent>
            <nav>
              {items.map((item, index) => (
                <Link href={item.href} key={index}>
                  <MenubarItem>{item.title}</MenubarItem>
                </Link>
              ))}
            </nav>
            <MenubarItem className="p-0">
              <ThemeToggle
                className="w-full hover:bg-accent hover:text-accent-foreground"
                showLabel={true}
                size="default"
                variant="ghost"
              />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
