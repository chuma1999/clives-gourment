import React from "react";
import "../styles/testimony.css";
import UserTestimony from "./UserTestimony";

const OPTIONS = { dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Testimonial() {
  return (
    <div className="testimonial bg-[lightgray]" id="review">
      <div className="max_width">
        <div className="user_testimonials">
          <div className="infor_cover">
            <h1 className="testimonial_heading text-2xl font-bold mb-[1rem]">
              What Our Guests Say
            </h1>
            <p className="testimonial_text mb-[2rem] w-[32rem]">
              We take pride in our guests sharring their unforgettable
              experiences. Your feedback inspires us to be even better!
            </p>
          </div>
          <div className="testimonial_courosel relative">
            <UserTestimony slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
