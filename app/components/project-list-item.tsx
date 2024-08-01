import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { cn } from "~/lib/utils";
import { CardDemo } from "./ui/gif-card";

const ProjectListItem = ({
  projectLink,
  themeColor,
  previewImage,
  previewImageStyle,
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
}: {
  projectLink?: string;
  themeColor?: string;
  previewImage?: string;
  previewImageStyle?: string;
  title: string;
  titleStyle?: string;
  subtitle?: string;
  subtitleStyle?: string;
}) => (
  <>
    <motion.li
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.035,
        transition: {
          duration: 0.35,
          ease: "linear",
        },
      }}
      style={{ originY: 1 }}
      className={cn(
        "relative min-w-56 h-80 rounded-xl overflow-hidden ",
        themeColor
      )}
    >
      {/* <Link
        className="inset-0 p-6 h-full flex flex-col justify-between"
        to={projectLink ?? "#"}
      >
        <div className="flex flex-col text-pretty">
          <h2 className={cn("text-xl font-medium text-pretty", titleStyle)}>
            {title}
          </h2>
          <h3 className={cn("text-sm font-light text-wrap", subtitleStyle)}>
            {subtitle}
          </h3>
        </div>
        <img src={previewImage} className={cn("", previewImageStyle)} />
      </Link> */}
      <CardDemo title={title} />
    </motion.li>
  </>
);

export default ProjectListItem;
