"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "@/app/providers";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex w-full items-center justify-center rounded-lg border border-gray-600 bg-primary-light p-2 text-gray-200 hover:bg-accent hover:text-white"
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
    >
      {theme === "dark" ? (
        <>
          <FaSun className="mr-2" /> Light Mode
        </>
      ) : (
        <>
          <FaMoon className="mr-2" /> Dark Mode
        </>
      )}
    </button>
  );
}