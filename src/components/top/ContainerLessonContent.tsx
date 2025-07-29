/* =======================================
 * 徳永琴教室  講座内容
 * URL:src/components/top/ContainerLessonContent.tsx
 * Referenced in:  /app/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-29
 * ======================================= */
import styles from '@/styles/ContainerLesson.module.scss';
import { useMemo } from 'react';
const ContainerLessonContent = () => {
  type LessonItem = {
    title: string;
    description: React.ReactNode;
  };

  const lessonData: LessonItem[] = useMemo(
    () => [
      {
        title: '箏',
        description: (
          <>
            十三弦箏の奏法を学ぶ講座です。
            <br />
            基本的な奏法から学べるので箏が初めてという方も安心して受講することができます。
          </>
        ),
      },
      {
        title: 'ミニ箏',
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
        title: '大正琴（弓）',
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
            弓の奏法では、魅力的な音色と表現を手に入れることができます。
          </>
        ),
      },
      {
        title: '四柱推命',
        description: (
          <>
            四柱推命はその人の吉凶・運勢・性格・家庭環境などあらゆる事柄を知ることができます。
            <br />
            この講座では四柱推命に必要な命式図の作り方、見方、また基礎知識を学習します。
            <br />
            幸福を掴む為の一種の羅針盤とし、より生きやすくするために易学を学びましょう。
            <br />
            <br />
            希望者は資格取得まで指導いたします。
          </>
        ),
      },
      {
        title: '銭太鼓',
        description: (
          <>
            正しい銭太鼓の振りを年齢に応じ無理なく優しく指導します。
            <br />
            上手くできて笑い、失敗して笑い、友達の輪が広がります。
            <br />
            両手を使うことで脳の活性化や熊本の民謡に合わせて演奏することで楽しく明るくなれます。
            <br />
            ※銭太鼓教室は、
            <br />
            白川カルチャー講座（096-353-0151）よりお問い合わせください。
          </>
        ),
      },
    ],
    []
  );

  return (
    <section className={styles.containerLessonAbout}>
      <h2>講座内容</h2>
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

export default ContainerLessonContent;
