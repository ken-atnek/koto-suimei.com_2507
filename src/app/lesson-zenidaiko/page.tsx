/* =======================================
 *  銭太鼓講座 ページ
 * URL: src/app/lesson-zenidaiko/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */

import PageHead from '@/components/common/PageHead';
import ImageHead from '@/assets/images/lesson-zenidaiko/head-image.webp';
import type { Metadata } from 'next';
import ContainerLessonAbout from '@/components/lesson-zenidaiko/ContainerAboutLesson';
import styles from '@/styles/PageLessonZenidaiko.module.scss';
import ExternalLink from '@/components/common/ExternalLink';
import Image01 from '@/assets/images/lesson-zenidaiko/image01.webp';
import Image from 'next/image';
export const generateMetadata = (): Metadata => {
  return {
    title: '銭太鼓講座｜徳永教室',
    description:
      '徳永教室は、熊本市内にある箏（琴）・四柱推命を学べる教室です。レッスン時間は月〜日曜、9:00-20:00から選べるのでご都合のつく時に受講することができます。全くの未経験の方から上級者の方まで幅広く募集しています。',
  };
};
export default function LessonZenidaiko() {
  return (
    <>
      <PageHead
        image={ImageHead}
        title="銭太鼓講座"
        subTitle={`身体を動かしながら頭の体操も`}
        description={`銭太鼓は日本民族楽器の一種で、銭の触れ合う音を利用したリズム楽器です。\n厄払い、冠婚葬祭で用いられていた銭太鼓ですが、現代では心身共に活性化などの効果が報告されており、健康体操として人気があり運動不足の解消に有効です。楽器をお持ちでない初心者の方も、気軽に安心してレッスンを楽しんでいただけます。`}
      />

      <ContainerLessonAbout />
      <section className={styles.containerVenue}>
        <h2>講座会場</h2>
        <span className={styles.sidebarH2}>～お申込み・お問い合わせ～</span>
        <article>
          <h3>熊本市中央公民館カルチャー講座</h3>
          <address>熊本市中央区草場町5番1号</address>
          <div>毎月第二日曜日14:00~15:00</div>

          <h4>お問い合わせ先</h4>
          <ExternalLink href="tel:0963530150" className={styles.itemTel}>
            096-353-0150
          </ExternalLink>
        </article>
      </section>
      <section className={styles.containerImage}>
        <h2>講座風景</h2>
        <div className={styles.itemImage}>
          <Image src={Image01} alt="講座風景" />
        </div>
      </section>
    </>
  );
}
