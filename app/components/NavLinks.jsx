import Link from "next/link";
import Image from "next/image";

const NavLinks = () => {
  return (
    <nav>
      <ul className="nav-link flex flex-col gap-6 text-medium-gray">
        <li className="flex items-center">
          <Link href="#" className="flex items-center gap-4">
            Features
            <Image
              src="/images/icon-arrow-down.svg"
              width={8}
              height={4}
              alt="Icon arrow down"
            />
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="#" className="flex items-center gap-4">
              Company
            <Image
              src="/images/icon-arrow-down.svg"
              width={8}
              height={4}
              alt="Icon arrow down"
            />
          </Link>
        </li>
        <li>
          <Link href="#">Careers</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
      </ul>
      <div className="flex flex-col justify-center items-center w-full text-medium-gray py-8 gap-8">
        <button>Login</button>

        <button className="px-6 py-2 rounded-2xl border-2 w-full border-medium-gray">Register</button>
      </div>
    </nav>
  );
};

export default NavLinks;
