"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { useSidebar, useTheme } from "@/app/providers";
import { NAV_LINKS, SITE } from "@/lib/siteData";
import ThemeToggle from "./ThemeToggle";
import {
  FaHome,
  FaInfoCircle,
  FaCog,
  FaUsers,
  FaBlog,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Map icons to nav links
const navIcons = {
  Home: <FaHome />,
  About: <FaInfoCircle />,
  Services: <FaCog />,
  Customers: <FaUsers />,
  Blog: <FaBlog />,
  Contact: <FaEnvelope />,
};

export default function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <>
      <motion.nav
        initial={false}
        className="fixed left-0 top-0 z-50 w-full backdrop-blur-xl bg-primary/95 border-b border-white/10 shadow-2xl"
      >
        {/* Main Navbar Row */}
        <div className="flex h-20 items-center justify-between px-6 lg:px-12 max-w-[1600px] mx-auto">
          {/* Logo with glow effect */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 blur-xl group-hover:bg-accent/30 transition-all duration-300 rounded-full"></div>
              <Image
                src="/assets/logo-white.png"
                alt="DPV Offshore Logo"
                width={180}
                height={45}
                className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-2">
              {NAV_LINKS.map((link, index) => {
                const isActive =
                  (link.href === "/" && pathname === "/") ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        "relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 group",
                        "hover:scale-105",
                        isActive
                          ? "bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg shadow-accent/30"
                          : "text-gray-300 hover:text-white hover:bg-white/10",
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 rounded-xl"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10 text-lg group-hover:rotate-12 transition-transform duration-300">
                        {navIcons[link.name]}
                      </span>
                      <span className="relative z-10 whitespace-nowrap">
                        {link.name}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-6">
            {/* Contact Info - Desktop */}
            <div className="hidden xl:flex items-center gap-6">
              <a
                href={`tel:${SITE.phoneSupport.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-accent transition-all duration-300 group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 group-hover:bg-accent/20 transition-all duration-300">
                  <FaPhone className="text-accent" />
                </span>
                <span className="hidden 2xl:inline">{SITE.phoneSupport}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-accent transition-all duration-300 group"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 group-hover:bg-accent/20 transition-all duration-300">
                  <FaEnvelope className="text-accent" />
                </span>
                <span className="hidden 2xl:inline">{SITE.email}</span>
              </a>
            </div>

            {/* Theme Toggle */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleSidebar}
              className="flex lg:hidden h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300"
              aria-label={isCollapsed ? "Open menu" : "Close menu"}
            >
              <motion.div
                animate={{ rotate: isCollapsed ? 0 : 90 }}
                transition={{ duration: 0.3 }}
              >
                {isCollapsed ? <FaBars size={18} /> : <FaTimes size={18} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {!isCollapsed && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={toggleSidebar}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-80 bg-primary/98 backdrop-blur-xl border-l border-white/10 shadow-2xl lg:hidden overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Image
                  src="/assets/logo-white.png"
                  alt="DPV Offshore Logo"
                  width={140}
                  height={35}
                  className="object-contain"
                />
                <button
                  onClick={toggleSidebar}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white transition-all duration-300"
                  aria-label="Close menu"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {NAV_LINKS.map((link, index) => {
                    const isActive =
                      (link.href === "/" && pathname === "/") ||
                      (link.href !== "/" && pathname.startsWith(link.href));
                    return (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={toggleSidebar}
                          className={clsx(
                            "flex items-center gap-4 rounded-xl p-4 text-base font-semibold transition-all duration-300",
                            "hover:translate-x-1",
                            isActive
                              ? "bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg shadow-accent/20"
                              : "text-gray-300 hover:bg-white/5 hover:text-white",
                          )}
                        >
                          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                            {navIcons[link.name]}
                          </span>
                          <span>{link.name}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* Mobile Contact & Theme */}
                <div className="mt-8 space-y-4 pt-6 border-t border-white/10">
                  <a
                    href={`tel:${SITE.phoneSupport.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-accent transition-all duration-300"
                  >
                    <FaPhone className="text-accent" />
                    <span className="text-sm font-medium">{SITE.phoneSupport}</span>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-accent transition-all duration-300"
                  >
                    <FaEnvelope className="text-accent" />
                    <span className="text-sm font-medium truncate">{SITE.email}</span>
                  </a>
                  <div className="flex justify-center pt-4">
                    <ThemeToggle />
                  </div>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}