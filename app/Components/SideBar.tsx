'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {

  const router = usePathname();

  return (
    <aside className="bg-[#111827] flex flex-col h-screen fixed items-center w-1/4">
      <h1 className="text-white text-center mt-10">Prabhat Gurung</h1>
      <div className="socials mt-6 text-white">
        Social Media Icons
      </div>
      <div className="lists text-white flex ms-5 items-center mt-10">
        <ul className="flex flex-col gap-10 w-full">
          <Link className={`hover:bg-blue-200 hover:rounded-md p-4 ` + (router == "/" ? "active" : "")} href="/">
            <li>Home</li>
          </Link>
          <Link className={`hover:bg-blue-200 hover:rounded-md p-4 ` + (router == "/about" ? "active" : "")} href="/about">
            <li>About</li>
          </Link>
          <Link className={`hover:bg-blue-200 hover:rounded-md p-4 ` + (router == "/projects" ? "active" : "")} href="/projects">
            <li>Projects</li>
          </Link>
          <Link className={`hover:bg-blue-200 hover:rounded-md p-4 `} href="/CV_main.pdf" download>
            <li>Get Resume</li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
