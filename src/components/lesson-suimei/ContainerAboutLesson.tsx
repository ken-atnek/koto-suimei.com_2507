/* =======================================
 * 四柱推命講座・鑑定  受講について
 * URL:src/components/lesson-suimei/ContainerAboutLesson.tsx
 * Referenced in:  src/app/lesson-suimei/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-29
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
            「命式表・五行図」の作成
            <br />
            <span>
              四柱と五行を読み取り、総合判断ができるように学習を深めていきます
            </span>
            <span>
              吉凶、運勢、正確、家庭環境などあらゆる事柄を知ることができます。
            </span>
            <span>長所（吉面）を伸ばし、欠点（凶面）を克服する</span>
            <span>より生きやすくなる「易学」を学びましょう</span>
            <span>
              希望者は資格取得まで指導いたします
              <i>（2025年現在 教部合格者 7名 教範合格者 5名）</i>
            </span>
            持参物：テキスト、筆記用具
          </>
        ),
      },
      {
        title: '曜日・時間',
        description: (
          <>
            授業は予約制です。
            <br /> ラインまたはお電話よりご予約ください。
            <br />
            <br />
            【神水教室】
            <br />
            授業可能曜日
            <br />
            9:00〜20:00（月〜日曜日）
            <br />
            授業時間 60分〜
            <br />
            <br />
            【宮日カルチャーセンター】
            <br />
            （0985-23-7778）
            <br />
            授業曜日
            <br />
            10:00〜11:30（第三月曜日）
            <br />
            授業時間 90分〜
            <br />
            <br />
            【桜ヶ丘教室】
            <br />
            不定期開催
            <br />
            授業時間 90分〜
            <br />
            <br />
            ※授業時間は多少前後することがあります。
          </>
        ),
      },
      {
        title: '受講料',
        description: (
          <>
            授業料金
            <br />
            2,000円 / 1回
            <br />
            授業時に現金でお支払いいただきます。
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
