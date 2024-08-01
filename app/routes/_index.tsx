import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { useState } from "react";
import { CtaAction } from "~/components/CtaAction";
import Footer from "~/components/footer";
import Header from "~/components/header";
import HeroHeading from "~/components/hero-heading";
// import MultiPartProfile from "~/components/multipart-profile";
import Profile from "~/components/profile";
import ProjectListItem from "~/components/project-list-item";
import RevealAnimation from "~/components/reveal-animation";
import SubHeading from "~/components/sub-heading";
import { CardDemo } from "~/components/ui/gif-card";
import { PlaceholdersAndVanishInput } from "~/components/ui/placeholder-text-effect";
// import ProjectPreview from "~/components/project-preview";
import { TypewriterEffect } from "~/components/ui/typewriter-effect";
import https from "https";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "bawuahboakye | Freelancer. Designer. Developer." },
    {
      name: "description",
      content:
        "Welcome to the personal portfolio of bawuahboakye. A freelancer, designer and developer!",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ];
};

export async function action() {}

// `https://notifi.it/api?credentials=${process.env.NOTIFI_CRED}&title=Bawuahboakye Website Message&message=${message}&link=https://notifi.it&image=https://notifi.it/images/logo.png"`,

export default function Index() {
  const [message, setMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    // console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

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

  const placeholders = [
    "What are your rates?",
    "How to start and run an e-commerce business?",
    "Why are you a freelancer?",
    "Where do you see yourself and your business in 5 years?",
    "How to assemble your own PC?",
    "Do you teach your skills?",
    "Can you work on my ideas?",
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

      <section className="w-full max-h-max p-6 my-12">
        <div className="max-w-5xl mx-auto">
          <SubHeading title="Client Work & Personal Projects:" />
          <p className="font-extralight text-lg dark:text-zinc-200">
            You will find below, some works I am proud of and personal projects
            I show off.{" "}
            <em className="not-italic text-zinc-500 dark:text-zinc-400">
              Patience, time and consistency have made me a jack of many trades,
              but master of none... but the rest of that phrase is ...though
              often times better than master of one.
            </em>
          </p>
        </div>

        <div className="flex space-x-6 my-10 overflow-x-scroll py-6">
          {projects &&
            projects.map((p, idx) => (
              <Link className="" key={p.title + idx} to={p.projectLink}>
                <CardDemo
                  key={idx}
                  title={p.title}
                  excerpt={p.subtitle}
                  bgImg={p.previewImage}
                />
              </Link>
            ))}
          {/* 
          {projects &&
            projects.map((p, idx) => (
              <CardDemo key={} title{p.title} />
              <ProjectListItem
                key={idx}
                title={p.title}
                projectLink={p.projectLink}
                themeColor={p.themeColor}
                previewImage={p.previewImage}
              />
            ))}
        </ul> */}
        </div>
      </section>

      <section className="">
        <div className="h-[40rem] flex flex-col justify-center items-center px-6">
          <h2 className="mb-10 sm:mb-6 text-xl text-center sm:text-5xl dark:text-white text-black">
            Ask me Anything, I reply instantly!
            <span className="text-sm my-6 block text-zinc-500 dark:text-zinc-400">
              Add '@yoursocialhandle', I will reply over on Instagram or
              X/Twitter
            </span>
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

const projects = [
  {
    title: "Mobile App Development",
    subtitle: "Susubox Finance App",
    projectLink: "https://behance.net/bawuahboakye/ttetl",
    themeColor: "bg-[#f3ca4d]",
    previewImage: "/susubox-shot.png",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    titleStyle: "text-zinc-200",
    subtitle: "Buildbafla construction website",
    projectLink: "https://buildbafla.com",
    themeColor: "bg-[#14171f]",
    previewImage: "/buildbafla-site.png",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    subtitle: "Mono Design Studio",
    projectLink: "https://behance.net/bawuahboakye/",
    themeColor: "bg-[#ffff99]",
    previewImage: "/monodesignstudio.png",
    previewImageStyle: "",
  },
  {
    title: "Graphics Design",
    subtitle: "TTETL NGO",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#d0d4dc]",
    previewImage: "/ttetl-brochure-front.jpg",
    previewImageStyle: "",
  },
  {
    title: "Product Photoshoot",
    subtitle: "Fruitwist Juice",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#ff00ff]",
    previewImage: "/fruitwist-product-shoot.png",
    previewImageStyle: "",
  },
  {
    title: "Graphics Design",
    subtitle: "Versace magazine",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#f3ca4d]",
    previewImage: "/versace-magazine-showcase.jpg",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    subtitle: "Kwamekoda Personal Website",
    projectLink: "https://kwamekoda.com",
    themeColor: "bg-[#14171f]",
    previewImage: "/kwamekoda-site.png",
    previewImageStyle: "",
  },
  {
    title: "E-commerce Website",
    subtitle: "Global Collections Books",
    projectLink: "https://globalcollectionsbooks.com",
    themeColor: "bg-[#ffff99]",
    previewImage: "/globalcollectionsbooks.png",
    previewImageStyle: "",
  },
  {
    title: "POS Installation",
    subtitle: "Versace PO System",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#d0d4dc]",
    previewImage: "/versace-pos.jpg",
    previewImageStyle: "",
  },
];
