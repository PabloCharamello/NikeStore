import React from "react";
import FlexContent from "./components/FlexContent";
import Hero from "./components/Hero";
import Sales from "./components/Sales";
import {
  heroApi,
  popularSales,
  topRateSales,
  highLight,
  sneaker,
} from "./data/data";

const App = () => {
  return (
    <>
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroApi} />
        <Sales endpoint={popularSales} ifExists />
        <FlexContent endpoint={highLight} />
        <Sales endpoint={topRateSales} />
        <FlexContent endpoint={sneaker} />
      </main>
    </>
  );
};

export default App;
