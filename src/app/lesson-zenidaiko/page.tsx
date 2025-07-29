/* =======================================
 *  銭太鼓講座 ページ
 * URL: src/app/lesson-zenidaiko/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-29
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
    title: '徳永教室｜熊本市の銭太鼓体操講座｜楽しく健康づくり・初心者歓迎',
    description:
      '熊本市の徳永教室では、年齢を問わず誰でも楽しめる銭太鼓体操講座を開講中。音楽に合わせて体を動かすことで、楽しみながら健康を保てます。初心者も大歓迎！まずは体験から始めてみませんか？',
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
          <h3>白川カルチャー講座</h3>
          <address>熊本市中央区草場町5番1号(熊本市中央公民館)</address>
          <div>毎月第二日曜日14:00~15:00</div>

          <h4>お問い合わせ先</h4>
          <ExternalLink href="tel:0963530150" className={styles.itemTel}>
            096-353-0151
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
