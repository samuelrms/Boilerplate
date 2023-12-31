import './main.css';
import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import Providers from './providers';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  preload: true,
  style: ['italic', 'normal'],
});

export const metadata: Metadata = {
  title: 'Boilerplate Next.js + TailwindCSS + TypeScript',
  description: 'Create Next.js apps using TailwindCSS and TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
