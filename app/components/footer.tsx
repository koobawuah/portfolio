import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <div className="h-80 px-4 flex flex-col justify-between">
      <div className="w-full text-5xl leading-loose flex justify-center md:text-9xl ">
        <h2 className="">Bawuah Boakye</h2>
      </div>

      <div className="w-full py-3 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
        <p className="md:py-10 text-base font-extralight text-zinc-500 dark:text-zinc-500">
          Copyright {new Date().getFullYear()}. Made by{" "}
          <a
            href="/"
            className="inline not-italic font-extralight text-zinc-950 dark:text-zinc-100"
          >
            bawuahboakye
          </a>
        </p>
        <nav className="w-40 md:py-10 py-3">
          <ul className="w-full flex justify-between items-center text-base font-extralight ">
            <li className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100 transition">
              <Link to="/">Tech Stack</Link>
            </li>
            <li className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-100 transition">
              <Link to="/">Archive</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
