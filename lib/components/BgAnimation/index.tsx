"use client";
import dynamic from "next/dynamic";

const DynamicBgAnimation = dynamic(
  () => import("./BgAnimation").then((m) => m.BgAnimation),
  {
    ssr: false,
  },
);

export default function BgAnimation() {
  return <DynamicBgAnimation />;
}
