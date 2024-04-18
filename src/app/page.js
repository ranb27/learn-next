"use client";
import Image from "next/image";
import App from "./App";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 bg-default">
        <App />
      </div>
    </>
  );
}
