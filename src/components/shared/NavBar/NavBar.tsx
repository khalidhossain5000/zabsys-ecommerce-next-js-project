"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/products" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-[9999999999999] border-b border-border bg-background/80 backdrop-blur-sm ">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6"
        aria-label="Primary"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="bg-linear-to-r from-primary to-accent bg-clip-text text-lg lg:text-xl xl:text-2xl font-lora xl:font-bold font-semibold tracking-tight text-transparent transition-opacity hover:opacity-80"
        >
          E-Store
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 sm:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm lg:text-lg font-inter font-medium text-muted-foreground transition-colors hover:text-primary ${
                  isActive ? "bg-accent-soft px-4 py-2 rounded-full" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary sm:hidden"
        >
          {isMenuOpen ? (
            <HiX className="h-5 w-5" aria-hidden="true" />
          ) : (
            <HiMenu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 top-full z-[9999]  w-full overflow-hidden border-b border-border bg-background backdrop-blur-sm transition-all duration-300 ease-out sm:hidden ${
          isMenuOpen
            ? "max-h-96 translate-y-0 opacity-100"
            : "max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block text-center mb-2 text-sm lg:text-lg font-inter font-medium text-muted-foreground transition-colors hover:text-primary ${
                    isActive ? "bg-accent-soft px-4 py-2 rounded-full" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      
    </header>
  );
};

export default NavBar;
