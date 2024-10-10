import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NavLinks = () => {
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  const toggleFeaturesDropdown = () => {
    setShowFeaturesDropdown(!showFeaturesDropdown);
    setShowCompanyDropdown(false); // Close other dropdown
  };

  const toggleCompanyDropdown = () => {
    setShowCompanyDropdown(!showCompanyDropdown);
    setShowFeaturesDropdown(false);
  };

  return (
    <nav className="w-full md:flex md:justify-between md:items-center md:gap-8">
      <ul className="nav-link flex flex-col gap-6 text-medium-gray md:flex-row md:justify-center md:items-center">
        {/* Features Dropdown */}
        <li className="relative">
          <button
            onClick={toggleFeaturesDropdown}
            className="flex items-center gap-4"
          >
            Features
            <Image
              src={
                showFeaturesDropdown
                  ? "/images/icon-arrow-up.svg" // Change icon when expanded
                  : "/images/icon-arrow-down.svg" // Icon when collapsed
              }
              width={8}
              height={4}
              alt="Icon arrow"
            />
          </button>
          {showFeaturesDropdown && (
            <ul className="absolute left-0 mt-2 w-40 flex flex-col space-y-4 bg-white p-4 md:mt-2 md:p-4 md:shadow-lg md:rounded-lg">
              <li className="py-2">
                <Link href="#" className="flex  justify-center items-center gap-2">
                  <Image
                    src="/images/icon-todo.svg"
                    alt="menu icon"
                    width={18}
                    height={20}
                  />
                  Todo List
                </Link>
              </li>
              <li className="py-2">
                <Link href="#" className="flex  justify-center items-center gap-2">
                  <Image
                    src="/images/icon-calendar.svg"
                    alt="menu icon"
                    width={18}
                    height={20}
                  />
                  Calendar
                </Link>
              </li>
              <li className="py-2">
                <Link href="#" className="flex  justify-center items-center gap-2">
                  <Image
                    src="/images/icon-reminders.svg"
                    alt="menu icon"
                    width={18}
                    height={20}
                  />
                  Reminders
                </Link>
              </li>
              <li className="py-2">
                <Link href="#" className="flex  justify-center items-center gap-2">
                  <Image
                    src="/images/icon-planning.svg"
                    alt="menu icon"
                    width={18}
                    height={20}
                  />
                  Planning
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Company Dropdown */}
        <li className="relative mt-4 md:mt-0">
          <button
            onClick={toggleCompanyDropdown}
            className="flex items-center gap-4 "
          >
            Company
            <Image
              src={
                showCompanyDropdown
                  ? "/images/icon-arrow-up.svg" // Change icon when expanded
                  : "/images/icon-arrow-down.svg" // Icon when collapsed
              }
              width={8}
              height={4}
              alt="Icon arrow"
            />
          </button>
          {showCompanyDropdown && (
            <ul className="absolute left-0 mt-2 w-40 flex flex-col bg-white p-4 space-y-4 md:shadow-lg md:rounded-lg md:mt-2 md:p-4">
              <li className="py-2">
                <Link href="#">History</Link>
              </li>
              <li className="py-2">
                <Link href="#">Our Team</Link>
              </li>
              <li className="py-2">
                <Link href="#">Blog</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Other Links */}
        <li>
          <Link href="#">Careers</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
      </ul>

      {/* Login and Register Buttons */}
      <div className="flex flex-col justify-center items-center w-full text-medium-gray py-8 gap-8 md:flex-row md:justify-center md:items-center">
        <button>Login</button>

        <button className="px-6 py-2 rounded-2xl border-2 w-full border-medium-gray">
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavLinks;
