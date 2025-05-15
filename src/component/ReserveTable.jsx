import React from "react";
import "../styles/footer.css";

function ReserveTable() {
  return (
    <div
      className="reserve_table_container rounded-t-[3rem] p-[8rem_0rem] anchor-link"
      id="reserve"
    >
      <div className="content_detail_cover flex flex-col items-center gap-[1rem]">
        <h1 className="text-[2rem] text-white font-semibold w-[26rem] text-center">
          Reserve Your Evening at Clive's Gourment
        </h1>
        <p className="text-white font-light w-[32rem] text-center">
          With just a few clicks, you can secure your perfect evening at Clives
          Gourment. Whether it's a romantic dinner or a celebration with
          friends, we'll handle every detail to make it unforgettable
        </p>
        <button className="book_btn bg-white text-[#857313] font-semibold p-[.5rem_1rem] rounded-3xl hover:bg-[#857313] hover:text-white mt-4">
          Book Your Table
        </button>
      </div>
    </div>
  );
}

export default ReserveTable;
