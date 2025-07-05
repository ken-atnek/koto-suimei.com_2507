/* =======================================
 * 箏講座  受講について
 * URL:src/components/lesson-koto/ContainerAboutLesson.tsx
 * Referenced in: src/app/lesson-koto/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */
import styles from '@/styles/PageLessonSuimei.module.scss';
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
            十三弦箏の奏法を学ぶ講座です。
            <br />
            基本的な奏法から学べるので箏が初めてという方も安心して受講することができます。
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
            レッスン可能日時 <br />
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
