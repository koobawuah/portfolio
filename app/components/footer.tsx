import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="h-80 px-4 flex flex-col justify-between">
      <div className="w-full text-5xl leading-loose flex justify-center md:text-9xl ">
        <motion.h2
          initial={{ opacity: 0.01 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.28,
            delay: 0.4,
          }}
          className="h-40 font-normal text-center bg-clip-text text-transparent bg-gradient-to-b from-zinc-950 to-zinc-500 dark:text-transparent dark:bg-gradient-to-b dark:from-zinc-50 dark:to-zinc-400 bg-opacity-50"
        >
          Bawuah Boakye
        </motion.h2>
      </div>

      <div className="w-full py-3 flex flex-col-reverse md:flex-row md:justify-between md:items-center">
        <p className="md:py-10 text-base font-extralight text-zinc-500 dark:text-zinc-500">
          Copyright &copy; {new Date().getFullYear()}. Made by{" "}
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
