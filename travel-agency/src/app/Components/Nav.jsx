"use client";
import { MenuIcon, XIcon, PlaneTakeoffIcon } from "lucide-react";
import { useEffect, useState } from "react";
import navLinks from "../data/navlink";

function Navbar() {
  const [isOpened, setIsOpened] = useState(false);

  const links = ["Home", "About us", "Ticket", "Package", "Contact Us"];

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpened]);

  return (
    <>
      <nav className="sticky top-0 z-40 border-b border-teal-100/70 bg-white/85 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <PlaneTakeoffIcon className="h-6 w-6 text-amber-500" />
            <span className="text-shadow-soft font-[var(--font-heading)] text-2xl font-semibold tracking-tight text-teal-900">
              Wayfare
            </span>
          </div>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link,index) => (
              <a
                key={index}
                href={link.href}
                className="group relative text-sm font-semibold uppercase tracking-wide text-slate-700 transition-colors hover:text-teal-800"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <button className="hidden rounded-full bg-teal-800 px-6 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-teal-900 md:block">
            Login
          </button>

          <button
            className="text-teal-800 md:hidden"
            onClick={() => setIsOpened((prev) => !prev)}
            aria-label="Open menu"
            aria-expanded={isOpened}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-slate-950/50 transition-opacity duration-300 md:hidden ${
          isOpened ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpened(false)}
      />

      <div
        className={`fixed right-0 top-0 z-60 h-screen w-72 bg-white px-6 py-6 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpened ? "translate-x-0" : "pointer-events-none translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PlaneTakeoffIcon className="h-5 w-5 text-amber-500" />
            <span className="text-shadow-soft font-[var(--font-heading)] text-xl font-semibold tracking-tight text-teal-900">
              Wayfare
            </span>
          </div>
          <button
            onClick={() => setIsOpened(false)}
            aria-label="Close menu"
            className="text-stone-500 hover:text-teal-800"
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link}
              href=""
              className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide text-slate-700 transition-colors hover:bg-teal-50 hover:text-teal-800"
            >
              {link}
            </a>
          ))}

          <a
            href=""
            className="mt-4 rounded-full bg-teal-800 px-3 py-3 text-center text-sm font-medium tracking-wide text-white shadow-sm transition-colors hover:bg-teal-900"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;