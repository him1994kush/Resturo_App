import React from "react";
import Breakfast from "../images/omlete.jpg";

function Card() {
  return (
    <div className="w-full bg-green h-screen">
      <div className="flex-col w-6/12 justify-center mx-auto bg-center ">
        <h2 className=" text-offWhite text-3xl font-bold animate-bounce w-6 h-6">
          Breakfast
        </h2>
        <div className="border-b my-3 border-brown"></div>
        <div className="relative">
          <p className="absolute left-0 w-[24rem] pt-20 text-white text-[18px] font-opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            temporibus veniam voluptate vitae qui dolore dolorum impedit, minus
            eaque delectus!
          </p>
          <img
            src={Breakfast}
            alt=""
            className="w-[24rem] rounded-lg  absolute right-0 "
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
