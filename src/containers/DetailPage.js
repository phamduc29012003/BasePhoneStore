import axios from "axios";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
const DetailPage = () => {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://localhost:7162/api/Product/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);
  return (
    <>
      {data && id && (
        <div className="mt-6 h-screen">
          <div className="flex">
            <img
              className="w-[364px] h-[364px] object-cover rounded-lg"
              src={data.images}
              alt="ok"
            />
            <div className="ml-5">
              <div>
                <div className=" font-bold text-2xl text-[#503eb6]">
                  {data.name}
                </div>
                <div className="mt-3">
                  <div className="text-lg font-medium">{`Số lượng: ${data.quantity}`}</div>
                  <div className="text-lg font-medium">{`Thương hiệu: ${data.category}`}</div>
                  <h3 className="text-lg font-medium">{`Giá: ${data.price}đ`}</h3>
                  <h4 className="text-lg font-medium">{`Màu sắc: ${data.color}`}</h4>
                  <h4 className="text-lg font-medium">{`Nơi nhận hàng: ${data.address}`}</h4>
                  <h4 className="text-lg font-medium">{`Độ mới: ${data.description}`}</h4>
                </div>
                <div>
                  <div className="mt-2 text-xl font-bold text-[#c90000]">
                    Thông số kỹ thuật
                  </div>
                  <h3>{`Hệ điều hành ${data.system}`}</h3>
                  <h3>{`Chip xử lý: ${data.chip}`}</h3>
                  <h3>{`RAM: ${data.ram}GB`}</h3>
                  <h3>{`Bộ nhớ trong: ${data.rom}GB`}</h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mt-5 text-[#503eb6] text-2xl  border-t-[3px]">
              Mô tả sản phẩm
            </h1>
            <p className="mt-3 w-[500px]">{data.detail_Description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
