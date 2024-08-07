import { cn } from "~/lib/utils";

const SubHeading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => (
  <h2
    className={cn(
      "w-auto font-semibold text-md py-2 text-zinc-500 self-start",
      className
    )}
  >
    {title}
  </h2>
);

export default SubHeading;
