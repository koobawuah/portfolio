import {
  json,
  type ActionArgs,
  type V2_MetaFunction,
  LoaderArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/app/components/ui/button";
import { Input } from "~/app/components/ui/input";
import { Textarea } from "~/app/components/ui/textarea";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Bawuahboakye | Reach me" },
    { name: "description", content: "The Reach me Page | bawuahboakye!" },
  ];
};

export default function ReachMe() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-6 flex flex-col">
        <header className="my-8 space-y-4">
          <h1 className="text-base text-zinc-50 font-black">Reach Me</h1>
          <p className="text-2xl font-black md:text-5xl">
            Contact me for all your web application, design and branding
            projects!
          </p>
        </header>
        <section className="py-8">
          <form method="post" className="flex flex-col">
            <div className="space-y-4">
              <Input
                className="text-zinc-800 border-0 ring-offset-0 focus-visible:ring-zinc-600"
                name="fullname"
                required
                placeholder="Enter your full name"
                type="text"
              />
              <Input
                className="text-zinc-800 border-0 ring-offset-0 focus-visible:ring-zinc-600"
                name="email"
                required
                placeholder="Enter your email"
                type="email"
              />
              <Input
                className="text-zinc-800 border-0 ring-offset-0 focus-visible:ring-zinc-600"
                name="subject"
                placeholder="eg. Website project"
                type="subject"
              />
              <Textarea
                required
                name="message"
                className="text-zinc-800 border-0 ring-offset-0 focus-visible:ring-zinc-600"
                placeholder="Your message here"
              />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const d = form.entries();
  console.log(request);
  console.log(Object.fromEntries(form));
  return json({ ok: true });
}
