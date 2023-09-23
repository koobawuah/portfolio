import { cn } from "@/lib/utils";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

type ProjectProps = {
  children: React.ReactNode;
};

interface PortfolioData {
  title: string;
  date?: string;
  projectScope?: string[];
  description: string;
  body?: {};
  images: string[];
  className?: string;
}

export const loader = () => {
  const data: PortfolioData[] = [
    {
      title: "Hello world",
      date: "23rd October, 2015",
      projectScope: ["Web", "Application"],
      description:
        "This is a description of Hello World project done on the 23rd of October 2015.",
      body: {},
      images: [],
    },
    {
      title: "Hello world",
      date: "23rd March, 2016",
      projectScope: ["Web", "Application"],
      description:
        "This is a description of Hello World project done on the 23rd of October 2015.",
      body: {},
      images: [],
    },
    {
      title: "Hello world",
      date: "23rd December, 2016",
      projectScope: ["Web", "Application"],
      description:
        "This is a description of Hello World project done on the 23rd of October 2015.",
      body: {},
      images: [],
    },
    {
      title: "Hello world",
      date: "23rd October, 2015",
      projectScope: ["Web", "Application"],
      description:
        "This is a description of Hello World project done on the 23rd of October 2015.",
      body: {},
      images: [],
    },
    {
      title: "Hello world",
      date: "23rd October, 2015",
      projectScope: ["Web", "Application"],
      description:
        "This is a description of Hello World project done on the 23rd of October 2015.",
      body: {},
      images: [],
    },
    {
      title: "Hello world",
      date: "23rd October, 2015",
      projectScope: ["Web", "Application"],
      description:
        "This is a description of Hello World project done on the 23rd of October 2015.",
      body: {},
      images: [],
    },
  ];

  // return { final : JSON.stringify(data) }
  return json({ data });
};

export default function Projects() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <>
      <Project>
        {data.map((d) => (
          <ProjectCard
            title={d.title}
            description={d.description}
            images={d.images}
          />
        ))}
      </Project>
    </>
  );
}

export const Project: React.FC<ProjectProps> = ({ children }) => {
  return <div className="flex-1">{children}</div>;
};

export const ProjectCard: React.FC<PortfolioData> = ({
  title,
  description,
  images,
  className,
}) => {
  return (
    <div
      className={cn(
        "py-10 px-6 my-4 max-w-5xl mx-auto flex flex-col bg-red-500 rounded-3xl md:px-8 md:py-12 md:my-10",
        className
      )}
    >
      <header className="flex flex-col space-y-3 md:flex-row md:justify-between md:items-start md:space-y-0">
        <div className="space-y-3">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="max-w-md text-lg line-clamp-4">{description}</p>
        </div>
        <div className="hidden md:block md:max-w-md md:h-64 md:rounded-xl md:overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={images[0] ?? "https://via.placeholder.com/600/24f355"}
          />
        </div>
      </header>

      <footer className="py-8 flex flex-row justify-end">
        <div className="">
          <Link
            to=""
            className="px-4 py-3 bg-transparent border border-zinc-50 rounded-full text-sm font-normal active:bg-zinc-50 active:text-zinc-900"
          >
            View Case Study
          </Link>
        </div>
      </footer>
    </div>
  );
};
