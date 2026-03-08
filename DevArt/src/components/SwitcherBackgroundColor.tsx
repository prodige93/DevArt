import { useState, useEffect } from "react";
import { Button } from "@radix-ui/themes";

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
      onClick={() => setTheme(theme === "white" ? "cyan" : "white")}
      style={{
        marginBottom: "10px",
        borderRadius: "5px",
        color: "white",
        backgroundColor: "cyan",
      }}
    >
      Changer de couleur
    </Button>
  );
}