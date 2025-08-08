"use client";
import { BrLink } from "@/lib/components/BrLink";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import { Button } from "@mui/material";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="mb-8">
        <h1 className="mb-4 text-8xl font-bold text-gray-500 dark:text-gray-700">
          404
        </h1>
        <h2 className="mb-2 text-3xl font-bold">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-shadow-none sm:flex-row">
        <Button
          component={BrLink}
          href="/"
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
        >
          Go Home
        </Button>
        <Button
          component={BrLink}
          href="/projects"
          variant="outlined"
          size="large"
          startIcon={<WorkIcon />}
        >
          View Projects
        </Button>
      </div>

      <div className="mt-8">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          If you believe this is an error, please{" "}
          <Button
            component={BrLink}
            href="https://www.linkedin.com/in/berat-bayram/"
            variant="text"
            size="small"
            className="font-inherit min-w-0 p-0 text-inherit normal-case underline hover:bg-transparent hover:underline"
          >
            contact me
          </Button>
          .
        </p>
      </div>
    </div>
  );
}
