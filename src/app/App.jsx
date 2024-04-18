import React from "react";
import Nav from "./components/Navbar";
import { Button } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <>
      <div className="grid grid-cols-1">
        {/* <Nav /> */}

        <div className="h-screen w-screen">
          <div className="h-full flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-blue-500 text-7xl">Hello FETL</h1>
            <Button
              size="lg"
              color="primary"
              className=""
              onClick={() => {
                window.location.href = "/dashboard";
                // enqueueSnackbar("Welcome to FETL", {
                //   variant: "success",
                // });
              }}
            >
              Start now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
