import * as site from "~/site.json";
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
import { MdWorkOutline, MdArrowOutward } from "react-icons/md";
import { TbMailShare } from "react-icons/tb";
import posthog from "posthog-js";

export const meta: MetaFunction = () => {
  return [
    { title: `${site.title} | Freelancer. Designer. Developer.` },
    {
      name: "description",
      content: site.description,
    },
  ];
};

export default function Index() {
  const [message, setMessage] = useState("");
  const send = useFetcher();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    posthog.capture("Submitted question or email");
    e.preventDefault();

    e.currentTarget.elements[0]?.setAttribute("name", "message");
    const form = new FormData(e.currentTarget);

    send.submit(form, { action: "/send", method: "post" });
  };

  const words = site.whatIAmDoing.split(" ").map((l, idx) => ({
    text: l + " ",
  }));

  const placeholders = [
    "What are your rates?",
    "How to start and run an e-commerce business?",
    "Why are you a freelancer?",
    "Do you have books or resources to help others?",
    "Where do you see yourself and your business in 5 years?",
    "How long do you take to deliver a service?",
    "Do you teach your skills?",
    "Is there a place we can see your archived projects?",
    "Can you work on startup ideas for me?",
  ];

  return (
    <div className="h-full relative">
      <CtaAction
        title={
          site.websiteCtaButton.index.title &&
          new Date().toISOString() >
            new Date(site.websiteCtaButton.index.startDate).toISOString() &&
          new Date().toISOString() <=
            new Date(site.websiteCtaButton.index.endDate).toISOString()
            ? site.websiteCtaButton.index.title
            : "FREE 15 MINS CALL"
        }
        ctaLink={
          site.websiteCtaButton.index.link &&
          new Date().toISOString() >
            new Date(site.websiteCtaButton.index.startDate).toISOString() &&
          new Date().toISOString() <=
            new Date(site.websiteCtaButton.index.endDate).toISOString()
            ? site.websiteCtaButton.index.link
            : "https://cal.com/bawuahboakye/free-15-mins"
        }
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

        <div className="w-full flex flex-col sm:flex-row sm:max-w-5xl sm:flex-wrap sm:mx-auto sm:items-center space-y-6 sm:space-y-0 sm:space-x-6 ">
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
              <MdArrowOutward className="ml-2 size-4 fill-zinc-800 dark:fill-zinc-200" />
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
              <MdArrowOutward className="ml-2 size-4 fill-zinc-800 dark:fill-zinc-200" />
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
              Instagram or X/Twitter. Or join my newsletter with your email!
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
  // {
  //   title: "E-commerce Website",
  //   subtitle: "Global Collections Books",
  //   projectLink: "https://globalcollectionsbooks.com",
  //   themeColor: "bg-[#ffff99]",
  //   previewImage: "/images/globalcollectionsbooks.webp",
  //   imageAlt: "Bawuahboakye | Global Collections books project",
  //   previewImageStyle: "",
  // },
  {
    title: "Mobile App Development",
    subtitle: "Susubox Finance App",
    projectLink:
      "https://www.behance.net/gallery/205021437/Susubox-Finance-Mobile-App",
    themeColor: "bg-[#f3ca4d]",
    previewImage: "/images/susubox-shot.webp",
    imageAlt: "Bawuahboakye | Susubox personal mobile app project",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    subtitle: "Kwamekoda Brand Website",
    projectLink: "https://kwamekoda.com",
    themeColor: "bg-[#14171f]",
    previewImage: "/images/kwamekoda-site.webp",
    imageAlt: "Bawuahboakye | Kwamekoda Brand Website project",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    titleStyle: "text-zinc-200",
    subtitle: "Buildbafla construction website",
    projectLink: "https://buildbafla.com",
    themeColor: "bg-[#14171f]",
    previewImage: "/images/buildbafla-site.webp",
    imageAlt: "Bawuahboakye | Bafla Construction website project",
    previewImageStyle: "",
  },
  {
    title: "Web Development",
    subtitle: "Mono Design Studio",
    projectLink:
      "https://www.behance.net/gallery/205031181/MONO-DSGN-STDO-Website-Design",
    themeColor: "bg-[#ffff99]",
    previewImage: "/images/monodesignstudio.webp",
    imageAlt: "Bawuahboakye | Mono designstudio website project",
    previewImageStyle: "",
  },
  {
    title: "Graphics Design",
    subtitle: "TTETL NGO",
    projectLink:
      "https://www.behance.net/gallery/205025711/TTETL-Logo-Brand-Identity",
    themeColor: "bg-[#d0d4dc]",
    previewImage: "/images/ttetl-brochure-front.webp",
    imageAlt: "Bawuahboakye | TTETL Graphics Design project",
    previewImageStyle: "",
  },
  {
    title: "Product Photoshoot",
    subtitle: "Fruitwist Juice",
    projectLink:
      "https://www.behance.net/gallery/205024511/Fruitwist-Product-Photoshoot",
    themeColor: "bg-[#ff00ff]",
    previewImage: "/images/fruitwist-product-shoot.webp",
    imageAlt: "Bawuahboakye | Fruitwist product photoshoot project",
    previewImageStyle: "",
  },
  {
    title: "Graphics Design",
    subtitle: "Versace magazine",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#f3ca4d]",
    previewImage: "/images/versace-magazine-showcase.webp",
    imageAlt: "Bawuahboakye | Versace Graphics design service project",
    previewImageStyle: "",
  },
  {
    title: "POS Installation",
    subtitle: "Versace PO System",
    projectLink: "https://behance.net/bawuahboakye",
    themeColor: "bg-[#d0d4dc]",
    previewImage: "/images/versace-pos.webp",
    imageAlt: "Bawuahboakye | Versace POS Installation project",
    previewImageStyle: "",
  },
];
