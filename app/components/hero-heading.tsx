import { motion } from "framer-motion";

const HeroHeading = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <motion.div
    initial={{ opacity: 0.05 }}
    whileInView={{ opacity: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.4,
    }}
    className="pb-10 flex flex-row justify-center"
  >
    <h1 className="max-w-5xl text-4xl md:text-9xl font-bold text-pretty text-zinc-950 dark:text-zinc-200">
      {title}
    </h1>
    <h3>{subtitle}</h3>
  </motion.div>
);

export default HeroHeading;
