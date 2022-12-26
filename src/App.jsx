import React from "react";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import { heroapi, popularSales, topRateSales } from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularSales} ifExists />
        <Sales endpoint={topRateSales} />
      </main>
    </>
  );
};

export default App;
