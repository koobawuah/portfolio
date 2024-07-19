import {
  FaXTwitter,
  FaLinkedin,
  FaBehance,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import { Link } from "@remix-run/react";

export default function MultiPartProfile() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <Carousel
        setApi={setApi}
        orientation="horizontal"
        opts={{ slidesToScroll: 1, loop: true }}
        className="w-full flex flex-col justify-center items-center"
        plugins={[Autoplay({ delay: 5000 })]}
      >
        <CarouselContent className="w-full md:max-w-4xl my-20">
          <CarouselItem className="w-full flex flex-col">
            <h1 className="font-semibold text-3xl">Socials</h1>
            <h3 className="font-normal text-xl text-gray-600 mb-4">
              Find me on
            </h3>
            <ul className="flex ">
              <li className="list-none max-w-min bg-red-300">
                <Link
                  to="http://instagram.com/koobawuah"
                  className="flex items-center"
                >
                  <FaInstagram className="" /> Instagram
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="http://twitter.com/koobawuah"
                  className="flex items-center"
                >
                  <FaXTwitter className="" /> X(Twitter)
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="http://github.com/koobawuah"
                  className="flex items-center"
                >
                  <FaGithub className="" /> Github
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="http://linkedin.com/in/bawuah-boakye-9b4362144"
                  className="flex items-center"
                >
                  <FaLinkedin className="" /> LinkedIn
                </Link>
              </li>
            </ul>
          </CarouselItem>
          <CarouselItem className="w-full flex flex-col items-start">
            <h1 className="font-semibold text-3xl">Autobiography</h1>
            <h3 className="font-normal text-xl text-gray-600">
              A little history lesson
            </h3>
            <p className="text-lg mt-3 font-semibold text-zinc-500 dark:text-zinc-400">
              As a seasoned freelancer, I specialize in transforming concepts
              into realities across diverse domains. If you're envisioning
              cutting-edge web and mobile applications, high converting website
              designs, or impactful brand identities and graphics designs, We
              can{" "}
              <a
                className="underline text-zinc-900 dark:text-zinc-300"
                href="https://cal.com/bawuahboakye"
                target="_blank"
              >
                begin a free 15 to 30 minutes conversation.
              </a>
            </p>
          </CarouselItem>
        </CarouselContent>
        <div className="max-w-max p-1.5 bg-zinc-200/40 backdrop-blur-sm rounded-full flex items-center space-x-2.5">
          {Array.from({ length: count }).map((_, index) => (
            <div
              key={index}
              className={
                current === index + 1
                  ? `w-2.5 h-2.5 bg-gray-200 rounded-full shadow-sm transition-all duration-200`
                  : `w-2.5 h-2.5 bg-gray-400 rounded-full shadow-sm transition-all duration-200`
              }
            ></div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
