"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme();
  return (
    <div>
      {theme === "light" ? (
        <Button onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      ) : (
        <Button onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      )}
    </div>
  );
}
