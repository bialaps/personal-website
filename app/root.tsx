import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesHref from "./styles/tailwind.css?url";
import appStylesHref from "./styles/main.css?url";

import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";

import { ThemeProvider } from "./components/ThemeProvider";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
  { rel: "stylesheet", href: tailwindStylesHref },
];

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
          <div className="w-screen dark:bg-gray-950 dark:text-gray-200 flex flex-col justify-between h-screen">
            <Navigation />
            <div className="container py-4 px-3 md:w-[55vw] mx-auto flex-grow dark:bg-gray-950 dark:text-gray-200">
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
