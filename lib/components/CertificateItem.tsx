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
        <a
          href={url}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </strong>
      <br />
      <em className="text-gray-600 dark:text-gray-400">{issuer}</em>
    </li>
  );
}
