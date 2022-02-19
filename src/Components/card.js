import React from "react";
import Breakfast from "../images/omlete.jpg";

function Card() {
  return (
    <div className="w-full bg-green h-screen">
      <div className="flex-col w-full sm:w-9/12 2xl:w-6/12 justify-evenly xl:ustify-center mx-auto bg-center px-6">
        <h2 className=" text-offWhite text-3xl font-bold animate-bounce w-6 h-6">
          Breakfast
        </h2>
        <div className="border-b my-3 border-brown"></div>
        <div className=" flex flex-col md:flex-row-reverse">
          <img
            src={Breakfast}
            alt=""
            className=" w-[15rem] lg:w-[24rem] py-5 rounded-lg"
          />
          <p className="lg:w-[24rem]  pt-5 text-white text-[18px] font-opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            temporibus veniam voluptate vitae qui dolore dolorum impedit, minus
            eaque delectus!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
