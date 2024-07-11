import { Link } from "@remix-run/react";
export default function Footer() {
  return (
    <footer className="text-gray-600 w-full py-6 text-center text-xs flex flex-row justify-center gap-2">
      <span>&copy; {new Date().getFullYear()} Marcel Bialas</span>
      <span>|</span>
      <Link
        to="/imprint"
        className="hover:text-emerald-500 transition-all duration-200"
      >
        Imprint & Privacy Policy
      </Link>
    </footer>
  );
}
