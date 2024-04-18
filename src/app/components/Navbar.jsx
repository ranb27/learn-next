import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
// import { ThemeSwitcher } from "./ThemeSwitcher";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Nav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed mx-auto w-full">
      <Navbar className="bg-transparent">
        <NavbarBrand>
          <p className="font-bold text-primary">FETL</p>
          {/* <Link href="/dashboard">Dashboard</Link> */}
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link color="foreground" href="table">
              Table
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="dashboard">
              Dashboard
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="about">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem> */}
          <NavbarItem>
            {/* <ThemeSwitcher /> */}
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
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
}
