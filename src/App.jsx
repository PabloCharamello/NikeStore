import React from "react";
import Cart from "./components/cart/Cart";
import FlexContent from "./components/FlexContent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sales from "./components/Sales";
import Stories from "./components/Stories";
import {
  heroApi,
  popularSales,
  topRateSales,
  highLight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroApi} />
        <Sales endpoint={popularSales} ifExists />
        <FlexContent endpoint={highLight} ifExists />
        <Sales endpoint={topRateSales} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
