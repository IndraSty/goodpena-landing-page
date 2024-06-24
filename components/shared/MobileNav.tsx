"use client"
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { FaBars } from "react-icons/fa";
import useScroll from "../hooks/useScroll";

const MobileNav = () => {
  const isScrolled = useScroll(100)

  return (
    <div className={`mob-navbar ${isScrolled ? 'backdrop-blur-2xl' : 'bg-transparent'}`}>
      <div className="flex gap-1 items-center">
        <Image src={"/images/logo.png"} alt="logo" width={30} height={30} />
        <h2 className="font-semibold text-xl">GoodPena</h2>
      </div>

      <nav className="flex gap-2">
        <Sheet>
          <SheetTrigger>
            <FaBars />
          </SheetTrigger>
          <SheetContent className="sm:w-64">
            <>
              <div className="flex gap-1 items-center">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={30}
                  height={30}
                />
                <h2 className="font-semibold text-xl">GoodPena</h2>
              </div>

              <ul className="mt-8 flex w-full flex-col items-start gap-5">
                {navLinks.map((link) => {
                  return (
                    <li
                      key={link.route}
                      className={`
                        p-18 flex whitespace-nowrap text-white nav-link group`}
                    >
                      <Link className=" cursor-pointer" href={link.route}>
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                
                <div className="flex p-0.5 bg-my-gradient rounded-lg">
                  <Button
                    variant={"outline"}
                    className="bg-dark-500 hover:bg-my-gradient"
                  >
                    Cobain Gratis
                  </Button>
                </div>
              </ul>
            </>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default MobileNav;
