import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import Footer from "~/components/footer";
import Header from "~/components/header";
// import MultiPartProfile from "~/components/multipart-profile";
import Profile from "~/components/profile";
// import ProjectPreview from "~/components/project-preview";
import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "~/components/ui/typewriter-effect";

export const meta: MetaFunction = () => {
  return [
    { title: "bawuahboakye | Freelancer. Designer. Developer." },
    {
      name: "description",
      content:
        "Welcome to the personal portfolio of bawuahboakye. A freelancer, designer and developer!",
    },
  ];
};

export default function Index() {
  const paragraph =
    "Working on 1 web app, 2 websites, 1 brand identity design, building 2 startups & setting up farmlands.";
  // const words = paragraph.map()
  const words = [
    { text: "Working " },
    { text: "on " },
    { text: "1 " },
    { text: "web " },
    { text: "app, " },
    { text: "2 " },
    { text: "websites, " },
    { text: "1 " },
    { text: "brand " },
    { text: "identity " },
    { text: "design, " },
    { text: "building " },
    { text: "2 " },
    { text: "startups " },
    { text: "& " },
    { text: "setting " },
    { text: "up " },
    { text: "farmlands..." },
  ];
  return (
    <>
      {/* <h1>bawuahboakye</h1> */}
      <Header />
      <section className="w-full max-h-min px-5 py-10">
        <motion.div
          initial={{ opacity: 0.15 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl h-56 mt-20 mb-48 mx-auto flex flex-col items-center"
        >
          <h3 className="w-auto font-semibold text-md py-2 text-zinc-500 self-start">
            What I am doing now:
          </h3>
          <TypewriterEffect
            className="max-w-5xl text-3xl md:text-6xl font-black text-balance text-left self-start"
            cursorClassName="h-6 bg-zinc-950 dark:bg-zinc-100"
            words={words}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.15 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="pb-10 flex flex-row justify-center"
        >
          <h1 className="max-w-5xl text-4xl md:text-9xl font-black text-pretty">
            In the mean time, learn more about me...
          </h1>
        </motion.div>

        <Profile />
        {/* <MultiPartProfile /> */}
      </section>
      <section className="px-5">
        <Footer />
      </section>
    </>
  );
}
