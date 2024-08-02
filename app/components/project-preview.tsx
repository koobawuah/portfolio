import { Link } from "@remix-run/react";
import { CardDemo } from "./ui/gif-card";
import { cn } from "~/lib/utils";
interface ProjectItem {
  title: string;
  titleStyle?: string;
  subtitle: string;
  projectLink: string;
  themeColor: string;
  previewImage: string;
  previewImageStyle: string;
}

export default function ProjectPreview({
  projects,
}: {
  projects: ProjectItem[];
}) {
  return (
    <div className="flex space-x-6 my-10 overflow-x-scroll pl-6 py-6">
      {projects &&
        projects.map((p, idx) => (
          <Link
            className={cn(idx === projects.length - 1 ? "pr-6" : null)}
            target="_blank"
            key={p.title + idx}
            to={p.projectLink}
          >
            <CardDemo
              key={idx}
              title={p.title}
              excerpt={p.subtitle}
              bgImg={p.previewImage}
            />
          </Link>
        ))}
    </div>
  );
}
