/* =======================================
 * 徳永琴教室 FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */
import styles from '@/styles/components/common/Footer.module.scss';
import LineQr from '@/assets/images/ line-qr.webp';
import ExternalLink from '@/components/common/ExternalLink';

import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <h2>お問い合わせ</h2>
      <article>
        <div className={styles.imageQr}>
          <Image src={LineQr} alt="LINE友だち登録はこちら" />
        </div>
        <p>
          お問い合わせはラインより受け付けております。
          <br />
          お手数です左記QRコードを読み込むか、下記ボタンをクリックして、友だち登録してお問合せください。
        </p>
        <div className={styles.wrapLine}>
          <ExternalLink
            href="https://line.me/ti/p/KCBVE5sWmi"
            className={styles.itemLine}
          >
            LINE友だち登録はこちら
          </ExternalLink>
        </div>
      </article>
      <div className={styles.copyright}>
        Copyright 2021 Etusko Tokunaga All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
