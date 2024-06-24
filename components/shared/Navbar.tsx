"use client"
import { navLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { handleClick } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`navbar ${isScrolled ? 'backdrop-blur-2xl' : 'bg-transparent' }`}>
      <div className="flex gap-1 items-center">
        <Image src={"/images/logo.png"} alt="logo" width={30} height={30} />
        <h2 className="font-semibold text-xl">GoodPena</h2>
      </div>

      <nav className="flex items-center">
        <ul className="flex gap-8">
          {navLinks.map((link) => {
            return (
              <li key={link.route} className="nav-link group">
                <Link href={link.route} onClick={(e) => handleClick(e, link.route)}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="relative p-0.5 bg-my-gradient rounded-lg z-[50]">
        <Button
          variant={"outline"}
          className="bg-dark-500 hover:bg-my-gradient"
        >
          Cobain Gratis
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
