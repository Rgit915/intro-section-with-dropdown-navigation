"use client";

import Image from "next/image";
import NavLinks from "./NavLinks";

const Navbar = ({ toggleMenu, closeMenu }) => {
  return (
    <>
      {/* Mobile Navbar (shown when toggleMenu is true) */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg  transform ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4 flex justify-end">
          {/* Close Menu Icon */}
          <Image
            src="/images/icon-close-menu.svg"
            alt="close menu icon"
            width={30}
            height={30}
            onClick={closeMenu}
            className=" cursor-pointer"
            priority
          />
        </div>
        <div className="px-8 py-12">
          <NavLinks />
        </div>
      </div>
    </>
  );
};

export default Navbar;