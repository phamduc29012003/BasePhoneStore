import { HeaderProduct } from "../components";
import { Product } from "../components";
import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const HomePage = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://localhost:7162/api/Product")
      .then((response: AxiosResponse<any>) => {
        setData(response);
      });
  }, []);
  const fetchData = () => {
    axios
      .get("https://localhost:7162/api/Product")
      .then((response: AxiosResponse<any>) => {
        setData(response);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="mt-6 w-full">
      <div className="w-full rounded-lg">
        <HeaderProduct />
        <div className=" flex gap-4 flex-wrap gap-y-10">
          {data &&
            data.data.map((item, index) => {
              return (
                <Product
                  key={index}
                  IdProduct={item?.id}
                  productName={item?.name}
                  logoImage={item?.images}
                  onClick={() => {
                    Swal.fire({
                      title: "Xóa sản phẩm này !",
                      text: "Bạn có chắc chắn không ?",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonColor: "#3085d6",
                      cancelButtonColor: "#d33",
                      confirmButtonText: "Có !",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire({
                          title: "Đã xóa !",
                          text: "Xóa thành công.",
                          icon: "success",
                        });
                        axios
                          .delete(
                            `https://localhost:7162/api/Product/${item?.id}`
                          )
                          .then(() => {
                            fetchData();
                            navigate("/");
                          })
                          .catch((error) => {
                            console.error("Lỗi khi xóa sản phẩm:", error);
                          });
                      }
                    });
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
