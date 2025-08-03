import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";

interface SkillProps {
  name: string;
  href?: string;
  icon?: string;
  iconAlt?: string;
  iconClassName?: string;
  muiIcon?: ReactNode;
}

export default function Skill({
  name,
  href,
  icon,
  iconAlt,
  iconClassName,
  muiIcon,
}: SkillProps) {
  const cardContent = (
    <CardContent className="flex h-full min-h-[120px] flex-col items-center justify-between p-1 py-6">
      <div className="flex flex-1 flex-col items-center justify-center">
        {icon && (
          <Image
            src={icon}
            alt={iconAlt || `${name} Logo`}
            height={48}
            width={48}
            className={`size-[48px] ${iconClassName}`}
          />
        )}
        {muiIcon && <div className="mb-4">{muiIcon}</div>}
      </div>
      <Typography
        variant="body2"
        fontWeight="medium"
        color="text.primary"
        className="mt-2"
      >
        {name}
      </Typography>
    </CardContent>
  );

  const cardProps = {
    sx: {
      textDecoration: "none",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        transform: "translateY(-2px)",
        boxShadow: 3,
      },
    },
  };

  if (href) {
    return (
      <Card
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...cardProps}
      >
        <CardActionArea>{cardContent}</CardActionArea>
      </Card>
    );
  }

  return <Card {...cardProps}>{cardContent}</Card>;
}
