import SideBar from "@/Components/SideBar";

const Projects = () => {
  return (
      <>
          <SideBar/>

          <main className="flex justify-center ml-80">
              <div className="pt-12 flex justify-center items-center">
                  <h1 className="font-extrabold text-6xl text-black">
                      My Projects
                  </h1>
              </div>
          </main>
      </>
  );
};

export default Projects;