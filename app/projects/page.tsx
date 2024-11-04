import SideBar from "@/Components/SideBar";

const Projects = () => {
  return (
      <>
          <div className="w-full flex">
              <div className="flex flex-col h-screen bg-[#111827] w-2/6 items-center">
                  <SideBar />
              </div>
              <main className="w-full bg-black flex justify-center">
                  <div className="pt-12 flex justify-center items-center" data-aos="fade-down">
                      <h1 className="font-extrabold text-6xl text-white">
                          My Projects
                      </h1>
                  </div>
              </main>
          </div>
      </>
  );
};

export default Projects;