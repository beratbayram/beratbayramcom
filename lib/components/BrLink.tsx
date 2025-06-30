import Link from "next/link";
import { ComponentProps } from "react";

export function BrLinks(props: ComponentProps<typeof Link>) {
  return <Link rel="noopener noreferrer" prefetch={false} {...props} />;
}
