import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({
  id,
  color,
  rating,
  shadow,
  title,
  text,
  img,
  btn,
  ratin,
  price,
}) => {
  console.log(id);
  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center`}
      >
        <div className="grid items-center justify-items-center">
          <h2 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h2>
          <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
            {text}
          </p>

          <div className="flex items-center justify-between w-28 ">
            <div className="flex items-center bg-white/80 px-1 rounded">
              <h3 className="text-black text-sm">${price}</h3>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h3 className="text-sm font-normal">{rating}</h3>
            </div>
          </div>

          <div>
            <button type="button" className="">
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button type="button" className="">
              {btn}
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <img src={img} alt="img/item-img" />
        </div>
      </div>
    </>
  );
};

export default Item;
