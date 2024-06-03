import React, { ReactNode } from 'react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-[100dvh] flex flex-col">
      <div className="md:py-[20px] py-[15px] z-[100] bg-light-green-34">
        <Header />
      </div>
      <div className="flex-1">{children}</div>
      <div className="bg-white py-[40px]">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
