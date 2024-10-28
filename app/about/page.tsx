import SideBar from "@/Components/SideBar";

const About = () => {
  return (
      <>
          <div>
              <SideBar/>
              <aside className="w-full flex justify-center bg-black h-screen items-center">
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