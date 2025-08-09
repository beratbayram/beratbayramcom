import { BrLink } from "./BrLink";

interface CertificateItemProps {
  title: string;
  issuer: string;
  url: string;
}

export default function CertificateItem({
  title,
  issuer,
  url,
}: CertificateItemProps) {
  return (
    <li>
      <strong>
        <BrLink
          href={url}
          className="text-black underline dark:text-white"
          target="_blank"
        >
          {title}
        </BrLink>
      </strong>
      <br />
      <em className="text-gray-600 dark:text-gray-400">{issuer}</em>
    </li>
  );
}
