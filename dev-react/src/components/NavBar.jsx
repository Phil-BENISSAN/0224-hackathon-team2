import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    // const [isDarkTheme, setIsDarkTheme] = useState(false);

    // const handleThemeChange = () => {
    //   setIsDarkTheme((prevTheme) => !prevTheme);
    // };
  
    // useEffect(() => {
    //   themeChange(isDarkTheme);
    // }, [isDarkTheme]);
  
    // const themeChange = (isDarkTheme) => {
    //   const root = document.documentElement;
    //   root.setAttribute("data-theme", isDarkTheme ? "base-100" : "neutral");
    // };
  return (
    <div className=" flex items-center sticky top-0 z-10 bg-[#f8eeec] border-b border-accent ">
  <div className="flex-1 items-center">
    <Link to="/"><img src="https://cdn.discordapp.com/attachments/1257972687305707567/1258344196952162336/Logo.png?ex=6687b3db&is=6686625b&hm=fed8b59876a20f90cb9d4be1af9ca9e100d8dadc89660be95de5d1bc5897f31d&" alt="" className=" w-40 m-0 p-0 ml-28 h-20" /></Link>
  </div>
  <div className="flex-none mr-28">
    <ul className="menu menu-horizontal px-1">
      <li className="text-xl"><Link>Accueil</Link></li>
      <li className="text-xl"><Link>A propos</Link></li>
      <li className="text-xl"><Link>Test</Link></li>
      <li><Link className="btn relative top-[-2px] btn-primary mx-2">Se connecter</Link></li>
      {/* <li>
      <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            checked={isDarkTheme}
            onChange={handleThemeChange}
          />

          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </li> */}
    </ul>
  </div>
</div>
  );
}
