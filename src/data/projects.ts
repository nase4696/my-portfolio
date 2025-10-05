import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "フードマネージャー",
    description:
      "家庭の食品在庫と賞味期限を管理し、食品ロスを削減するWebアプリ",

    detailedDescription: `
このアプリは、日々の買い物で購入した食品の賞味期限を一元管理し、
「気づいたら期限切れで捨ててしまった...」という経験をなくすことを目的としています。

主な機能：
• 食品の登録：商品名、賞味期限、数量を簡単登録
• 期限通知：賞味期限が近づくと自動でお知らせ
• 在庫確認：現在の食品在庫を一目で確認
• 買い物リスト：なくなりそうな食品を自動でリストアップ

製造業での品質管理経験を活かし、「モノを大切に使い切り、無駄をなくす」という考え方から実装しました。
    `,

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Prisma",
      "NextAuth.js",
    ],

    features: [
      "食品の登録と管理",
      "賞味期限アラート",
      "在庫状況の可視化",
      "レスポンシブデザイン",
    ],

    status: "in_progress",

    githubUrl: "",
    demoUrl: "",
    image: "",
  },
];
