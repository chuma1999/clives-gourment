import React from "react";
import Header from "../component/Header";
import "../styles/home.css";

function Home() {
  return (
    <div className="home_container h-[98vh] rounded-t-3xl rounded-b-[3rem] relative">
      <Header />
      <div className="gourment_container flex items-center justify-center mt-40 ">
        <div className="flex flex-col items-center">
          <h1 className=" heading_text text-[3.3rem] leading-[3.5rem] text-center text-white mb-5">
            Clive's Gourment <br />
            Flavours That Tell Stories
          </h1>
          <p className="padding_side text-white text-[1.2rem] w-[25rem] font-light text-center mb-10">
            Discover exquisite cuisine where every dish is crafted with love and
            inspiration.
          </p>
          <div className="book_order_container flex flex-col gap-3 items-center">
            <button className="book_btn bg-white text-[#857313] font-semibold p-[.5rem_1rem] rounded-3xl hover:bg-[#857313] hover:text-white">
              Book Your Table
            </button>
            <p className="below_btn_text text-white font-light w-[20rem] text-center">
              Secure your spot for an unforgettable dining experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
