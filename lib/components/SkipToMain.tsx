"use client";

export function SkipToMain() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const mainElement = document.getElementById("main-content");
    if (mainElement) {
      mainElement.focus();
      mainElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href="#main-content" onClick={handleClick} className="skip-link">
      Skip to main content
    </a>
  );
}
