"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface INavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const navLinks = [
  { id: 1, title: "خانه", href: "/" },
  { id: 2, title: "اخبار فوتبالی", href: "/news" },
  { id: 3, title: "مسابقات", href: "/matches" },
  { id: 4, title: "پیش بینی", href: "/predictions" },
  { id: 5, title: "ورود", href: "/login" },
];

function Navbar({ setIsSidebarOpen, isSidebarOpen }: INavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 p-3 sm:p-4 text-white transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-3xl shadow-lg"
          : "bg-black shadow-sm"
      }`}
    >
      <Container>
        <header className="flex items-center justify-between">
          <div className="flex w-full items-center justify-between md:hidden">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label={isSidebarOpen ? "بستن منو" : "باز کردن منو"}
              aria-expanded={isSidebarOpen}
              className="rounded-lg p-2 transition-colors hover:bg-white/10"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <Link
              href="/"
              className="text-lg text-blue-500 font-bold sm:text-xl"
            >
              FootballPlus
            </Link>
          </div>

          <nav className="hidden w-full items-center gap-6 md:flex">
            <div className="flex items-center gap-6">
              {/* <button
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label={isSidebarOpen ? "بستن منو" : "باز کردن منو"}
                aria-expanded={isSidebarOpen}
                className="rounded-lg p-2 transition-colors hover:bg-white/10"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button> */}
              <button
                type="button"
                onClick={() => {
                  alert("hhhiii");
                }}
                aria-label={isSidebarOpen ? "بستن منو" : "باز کردن منو"}
                aria-expanded={isSidebarOpen}
                className="rounded-lg p-2 text-amber-600 transition-colors hover:bg-white/10"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* <Link href="/" className="text-xl font-bold xl:text-2xl">
                FootballPlus
              </Link> */}
            </div>

            <div className="flex items-center text-2xl gap-5 lg:gap-7">
              {navLinks.map((nav) => (
                <Link
                  className={`transition-colors hover:text-green-300 ${
                    pathName === nav.href ? "text-green-300" : ""
                  }`}
                  key={nav.id}
                  href={nav.href}
                >
                  {nav.title}
                </Link>
              ))}
            </div>
          </nav>
        </header>
      </Container>
    </div>
  );
}

export default Navbar;
