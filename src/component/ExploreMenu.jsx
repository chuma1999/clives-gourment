import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/explore.css";

function ExploreMenu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div
      ref={ref}
      className="max_width explore_container anchor-link"
      id="ourmenu"
    >
      <h1 className="explore_heading mt-[6rem] text-2xl font-bold mb-2">
        Explore Our Menu
      </h1>
      <p className="heading_text w-[27rem]">
        Signature dishes for every taste - from classic recipes to bold culinary
        experiments.
      </p>
      <div className="grid__layout mt-[-.5rem] mb-[10rem]">
        <div className="first_div h-[100%]  relative">
          <motion.div
            className="with_bg_img h-[20.5rem] rounded-3xl mb-8 mt-[2.5rem] text-white relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="w-[8rem] absolute bottom-8 left-8 leading-[1.2rem]">
              Gourment Lobster Dish
            </h1>
          </motion.div>
          <div className="empty_div h-[5rem] w-[100%] bg-slate-300 rounded-3xl absolute bottom-0"></div>
        </div>
        <div className="second_div h-[100%] relative">
          <div className="top_div grid grid-cols-[1fr_1.5fr] gap-8 h-[5rem] mb-8 ">
            <div className="relative">
              <button className="text-white bg-[#857313] p-[.5rem_1rem] rounded-3xl hover:bg-[#fff] hover:text-[#857313] hover:border-2 border-black w-[100%] absolute bottom-0">
                View Full Menu
              </button>
            </div>
            <div className="bg-slate-300 h-[100%] rounded-3xl"></div>
          </div>
          <motion.div
            className="bottom_div h-[23rem] w-[100%] rounded-3xl absolute bottom-0 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="w-[10rem] leading-[1.2rem] absolute bottom-8 left-8">
              Gourment Poached Egg Dish
            </h1>
          </motion.div>
        </div>
        <div className="third_div h-[100%] relative">
          <motion.div
            className="scaptlops_bg h-[18rem] rounded-3xl mb-8 relative text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="leading-[1.2rem] absolute bottom-8 left-8">
              Scaptlops Dish
            </h1>
          </motion.div>
          <motion.div
            className="savory_bg h-[10rem] w-[100%] rounded-3xl absolute bottom-0 p-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <button className="vegetarin_btn text-white bg-[#0e3f13] p-[.2rem_.5rem] rounded-3xl hover:bg-[#fff] hover:text-[#0e3f13] w-[8rem] hover:border-2 border-black float-right">
              Vegetarian
            </button>
            <h1 className="leading-[1.2rem] absolute bottom-4 left-4">
              Savory Apple Tart
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ExploreMenu;
