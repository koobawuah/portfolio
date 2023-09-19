import type { V2_MetaFunction } from "@remix-run/node";
import { NavLink, Link } from "@remix-run/react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "~/app/components/ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/app/components/ui/tooltip";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div
      className="max-w-5xl mx-auto"
      // style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      {/* Heading nav bar */}
      <div className="w-full h-16 p-8 flex flex-row justify-between items-center">
        <NavLink to="/" className="relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="https://drive.google.com/uc?export=view&id=1Ox2YHpHKRWcAxgQn3RiE9BUygLsChBl1"
                  className="w-10 h-10 rounded-full overflow-hidden object-cover"
                />
                <div className="h-4 w-4 absolute bottom-0 -right-1 bg-emerald-400 rounded-full border-4 border-zinc-950"></div>
              </TooltipTrigger>
              <TooltipContent
                style={{ color: "#000000" }}
                side="right"
                sideOffset={-10}
                align="start"
                alignOffset={25}
              >
                <div className="flex flex-row space-x-2 items-center">
                  <p className="">Accepting new clients</p>
                  <span className="h-3 w-3 mt-1 bg-emerald-400 rounded-full animate-pulse"></span>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavLink>
        {/* <nav className="space-x-8"> */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavLink to="/">Projects</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/">Bio</NavLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavLink to="/">Reach me</NavLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <NavLink to="/">Projects</NavLink>
          <NavLink to="/">Bio</NavLink>
          <NavLink to="/">Contact</NavLink> */}
        {/* </nav> */}
      </div>
      {/* <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul> */}
    </div>
  );
}
