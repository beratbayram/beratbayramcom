"use client";
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import IconButton from "@mui/material/IconButton";
import { useColorScheme } from "@mui/material/styles";

function getIcon(mode: string | undefined) {
  switch (mode) {
    case "light":
      return <LightMode />;
    case "dark":
      return <DarkMode />;
    default:
      return <SettingsSuggestIcon />;
  }
}

export function BrThemeSwitcher() {
  const { mode, setMode } = useColorScheme();

  function handleClick() {
    switch (mode) {
      case "light":
        setMode("dark");
        break;
      case "dark":
        setMode("system");
        break;
      default:
        setMode("light");
        break;
    }
  }

  return (
    <IconButton onClick={handleClick} title="Switch theme" color="inherit">
      {getIcon(mode)}
    </IconButton>
  );
}
