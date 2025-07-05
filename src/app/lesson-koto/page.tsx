/* =======================================
 *  箏講座 ページ
 * URL: src/app/lesson-koto/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */

import PageHead from '@/components/common/PageHead';
import ImageHead from '@/assets/images/lesson-koto/head-image.webp';
import type { Metadata } from 'next';
import ContainerLessonAbout from '@/components/lesson-koto/ContainerAboutLesson';
import styles from '@/styles/PageLessonKoto.module.scss';

export const generateMetadata = (): Metadata => {
  return {
    title: '箏講座｜徳永教室',
    description:
      '徳永教室は、熊本市内にある箏（琴）・四柱推命を学べる教室です。レッスン時間は月〜日曜、9:00-20:00から選べるのでご都合のつく時に受講することができます。全くの未経験の方から上級者の方まで幅広く募集しています。',
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
