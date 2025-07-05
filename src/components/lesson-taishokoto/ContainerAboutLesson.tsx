/* =======================================
 * 大正琴講座  受講について
 * URL:src/components/lesson-taishokoto/ContainerAboutLesson.tsx
 * Referenced in: src/app/lesson-taishokoto/page.tsx
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
            多彩な奏法で楽しむ教室です。
            <br />
            ①ピック奏法
            <br />
            ②弓で擦る（胡弓に似た音色）
            <br />
            ③指で「はじく」奏法
            <br />
            ④スティックで叩く奏法
            <br />
            「弓」の奏法では、魅力的な音色と表現を手に入れることができます。
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
