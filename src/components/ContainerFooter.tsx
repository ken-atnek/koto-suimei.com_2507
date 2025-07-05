/* =======================================
 * 夏の陣 FOOTER
 * URL: src/components/ContainerFooter.tsx
 * Referenced in: /app/page.tsx
 * Created: 2025-07-03
 * Last updated: 2025-07-03
 * ======================================= */
import { areas, Area } from '@/data/areaData';
import { stores, Store } from '@/data/storeData';
import styles from '@/styles/top.module.scss';
import Image from 'next/image';
import ExternalLink from '@/components/common/ExternalLink';
const ContainerFooter = () => {
  return (
    <footer className={styles.containerFooter}>
      <section>
        {areas.map((area) => {
          const shops = stores.filter((s) => s.area === area.id);
          return <AreaSection key={area.id} area={area} stores={shops} />;
        })}
      </section>
      <div className={styles.copyright}>
        (C)2025. 指名獲得「夏の陣」サマーチャレンジ
      </div>
    </footer>
  );
};

// ---------------- AreaSection
type AreaSectionProps = {
  area: Area;
  stores: Store[];
};
const AreaSection = ({ area, stores }: AreaSectionProps) => (
  <article
    className={styles.areaBlock}
    style={{ '--area-color': area.bgColor } as React.CSSProperties}
  >
    <div className={styles.itemAreaImage}>
      <Image src={area.titleImage} alt={area.nameJp} fill />
    </div>
    <h2>
      <span>{area.nameEn.toUpperCase()}</span>
      {area.nameJp}エリア
    </h2>
    <ul className={styles.listShop}>
      {stores.map((store) => (
        <StoreCard key={store.name} store={store} />
      ))}
    </ul>
  </article>
);

// ---------------- StoreCard
type StoreCardProps = {
  store: Store;
};
const StoreCard = ({ store }: StoreCardProps) => (
  <li style={{ '--shop-color': store.shopColor } as React.CSSProperties}>
    <h3 className={styles.shopName}>{store.name}</h3>
    <ExternalLink href={`tel:${store.phone}`} className={styles.itemTel}>
      {store.phone}
    </ExternalLink>
    <ExternalLink href={store.url} className={styles.shopLink}>
      <span> OFFICIAL</span>
    </ExternalLink>
  </li>
);

export default ContainerFooter;
