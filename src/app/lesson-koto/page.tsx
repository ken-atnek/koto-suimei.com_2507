/* =======================================
 *  箏講座 ページ
 * URL: src/app/lesson-koto/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-29
 * ======================================= */

import PageHead from '@/components/common/PageHead';
import ImageHead from '@/assets/images/lesson-koto/head-image.webp';
import type { Metadata } from 'next';
import ContainerLessonAbout from '@/components/lesson-koto/ContainerAboutLesson';
import styles from '@/styles/PageLessonKoto.module.scss';

export const generateMetadata = (): Metadata => {
  return {
    title: '徳永教室｜熊本市で学ぶ箏（琴）講座｜初心者・シニア歓迎',
    description:
      '熊本市の徳永教室では、8歳から96歳まで幅広い年代の方が箏（琴）を楽しく学んでいます。初心者も安心して参加でき、楽器がない方も大丈夫。あなたのペースで、日本の伝統音楽を身近に。',
  };
};
export default function LessonKoto() {
  return (
    <>
      <PageHead
        image={ImageHead}
        title="箏講座"
        subTitle={`歴史あるスタンダードな箏`}
        description={`楽器としての箏曲の基礎を大成させたのは\n江戸時代初期に活躍した八橋検校です。\n現在当教室では8歳～96歳まで幅広い年代の方が、それぞれのペースで楽しく続けられています。\n楽器をお持ちでない初心者の方も、気軽に安心してレッスンを楽しんでいただけます。`}
      />
      <section className={styles.containerMovie}>
        <h2>紹介ビデオ</h2>
        <div className={styles.itemMovie}>
          <video
            src="/movies/koto_ver2.mp4"
            controls
            playsInline
            style={{ width: '100%', height: 'auto' }}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <ContainerLessonAbout />
    </>
  );
}
