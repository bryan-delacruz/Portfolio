import { useState } from "react";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

import profile from "./assets/imgs/profile.png";
import whatsapp from "./assets/svgs/whatsapp.svg";
import linkedin from "./assets/svgs/linkedin.svg";
import github from "./assets/svgs/github.svg";

import project1 from "./assets/imgs/projects/project1.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact, faJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faReact, faJs, faNodeJs);

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const handleMobileBar = () => {
    setMobileNavOpen(false);
  };
  const handleDesktopBar = () => {
    setMobileNavOpen(true);
  };
  const handleSocialButton = (socialIcon) => {
    let URL = "";
    if (socialIcon === "whatsapp")
      URL =
        "https://api.whatsapp.com/send?phone=%2B51983854029&text=Hola%2C+Bryan+vi+tu+portafolio.+Me+gustar%C3%ADa+contactar+contigo+sobre+...";

    if (socialIcon === "linkedin")
      URL = "https://www.linkedin.com/in/bdelacruz-pucp/";

    if (socialIcon === "github") URL = "https://github.com/bryan-delacruz";

    if (socialIcon === "") null;

    window.open(URL, "_blank");
  };
  return (
    <div>
      <header className="bg-slate-400 text-slate-200 mb-4 pb-4">
        <nav
          className={`${
            mobileNavOpen ? "fixed" : "hidden"
          } z-20 h-screen w-screen bg-slate-400  text-2xl`}
        >
          <div className="h-full relative">
            <button
              className="absolute top-0 right-0 mr-5 mt-5"
              onClick={() => handleMobileBar()}
            >
              <XMarkIcon className="h-10 w-10 -z-10" />
            </button>
            <div className="h-full flex flex-col  justify-center items-center gap-y-10">
              <button>ABOUT ME</button>
              <button>PROJECTS</button>
              <button>CONTACT ME</button>
            </div>
          </div>
        </nav>
        <nav className="flex z-10 bg-black mb-4">
          <div className="container">
            <div className="relative justify-center items-center text-md py-5 flex">
              <h1 className="text-2xl border-b border-black">GozDev</h1>
              <button
                className="absolute right-0"
                onClick={() => handleDesktopBar()}
              >
                <Bars3Icon className="h-10 w-10 -z-10 " />
              </button>
            </div>
          </div>
        </nav>
        <div className="container flex flex-col items-center py-4">
          <img
            className="w-56 mb-4 border border-black rounded-full"
            src={profile}
            alt="profile-img"
          />
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl">Bryan De La Cruz</p>
            <p className="text-2xl">Frontend Software Engineer</p>
            <div className="w-full flex flex-row justify-around ">
              <button
                className="bg-black p-2 rounded-full flex items-center"
                onClick={() => handleSocialButton("whatsapp")}
              >
                <img className="w-7 h-7" src={whatsapp} alt="whatsapp-img" />
              </button>

              <button
                className="bg-black p-2 rounded-full flex items-center"
                onClick={() => handleSocialButton("linkedin")}
              >
                <img className="w-7 h-7" src={linkedin} alt="whatsapp-img" />
              </button>
              <button
                className="bg-black p-2 rounded-full flex items-center"
                onClick={() => handleSocialButton("github")}
              >
                <img className="w-7 h-7" src={github} alt="whatsapp-img" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <section id="abouMe" className="container mb-8">
        <div className="mt-4">
          <h2 className="text-center mb-8 text-xl">ABOUT ME</h2>
          <p className="text-justify mb-4">
            Hello, I am Bryan De La Cruz a Frontend Software Engineer with
            professional training as a Mechatronics Engineer 🎓. Also, I have
            experience working as an IT and Programmer Analyst in Banking 🏦 and
            Payment Systems industry 🖥️.
          </p>
          <p className="text-justify">
            I am passionate about Digital Innovation and how it helps
            organizations to deliver a better product for users 🎯.
          </p>
        </div>
      </section>
      <section id="mainTechSkills" className="container mb-8">
        <h2 className="text-center mb-8 text-xl">MAIN TECH SKILLS</h2>
        <div className="flex justify-around items-center">
          <FontAwesomeIcon className="w-11 h-11" icon="fa-brands fa-js" />
          <svg
            className="h-11 w-11"
            viewBox="-10.5 -9.45 21 18.9"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="10" ry="4.5"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
              <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
            </g>
          </svg>
          <FontAwesomeIcon className="w-11 h-11" icon="fa-brands fa-node-js" />
          <p className="font-semibold text-2xl">Express</p>
        </div>
      </section>
      <section id="projects" className="container mb-8">
        <h2 className="text-center text-xl mb-8">PROJECTS</h2>
        <div>
          <div>
            <img src={project1} alt="project1-img" className="mb-4" />
            <p className="text-center mb-4 font-bold text-lg">
              Recipe Food - React App
            </p>
            <table className="table-auto border-separate border-spacing-4">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Tech</th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td>Frontend</td>
                  <td className="flex flex-wrap gap-x-2 gap-y-2 justify-evenly">
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      JavaScript
                    </span>
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      React
                    </span>
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      CssModules
                    </span>
                  </td>
                </tr>
                <tr className="">
                  <td>Backend</td>
                  <td className="flex flex-wrap gap-x-2 gap-y-2 justify-evenly">
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      NodeJs
                    </span>
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      ExpressJs
                    </span>
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      Sequelize
                    </span>
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      PostgreSQL
                    </span>
                  </td>
                </tr>
                <tr className="">
                  <td>Deployment</td>
                  <td className="flex flex-wrap gap-x-2 gap-y-2 justify-evenly">
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      Vercel
                    </span>
                    <span className="px-2 bg-sky-400 text-white rounded-full">
                      Heroku
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
