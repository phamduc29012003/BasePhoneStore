import { Link } from "react-router-dom";
import imgProduct from "../assets/images/product.png";

const HeaderProduct = () => {
  return (
    <div className="w-full h-[46px] rounded-lg bg-product border-product">
      <div className="relative">
        <img
          src={imgProduct}
          className="w-[140px] h-[37px] absolute top-[-6px]"
        />
        <div className="absolute text-[#503eb6] font-medium text-lg left-7 top-[-2px] ">
          Sản phẩm
        </div>
      </div>
    </div>
  );
};

export default HeaderProduct;
