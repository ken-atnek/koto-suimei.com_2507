/* =======================================
 * 夏の陣 HEADER
 * URL: src/components/ContainerHeader.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-03
 * Last updated: 2025-07-03
 * ======================================= */

import styles from '@/styles/top.module.scss';
import ImageTitle from '@/assets/images/title.webp';
import Image from 'next/image';
const ContainerHeader = () => {
  return (
    <header className={styles.containerHeader}>
      <h1 className={styles.boxTitle}>
        <Image
          src={ImageTitle}
          alt="ホットポイントグループ指名獲得サマーチャレンジ夏の陣"
        />
      </h1>
      <p className={styles.head}>結果発表</p>
      <h2>ファーストステージ</h2>
      <div className={styles.period}>
        集計期間：
        <time dateTime="2025-07-01">2025年7月1日</time>
        <time dateTime="2025-07-10">7月10日</time>
      </div>
    </header>
  );
};

export default ContainerHeader;
