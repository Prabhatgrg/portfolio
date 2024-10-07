import SideBar from "@/Components/SideBar";
import Image from "next/image";

const About = () => {
  return (
      <>
          <SideBar/>

          <main className="flex justify-center ml-80">
              <div className="pt-12 flex justify-center items-center">
                  <h1 className="font-extrabold text-6xl text-black">
                     About Me
                  </h1>
              </div>
          </main>
      </>
  );
};

export default About;