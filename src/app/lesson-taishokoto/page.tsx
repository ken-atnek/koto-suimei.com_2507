/* =======================================
 *  大正琴講座 ページ
 * URL: src/app/lesson-taishokoto/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */

import PageHead from '@/components/common/PageHead';
import ImageHead from '@/assets/images/lesson-taishokoto/head-image.webp';
import type { Metadata } from 'next';
import ContainerLessonAbout from '@/components/lesson-taishokoto/ContainerAboutLesson';
import styles from '@/styles/PageLessonKoto.module.scss';

export const generateMetadata = (): Metadata => {
  return {
    title: '大正琴講座｜徳永教室',
    description:
      '徳永教室は、熊本市内にある箏（琴）・四柱推命を学べる教室です。レッスン時間は月〜日曜、9:00-20:00から選べるのでご都合のつく時に受講することができます。全くの未経験の方から上級者の方まで幅広く募集しています。',
  };
};
export default function LessonKoto() {
  return (
    <>
      <PageHead
        image={ImageHead}
        title="大正琴講座"
        subTitle={`「弓」で弾く大正琴`}
        description={`大正琴の歴史はその名前の表す通り大正元年に始まります。\nボタンを押さえて弾くだけでメロディーが奏でられるのが特徴です。\n弓が初めての方でもポイントさえつかめば綺麗な音色を奏でることが出来ます。\n楽器をお持ちでない初心者の方も、気軽に安心してレッスンを楽しんでいただけます。`}
      />
      <section className={styles.containerMovie}>
        <h2>紹介ビデオ</h2>
        <div className={styles.itemMovie}>
          <video
            src="/movies/taishokoto.mp4"
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
