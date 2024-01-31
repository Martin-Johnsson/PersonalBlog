import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/serverComponents/header/Header';
import Footer from './components/serverComponents/footer/Footer';

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
        <main className='mt-28'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
