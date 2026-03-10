import { useState, useEffect } from "react";
import { Button } from "@radix-ui/themes";
import "./SwitcherBgColor.css";

export default function ThemeSwitcher() {
  //déclaration local de theme et setTheme
  const [theme, setTheme] = useState<"white" | "cyan">("cyan");

  // ⚡ Changer le background du body uniquement quand le thème change
  useEffect(() => {
    const color = theme === "white" ? "cyan" : "white";
    document.body.style.backgroundColor = color;
    document.documentElement.style.backgroundColor = color; //<Html>
  }, [theme]);

  return (
    <Button
      className="button-theme"
      onClick={() => setTheme(theme === "white" ? "cyan" : "white")}
    >
      Changer de couleur
    </Button>
  );
}
