import React from 'react';

const Card = (props) => {
  return (
    <>
      <div
        className={`bg-DarkViolet h-20 w-20 rounded-full flex items-center justify-center text-white translate-y-1/2 ${props.circleClassName}`}
      >
        <img src={props.icon} alt="" />
      </div>
      <div
        className={`bg-white rounded-lg text-center pb-12 ${props.className}`}
      >
        <h1 className="font-bold text-2xl mt-20 mb-2">{props.title}</h1>
        <p className="px-6 text-md text-GrayishViolet">{props.subtitle}</p>
      </div>
    </>
  );
};

export default Card;
