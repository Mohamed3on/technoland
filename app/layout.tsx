import type { Metadata } from 'next';
import './globals.css';

import { GeistSans } from 'geist/font/sans';

export const metadata: Metadata = {
  title: 'Tech City Index',
  description: 'Find the best cities for tech workers based on salary and cost of living.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
