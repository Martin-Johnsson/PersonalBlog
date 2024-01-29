import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/serverComponents/header/Header';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Blog',
  description: 'A personal blog about all things concerning development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='h-100 w-100'>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
