import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
    console.log("clicked");
  };
  return (
    <div className="bg-green drop-shadow-2xl backdrop-blur-lg py-8">
      <div
        className="sm:hidden text-4xl text-white pl-6"
        onClick={handleChange}
      >
        {!open ? (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      <div
        className={` ${
          open
            ? "block"
            : "hidden  md:flex"
        }`}
      >
        <ul className="font-bold text-2xl px-8 w-full lg:w-4/12 text-white flex md:flex-row flex-col gap-y-6 pl-6 justify-between mx-auto py-4 font-primary">
          <li className="hover:text-offWhite text-brown">
            <a href="/">All</a>
          </li>
          <li className="hover:text-offWhite text-brown">
            <a href="/">Breakfast</a>
          </li>
          <li className="hover:text-offWhite text-brown">
            <a href="/">Lunch</a>
          </li>
          <li className="hover:text-offWhite text-brown">
            <a href="/">Dinner</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
