/* =======================================
 *  徳永琴教室 TOPページ
 * URL: /app/page.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */

import type { Metadata } from 'next';
import styles from '@/styles/PageTop.module.scss';
import Image from 'next/image';
import ImagePet01 from '@/assets/images/top/pet01.webp';
import ImagePet02 from '@/assets/images/top/pet02.webp';
import ImagePet03 from '@/assets/images/top/pet03.webp';
import ImageProfile from '@/assets/images/top/profile.webp';
import ImageCourseInfo from '@/assets/images/top/course-info.webp';
import ContainerLessonContent from '@/components/top/ContainerLessonContent';
export const generateMetadata = (): Metadata => {
  return {
    title:
      '熊本市で琴・四柱推命・銭太鼓を学ぶ（琴教室・太鼓教室・四柱推命教室）',
    description:
      '徳永教室は、熊本市内にある箏（琴）・四柱推命を学べる教室です。レッスン時間は月〜日曜、9:00-20:00から選べるのでご都合のつく時に受講することができます。全くの未経験の方から上級者の方まで幅広く募集しています。',
  };
};
export default function Home() {
  return (
    <>
      <section className={styles.containerHero}>
        <article>
          <Image
            src="/images/hero.webp"
            alt="大正琴"
            width={1920}
            height={1080}
            priority
          />
          <p>
            楽しく通って
            <br />
            人生をより豊かに
          </p>
        </article>
      </section>
      <section className={styles.containerHeroText}>
        <article>
          <div className={styles.box01}>
            <h3>箏・琴・四柱推命・銭太鼓を学べる徳永教室</h3>
          </div>
          <div className={styles.box02}>
            <h3>伝統文化を楽しく学ぶ</h3>
            <p>
              徳永教室は熊本市内にある箏（琴）・四柱推命教室です。
              <br />
              敷居が高いと思われがちな箏（琴）ですが実は日常的に楽しむことができる楽器です。徳永教室では「楽しく学ぶ」授業を進めていきます。
              <br />
              初心者の方も、レベルをあげたい経験者の方も大歓迎です。
            </p>
          </div>
        </article>
      </section>
      <ContainerLessonContent />
      <section className={styles.containerPet}>
        <h2>ペットの同伴について</h2>
        <article className={styles.blockImage}>
          <figure>
            <Image src={ImagePet01} alt="徳永教室看板犬「ハナ」ちゃん" />
            <figcaption>徳永教室看板犬「ハナ」ちゃん</figcaption>
          </figure>
          <figure>
            <Image src={ImagePet02} alt="教室内にお連れできます" />
            <figcaption>教室内にお連れできます</figcaption>
          </figure>
          <figure>
            <Image src={ImagePet03} alt="安心して受講可能" />
            <figcaption>安心して受講可能</figcaption>
          </figure>
        </article>
        <article className={styles.blockText}>
          <h3>徳永教室はペットの同伴が可能です</h3>
          <p>
            講師である徳永は「愛犬飼育管理士」を
            取得済みなので、安心してペットを連れて講座を受講することができます。
            <br />
            また、近隣にドックラン併設の学習スペースもありますのでお気軽にご相談ください。
            <br />
            <br />
            ペットをお連れの際は、以下の点をご確認し全ての条件を満たす場合のみの同伴となりますことをご了承ください。
            <span>・トイレなどしつけがなされていること</span>
            <span>・ワクチン接種済みであること</span>
            <span>・室内犬であること</span>
          </p>
        </article>
      </section>
      <section className={styles.containerProfile}>
        <h2>徳永恵津子について</h2>
        <article>
          <div className={styles.itemImage}>
            <Image src={ImageProfile} alt="徳永恵津子" />
          </div>
          <h3>
            様々なカルチャースクールにて
            <br />
            中高齢者が元気になるための活動を展開
          </h3>
          <div className={styles.wrapDetails}>
            <span>全国邦楽指導者協議会所属・箏教授</span>
            <span>四柱推命教範・認定心理士</span>
            <span>大正琴・弓・文化箏教授</span>
            <span>肥後銭太鼓会長</span>
            <span>中高齢生涯学習教室主催</span>
            <span>伝統文化コーディネーター</span>
          </div>
        </article>
      </section>
      <section className={styles.containerCourseInfo}>
        <h2>教室について</h2>
        <div className={styles.itemImage}>
          <Image src={ImageCourseInfo} alt="徳永恵津子の教室" />
        </div>
        <article>
          <dl>
            <dt>教室</dt>
            <dd>熊本県熊本市神水1-15-8</dd>
          </dl>
          <dl>
            <dt>講座曜日</dt>
            <dd>月〜日曜日</dd>
          </dl>
          <dl>
            <dt>お問い合わせについて</dt>
            <dd>
              講座についてのお問い合わせはLINEより承っております。
              <p>
                ※銭太鼓教室を受講されたい場合のみ、熊本中央公民館にお問い合わせください。
              </p>
            </dd>
          </dl>
        </article>
      </section>
    </>
  );
}
