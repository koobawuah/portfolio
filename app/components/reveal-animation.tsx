import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const RevealAnimation = ({ children }: PropsWithChildren) => (
  <motion.div
    initial={{ opacity: 0.05 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="max-w-5xl h-56 mt-20 mb-48 mx-auto flex flex-col items-center"
  >
    {children}
  </motion.div>
);

export default RevealAnimation;
