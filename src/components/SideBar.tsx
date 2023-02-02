import Image from "next/image";

export default function SideBar() {
  const fullLogo = "/full-logo.png";
  return (
    <aside
      className="fixed h-screen mt-1 px-10 p-20"
      style={{ minWidth: "300px" }}
    >
      {" "}
      <div className="flex flex-col justify-between h-full  border-r border-yellow">
        <div>
          <Image src={fullLogo} width={120} height={60} alt="main-logo" />
        </div>
        <div className="flex flex-col text-lightblack">
          Currently based in
          <span className="text-yellow text-2xl">Vancouver, BC</span>
        </div>
      </div>
      <div></div>
    </aside>
  );
}
