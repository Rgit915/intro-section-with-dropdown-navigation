import Image from "next/image";
import Link from "next/link";

const DropdownMenu = ({ label, iconOpen, iconClose, items, isOpen, onToggle }) => {
  // Custom width and padding for "Features" dropdown
  const dropdownStyles = label === "Features" ? "w-48 p-2" : "w-40 p-4";

  return (
    <li className="relative">
      {/* Dropdown Toggle Button */}
      <button onClick={onToggle} className="flex items-center gap-4">
        {label}
        <Image
          src={isOpen ? iconOpen : iconClose}
          width={8}
          height={4}
          alt="Icon arrow"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
         <ul className={`absolute right-0 mt-2 flex flex-col justify-center items-center space-y-4 bg-white lg:shadow-xl lg:rounded-xl ${dropdownStyles}`}>
          {items.map((item, index) => (
            <li key={index} className="py-2 text-medium-gray">
              <Link href={item.href} className="flex items-center gap-2">
                {item.icon && (
                  <Image src={item.icon} alt={item.label} width={18} height={20} />
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;
