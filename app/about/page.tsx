import SideBar from "@/Components/SideBar";

const About = () => {
  return (
      <>
          <div className="w-full flex">
              <div className="flex flex-col h-screen bg-[#111827] w-2/6 items-center">
                  <SideBar />
              </div>
              <aside className="w-full flex bg-black h-screen justify-center items-center">
                  <div className="pt-12">
                      <h1 className="font-extrabold text-6xl text-white">
                          About Me
                      </h1>
                  </div>
              </aside>
          </div>
      </>
  );
};

export default About;