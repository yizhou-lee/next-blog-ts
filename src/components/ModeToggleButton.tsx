"use client";

import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ModeToggleButton() {
  const [theme, setTheme] = useState<string>();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="text-white/90 hover:text-white" onClick={toggleDarkMode}>
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}
