import { Icons } from "../icon";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] w-full flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center container mx-auto flex flex-col items-center">
        {/* プロフィール表示 - 写真またはイラスト、アバターに今後差し替える */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 md:mb-8 flex items-center justify-center shadow-lg">
          <span className="text-4xl font-bold text-white">NS</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          NS
        </h1>

        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
          製造業からWebエンジニアへ
        </h2>
        <div>
          <a
            aria-label="Aboutセクションへスクロール"
            className="group inline-flex"
            href="#about"
          >
            <Icons.downArrow className="!w-10 !h-10 sm:!w-20 sm:!h-20 text-gray-500 dark:text-foreground animate-float-down transition-all duration-300 hover:scale-110 active:scale-110 dark:active:text-gray-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
