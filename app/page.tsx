import Image from "next/image";
import SideBar from "@/Components/SideBar";
// import BgImage from "/public/images/night-sky.jpg";
// import Coding from "/images/coding-laptop.jpg";
// import Programming from "../public/images/programming-illustration.svg";

export default function Home() {
  return (
    <>
        <div className="w-full flex">
            <div className="flex flex-col h-screen bg-[#111827] w-2/6 items-center">
                <SideBar />
            </div>
          <aside className="w-full flex justify-center">
            <div className="pt-12 flex justify-center items-center">
              <h1 className="font-extrabold text-6xl text-slate-200">
                <Image
                  src="/images/coding-laptop.jpg"
                  fill
                  className=""
                  alt="Background Image"
                  style={{
                    objectFit: "cover",
                    zIndex: -1,
                  }}
                />
                Prabhat Gurung
              </h1>
            </div>
          </aside>
        </div>
    </>
  );
}
