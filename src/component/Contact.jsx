import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import facebook from "../images/socials/facebook.png";
import insta from "../images/socials/instagram.png";
import tiktok from "../images/socials/tiktok.png";

function Contact() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="bg-black" id="contact">
      <div className="max_width">
        <div className="footer_container">
          <div className="question_container flex justify-between items-center text-white  border-b-[1px] border-white pt-[4rem]">
            <div className="question_cover">
              <motion.h1
                className="font-bold text-2xl mb-4 w-[11rem]"
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Do you have any questions?
              </motion.h1>
              <motion.h6
                className="mb-10"
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                Contact us and we will answer your questions.
              </motion.h6>
            </div>
            <motion.button
              className="contact_us_btn text-black bg-[#fff] p-[.5rem_1.5rem] rounded-3xl hover:bg-[#fff] hover:text-[#857313] font-medium"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              Contact Us
            </motion.button>
          </div>
          <div className="page_links_container flex items-center justify-between text-white mt-8">
            <motion.ul
              className="flex items-center gap-8 font-medium"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#ourmenu">Our Menu</a>
              </li>
              <li>
                <a href="#reserve">Reserves</a>
              </li>
              <li>
                <a href="#review">Reviews</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </motion.ul>
            <motion.div
              className="socials_icon_container flex items-center gap-4"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <div className="facebook w-4 h-4">
                <img src={facebook} alt="facebook icon" className="w-[100%]" />
              </div>

              <div className="instagram w-4 h-4">
                <img src={insta} alt="instagram icon" className="w-[100%]" />
              </div>

              <div className="tiktok w-4 h-4">
                <img src={tiktok} alt="tiktok icon" className="w-[100%]" />
              </div>
            </motion.div>
          </div>
          <div className="address_details_container text-white mt-[3rem] flex  gap-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h1 className="mb-[1rem]">Address:</h1>
              <h2>12 Franko St, Harare</h2>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h1 className="mb-[1rem]">Opening Hours:</h1>
              <h2>Mon-Fri 12:00 PM - 10:00 PM</h2>
              <h3>Sat-Sun 10:00 AM - 11:00 PM</h3>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h1 className="mb-[1rem]">Phone:</h1>
              <h2>+263 (055) 132-63-63</h2>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h1 className="mb-[1rem]">Email:</h1>
              <h2>info@clivesgourment.co.zw</h2>
            </motion.div>
          </div>
          <div className="flex items-center justify-center text-white mt-[4rem] pb-8">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              &copy;{currentYear}, Clive's Gourment
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
