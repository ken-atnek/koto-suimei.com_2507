/* =======================================
 * 銭太鼓講座  受講について
 * URL:src/components/lesson-zenidaiko/ContainerAboutLesson.tsx
 * Referenced in: src/app/lesson-zenidaiko/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */
import styles from '@/styles/PageLessonZenidaiko.module.scss';
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
            正しい銭太鼓の振りを年齢に応じ無理なく優しく指導します。
            <br />
            上手くできて笑い、失敗して笑い、友達の輪が広がります。
            <br />
            両手を使うことで脳の活性化や熊本の民謡に合わせて演奏することで楽しく明るくなれます。
            <br />
            詳しい情報はこちら（096-353-0151）よりお問い合わせください。
          </>
        ),
      },
      {
        title: '曜日・時間',
        description: (
          <>
            レッスン料金
            <br />
            <br />
            🔳中央公民館
            <br />
            7,920円/6回
          </>
        ),
      },
      {
        title: '受講料',
        description: (
          <>小学生～92才まで幅広い年代の方に楽しんでいただいています</>
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
