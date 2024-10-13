'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import React from "react";

const SideBar = () => {

  const router = usePathname();

  return (
    <aside className="bg-[#111827] flex flex-col h-screen fixed items-center w-1/4">
      <h1 className="text-white text-center mt-10">Prabhat Gurung</h1>
      <div className="socials mt-6 text-white">
        {/*Social Media Icons*/}
          <div className="flex justify-center gap-5">
              <Link href="https://github.com/Prabhatgrg" target="_blank">
                  <FaGithub size={30} className="hover:bg-blue-500 rounded-full" />
              </Link>
              <Link href="https://www.facebook.com/prabhat.gurung.180/" target="_blank">
                  <FaFacebook size={30} className="hover:bg-blue-500 rounded-full" />
              </Link>
              <Link href="https://www.linkedin.com/in/prabhat-g-661204109/" target="_blank">
                  <FaLinkedin size={30} className="hover:bg-blue-500 hover:rounded-md" />
              </Link>
          </div>
      </div>
        <div className="lists text-white flex items-center mt-10 w-full">
            <ul className="flex flex-col items-center gap-10 w-full">
                <Link href="/" className={`w-full hover:bg-blue-200 hover:transition ease-in duration-300 hover:rounded-md p-4 ${router == "/" ? "active" : ""}`}>
                    <li className="w-full text-center">Home</li>
                </Link>
                <Link href="/about" className={`w-full hover:bg-blue-200 hover:transition ease-in duration-300 hover:rounded-md p-4 ${router == "/about" ? "active" : ""}`}>
                    <li className="w-full text-center">About</li>
                </Link>
                <Link href="/projects" className={`w-full hover:bg-blue-200 hover:transition ease-in duration-300 hover:rounded-md p-4 ${router == "/projects" ? "active" : ""}`}>
                    <li className="w-full text-center">Projects</li>
                </Link>
                <Link href="/CV_main.pdf" download className="w-full hover:bg-blue-200 hover:transition ease-in duration-300 hover:rounded-md p-4">
                    <li className="w-full text-center">Get Resume</li>
                </Link>
            </ul>
        </div>
    </aside>
  );
};

export default SideBar;
