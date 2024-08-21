"use client";

import Navbar from "@/components/navbar";
import Info from "@/components/main/info";
import Carousels from "@/components/main/carousel";
import * as React from "react";


export default function Home() {


  return (
    <>
      <Navbar />
      <header className="h-screen bg-primary flex items-center px-10">
        <div className="flex flex-wrap items-center justify-around w-full">
          {/* Konten Teks */}
          <Info/>
          {/* Carousel */}
          <Carousels />
        </div>
      </header>
    </>
  );
}
