import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function ProjectPreview() {
  return (
    <div className="w-full max-h-max overflow-hidden sticky top-0 md:h-screen">
      <img src="/ttetl-brochure-front.jpg" className="bg-cover object-cover" />
      <motion.a
        href="/"
        className="text-zinc-100 text-center transform -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2"
      >
        <div className="w-32 h-32 flex justify-center items-center bg-zinc-500/40 rounded-full backdrop-blur-sm md:w-40 md:h-40">
          View Project
        </div>
      </motion.a>
    </div>
  );
}
