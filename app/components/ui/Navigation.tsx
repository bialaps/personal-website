import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="container md:w-[70vw] p-4 flex justify-between m-auto">
      <div className="navbar-brand text-xl font-bold">
        <Link to="/">mbialas.de</Link>
      </div>
      <ul className="navbar-nav flex gap-4">
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
