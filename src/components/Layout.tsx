import Image from "next/image";
import React from "react";
import { Figtree } from "@next/font/google";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import useMatchMedia from "../hooks/useMatchMedia";
import Footer from "./Footer";

const breakpoints = [
  "(max-width: 768px)",
  "(min-width: 769px) and (max-width: 1199px)",
  "(min-width: 1200px)",
];

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export default function Layout({ children }: any) {
  const [isMobile, isTablet, isDesktop] = useMatchMedia(breakpoints);

  return (
    <div
      className={`${figtree.variable} font-sans h-screen bg-background-gray`}
    >
      <NavBar />
      <main className="flex bg-background-gray">
        {isDesktop && <SideBar />}
        <div
          className="flex px-10 py-20 w-full"
          style={{ marginLeft: `${isDesktop ? "250px" : "0px"}` }}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
