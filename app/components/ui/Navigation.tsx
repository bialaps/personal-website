import { NavLink } from "@remix-run/react";
import ThemeToggle from "../ThemeToggle";

export default function Navigation() {
  return (
    <nav className="container md:w-[70vw] py-3 px-3 md:p-4 flex justify-between m-auto md:bg-transparent">
      <div className="navbar-brand text-xl font-bold flex gap-2 items-center justify-center">
        <NavLink
          to="/"
          className="hover:text-emerald-500 transition-all duration-200 "
        >
          mbialas.de
        </NavLink>
        <ThemeToggle />
        <span>|</span>
      </div>
      <ul className="navbar-nav flex gap-3 md:gap-4 text-lg font-medium items-center justify-center">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-bold border-b-2 border-emerald-500"
                : "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-emerald-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-emerald-500"
            }
          >
            about
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-bold border-b-2 border-emerald-500"
                : "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-emerald-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-emerald-500"
            }
          >
            projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-emerald-500 font-bold border-b-2 border-emerald-500"
                : "relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-emerald-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-emerald-500"
            }
          >
            contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
