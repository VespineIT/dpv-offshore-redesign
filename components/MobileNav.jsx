"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS, SITE } from "@/lib/siteData";
import { useTheme } from "@/app/providers";
import ThemeToggle from "./ThemeToggle";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const logoSrc =
    theme === "dark"
      ? "/assets/logo-white.png"
      : "/assets/logo-full.png";

  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-light-background/80 px-4 shadow-md backdrop-blur-sm dark:bg-dark-background/80 md:hidden">
      {/* Logo */}
      <Link href="/">
        <Image
          src={logoSrc}
          alt="DPV Offshore Logo"
          width={150}
          height={40}
          className="object-contain"
        />
      </Link>

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-2xl text-primary dark:text-white"
        aria-label="Open navigation menu"
      >
        <FaBars />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={toggleMenu}
          >
            {/* Menu */}
            <motion.nav
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-primary p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-20 items-center justify-between">
                <Image
                  src="/assets/logo-white.png"
                  alt="DPV Offshore Logo"
                  width={150}
                  height={40}
                  className="object-contain"
                />
                <button
                  onClick={toggleMenu}
                  className="text-2xl text-white"
                  aria-label="Close navigation menu"
                >
                  <FaTimes />
                </button>
              </div>

              <ul className="mt-8 space-y-4">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    (link.href === "/" && pathname === "/") ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className={clsx(
                          "block rounded-lg p-3 text-xl font-medium transition-colors duration-200",
                          isActive
                            ? "bg-accent text-white"
                            : "text-gray-300 hover:bg-primary-light hover:text-white",
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="absolute bottom-6 left-6 right-6 border-t border-gray-700 pt-6">
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}