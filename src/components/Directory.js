import icons from "../ultils/icon";
import ProductList from "./ProductList";
import OptionButton from "./OptionButton";
import { path } from "../ultils/constant";
import { useNavigate } from "react-router-dom";

const { PiList, IoIosAddCircleOutline, GrUpdate, BsTrash } = icons;
const products = [
  "iPhone 15",
  "GALAXY S23 Series",
  "iPhone 14",
  "iPhone 13",
  "Galayx Z Fold5",
  "iPhone 12",
  "iPhone 11",
];
const Directory = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[full] h-[54px] bg-[#503eb6] flex ">
      <div className="flex w-full justify-center">
        <div className="w-[90%] flex items-center justify-between">
          <div className=" h-full flex items-center">
            <button className="w-[190px] h-[36px] bg-[#ff901c] rounded-lg p-[2px] flex items-center text-white gap-1 text-[14px] font-bold">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded-lg bg-primary ">
                <PiList color={"#fff"} size={"20px"} />
              </div>
              Danh mục sản phẩm
            </button>
          </div>
          <div className="flex w-[70%] h-[34px] items-center bg-[#fff] rounded-lg pl-[10px] pr-[px]">
            <span className="font-semibold text-[14px]">Sản phẩm nổi bật:</span>
            <ul className="flex">
              {products.map((item, index) => {
                return (
                  <li
                    className="text-sm hover:text-[#ff901c] cursor-pointer"
                    key={index}
                  >
                    <ProductList text={item} />
                  </li>
                );
              })}
            </ul>
          </div>

          <OptionButton Icon={GrUpdate} />
          <OptionButton
            onClick={() => {
              navigate(path.ADD_PRODUCT);
            }}
            Icon={IoIosAddCircleOutline}
          />
          <OptionButton Icon={BsTrash} />
        </div>
      </div>
    </div>
  );
};

export default Directory;
