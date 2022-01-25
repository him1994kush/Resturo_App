import React from "react";

function Navbar() {
  return (
    <div className="bg-green drop-shadow-2xl backdrop-blur-lg py-8">
      <ul className="font-bold text-2xl w-4/12 text-white flex justify-between mx-auto py-4 font-primary">
        <li className="hover:text-offWhite text-brown"><a href="">All</a></li>
        <li className="hover:text-offWhite text-brown"><a href="">Breakfast</a></li>
        <li className="hover:text-offWhite text-brown"><a href="">Lunch</a></li>
        <li className="hover:text-offWhite text-brown"><a href="">Dinner</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
