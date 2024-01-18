import Image from "next/image";
import NavBar from "@/Components/NavBar";
import SideBar from "@/Components/SideBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="bg-gray-400 h-screen flex justify-center ml-80">
        <p>Test Page</p>
      </main>
    </>
  );
}
