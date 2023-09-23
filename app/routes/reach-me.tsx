import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Bawuahboakye | Reach me" },
    { name: "description", content: "The Reach me Page | bawuahboakye!" },
  ];
};

export default function ReachMe() {
  return (
    <>
      <h1 className="text-xl text-zinc-50 font-bold">Reach Me</h1>
      <p className="text-sm text-zinc-50 font-medium">
        Contact me for all your web application, design and branding projects!
      </p>
    </>
  );
}
