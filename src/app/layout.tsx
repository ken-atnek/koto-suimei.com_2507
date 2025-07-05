/* =======================================
 * 夏の陣 Layout
 * URL:src/app/layout.tsx
 * Created: 2025-07-03
 * Last updated: 2025-07-03
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Noto_Sans_JP } from 'next/font/google';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE ||
        'https://contest2025-summer.hot-point.jp/'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: '/ogp.webp',
          width: 1200,
          height: 630,
          alt: 'ホットポイントグループ指名獲得サマーチャレンジ夏の陣のOGP画像',
        },
      ],
    },
  }),
  title: ' ホットポイントグループ指名獲得サマーチャレンジ夏の陣',
  description: isRealProduction
    ? 'ホットポイントグループ指名獲得サマーチャレンジ夏の陣'
    : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: {
    icon: [
      { url: 'favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: 'favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: 'favicon/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: 'favicon/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      {
        rel: 'icon',
        url: 'favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.className} `}>
      <head>
        <meta
          name="robots"
          content={isRealProduction ? 'index, follow' : 'noindex, nofollow'}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
