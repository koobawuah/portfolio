import { Link } from "@remix-run/react";
import { CardDemo } from "./ui/gif-card";
import { cn } from "~/lib/utils";

import { useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
interface ProjectItem {
  title: string;
  titleStyle?: string;
  subtitle: string;
  projectLink: string;
  themeColor: string;
  previewImage: string;
  imageAlt: string;
  previewImageStyle: string;
}

export default function ProjectPreview({
  projects,
}: {
  projects: ProjectItem[];
}) {
  const plugin = useRef();
  return (
    // <div className="flex space-x-6 my-10 overflow-x-scroll pl-6 pt-6 pb-12">
    <Carousel
      className="w-full space-x-6 my-10"
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      opts={{ loop: true, align: "start" }}
    >
      <CarouselContent className="mt-6 mb-12">
        {projects &&
          projects.map((p, idx) => (
            <Link
              className={cn(idx === projects.length - 1 ? "mr-0" : null)}
              target="_blank"
              key={p.title + idx}
              to={p.projectLink}
            >
              <CarouselItem>
                <CardDemo
                  title={p.title}
                  excerpt={p.subtitle}
                  bgImg={p.previewImage}
                  imageAlt={p.imageAlt}
                />
              </CarouselItem>
            </Link>
          ))}
      </CarouselContent>
    </Carousel>
    // </div>
  );
}
