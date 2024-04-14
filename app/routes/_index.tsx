import type { V2_MetaFunction } from "@remix-run/node";
import { NavLink, Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Bawuahboakye | Freelancer. Designer. Developer." },
    {
      name: "description",
      content:
        "Welcome to the personal website of bawuahboakye. A freelancer, designer and developer.!",
    },
  ];
};

export default function Index() {
  return (
    <div
      className=""
      // style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <h1>Hello World</h1>
    </div>
  );
}
