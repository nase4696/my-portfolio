import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-600 py-4 md:py-8">
      <div className="container mx-auto text-center">
        ©︎{currentYear} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
