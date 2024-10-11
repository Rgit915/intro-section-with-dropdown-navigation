"use client"
import { useState } from "react";

import Image from "next/image";
import Navbar from "./components/Navbar";
import NavLinks from "./components/NavLinks";
export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);


  const handleShowMenu = () =>{
    setToggleMenu(!toggleMenu);
  }
  const handleCloseMenu = () =>{
    setToggleMenu(false);
  }
  return (
    <div className="flex flex-col justify-center h-full w-full gap-8">
      <header className="flex flex-col p-2 lg:flex-row ">
        <div className="flex flex-row justify-between items-center w-full p-4 lg:w-1/6">
          <Image
            src="/images/logo.svg"
            alt="menu icon"
            width={87}
            height={35}
          />
          <Image
            src="/images/icon-menu.svg"
            alt="menu icon"
            width={32}
            height={18}
            onClick={handleShowMenu}
            className=" cursor-pointer lg:hidden "
            priority
          />
        </div>
        {toggleMenu && <Navbar closeMenu={handleCloseMenu} toggleMenu={toggleMenu} />}
        {/* Large Screen Navbar */}
        <div className="hidden lg:flex">
          <NavLinks />
        </div>

      </header>
      <main className="flex flex-col  w-full md:flex-row-reverse md:justify-center md:items-center md:gap-12 md:p-4">
        <section className="hero-section">
          <div className="hero-image lg:p-20">
            {/* Image for small screens */}
            <div className="block lg:hidden">
              <Image
                src="/images/image-hero-mobile.png"
                width={375}
                height={282}
                alt="hero image for mobile"
                sizes="(max-width: 600px) 100vw"
                priority
              />
            </div>

            {/* Image for large screens */}
            <div className="hidden lg:block">
              <Image
                src="/images/image-hero-desktop.png"
                width={480}
                height={640}
                alt="hero image for desktop"
                sizes="(min-width: 1024px) 50vw"
                priority
              />
            </div>
          </div>
        </section>
        <section className="features flex flex-col p-2 gap-12 my-10 md:items-stretch md:max-w-xs lg:max-w-sm ">
          <div className="description text-center space-y-4 md:space-y-8 md:text-left">
            <h1 className="font-bold text-4xl  text-almost-black md:text-[3rem] md:tracking-[-1.11px] lg:text-[3.5rem]">Make remote work</h1>
            <p className="p-2 text-medium-gray text-base font-normal">
              Get your team in sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.

            </p>
            <button className="bg-almost-black  text-almost-white px-4 py-2 border rounded-xl font-bold text-sm  hover:border-almost-black hover:bg-transparent hover:text-almost-black">Learn more</button>
          </div>
          <div className="client-logo flex items-center justify-around w-full py-8 mt-10">
            <Image
              src="/images/client-databiz.svg"
              alt="menu icon"
              width={60}
              height={26}
            />
            <Image
              src="/images/client-audiophile.svg"
              alt="menu icon"
              width={60}
              height={26}
            />
            <Image
              src="/images/client-meet.svg"
              alt="menu icon"
              width={60}
              height={26}
            />
            <Image
              src="/images/client-maker.svg"
              alt="menu icon"
              width={60}
              height={26}
            />
          </div>
        </section>

      </main>
      <footer className="">
        <div className="attribution text-[0.73rem] text-center opacity-80 text-[#8c8c8c] mt-12">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://www.linkedin.com/in/rora-alem" target="_blank">Rora Alem</a>.
        </div>
      </footer>
    </div>
  );
}