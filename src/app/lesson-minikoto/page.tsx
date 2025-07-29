/* =======================================
 *  ミニ箏講座 ページ
 * URL: src/app/lesson-taishokoto/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-29
 * ======================================= */

import PageHead from '@/components/common/PageHead';
import ImageHead from '@/assets/images/lesson-minikoto/head-image.webp';
import type { Metadata } from 'next';
import ContainerLessonAbout from '@/components/lesson-minikoto/ContainerAboutLesson';
import styles from '@/styles/PageLessonKoto.module.scss';

export const generateMetadata = (): Metadata => {
  return {
    title: '徳永教室｜熊本市のミニ箏講座｜持ち運べる和楽器で気軽に楽しむ',
    description:
      '熊本市の徳永教室では、気軽に始められるミニ箏講座を開講中。小型で持ち運びしやすい楽器ながら、本格的な音色を楽しめます。初心者や高齢の方にもやさしく、和の音楽を身近に感じられる講座です。',
  };
};
export default function LessonKoto() {
  return (
    <>
      <PageHead
        image={ImageHead}
        title="ミニ箏講座"
        subTitle={`気軽に伝統楽器を学ぶ`}
        description={`通常の箏の半分以下の大きさのミニ箏は机の上や狭い場所でも演奏が可能です。\n弾き方は通常の箏と同じですが楽譜は五線譜と数字譜で表記してありますので短時間で簡単な曲が弾けるように工夫されています。\nまた、リコーダーやオカリナ、尺八などと合奏するという楽しみ方もあります。楽器をお持ちでない初心者の方も、気軽に安心してレッスンを楽しんでいただけます。`}
      />
      <section className={styles.containerMovie}>
        <h2>紹介ビデオ</h2>
        <div className={styles.itemMovie}>
          <video
            src="/movies/minikoto_ver2.mp4"
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
