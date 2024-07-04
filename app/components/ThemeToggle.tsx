import { useTheme } from "./ThemeProvider";

import { SunMoon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("light");
        break;
      default:
        setTheme("light");
        break;
    }
  };

  return (
    <SunMoon
      size="24"
      className="hover:text-emerald-500 transition-all duration-200 cursor-pointer"
      onClick={toggleTheme}
    />
  );
}
