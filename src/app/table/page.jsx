"use client";

import React, { useEffect, useState } from "react";

//! Components
import Main from "./components/Main";

function page() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Main />
    </div>
  );
}

export default page;
