import { type V2_MetaFunction } from "@remix-run/node";
import { NavLink, Link, Outlet } from "@remix-run/react";
import { ProjectCard } from "./projects";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Bawuahboakye | Freelancer" },
    { name: "description", content: "Welcome to bawuahboakye!" },
  ];
};

export default function Index() {
  return (
    <div
      className="max-w-5xl mx-auto relative"
      // style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <header className="my-8 px-8 py-4 space-y-4 md:space-y-8 md:my-16">
        <h1 className="text-2xl font-black md:text-5xl">
          I'm a freelance <i>web designer</i>, building your{" "}
          <i>dream projects</i> that users will love!
        </h1>
        <div className="">
          <Link
            to="https://cal.com/bawuahboakye"
            className="px-4 py-3 bg-transparent border border-zinc-50 rounded-full text-sm font-medium active:bg-zinc-50 active:text-zinc-900 after:content-['_↗']"
          >
            Start A Free Consultation Call
          </Link>
        </div>
      </header>
      <main className="py-8 px-4 w-full md:my-20">
        {Array.from([1, 2, 3, 4, 5, 6]).map((i, index) => (
          <div
            key={index}
            className="sticky transform"
            style={{ top: `${(index + 1) * 50}px` }}
          >
            <ProjectCard
              title="Hello world"
              description="Some works of Hello world on display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
              images={[
                "https://via.placeholder.com/600/24f355",
                "https://via.placeholder.com/600/24f355",
              ]}
            />
          </div>
        ))}
      </main>

      {/* <section className="w-full my-8 h-64">
        <h2 className="">Project workflow</h2>
        <p>
          From exploration to execution, this dynamic framework fuels creativity
          and precision, ensuring your product journey aligns seamlessly with
          user desires.
        </p>

        <div className="h-80 my-16 bg-red-300 flex space-x-4 overflow-x-scroll overflow-y-hidden">
          <article className="w-96 min-h-max py-10 px-5">
            <header>
              <h2>Discovery</h2>
            </header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores deleniti, soluta sunt cupiditate consequuntur nesciunt
              tenetur sint atque ullam assumenda eaque iusto necessitatibus,
              porro debitis molestias dolor animi odio ea.
            </main>
            <footer>01</footer>
          </article>
          <article className="py-10 px-5 w-96">
            <header>
              <h2>Discovery</h2>
            </header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores deleniti, soluta sunt cupiditate consequuntur nesciunt
              tenetur sint atque ullam assumenda eaque iusto necessitatibus,
              porro debitis molestias dolor animi odio ea.
            </main>
            <footer>01</footer>
          </article>
          <article className="py-10 px-5 w-96">
            <header>
              <h2>Discovery</h2>
            </header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores deleniti, soluta sunt cupiditate consequuntur nesciunt
              tenetur sint atque ullam assumenda eaque iusto necessitatibus,
              porro debitis molestias dolor animi odio ea.
            </main>
            <footer>01</footer>
          </article>
          <article className="py-10 px-5 w-96">
            <header>
              <h2>Discovery</h2>
            </header>
            <main>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores deleniti, soluta sunt cupiditate consequuntur nesciunt
              tenetur sint atque ullam assumenda eaque iusto necessitatibus,
              porro debitis molestias dolor animi odio ea.
            </main>
            <footer>01</footer>
          </article>
        </div>
        <div className="flex flex-row justify-center">
          <Link
            to="https://cal.com/bawuahboakye"
            className="px-4 py-2 bg-transparent border border-zinc-50 rounded-full text-sm font-medium active:bg-zinc-50 active:text-zinc-900"
          >
            Schedule a Discovery Call
          </Link>
        </div>
      </section> */}

      <section className="w-full h-96 px-8">
        <h1>Project process</h1>
        <p>
          From exploration to execution, this dynamic framework fuels creativity
          and precision, ensuring your product journey aligns seamlessly with
          user desires.
        </p>
      </section>

      <footer className="w-full max-h-max py-8 px-8 flex flex-col relative">
        <div className="w-full my-8 flex flex-col space-y-2 text-center md:justify-start md:text-left">
          <h2 className="text-3xl font-semibold">
            Are Ready to Elevate Your Project or Business?
          </h2>
          <p className="text-base font-normal">
            I'm ready to bring your ideas and visions to life with the highest
            quality of service!
          </p>
          <div className="py-4 place-self-center md:place-self-start">
            <Link
              to="https://cal.com/bawuahboakye"
              className="max-w-max flex items-center px-4 py-3 bg-transparent border border-zinc-50 rounded-full text-sm font-medium active:bg-zinc-50 active:text-zinc-900 after:content-['🗓'️]"
            >
              Schedule a Discovery Call
              <span className="">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-4 d:flex-row md:justify-between">
          <div>
            <p className="text-sm text-center">
              {`bawuahboakye © ${Intl.DateTimeFormat("en-GH", {
                year: "numeric",
              }).format(Date.now())}. Designed by bawuahboakye`}
            </p>
          </div>
          <div className="flex flex-row justify-center space-x-3">
            <i>
              <a href="https://instagram.com/koobawuah" target="_blank">
                Instagram
              </a>
            </i>
            <i>
              <a href="https://twitter.com/koobawuah" target="_blank">
                Twitter | X
              </a>
            </i>
            <i>
              <a href="https://linkedin.com/koobawuah" target="_blank">
                LinkedIn
              </a>
            </i>
            <i>
              <a href="mailto:me@bawuahboakye.com">mail</a>
            </i>
          </div>
        </div>
      </footer>
    </div>
  );
}
