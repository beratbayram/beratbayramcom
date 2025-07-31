import Link from "next/link";
import { ComponentProps } from "react";

export function BrLink(props: ComponentProps<typeof Link>) {
  return <Link rel="noopener noreferrer" prefetch={false} {...props} />;
}
