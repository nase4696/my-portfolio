// social-links.tsx
import { Icons } from "@/components/icon";
import { siteConfig } from "@/config/site";

type SocialLinksProps = {
  showLabel?: boolean;
  className?: string;
};

export function SocialLinks({
  showLabel = false,
  className,
}: SocialLinksProps) {
  return (
    <a
      aria-label="GitHub（新しいウィンドウで開きます）"
      className={`inline-flex items-center gap-2 rounded-full text-gray-600 hover:scale-110 active:scale-110 transition-all duration-300 ${className}`}
      href={siteConfig.links?.github}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icons.github className="w-8 h-8" />
      {showLabel && "GitHub"}
    </a>
  );
}
