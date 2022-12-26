import React from "react";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import { heroapi, popularSales, topRateSales } from "./data/data";

const App = () => {
  return (
    <>
      <main>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularSales} />
        <Sales endpoint={topRateSales} />
      </main>
    </>
  );
};

export default App;
