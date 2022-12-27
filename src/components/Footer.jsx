import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => (
              <div key={i} className="grid items-center">
                <h2 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {val.title}
                </h2>
              </div>
            ))}
            {links.map((listLinks, i) => (
              <ul key={i} className="grid items-center gap-1">
                {listLinks.map((link, i) => (
                  <li key={i} className="text-sm sm:text-xs">
                    {link.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright <sup className="text-base font-bold">&copy;</sup>All
              Reserved Rights 2022 <span>Pablo Charamello Developer</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
