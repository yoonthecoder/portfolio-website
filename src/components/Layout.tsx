import Image from "next/image";
import React from "react";
import { Figtree } from "@next/font/google";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});
export default function Layout({ children }: any) {
  return (
    <div
      className={`${figtree.variable} font-sans h-screen bg-background-gray`}
    >
      <NavBar />
      <main className="flex relative bg-background-gray">
        <SideBar />
        <div
          className="flex flex-col px-10 py-20"
          style={{ marginLeft: "300px" }}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
