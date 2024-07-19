import { Link } from "@remix-run/react";
import { FaInstagram } from "react-icons/fa6";

interface SocialIcon {
  media:
    | "instagram"
    | "facebook"
    | "linkedin"
    | "behance"
    | "xtwitter"
    | "github"
    | "dribble";
}

export default function SocialLink({
  link,
  label,
  site,
  icon,
}: {
  link: string;
  label?: string;
  icon: boolean;
  site: SocialIcon;
}) {
  return (
    <>
      <Link
        to={
          (link && link.length > 0 && link.includes("https://")) ||
          link.includes("www.")
            ? link
            : `https://${link}`
        }
        className="flex items-center"
      >
        {/* {
            icon 
            ?  ({
                switch(site) {
                    case "instagram":
                        (
              <FaInstagram className="h-10 w-10 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
                        )
                    break;
                }
           })
            : null
        } */}
        <p className={label && label.length > 0 ? `inline-block` : `hidden`}>
          {label}
        </p>
      </Link>
    </>
  );
}
