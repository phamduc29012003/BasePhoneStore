import { memo } from "react";

const InputProduct = ({ text, value, onChange, id, name, defaultValue }) => {
  return (
    <div className=" my-2 font-bold">
      <h5 className="inline-block w-[150px]" value={value}>
        {text}
      </h5>
      <input
        defaultValue={defaultValue}
        id={id}
        name={name}
        type="text"
        className="outline-none border-[1px] border-[#ccc] px-[10px] rounded-md w-[50%]"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default memo(InputProduct);
