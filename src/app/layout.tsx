import { Poppins } from 'next/font/google';
import './globals.css';
import Layout from '@/components/layout/Layout/Layout';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Two wheels</title>
      </head>
      <body className={`min-h-[100dvh] ${poppins.className}`} id="main">
        <main>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
