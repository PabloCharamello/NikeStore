import React from "react";

const Hero = ({
  heroapi: { btnText, img, socialLinks, subtitle, title, videos },
}) => {
  console.log({ socialLinks });
  return (
    <div className="relative h-auto w-auto flex flex-col">
      <div className="bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55] w-auto absolute top-0 left-0 right-0 opacity-100 z-10"></div>
      <div className="relative opacity-100 z-20">
        <div className="">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <button>{btnText}</button>
          {/* <div></div>
          <div></div> */}
        </div>
        <div className="">
          <img src={img} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
