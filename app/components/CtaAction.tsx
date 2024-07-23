import { cn } from "~/lib/utils";

export const CtaAction = ({
  title,
  buttonClassName,
  ctaLink,
  ctaTextClassName,
}: {
  title: string;
  buttonClassName?: string;
  ctaLink: string;
  ctaTextClassName?: string;
}) => {
  return (
    <>
      <button
        onClick={() => window.open(ctaLink, "_blank")}
        className={cn(
          "fixed top-4 right-6 z-[1000] inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-zinc-50",
          buttonClassName
        )}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={cn(
            "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white text-zinc-950 dark:bg-zinc-950 px-3 py-1 text-xs font-bold dark:text-white backdrop-blur-3xl",
            ctaTextClassName
          )}
        >
          {title}
        </span>
      </button>
      {/* <motion.div className="fixed top-4 right-6 z-50">{title}</motion.div>) */}
    </>
  );
};
