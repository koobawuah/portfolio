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
            className="px-4 py-2 bg-transparent border border-zinc-50 rounded-full text-sm font-medium uppercase active:bg-zinc-50 active:text-zinc-900"
          >
            Schedule a free Consultation
          </Link>
        </div>
      </header>
      <main className="my-0 py-8 px-4 w-full md:my-16 sticky">
        {Array.from([1, 2, 3, 4, 5, 6]).map((i, index) => (
          <ProjectCard
            key={index}
            className="sticky top-20"
            title="Hello world"
            description="Some works of Hello world on display Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            images={[
              "https://via.placeholder.com/600/24f355",
              "https://via.placeholder.com/600/24f355",
            ]}
          />
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

      <footer className="w-full my-8 flex flex-col">
        <div className="flex flex-row justify-between">
          <div>
            <p>
              bawuahboakye &copy; {Date().toString()}. Designed by Bawuahboakye
            </p>
          </div>
          <div></div>
        </div>
      </footer>
    </div>
  );
}
