'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaFacebook, FaLinkedin, FaHome, FaInfoCircle, FaList, FaDownload } from "react-icons/fa";
import React from "react";

const SideBar = () => {

  const router = usePathname();

  return (
    <aside className="w-full">
      <h1 className="font-bold text-2xl text-white text-center mt-10 pl-8">PG.</h1>
      <div className="socials mt-10 text-white">
        {/*Social Media Icons*/}
          <div className="flex justify-center gap-12">
              <Link href="https://github.com/Prabhatgrg" target="_blank">
                  <FaGithub size={30} className="hover:bg-blue-500 rounded-full ml-5" />
              </Link>
              <Link href="https://www.facebook.com/prabhat.gurung.180/" target="_blank">
                  <FaFacebook size={30} className="hover:bg-blue-500 rounded-full ml-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/prabhat-g-661204109/" target="_blank">
                  <FaLinkedin size={30} className="hover:bg-blue-500 hover:rounded-md ml-5" />
              </Link>
          </div>
      </div>
        <div className="lists text-white flex items-center mt-10 w-full">
            <ul className="flex flex-col items-center gap-10 w-full">
                <Link href="/" className={`w-full hover:bg-[#E9520E] hover:transition ease-in duration-300 hover:rounded-md p-4 ${router == "/" ? "active" : ""}`}>
                    <li className="w-full flex items-center justify-center gap-5 text-center">
                        <FaHome size={20} />
                        <div className="pt-1">
                            Home
                        </div>
                    </li>
                </Link>
                <Link href="/about" className={`w-full hover:bg-[#E9520E] hover:transition ease-in duration-300 hover:rounded-md p-4 ${router == "/about" ? "active" : ""}`}>
                    <li className="w-full flex items-center justify-center gap-5 text-center">
                        <FaInfoCircle size={20} />
                        <div className="pt-1">
                           About
                        </div>
                    </li>
                </Link>
                <Link href="/projects"
                      className={`w-full hover:bg-[#E9520E] hover:transition ease-in duration-300 hover:rounded-md p-4 ${router == "/projects" ? "active" : ""}`}>
                    <li className="w-full flex items-center justify-center gap-5 text-center">
                        <FaList size={20} />
                        <div className="pt-1">
                           Projects
                        </div>
                    </li>
                </Link>
                <Link href="/CV_main.pdf" download="CV"
                      className="w-full hover:bg-[#E9520E] hover:transition ease-in duration-300 hover:rounded-md p-4">
                    <li className="w-full flex items-center justify-center gap-5 text-center">
                        <FaDownload size={20} />
                        <div className="pt-1">
                           Get Resume
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    </aside>
  );
};

export default SideBar;
