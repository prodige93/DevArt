import { Button } from "@radix-ui/themes";

interface Props  {
    theme: string;
    setTheme: (theme: string) => void;
};

export default function ThemeSwitcher({ theme, setTheme }: Props) {
    return (
      <Button
        onClick={() => setTheme(theme === "light" ? "violet" : "light")}
      >
        Changer de couleur
      </Button>
    );
}