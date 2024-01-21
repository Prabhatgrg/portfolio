import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <aside className="bg-[#111827] flex flex-col h-screen fixed w-1/4">
      <h1 className="text-white">This is a SideBar</h1>
      <div className="lists text-white flex justify-center items-center mt-10">
        <ul className="flex flex-col gap-10">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>About</li>
          </Link>
          <Link href="/">
            <li>Projects</li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
