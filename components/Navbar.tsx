"use client";

import { navbarItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <ul className="flex justify-end gap-4 max-lg:hidden">
      {navbarItems.map((elem) => {
        const isActive = elem.path === pathname;

        return (
          <Link
            href={elem.path}
            key={elem.key}
            className={`text-[18px] ${
              isActive ? "font-medium" : "font-normal"
            } bg-gradient-to-r from-purple-800 via-purple-600 to-violet-800 w-fit bg-clip-text  text-transparent`}
          >
            {elem.label}
          </Link>
        );
      })}
    </ul>
  );
};

export default Navbar;
