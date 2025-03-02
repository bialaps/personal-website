import { createContext, useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: "light" | "dark" | "auto";
  setTheme: (theme: "light" | "dark" | "auto") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: Props) => {
  const getInitialTheme = (): "light" | "dark" | "auto" => {
    if (typeof window === "undefined") return "auto";

    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "auto"
      | null;
    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState<"light" | "dark" | "auto">(
    getInitialTheme
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const isDarkSystem = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const appliedTheme =
      theme === "auto" ? (isDarkSystem ? "dark" : "light") : theme;

    root.classList.remove("light", "dark");
    root.classList.add(appliedTheme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
