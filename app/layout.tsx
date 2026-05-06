import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DreamBIG Technology Arena - Fundraising Platform - InTown Metaverse',
  description: 'Control Center for DreamBIG Technology Arena, the world\'s first fully decentralized digital stadium. Manage your event\'s entire economic ecosystem with our powerful smart contract protocol.',
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
