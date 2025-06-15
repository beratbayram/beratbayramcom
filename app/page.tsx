import Image from "next/image";
import pp from "@/lib/assets/pp.png";

export default function Page() {
  return (
    <div>
      <Image src={pp} alt="Profile Picture" />
    </div>
  );
}
