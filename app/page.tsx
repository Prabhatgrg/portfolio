'use client'

import Image from "next/image";
import SideBar from "@/Components/SideBar";
// import BgImage from "/public/images/night-sky.jpg";
// import Coding from "/images/coding-laptop.jpg";
// import Programming from "../public/images/programming-illustration.svg";
import Mountain from "../public/images/sagarmatha-banner.jpg";

export default function Home() {
    return (
        <>
            <div className="w-full flex">
                <div className="flex flex-col h-screen bg-[#111827] w-2/6 items-center">
                    <SideBar/>
                </div>
                <aside className="w-full flex justify-center">
                    <div className="flex justify-center items-center overflow-hidden ">
                        <Image
                            src={Mountain} // Better for statically import Image only
                            alt="Banner"
                            style={{
                                height: "100vh",
                                zIndex: "-1",
                            }}
                           data-aos='zoom-out'
                        />
                        {/*<Image*/}
                        {/*    src="/images/sagarmatha-banner.jpg"*/}
                        {/*    fill*/}
                        {/*    // className="h-screen"*/}
                        {/*    alt="Background Image"*/}
                        {/*    style={{*/}
                        {/*        objectFit: "cover",*/}
                        {/*        zIndex: -1,*/}
                        {/*    }}*/}
                        {/*    data-aos="zoom-out"*/}
                        {/*/>*/}
                        <h1 className="absolute font-extrabold text-6xl text-slate-200" data-aos="fade-down">
                            Prabhat Gurung
                        </h1>
                    </div>
                </aside>
            </div>
        </>
    );
}
