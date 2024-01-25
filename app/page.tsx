import Image from "next/image";
import SideBar from "@/Components/SideBar";
import BgImage from "public/night-sky.jpg";

export default function Home() {
  return (
    <>
      <SideBar />
      {/* <main className="bg-gray-500 h-screen flex justify-center ml-80"> */}
      <main className="h-screen flex justify-center ml-80">
        <div className="pt-12 flex justify-center items-center">
          <h1 className="font-extrabold text-6xl text-slate-200">
            <Image
              src={BgImage}
              fill
              alt="Background Image"
              style={{
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
