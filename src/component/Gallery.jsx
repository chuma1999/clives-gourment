import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import EmblaCarousel from "../component/EmblaCarousel";
import "../styles/gallery.css";
import "../styles/embla.css";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Gallery() {
  return (
    <div className="gallery_cover bg-[lightgray] mt-[4rem] pb-14">
      <div className="text_heading max_width pt-10">
        <h1 className="our_gallery mb-[1rem] text-2xl font-bold meet-her">
          Our Gallery
        </h1>
        <p className="gallery_text w-[32rem] mb-8">
          Experience the magic of Clive's Gourment through out gallery! Explore
          our gallery to see how every detail is designed to make your
          experience truly unique.
        </p>
      </div>
      <div className="">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default Gallery;
