import stylesheet from "~/tailwind.css";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import React from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>bawuahboakye | Freelancer</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="w-full mx-auto">
        <div className="">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
