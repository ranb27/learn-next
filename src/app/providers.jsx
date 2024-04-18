// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { SnackbarProvider } from "notistack";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
