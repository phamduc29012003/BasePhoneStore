import React from "react";
import { InputProduct, InputParam } from "../components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddProduct = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [detail_Description, setDetail_Description] = useState("");
  const [chip, setChip] = useState("");
  const [ram, setRam] = useState("");
  const [rom, setRom] = useState("");
  const [system, setSystem] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      images,
      name,
      price,
      quantity,
      color,
      description,
      detail_Description,
      chip,
      ram,
      rom,
      system,
      address,
      category,
    };
    try {
      const response = await axios.post(
        "https://localhost:7162/api/Product",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", response.data);
      toast("Thêm mới thành công !");
    } catch (error) {
      console.error("Error calling API:", error);
    }
    console.log(data);
    navigate("/");
  };

  const onSelectFile = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImages(reader.result);
    };
  };
  return (
    <div className="w-full  pt-2 ">
      <form onSubmit={handleSubmit} method="put">
        <div className="flex">
          <h3 className="text-[#ff901c] text-2xl font-bold ">
            Thông tin điện thoại
          </h3>
          <div className="ml-[40px] w-[50%]">
            <InputProduct
              id={"name"}
              name={"name"}
              htmlFor={"name"}
              text={"Tên điện thoại:"}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputProduct
              id={"category"}
              text={"Thương hiệu:"}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <InputProduct
              id={"address"}
              text={"Địa chỉ nhập hàng:"}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputProduct
              id={"price"}
              text={"Giá bán:"}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <InputProduct
              text={"Số lượng:"}
              id={"quantity"}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <InputProduct
              text={"Màu sắc:"}
              id={"color"}
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />

            <InputProduct
              id={"Description"}
              text={"Độ mới:"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className="flex my-2 font-bold">
              <h5 className="inline-block w-[150px] ">Thông tin chi tiết:</h5>
              <textarea
                id="detail_Description"
                value={detail_Description}
                onChange={(e) => setDetail_Description(e.target.value)}
                type="text"
                className="outline-none border-[1px] border-[#ccc] px-[10px] rounded-md w-[50%] min-h-[70px]"
              ></textarea>
            </div>
            <div className="">
              <h5 className="inline-block">Thêm hình ảnh</h5>
              <section className="p-2">
                <label className="w-[130px] h-[130px] rounded-[20px] cursor-pointer border-[1px] border-dotted border-black flex flex-col justify-center items-center">
                  + Add Images
                  <input
                    type="file"
                    name="images"
                    id="images"
                    onChange={onSelectFile}
                    className=" rounded-md hidden "
                    accept="image/png , image/jpeg , image/webp "
                  ></input>
                </label>

                <div className=" flex flex-row flex-wrap justify-center shadow-slate-300 relative gap-6 border border-[#3e4296] mt-[10px] rounded-lg ">
                  {images && (
                    <div className="flex flex-row flex-wrap justify-center shadow-slate-300 relative ">
                      <img
                        src={images}
                        alt="phone"
                        className="h-[200px] w-[200px] object-contain"
                      />
                      <button
                        className="absolute bottom-0 cursor-pointer py-[4px] px-[10px]  border border-[#ff901c] hover:bg-secondary hover:text-white rounded-md "
                        onClick={() => {
                          setImages("");
                        }}
                      >
                        Xóa ảnh
                      </button>
                    </div>
                  )}
                </div>
              </section>
            </div>
            <button className="px-[10px] py-[5px] bg-secondary rounded-md">
              Lưu sản phẩm
            </button>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Thông số kỹ thuật
            </label>
            <InputParam
              typeInput={"Hệ điều hành"}
              id={"system"}
              value={system}
              onChange={(e) => setSystem(e.target.value)}
            />
            <InputParam
              value={chip}
              typeInput={"Chip"}
              id={"chip"}
              onChange={(e) => setChip(e.target.value)}
            />
            <InputParam
              value={ram}
              typeInput={"RAM"}
              id={"ram"}
              onChange={(e) => setRam(e.target.value)}
            />
            <InputParam
              value={rom}
              typeInput={"Bộ nhớ trong"}
              id="rom"
              onChange={(e) => setRom(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
