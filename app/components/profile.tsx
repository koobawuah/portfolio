import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import {
  FaBehance,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";
import { ExpandableCard } from "./ui/expandable-card";

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
          className="w-[439px] object-cover grayscale contrast-125 rounded-2xl"
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
          <ExpandableCard
            triggerExpandableCardText="Read more"
            title="Kofi Bawuah Boakye"
            description="Freelance I.T Contractor"
            src="/profile_picture.JPG"
            ctaLink="https://cal.com/bawuahboakye"
            ctaText="Let's chat now"
            content={() => (
              <>
                <p className="text-lg mt-3 font-extralight text-zinc-950 dark:text-zinc-200 ">
                  Growing up in Accra, Ghana, life as I experienced, was
                  enjoyable and adventurous, filled with traveling and fun times
                  with my family. I always had a knack for drawing cool stuff.
                  From a young age, I displayed a talent for artistry and
                  mechanics, often found sketching portraits and messing around
                  with gadgets - my imagination knew no bounds!
                  <br />
                  <br />
                  But things got real when life took a transformative turn as I
                  navigated through growing up, encountering profound
                  experiences that shaped my perspective. I discovered coding at
                  11 and ever since then, I have been on the path of computers
                  and the internet. I built my first website at 13. Even though
                  I dreamed of being a mechanical engineer, fate had other
                  plans.
                  <br />
                  <br />
                  Despite initially aspiring to become a mechanical engineer,
                  High school wasn't exactly a walk in the park, my journey led
                  me down a different path. While attending Achimota Senior High
                  School, I studied general arts which was quite the opposite of
                  computers but I co-founded the first-ever ICT club, which was
                  pretty cool. After struggling with my final exams, I finally
                  made it to college to study IT at which point I had already
                  been working in IT for 3 years.
                  <br />
                  <br />
                  Between classes, I gained experience as a freelancer, doing
                  graphic design and building websites. I even interned at an
                  accounting software company, further honing my skills.
                  Throughout my journey, I embraced opportunities for growth and
                  seized the chance to travel once more. As I transitioned into
                  the professional world, I worked in the University of Ghana's
                  computer science department during my National Service.
                  <br />
                  <br />
                  Now, with 8 years of experience under my belt, I continue to
                  innovate and inspire, leveraging my diverse background to make
                  meaningful contributions to the digital landscape in Ghana and
                  beyond. From coding to designing, I'm living my passion and
                  loving every minute of it!
                </p>
              </>
            )}
          />
        </p>
      </div>
      <div className="">
        <h2 className="w-auto font-semibold text-sm py-2.5 text-zinc-500">
          Socials:
        </h2>
        <ul className="w-full flex flex-row flex-wrap overflow-hidden space-x-4 justify-evenly items-center">
          <li className="list-none max-w-min">
            {/* <SocialLink icon link label/> */}
            <Link
              to="http://instagram.com/koobawuah"
              className="flex items-center"
            >
              <FaInstagram className="size-8 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">Instagram</p>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="http://twitter.com/koobawuah"
              className="flex items-center"
            >
              <FaXTwitter className="size-8 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">X(Twitter)</p>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="http://github.com/koobawuah"
              className="flex items-center"
            >
              <FaGithub className="size-8 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">Github</p>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="http://linkedin.com/in/bawuah-boakye-9b4362144"
              className="flex items-center"
            >
              <FaLinkedin className="size-8 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">LinkedIn</p>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="http://behance.net/bawuahboakye"
              className="flex items-center"
            >
              <FaBehance className="size-8 mr-2 text-zinc-500 hover:text-zinc-950 dark:text-zinc-500 dark:hover:text-zinc-200 transition" />{" "}
              <p className="hidden">Behance</p>
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
