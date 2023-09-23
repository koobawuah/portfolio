import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Bawuahboakye | Bio" },
    { name: "description", content: "The Bio Page | bawuahboakye!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1>Bio</h1>
    </>
  );
}
