/* =======================================
 *  四柱推命講座・鑑定 ページ
 * URL: src/app/lesson-suimei/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */

import PageHead from '@/components/common/PageHead';
import ImageHead from '@/assets/images/lesson-suimei/head-image.webp';
import type { Metadata } from 'next';
import ContainerLessonAbout from '@/components/lesson-suimei/ContainerAboutLesson';
import styles from '@/styles/PageLessonSuimei.module.scss';

export const generateMetadata = (): Metadata => {
  return {
    title: '四柱推命講座・鑑定｜徳永教室',
    description:
      '徳永教室は、熊本市内にある箏（琴）・四柱推命を学べる教室です。レッスン時間は月〜日曜、9:00-20:00から選べるのでご都合のつく時に受講することができます。全くの未経験の方から上級者の方まで幅広く募集しています。',
  };
};
export default function LessonSuimei() {
  return (
    <>
      <PageHead
        image={ImageHead}
        title="四柱推命講座・鑑定"
        subTitle={`自分サイズの四柱推命\n使える易学`}
        description={`自分という存在をもっとよく知りたい。\n自分は何者で、どんな目的や価値をもっているのか特質を伸ばすのはどうしたら良いか。\n人生の不幸を回避するにはどうしたら良いのか。\n「より生きやすくする」ために易学（四柱推命）を学びましょう。`}
      />
      <ContainerLessonAbout />
      <section className={styles.containerFortuneOnly}>
        <h2>鑑定のみ希望の場合</h2>
        <article>
          <dl>
            <dt>鑑定内容</dt>
            <dd>
              作成した「命式表・五行図」をもとに、ご自身の運勢や吉凶などを知ることができます。
            </dd>
          </dl>
          <dl>
            <dt>予約可能時間</dt>
            <dd>
              9:00〜20:00（月曜日〜日曜日）
              <p>ラインまたはお電話よりお問い合わせください。</p>
            </dd>
          </dl>
          <dl>
            <dt>鑑定料金</dt>
            <dd>
              3,000円 / 60分
              <p>※四柱推命講座を受講されている生徒さんは無料で受けられます。</p>
            </dd>
          </dl>
        </article>
      </section>
    </>
  );
}
