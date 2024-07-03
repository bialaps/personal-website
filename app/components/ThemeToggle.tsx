import { useState } from "react";

import { SunMoon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <SunMoon
      size="24"
      className="hover:text-emerald-500 transition-all duration-200 cursor-pointer"
      onClick={() => darkModeHandler()}
    />
  );
}
