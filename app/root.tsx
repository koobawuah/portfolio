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
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./app/components/ui/navigation-menu";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./app/components/ui/tooltip";

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
      <body className="w-full mx-auto bg-zinc-950 text-zinc-100 dark:bg-black dark:text-slate-50">
        {/* Heading nav bar */}
        <div className="max-w-5xl mx-auto">
          <div className="w-full h-16 px-8 py-12 flex flex-row justify-between items-center">
            <NavLink to="/" className="relative">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      // src="https://drive.google.com/uc?export=view&id=1Ox2YHpHKRWcAxgQn3RiE9BUygLsChBl1"
                      src="/profile_picture.jpg"
                      className="w-10 h-10 rounded-full overflow-hidden object-cover"
                    />
                    <div className="h-4 w-4 absolute bottom-0 -right-1 bg-emerald-400 rounded-full border-4 border-zinc-950"></div>
                  </TooltipTrigger>
                  <TooltipContent
                    className="bg-zinc-300 py-1 px-2 rounded-md"
                    side="right"
                    sideOffset={-10}
                    align="start"
                    alignOffset={25}
                  >
                    <div className="flex flex-row space-x-2 items-center">
                      <p className=" text-zinc-800">Accepting new clients</p>
                      <span className="h-3 w-3 mt-1 bg-emerald-400 rounded-full animate-pulse"></span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </NavLink>
            {/* <nav className="space-x-8"> */}
            <NavigationMenu className="font-medium text-sm">
              <NavigationMenuList className="flex flex-row space-x-2 md:space-x-4">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-semibold hover:text-zinc-50 hover:bg-transparent data-[state=open]:bg-transparent">
                    <NavLink to="/bio">About</NavLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="text-zinc-50">
                    <ul className="w-48 pl-4 py-0.5 flex flex-col space-y-1">
                      <NavLink to="/bio">Bio</NavLink>
                      <NavLink to="https://read.cv/koobawuah">CV</NavLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent font-semibold hover:text-zinc-50 hover:bg-transparent data-[state=open]:bg-transparent">
                    <NavLink to="/projects">Creative Space</NavLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="text-zinc-50">
                    <ul className="w-72 ml-20 pl-7 py-0.5 flex flex-col place-self-center space-y-1">
                      <NavLink to="/projects">My Portfolio</NavLink>
                      <NavLink to="/">Sandbox</NavLink>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/reach-me">Reach me</NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* <NavLink to="/">Projects</NavLink>
          <NavLink to="/">Bio</NavLink>
          <NavLink to="/">Contact</NavLink> */}
            {/* </nav> */}
          </div>
        </div>

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
