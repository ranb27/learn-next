"use client";

import React, { useEffect } from "react";
import Nav from "../components/Navbar";
import Page from "./page";
import axios from "axios";

function layout() {
  return (
    <div className="bg-default h-screen w-screen">
      <Nav />
      <div className="container mx-auto my-auto h-full flex items-center justify-center">
        <Page />
      </div>
    </div>
  );
}

export default layout;
