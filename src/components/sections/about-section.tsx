import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-2 md:px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        {/* 自己紹介文 */}
        <div className="prose prose-sm md:prose-lg px-2 mx-auto dark:prose-invert mb-12">
          <p>
            自動車製造業で培った<strong>お客様を意識した品質管理</strong>と
            <strong>問題解決能力</strong>を
            Web開発に活かし、ユーザーにとって使いやすいアプリケーションの作成を目指しています。
          </p>
          <p>
            現在は<strong>Next.js</strong>
            を中心に学習しながら、 モダンなWeb技術を積極的に取り入れています。
          </p>
        </div>

        {/* きっかけと転職理由 */}
        <div className="prose prose-sm md:prose-lg px-2 mx-auto dark:prose-invert mb-12">
          <h3 className="text-2xl font-bold mb-4">
            きっかけと転職を決意した理由✨
          </h3>
          <p>
            <strong>プログラミングに興味を持ったきっかけ</strong>は、
            毎日使うWebサービスやアプリの「便利さ」と「面白さ」に感動したことです。
            「自分もこんなサービスを作れるようになりたい」と思い、学習を始めました。
          </p>
          <p>
            <strong>Webエンジニアへの転職を決意した理由</strong>は、
            今まで品質チェック中心で直接製品の生産に携わっている実感がなく、それを、興味を持ったプログラミングで「自分自身も製品の作成に携わり、直接ユーザーに感動を届けたい」と強く思ったからです。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 justify-center gap-8 sm:gap-12">
          {/* 経歴 */}
          <Card className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-900 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                📝 経歴
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 bg-blue-500 rounded-full"></div>
                  <h4 className="font-semibold">自動車メーカー勤務</h4>
                  <p className="text-sm text-muted-foreground">2016〜現在</p>
                  <p className="mt-1 text-sm">
                    品質管理と工程改善、リーダーを担当
                  </p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-3 h-3 bg-green-500 rounded-full"></div>
                  <h4 className="font-semibold">Webエンジニア転職準備</h4>
                  <p className="text-sm text-muted-foreground">2024年〜</p>
                  <p className="mt-1 text-sm">
                    プログラミングに興味を持ち、学習開始
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 技術スタック */}
          <Card className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-900 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                💻 技術スタック
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-medium text-lg mb-3">フロントエンド</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="blue">Next.js</Badge>
                  <Badge variant="blue">React</Badge>
                  <Badge variant="blue">Tailwind CSS</Badge>
                  <Badge variant="blue">TypeScript</Badge>
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-lg mb-3">
                  バックエンド・ツール
                </h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="green">Prisma</Badge>
                  <Badge variant="green">Supabase</Badge>
                  <Badge variant="purple">shadcn/ui</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
