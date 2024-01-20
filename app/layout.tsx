import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Header } from './common/components/Header';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextJS X Postgres',
  description: 'Sample NextJS HR App with Postgres!',
};

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Header />
        <div className='mx-auto max-w-3xl'>{children}</div>
      </body>
    </html>
  );
}
