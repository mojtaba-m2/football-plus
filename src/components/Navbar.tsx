"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { useEffect, useState } from "react";

const navLinks = [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "اخبار فوتبالی", href: "/news" },
  { id: 3, title: "مسابقات", href: "/matches" },
  { id: 4, title: "پیش بینی", href: "/polls" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathName = usePathname();

  return (
    <div
      className={`text-white  p-4 sticky top-0 z-40 transition-all duration-300 ${isScrolled === true ? "bg-black/70 backdrop-blur-3xl shadow-lg" : "bg-black shadow-sm"}`}
    >
      <Container>
        <header className="md:text-lg  text-sm sm:text-lg  xl:text-3xl">
          <div className="flex items-center justify-between md:hidden">
            <button className="text-2xl">#</button>
            <Link href={"/"}>FootballPlus</Link>
            <button className="text-2xl">#</button>
          </div>
          <nav className="hidden items-center justify-between md:flex">
            <div className="flex gap-6 items-center">
              {navLinks.map((nav) => (
                <Link
                  className={` ${pathName === nav.href ? "text-green-300" : ""}`}
                  key={nav.id}
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              ))}
            </div>
            <input className="bg-gray-400" type="search" />
            <button className="text-2xl">#</button>
          </nav>
        </header>
      </Container>
    </div>
  );
}

export default Navbar;
