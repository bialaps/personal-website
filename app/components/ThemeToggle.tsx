import React from "react";
import { useTheme } from "./ThemeProvider";
import { SunMoon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <SunMoon
      size="24"
      className="hover:text-emerald-500 transition-all duration-200 cursor-pointer"
      onClick={toggleTheme}
    />
  );
}
