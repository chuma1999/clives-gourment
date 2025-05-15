import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function HeadCheff() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  return (
    <div ref={ref} className="max_width">
      <div className="head_cheff_container grid grid-cols-[1fr_1.5fr] grid-rows-[20rem] mb-[10rem] relative">
        <motion.div
          className="cheff_bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <div className="cheff_detail p-[3rem_6rem]">
          <h1 className="cheff_heading text-2xl font-bold mb-4">
            Meet Our Head Chef
          </h1>
          <h3 className="font-light italic mb-4">
            "Cooking is not just a craft. it's a way of telling a story"
          </h3>
          <p className="font-medium mb-4">
            Clive's Gourment Head Chef, Raquel Tinevimbo, is a culinaryy master
            with over 15 years of experience.
          </p>
          <p className="font-medium">
            Raquel began her journey in Europe's finest restaurants, honing his
            craft and developing a unique stlye. His signature approach combines
            traditional recipes with modern techniques and presentation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeadCheff;
