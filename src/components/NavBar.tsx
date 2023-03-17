import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const mainLogo = "/images/logo.png";

  const isHome = router.asPath === "/";

  return (
    <header className="bg-lightgray h-12 px-5 flex items-center fixed w-full z-30">
      <div className="flex gap-2 mr-5">
        <div className="w-3 h-3 bg-red rounded-full" />
        <div className="w-3 h-3 bg-yellow rounded-full" />
        <div className="w-3 h-3 bg-green rounded-full" />
      </div>
      <div
        className={`flex items-center font-light h-12 gap-2 tracking-[-.05em] w-60 px-5 rounded-t-lg cursor-pointer ${
          isHome && "bg-background-gray"
        }`}
        onClick={() => router.push("/")}
      >
        <Image src={mainLogo} width={15} height={15} alt="favicon" />
        Home
      </div>
      {/* <a
        className={`flex items-center font-light h-12 gap-2 tracking-[-.05em] w-60 px-5 rounded-t-lg cursor-pointer justify-between ${
          !isHome ? "bg-background-gray" : "hover:bg-white/30"
        }`}
        href="https://read.cv/yoonthecoder"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex gap-3 ">Resume</div>
        <div>↗</div>
      </a> */}
      <div className="flex items-center font-light h-12 gap-2 tracking-[-.05em] w-60 px-5 rounded-t-lg cursor-pointer justify-between">
        About
      </div>
    </header>
  );
}
