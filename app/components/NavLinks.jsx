import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Link from "next/link";

const NavLinks = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleDropdownToggle = (dropdownName) => {
    // If the clicked dropdown is already open, close it, otherwise open the clicked one
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };
  const handleLinkClick = () => {
    setOpenDropdown(null); // Close dropdowns when a link is clicked
  };
  return (
    <nav className="w-full lg:flex lg:items-center  lg:gap-52 xl:gap-96">
      <ul className="nav-link flex flex-col gap-6 text-medium-gray lg:flex-row lg:justify-center lg:items-center">
        {/* Features DropdownMenu */}
        <DropdownMenu
          label="Features"
          iconOpen="/images/icon-arrow-up.svg"
          iconClose="/images/icon-arrow-down.svg"
          items={[
            { label: "Todo List", href: "#", icon: "/images/icon-todo.svg" },
            { label: "Calendar", href: "#", icon: "/images/icon-calendar.svg" },
            {
              label: "Reminders",
              href: "#",
              icon: "/images/icon-reminders.svg",
            },
            { label: "Planning", href: "#", icon: "/images/icon-planning.svg" },
          ]}
          isOpen={openDropdown === "features"} // Open when openDropdown is "features"
          onToggle={() => handleDropdownToggle("features")} // Toggle when clicked
        />

        {/* Company DropdownMenu */}
        <DropdownMenu
          label="Company"
          iconOpen="/images/icon-arrow-up.svg"
          iconClose="/images/icon-arrow-down.svg"
          items={[
            { label: "History", href: "#" },
            { label: "Our Team", href: "#" },
            { label: "Blog", href: "#" },
          ]}
          isOpen={openDropdown === "company"} // Open when openDropdown is "company"
          onToggle={() => handleDropdownToggle("company")} // Toggle when clicked
        />

        {/* Other Links */}
        <li>
          <Link href="#" onClick={handleLinkClick}>Careers</Link>
        </li>
        <li>
          <Link href="#" onClick={handleLinkClick}>About</Link>
        </li>
      </ul>

      {/* Login and Register Buttons */}
      <div className="flex flex-col justify-center items-center w-full text-medium-gray py-8 gap-8 lg:flex-row lg:justify-center lg:items-center">
        <button className="hover:text-almost-black">Login</button>
        <button className="px-6 py-2 rounded-2xl border-2 w-full border-medium-gray hover:border-almost-black hover:text-almost-black">
          Register
        </button>
      </div>
    </nav>
  );
};

export default NavLinks;
