import React from "react";

const FlexContent = ({ endpoint: { title, heading, text, img, url, btn } }) => {
  return (
    <>
      <div>
        <div>
          <h2>{heading}</h2>
          <h2>{title}</h2>
          <p>{text}</p>
          <a href={url}>
            <button type="button" className="">
              {btn}
            </button>
          </a>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

export default FlexContent;
