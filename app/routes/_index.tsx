import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { CtaAction } from "~/components/CtaAction";
import Footer from "~/components/footer";
import Header from "~/components/header";
import HeroHeading from "~/components/hero-heading";
// import MultiPartProfile from "~/components/multipart-profile";
import Profile from "~/components/profile";
import ProjectListItem from "~/components/project-list-item";
import RevealAnimation from "~/components/reveal-animation";
import SubHeading from "~/components/sub-heading";
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
    <div className="h-full relative">
      {/* <h1>bawuahboakye</h1> */}
      <CtaAction
        title="FREE 15 MINS CALL"
        ctaLink="https://cal.com/bawuahboakye/free-15-mins"
      />
      <Header />
      <section className="w-full max-h-min px-5 py-10">
        <RevealAnimation>
          <SubHeading title="What I am doing now:" />
          <TypewriterEffect
            className="max-w-5xl text-3xl md:text-6xl font-black text-pretty text-left self-start"
            cursorClassName="h-6 bg-zinc-950 dark:bg-zinc-100"
            words={words}
          />
        </RevealAnimation>

        <HeroHeading title="In the mean time, learn more about me..." />

        <Profile />

        {/* <MultiPartProfile /> */}
      </section>
      <section className="w-full max-h-80 my-10">
        <ul className="h-full flex space-x-6 my-10">
          {/* {projects &&
            projects.map((p, idx) => (
              <ProjectListItem
                key={idx}
                title={p.title}
                projectLink={p.projectLink}
                themeColor={p.themeColor}
                previewImage={p.previewImage}
              />
            ))} */}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

const projects = [
  {
    title: "E-commerce Web Development",
    subtitle: "",
    projectLink: "https://behance.net/bawuahboakye/ttetl",
    themeColor: "bg-[#f3ca4d]",
    previewImage: "/ttetl-brochure-front.jpg",
    previewImageStyle: "",
  },
  {
    title: "E-commerce Web Development",
    titleStyle: "text-zinc-200",
    subtitle: "",
    projectLink: "https://behance.net/bawuahboakye/ttetl",
    themeColor: "bg-[#14171f]",
    previewImage: "/ttetl-brochure-front.jpg",
    previewImageStyle: "",
  },
  {
    title: "E-commerce Web Development",
    subtitle: "",
    projectLink: "https://behance.net/bawuahboakye/ttetl",
    themeColor: "bg-[#ffff99]",
    previewImage: "/ttetl-brochure-front.jpg",
    previewImageStyle: "",
  },
  {
    title: "E-commerce Web Development",
    subtitle: "",
    projectLink: "https://behance.net/bawuahboakye/ttetl",
    themeColor: "bg-[#d0d4dc]",
    previewImage: "/ttetl-brochure-front.jpg",
    previewImageStyle: "",
  },
  {
    title: "E-commerce Web Development",
    subtitle: "",
    projectLink: "https://behance.net/bawuahboakye/ttetl",
    themeColor: "bg-[#ff00ff]",
    previewImage: "/ttetl-brochure-front.jpg",
    previewImageStyle: "",
  },
];
