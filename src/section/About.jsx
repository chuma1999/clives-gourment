import React, { useEffect, useRef, useState } from "react";
import arrow from "../images/about/up-right-arrow.png";
import { motion, useInView } from "framer-motion";
import "../styles/about.css";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);
  return (
    <div ref={ref} className="max_width anchor-link" id="about">
      <div className="about_us_cover grid grid-cols-[1.2fr_1fr] gap-8 mt-[6rem]">
        <div className="choose_us">
          <h1 className="text-2xl font-bold mb-[4.5rem]">Why Choose Us?</h1>
          <motion.div
            id="why_us"
            className={`relative h-[87%] p-8 text-white rounded-3xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <button className="bg-white p-4 rounded-full float-right hover:bg-[#857313]">
              <img src={arrow} alt="arrow icon" className="w-4" />
            </button>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-medium mb-4">Elegant Ambiance</h3>
              <p className="font-light w-[22rem]">
                The interior of Clive's Gourment is designed to make every visit
                a memorable experience
              </p>
            </div>
          </motion.div>
        </div>
        <div>
          <div className=" mb-8">
            <p className="font-medium mb-8">
              Clive's Gourment is where tradition meets modernity. We offer
              signature dishes made from the freshest ingredients, paired with
              an elegant atmosphere to make your evening unforgettable.
            </p>
            <button className="learn_more_btn text-white bg-[#857313] p-[.5rem_1rem] rounded-3xl hover:bg-[#fff] hover:text-[#857313] hover:border-2 border-black">
              Learn more
            </button>
          </div>
          <div>
            <motion.div
              id="places"
              className="h-[45vh] mb-8 rounded-3xl p-8 text-white relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 2 }}
            >
              <button className="bg-white p-4 rounded-full float-right hover:bg-[#857313]">
                <img src={arrow} alt="arrow icon" className="w-4" />
              </button>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-medium mb-4">
                  The Perfect Place for Celebrations
                </h3>
                <p className="font-light w-[22rem]">
                  Clive's Gourment provides an unforgettable atmosphere for your
                  special moments - from romantic dinners to vibrant
                  celebrations
                </p>
              </div>
            </motion.div>
            <motion.div
              id="ingredient"
              className="h-[45vh] mb-4 rounded-3xl p-8 text-white relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 3 }}
            >
              <button className="bg-white p-4 rounded-full float-right hover:bg-[#857313]">
                <img src={arrow} alt="arrow icon" className="w-4" />
              </button>
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-medium mb-4">
                  Fresh Premium Ingredients
                </h3>
                <p className="font-light w-[22rem]">
                  We use the freshest highest-quality ingredients so you can
                  enjoy authentic flavours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
