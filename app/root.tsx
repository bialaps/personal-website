import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import "./styles/tailwind.css";
import "./styles/main.css";
import Navigation from "./components/ui/Navigation";
import Footer from "./components/ui/Footer";

import { json } from "@remix-run/node";

import { ThemeProvider } from "./components/ThemeProvider";

export async function loader() {
  return json({
    ENV: {
      SERVICE_ID: process.env.SERVICE_ID,
    },
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>();

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
          <script
            dangerouslySetInnerHTML={{
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`,
            }}
          />
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
