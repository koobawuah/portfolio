import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { CtaAction } from "~/components/CtaAction";
import Footer from "~/components/footer";
import Header from "~/components/header";
import HeroHeading from "~/components/hero-heading";
import Profile from "~/components/profile";
import RevealAnimation from "~/components/reveal-animation";
import SubHeading from "~/components/sub-heading";
import { PlaceholdersAndVanishInput } from "~/components/ui/placeholder-text-effect";
import { TypewriterEffect } from "~/components/ui/typewriter-effect";
import { useFetcher } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { UniqueParagraph } from "~/components/unique-paragraph";
import ProjectPreview from "~/components/project-preview";
import { RiServiceLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { TbMailShare } from "react-icons/tb";
import { HiArrowUpRight, HiOutlineArrowSmallUp } from "react-icons/hi2";

export const meta: MetaFunction = () => {
  return [
    { title: "Bawuahboakye | Freelancer. Designer. Developer." },
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

export default function Index() {
  const [message, setMessage] = useState("");
  const send = useFetcher();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    // console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    e.currentTarget.elements[0]?.setAttribute("name", "message");
    const form = new FormData(e.currentTarget);

    send.submit(form, { action: "/send", method: "post" });

    // console.log("submitted");
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
      <CtaAction
        title="FREE 15 MINS CALL"
        ctaLink="https://cal.com/bawuahboakye/free-15-mins"
        buttonClassName="fixed top-6 right-6 z-[60] md:top-[70px]"
        icon
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
          <UniqueParagraph
            boldText="You will find below, some works I am proud of and personal projects
            I show off."
            regularText="Patience, time and consistency have made me a jack of many trades,
              but master of none... but the rest of that phrase is ...though
              often times better than master of one."
          />
        </div>

        <div className="-mx-6">
          <ProjectPreview projects={projects} />
        </div>
      </section>

      <section className="px-6 space-y-16">
        <div className="max-w-5xl mx-auto">
          <SubHeading title="How to get started:" />
          <UniqueParagraph boldText="I curated a few links for you to easily and quickly reach me for your ideas to become a reality!" />
        </div>

        <div className="w-full flex flex-col sm:flex-row sm:max-w-5xl sm:mx-auto sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 ">
          <CtaAction
            title="BOOK CLIENT CALL"
            ctaLink="https://cal.com/bawuahboakye/client-call"
            icon={
              <MdWorkOutline className="ml-2 size-4 fill-zinc-800 dark:fill-zinc-200" />
            }
          />
          <CtaAction
            title="LET'S TALK"
            ctaLink="https://cal.com/bawuahboakye"
            icon={
              <HiArrowUpRight className="ml-2 size-4 fill-zinc-800 dark:fill-zinc-200" />
            }
          />
          <CtaAction
            title="SERVICE REQUEST CALL"
            ctaLink="https://cal.com/bawuahboakye/service-request"
            icon={
              <RiServiceLine className="ml-2 size-4 fill-zinc-800 dark:fill-zinc-200" />
            }
          />
          <CtaAction
            title="SEND ME A MAIL"
            ctaLink="mailto:me@bawuahboakye.com"
            icon={
              <TbMailShare className="ml-2 size-4 stroke-zinc-800 dark:stroke-zinc-200" />
            }
          />
          <CtaAction
            title="PROJECT DISCOVERY"
            ctaLink="https://cal.com/bawuahboakye/service-request"
            icon={
              <HiArrowUpRight className="ml-2 size-4 fill-zinc-800 dark:fill-zinc-200" />
            }
          />
        </div>
      </section>

      <section className="">
        <div className="h-[40rem] flex flex-col justify-center items-center px-6">
          <h2 className="mb-10 sm:mb-6 text-xl text-center sm:text-5xl dark:text-white text-black">
            Ask me Anything, I reply instantly!
            <span className="text-sm my-6 block text-zinc-500 dark:text-zinc-400">
              Add '@yoursocialhandle' to your message, I will reply over on
              Instagram or X/Twitter
            </span>
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
          <p
            className={cn(
              "text-xs self-cener my-2",
              send.state === "idle" && send.data
                ? "text-green-600 dark:text-green-400"
                : "hidden"
            )}
          >
            I have received your message successfully!
          </p>
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
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#f3ca4d]",
    previewImage: "/images/susubox-shot.png",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    titleStyle: "text-zinc-200",
    subtitle: "Buildbafla construction website",
    projectLink: "https://buildbafla.com",
    themeColor: "bg-[#14171f]",
    previewImage: "/images/buildbafla-site.png",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    subtitle: "Mono Design Studio",
    projectLink: "https://behance.net/bawuahboakye/",
    themeColor: "bg-[#ffff99]",
    previewImage: "/images/monodesignstudio.png",
    previewImageStyle: "",
  },
  {
    title: "Graphics Design",
    subtitle: "TTETL NGO",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#d0d4dc]",
    previewImage: "/images/ttetl-brochure-front.jpg",
    previewImageStyle: "",
  },
  {
    title: "Product Photoshoot",
    subtitle: "Fruitwist Juice",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#ff00ff]",
    previewImage: "/images/fruitwist-product-shoot.png",
    previewImageStyle: "",
  },
  {
    title: "Graphics Design",
    subtitle: "Versace magazine",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#f3ca4d]",
    previewImage: "/images/versace-magazine-showcase.jpg",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    subtitle: "Kwamekoda Personal Website",
    projectLink: "https://kwamekoda.com",
    themeColor: "bg-[#14171f]",
    previewImage: "/images/kwamekoda-site.png",
    previewImageStyle: "",
  },
  {
    title: "E-commerce Website",
    subtitle: "Global Collections Books",
    projectLink: "https://globalcollectionsbooks.com",
    themeColor: "bg-[#ffff99]",
    previewImage: "/images/globalcollectionsbooks.png",
    previewImageStyle: "",
  },
  {
    title: "POS Installation",
    subtitle: "Versace PO System",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#d0d4dc]",
    previewImage: "/images/versace-pos.jpg",
    previewImageStyle: "",
  },
];
