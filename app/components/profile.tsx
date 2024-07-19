import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0.15 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="max-w-max space-y-5 mx-auto flex flex-col justify-center items-start"
    >
      <div className="mx-auto py-5">
        <img
          className="w-[439px] object-cover rounded-2xl"
          src="/profile_picture.JPG"
        />
      </div>
      <div className="max-w-xl ">
        <p className="font-extralight text-lg dark:text-zinc-200">
          A self-taught designer and software developer from Ghana, with over 8
          years in the design and software space.{" "}
          <em className="not-italic text-zinc-500 dark:text-zinc-400">
            With peak interests in anything technology or design, delivering
            quality products, professional work and outstanding services that
            satisfy clients.
          </em>{" "}
          <Link to="#" className="underline text-zinc-500 hover:text-zinc-200">
            Read more
          </Link>
        </p>
      </div>
      <div className="">
        <h2 className="w-auto font-semibold text-sm py-2 text-zinc-500">
          Socials:
        </h2>
        <ul className="w-full flex flex-row flex-wrap overflow-hidden space-x-4 justify-evenly items-center">
          <li className="list-none max-w-min">
            {/* <SocialLink icon link label/> */}
            <Link
              to="http://instagram.com/koobawuah"
              className="flex items-center"
            >
              <FaInstagram className="h-10 w-10 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">Instagram</p>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="http://twitter.com/koobawuah"
              className="flex items-center"
            >
              <FaXTwitter className="h-10 w-10 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">X(Twitter)</p>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="http://github.com/koobawuah"
              className="flex items-center"
            >
              <FaGithub className="h-10 w-10 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">Github</p>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="http://linkedin.com/in/bawuah-boakye-9b4362144"
              className="flex items-center"
            >
              <FaLinkedin className="h-10 w-10 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">LinkedIn</p>
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
