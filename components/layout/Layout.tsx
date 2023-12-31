import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <section>
      {/*  gap-y-10 lg:gap-y-24 */}
      <main className="h-[100vh] font-bodyFont flex flex-col bg-gradient-to-r from-[#F0F0F0] via-[#F0F0F0] to-[#E5E5E5] justify-between overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Header />
        {children}
        <Footer />
      </main>
    </section>
  );
};

export default Layout;
