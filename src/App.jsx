import React from "react";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";
import Home from "./section/Home";
import About from "./section/About";
import Gallery from "./component/Gallery";
import ExploreMenu from "./component/ExploreMenu";
import HeadCheff from "./component/HeadCheff";
import Footer from "./section/Footer";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const display = useTransform(scrollYProgress, [0, 1], ["none", "block"]);
  return (
    <div>
      <motion.div
        style={{ scaleX, display }}
        className={`bg-[#857313] sticky top-0 w-[100%] h-2 origin-left rounded-r-[1rem] z-10`}
      />
      <Home />
      <About />
      <Gallery />
      <ExploreMenu />
      <HeadCheff />
      <Footer />
    </div>
  );
}

export default App;
