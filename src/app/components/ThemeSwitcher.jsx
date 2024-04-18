// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="animate-appearance-in">
      <Button
        className={`${theme === "light" ? "hidden" : "block"} font-bold`}
        onClick={() => setTheme("light")}
        color="primary"
      >
        Light
      </Button>
      <Button
        className={`${theme === "dark" ? "hidden" : "block"} font-bold`}
        onClick={() => setTheme("dark")}
        color="primary"
      >
        Dark
      </Button>
    </div>
  );
}
