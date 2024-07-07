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
        <body className="h-screen dark:bg-neutral-950 dark:text-gray-200">
          <div className="w-screen h-full  flex flex-col justify-between">
            <Navigation />
            <div className="container py-4 px-3 md:w-[55vw] mx-auto flex-grow">
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
