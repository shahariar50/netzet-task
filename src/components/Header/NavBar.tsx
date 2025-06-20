import { MENUS } from "@/utils/const";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <div className="w-1/3 md:hidden"></div>
        <div className="w-1/3 md:w-full text-center md:text-left">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="logo"
              className="w-[107px] md:w-[140px] lg:w-[174px]"
              width={174}
              height={74}
            />
          </Link>
        </div>
        <ul className="hidden lg:inline-flex self-start items-center gap-10 text-lg text-[#A9A9A9] font-semibold">
          {MENUS.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.link}>{menu.text}</Link>
            </li>
          ))}
        </ul>
        <div className="w-1/3 md:w-auto lg:hidden">
          <Bars3Icon className="w-7 cursor-pointer lg:hidden ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
