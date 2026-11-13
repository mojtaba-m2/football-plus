"use client";

import { X } from "lucide-react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";

interface ISidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

function Sidebar({ isSidebarOpen, setIsSidebarOpen }: ISidebarProps) {
  const router = useRouter();
  const pathName = usePathname();

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setIsSidebarOpen(false);
    router.replace("/login");
  };

  const sidebarLinks = [
    { id: 1, title: "خانه", href: "/" },
    { id: 2, title: "اخبار فوتبالی", href: "/news" },
    { id: 3, title: "مسابقات", href: "/matches" },
    { id: 4, title: "پیش بینی مسابقات", href: "/predictions" },
  ];

  return (
    <>
      <aside
        aria-hidden={!isSidebarOpen}
        className={`fixed top-16 bottom-0 right-0 z-40 w-[85vw] max-w-100 overflow-y-auto border-l border-white/10 bg-zinc-950 text-white shadow-2xl transition-transform duration-300 ease-in-out sm:w-96 ${
          isSidebarOpen
            ? "translate-x-0"
            : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="p-5 pt-8 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold sm:text-2xl">فوتبال پلاس</h2>

            <button
              type="button"
              onClick={handleCloseSidebar}
              aria-label="بستن منو"
              className="rounded-full p-2 transition-colors hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold text-gray-400">
              منوی اصلی
            </h3>

            <nav className="flex flex-col gap-1">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={handleCloseSidebar}
                  className={`rounded-lg px-3 py-3 transition-colors hover:bg-white/10 hover:text-green-300 ${
                    pathName === link.href ? "bg-white/10 text-green-300" : ""
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="mb-3 text-sm font-semibold text-gray-400">
              حساب کاربری
            </h3>

            <Link
              href="/login"
              onClick={handleCloseSidebar}
              className={`block rounded-lg px-3 py-3 transition-colors hover:bg-white/10 hover:text-green-300 ${
                pathName === "/login" ? "bg-white/10 text-green-300" : ""
              }`}
            >
              ورود / ثبت نام
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-2 w-full rounded-lg bg-red-700 px-3 py-3 text-right transition-colors hover:bg-red-800"
            >
              خروج
            </button>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <h3 className="mb-3 text-sm font-semibold text-gray-400">
              روابط عمومی
            </h3>

            <div className="flex flex-col gap-1">
              <Link
                href="#"
                onClick={handleCloseSidebar}
                className="rounded-lg px-3 py-3 transition-colors hover:bg-white/10"
              >
                درباره ما
              </Link>
              <Link
                href="#"
                onClick={handleCloseSidebar}
                className="rounded-lg px-3 py-3 transition-colors hover:bg-white/10"
              >
                ارتباط با ما
              </Link>
            </div>
          </div>
        </div>
      </aside>

      <button
        type="button"
        aria-label="بستن منو"
        aria-hidden={!isSidebarOpen}
        tabIndex={isSidebarOpen ? 0 : -1}
        onClick={handleCloseSidebar}
        className={`fixed inset-0 z-30 h-dvh w-full bg-black/60 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </>
  );
}

export default Sidebar;
