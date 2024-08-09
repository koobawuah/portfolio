import { AuroraBackground } from "./ui/aurora-background";

export default function Header() {
  return (
    <>
      <AuroraBackground>
        <div className="relative z-50 px-5 md:px-20">
          <h1 className="font-bold text-5xl md:text-8xl dark:text-zinc-200">
            Freelancer. Designer. Developer.
          </h1>
          <h2 className="text-4xl font-extralight md:text-9xl dark:text-zinc-200">
            Building your dream projects that users will love!
          </h2>
        </div>
      </AuroraBackground>
    </>
  );
}
