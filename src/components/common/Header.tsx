/* =======================================
 * 徳永琴教室 HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  // メニューが開いている間はスクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 外側をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById('headerNav')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 150);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Run once on mount in case already scrolled
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.containerHeader} ${isScrolled ? styles.isActive : ''}`}
    >
      <article>
        <nav
          id="headerNav"
          className={`${isOpen ? styles['is-open'] : ''} ${
            !isOpen ? styles.closing : ''
          }`}
        >
          <Link
            href="/"
            className={`${styles.itemLink} ${styles.linkTop}`}
            onClick={closeMenu}
          >
            トップ
          </Link>
          <Link
            href="/lesson-suimei/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            四柱推命講座・鑑定
          </Link>
          <Link
            href="/lesson-koto/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            箏講座
          </Link>
          <Link
            href="/lesson-zenidaiko/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            銭太鼓体操講座
          </Link>
          <Link
            href="/lesson-taishokoto/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            大正琴講座
          </Link>
          <Link
            href="/lesson-minikoto/"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            ミニ箏講座
          </Link>
        </nav>
      </article>
    </header>
  );
};

export default Header;
