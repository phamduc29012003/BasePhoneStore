import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { memo } from "react";
import { useParams } from "react-router-dom";
const Product = ({ productName, logoImage, IdProduct, onClick }) => {
  const [dataProduct, setDataProduct] = useState(null);
  const { productId } = useParams();
  console.log(productId);
  useEffect(() => {
    axios
      .get("https://localhost:7162/api/Product")
      .then((response: AxiosResponse<any>) => {
        setDataProduct(response);
      });
  }, []);
  console.log(dataProduct);
  const navigate = useNavigate();
  const HandleOnClick = () => {
    navigate("/detail-product/" + dataProduct.data.id);
  };
  const handleEdit = () => {
    navigate("/edit-product/:id");
  };
  console.log(dataProduct?.id);
  return (
    <div className="w-[230px] h-[300px]">
      <Link to={`/detail-product/${IdProduct}`} onClick={HandleOnClick}>
        <div className="w-[230px] h-[300px] mt-3 rounded-lg bg-[#fff] cursor-pointer hover:text-[#ff901c]">
          <div className="overflow-hidden">
            <img
              className="rounded-lg hover:scale-[110%] transition-all object-cover "
              src={logoImage}
              alt="alt"
            />
          </div>
          <p className="text-sm w-full px-[15px] overflow-hidden mt-3">
            {productName}
          </p>
        </div>
      </Link>
      {dataProduct && (
        <div>
          <Link to={`/edit-product/${IdProduct}`} onClick={handleEdit}>
            <div className="text-sm pt-[2px] px-[4px] pb-[3px] bg-secondary inline-block mt-2 rounded-lg hover:text-white">
              Sửa sản phẩm
            </div>
          </Link>
          <div
            onClick={onClick}
            className="text-sm pt-[2px] px-[4px] pb-[3px] bg-secondary inline-block mt-2 rounded-lg hover:text-white ml-[35px] cursor-pointer"
          >
            Xóa sản phẩm
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Product);
