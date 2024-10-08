import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-full w-full gap-8">
      <header className="">
        <div className="flex flex-row justify-between items-center w-full p-4">
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
          />
        </div>


      </header>
      <main className="">
        <section className="hero-section">
          <div className="hero-image">
            {/* Image for small screens */}
            <div className="block lg:hidden">
              <Image
                src="/images/image-hero-mobile.png"
                width={375}
                height={280}
                alt="hero image for mobile"
                sizes="(max-width: 600px) 100vw"
                priority
              />
            </div>

            {/* Image for large screens */}
            <div className="hidden lg:block">
              <Image
                src="/images/image-hero-desktop.png"
                width={730}
                height={300}
                alt="hero image for desktop"
                sizes="(min-width: 1024px) 50vw"
                priority
              />
            </div>
          </div>
        </section>
        <section className="features flex flex-col p-2 gap-12 my-10 ">
          <div className="description text-center space-y-4">
            <h1 className="font-bold text-4xl  text-almost-black">Make remote work</h1>
            <p className="p-2">
              Get your team in sync, no matter your location. Streamline processes,
              create team rituals, and watch productivity soar.

            </p>
            <button className="bg-almost-black text-almost-white px-4 py-2 rounded-xl">Learn more</button>
          </div>
          <div className="client-logo flex items-center justify-around w-full">
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
