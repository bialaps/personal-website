import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./styles/tailwind.css";
import "./styles/main.css";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";

import { ThemeProvider } from "./components/ThemeProvider";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <html lang="de">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body className="dark:bg-gray-950">
          <div className="w-screen h-screen dark:bg-gray-950 dark:text-gray-200">
            <Navigation />
            <div className="container py-4 px-3 md:w-[55vw] mx-auto dark:bg-gray-950 dark:text-gray-200">
              {children}
            </div>
            <ScrollRestoration />
            <Scripts />
            <Footer />
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}
