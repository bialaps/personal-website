import { Link } from "@remix-run/react";
import ThemeToggle from "../ThemeToggle";

export default function Navigation() {
  return (
    <nav className="container md:w-[70vw] p-3 md:p-4 flex justify-between m-auto">
      <div className="navbar-brand text-xl font-bold flex gap-2 items-center justify-center">
        <Link
          to="/"
          className="hover:text-emerald-500 transition-all duration-200 "
        >
          mbialas.de
        </Link>
        <span>|</span>
        <ThemeToggle />
      </div>
      <ul className="navbar-nav flex gap-3 text-base font-medium items-center justify-center">
        <li>
          <Link
            to="/about"
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-emerald-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-emerald-500"
          >
            about
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-emerald-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-emerald-500"
          >
            projects
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-emerald-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left hover:text-emerald-500"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
