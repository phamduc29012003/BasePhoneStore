import React from "react";
import { SearchButton, Contact, Directory } from "../components";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import icons from "../ultils/icon";

const { FiPhoneCall, IoStorefrontOutline } = icons;
const Header = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-center  ">
        <div className=" flex h-[70px] items-center justify-between w-[90%]">
          <div className="">
            <Link to={"/"}>
              <img className="w-[185px] h-[30px] " src={logo} alt="logo" />
            </Link>
          </div>
          <SearchButton />
          <div className="flex gap-6">
            <Contact
              sizeIcon={"text-[26px]"}
              widthContact={"w-120px"}
              heightContact={"h-[36px]"}
              text1={"Hỗ trợ 24h"}
              text2={"8888 8888"}
              Icon={FiPhoneCall}
            />
            <Contact
              sizeIcon={"text-[28px]"}
              widthContact={"140px"}
              heightContact={"36px"}
              text1={"Số hệ thống"}
              text2={"1 cửa hàng"}
              Icon={IoStorefrontOutline}
            />
          </div>
        </div>
      </div>
      <Directory />
    </div>
  );
};
export default Header;
