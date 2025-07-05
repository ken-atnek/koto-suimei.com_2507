/* =======================================
 *  夏の陣 TOPページ
 * URL: /app/page.tsx
 * Created: 2025-07-03
 * Last updated: 2025-07-03
 * ======================================= */

import type { Metadata } from 'next';
import ContainerFooter from '@/components/ContainerFooter';
import ContainerHeader from '@/components/ContainerHeader';
import ContainerRankingTabs from '@/components/ContainerRankingTabs';

export const generateMetadata = (): Metadata => {
  return {
    title: 'ホットポイントグループ指名獲得サマーチャレンジ夏の陣',
    description: 'ホットポイントグループ指名獲得サマーチャレンジ夏の陣',
  };
};
export default function Home() {
  return (
    <main>
      <ContainerHeader />
      <ContainerRankingTabs />
      <ContainerFooter />
    </main>
  );
}
