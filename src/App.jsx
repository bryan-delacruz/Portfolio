import { useState } from "react";

import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

import profile from "./assets/imgs/profile.png";
import whatsapp from "./assets/svgs/whatsapp.svg";
import linkedin from "./assets/svgs/linkedin.svg";
import github from "./assets/svgs/github.svg";

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
      <header className="bg-slate-400 text-slate-200">
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
        <nav className="flex z-10 bg-black">
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
            <h2 className="text-xl">Bryan De La Cruz</h2>
            <p className="text-xl">Frontend Software Engineer</p>
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
    </div>
  );
}

export default App;
