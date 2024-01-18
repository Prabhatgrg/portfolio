import Image from "next/image";
import NavBar from "@/Components/NavBar";
import SideBar from "@/Components/SideBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="bg-gray-400 h-screen flex justify-center ml-80">
        <div className="pt-12 flex justify-center items-center">
          <h1 className="font-extrabold text-6xl">Prabhat Gurung</h1>
        </div>
      </main>
    </>
  );
}
