"use client";

import {navbarItems} from "@/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

const BottomBar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(true);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-0 w-4/5 pb-10 bg-white ${
                isScrolled &&
                "max-md:border-t max-md:border-t-neutral-800 max-md:border-opacity-10"
            }`}
        >
            <ul className="flex justify-center gap-4 py-3 max-md:justify-center">
                {navbarItems.map((elem) => {
                    const isActive = elem.path === pathname;

                    return (
                        <Link
                            href={elem.path}
                            key={elem.key}
                            className={`text-[18px] ${isActive && "font-medium"}`}
                        >
                            {elem.label}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default BottomBar;
