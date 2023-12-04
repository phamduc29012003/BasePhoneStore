import React from "react";
import icons from "../ultils/icon";

const { BsSearch } = icons;
const SearchButton = () => {
  return (
    <div className="relative">
      <div className="">
        <input
          className="h-[40px] w-[702px] border-[1px] border-[#eee] outline-none rounded-md pl-[15px] "
          type="text"
          placeholder="Bạn muốn tìm gì"
        />
        <div className="bg-primary text-[14px] block w-[30px] h-[30px] text-[#ccc] rounded-md flex justify-center items-center absolute top-[5px] right-[5px] cursor-pointer">
          <BsSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchButton;
