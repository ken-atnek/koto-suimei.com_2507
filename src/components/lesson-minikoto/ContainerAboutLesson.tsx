/* =======================================
 * ミニ箏講座  受講について
 * URL:src/components/lesson-minikoto/ContainerAboutLesson.tsx
 * Referenced in: src/app/lesson-taishokoto/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-07
 * ======================================= */
import styles from '@/styles/ContainerLesson.module.scss';
import { useMemo } from 'react';
const ContainerLessonAbout = () => {
  type LessonItem = {
    title: string;
    description: React.ReactNode;
  };

  const lessonData: LessonItem[] = useMemo(
    () => [
      {
        title: '講座内容',
        description: (
          <>
            通常の箏を小さくしたミニ箏の講座です。
            <br />
            通常の箏と弾き方は同じですが、箏に触れたことがない方でも簡単に曲が演奏できるように工夫されています。
            <br />
            「手軽に日本の伝統楽器を楽しみたい」という方にオススメです。
          </>
        ),
      },
      {
        title: '曜日・時間',
        description: (
          <>
            レッスンは予約制です。
            <br />
            ラインまたはお電話よりご予約ください。
            <br />
            <br />
            レッスン可能日時
            <br />
            9:00〜20:00（月〜日曜日）
            <br />
            <br />
            授業時間
            <br />
            通常　30分
            <br />
            グループレッスン　45〜60分
          </>
        ),
      },
      {
        title: '受講料',
        description: (
          <>
            レッスン料金
            <br />
            2,000円 / 1回
            <br />
            授業時に現金でお支払いいただきます。
            <br />
            <br />
            体験料金
            <br />
            1,000円 / 1回
            <br />
            体験時に現金でお支払いいただきます。
          </>
        ),
      },
    ],
    []
  );

  return (
    <section className={styles.containerLessonAbout}>
      <h2>受講について</h2>
      <ul className={styles.listLesson}>
        {lessonData.map((item, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContainerLessonAbout;
