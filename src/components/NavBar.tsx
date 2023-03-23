import Image from "next/image";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const mainLogo = "/images/logo.png";

  const isHome = router.asPath === "/";

  return (
    <header
      className="bg-lightgray px-5 flex items-center fixed w-full z-30 text-sm"
      style={{ height: "48px" }}
    >
      <div className="flex gap-2 mr-5">
        <div className="w-3 h-3 bg-red rounded-full" />
        <div className="w-3 h-3 bg-yellow rounded-full" />
        <div className="w-3 h-3 bg-green rounded-full" />
      </div>
      <div
        className={`flex items-center font-light gap-2 tracking-[-.05em] w-60 px-5 rounded-t-lg cursor-pointer ${
          isHome && "bg-background-gray"
        }`}
        style={{ height: "48px" }}
        onClick={() => router.push("/")}
      >
        {isHome && (
          <Image src={mainLogo} width={12} height={12} alt="favicon" />
        )}
        Home
      </div>
      <div
        className={`flex items-center font-light gap-2 tracking-[-.05em] w-60 px-5 rounded-t-lg cursor-pointer ${
          !isHome && "bg-background-gray"
        }`}
        style={{ height: "48px" }}
        onClick={() => router.push("/about")}
      >
        {!isHome && (
          <Image src={mainLogo} width={12} height={12} alt="favicon" />
        )}
        About
      </div>
    </header>
  );
}
