import { NAV_LINKS } from "./constants";
import Image from "next/image";
import Link from "next/link";



const Navbar = () => {

  return (
    <nav className="flex items-center justify-between max-w-full px-4 py-4 bg-blue-700 ml">

      <div>
        <Link href='/'>
          <Image src="/lapit.svg" alt="logo" width={80} height={60} className="sm:w-28 md:w-40" />
        </Link>
      </div>
      <div className="flex items-center text-xs ">
        <ul className="flex items-center space-x-2 sm:space-x-4 md:space-x-5 xl:space-x-8 text-white lg:flex ">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href} className="text-[8px] sm:text-sm md:text-base font-semibold hover:text-gray-300 duration-300 transition-all">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
            <div className="sm:pr-3 md:pr-7 xl:pr-12">
        <a href=""><button className="ml-3 px-3 py-1 text-[8px] rounded-md sm:text-sm sm:ml-5 md:ml-7 md:text-base  bg-white">Login</button></a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;


