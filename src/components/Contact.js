import React from "react";

import { memo } from "react";
const Contact = ({
  Icon,
  text1,
  text2,
  widthContact,
  heightContact,
  sizeIcon,
}) => {
  return (
    <button className={`flex items-center ${widthContact} ${heightContact}`}>
      <div className={`${sizeIcon} text-[#6b7075] pr-2`}>
        {Icon && <Icon />}
      </div>
      <div className="block">
        <span className="text-sm block leading-[16px] ">{text1}</span>
        <a
          className="text-[18px] font-[500] block leading-[22px] text-primary hover:text-[#ff901c]"
          href="/"
        >
          {text2}
        </a>
      </div>
    </button>
  );
};

export default memo(Contact);
