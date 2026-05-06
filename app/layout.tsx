import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DreamBIG Technology Arena - World\'s First Decentralized Digital Stadium',
  description: 'Experience the future of live entertainment at DreamBIG Technology Arena. A revolutionary blockchain-powered venue hosting concerts, sports, and events in an immersive digital metaverse with real-world economic opportunities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
