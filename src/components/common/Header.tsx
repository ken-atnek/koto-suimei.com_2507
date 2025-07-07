/* =======================================
 * 徳永琴教室 HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-07-05
 * Last updated: 2025-07-05
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState, useRef, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoverStyle, setHoverStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const [activeStyle, setActiveStyle] = useState<{
    left: number;
    width: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);

  const navLinks = useMemo(
    () => [
      { href: '/', label: 'トップ' },
      { href: '/lesson-suimei/', label: '四柱推命講座・鑑定' },
      { href: '/lesson-koto/', label: '箏講座' },
      { href: '/lesson-zenidaiko/', label: '銭太鼓体操講座' },
      { href: '/lesson-taishokoto/', label: '大正琴講座' },
      { href: '/lesson-minikoto/', label: 'ミニ箏講座' },
    ],
    []
  );

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 150);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHover = (index: number) => {
    const link = linkRefs.current[index];
    if (link && containerRef.current) {
      const linkRect = link.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setHoverStyle({
        left: linkRect.left - containerRect.left,
        width: linkRect.width,
      });
    }
  };

  const handleLeave = () => {
    setHoverStyle(null);
  };

  // Set activeStyle on load and pathname change
  useEffect(() => {
    const activeIndex = navLinks.findIndex((link) => link.href === pathname);
    if (activeIndex !== -1) {
      const link = linkRefs.current[activeIndex];
      if (link && containerRef.current) {
        const linkRect = link.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        setActiveStyle({
          left: linkRect.left - containerRect.left,
          width: linkRect.width,
        });
      }
    }
  }, [pathname]);

  return (
    <header
      className={`${styles.containerHeader} ${isScrolled ? styles.isActive : ''}`}
    >
      <article>
        <nav id="headerNav">
          <div className={styles.linkContainer} ref={containerRef}>
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${styles.itemLink} ${index === 0 ? styles.linkTop : ''}`}
                ref={(el) => {
                  if (el) linkRefs.current[index] = el;
                }}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
              >
                {item.label}
              </Link>
            ))}
            <span
              className={styles.hoverBar}
              style={{
                left: (hoverStyle?.left ?? activeStyle?.left) + 'px',
                width: (hoverStyle?.width ?? activeStyle?.width) + 'px',
                opacity: hoverStyle || activeStyle ? 1 : 0,
              }}
            />
          </div>
        </nav>
      </article>
    </header>
  );
};

export default Header;
