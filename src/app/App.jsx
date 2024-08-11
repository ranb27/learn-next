import React from "react";
import Nav from "./components/Navbar";
import { Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { useSnackbar } from "notistack";
import Link from "next/link";

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <>
      <div className="grid grid-cols-1">
        {/* <Nav /> */}

        <div className="h-screen w-screen">
          <div className="h-full flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-blue-500 text-7xl">
              Welcome to Pokemon Pool
            </h1>
            <Link className="p-2 rounded-2xl bg-primary" href="/dashboard">
              Start now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
