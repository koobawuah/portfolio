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
          "fixed top-4 right-6 z-[60] inline-flex h-12 overflow-hidden rounded-full p-[1.5px] focus:outline-none focus:ring-4 focus:ring-slate-400 focus:ring-offset-4 focus:ring-offset-zinc-50",
          buttonClassName
        )}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={cn(
            "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white text-zinc-950 dark:bg-zinc-950 px-4 py-1 text-xs font-bold dark:text-zinc-200 backdrop-blur-3xl",
            ctaTextClassName
          )}
        >
          {title}
          <SparkIcon className="ml-2 size-4 fill-zinc-800" />
        </span>
      </button>
      {/* <motion.div className="fixed top-4 right-6 z-50">{title}</motion.div>) */}
    </>
  );
};

const SparkIcon = ({ className }: { className?: string }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("size-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    />
  </svg>
);

const ChatIcon = ({ className }: { className?: string }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={cn("size-6", className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
    />
  </svg>
);
