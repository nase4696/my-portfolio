import { siteConfig } from "@/config/site";

import { SocialLinks } from "../component/social-links";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-600 py-4 md:py-8">
      <div className="container mx-auto text-center">
        <div>
          <SocialLinks />
        </div>
        <div>
          ©︎{currentYear} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
