import Image from "next/image";
import SideBar from "@/Components/SideBar";
// import BgImage from "/public/images/night-sky.jpg";
// import Coding from "/images/coding-laptop.jpg";
// import Programming from "../public/images/programming-illustration.svg";

export default function Home() {
  return (
    <>
      <SideBar />
      {/* <main className="bg-gray-500 h-screen flex justify-center ml-80"> */}
      <main className="flex justify-center ml-80">
        <div className="pt-12 flex justify-center items-center">
          <h1 className="font-extrabold text-6xl text-slate-200">
            <Image
              src="/images/coding-laptop.jpg"
              fill
              className="h-screen"
              alt="Background Image"
              style={{
                // marginLeft: 200,
                objectFit: "cover",
                zIndex: -1,
              }}
            />
            Prabhat Gurung
          </h1>
        </div>
      </main>
    </>
  );
}
