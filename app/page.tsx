import Image from "next/image";
import NavBar from "@/Components/NavBar";
import SideBar from "@/Components/SideBar";

export default function Home() {
  return (
    <>
      <SideBar />
      <main className="bg-gray-400 h-screen flex justify-center">
        <p>Test Page</p>
      </main>
    </>
  );
}
