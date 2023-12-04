import React from "react";
import { InputProduct, InputParam } from "../components";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dataEdit, setDataEdit] = useState(null);
  useEffect(() => {
    axios.get(`https://localhost:7162/api/Product/${id}`).then((response) => {
      setDataEdit(response.data);
    });
  }, []);
  console.log(id);
  const [images, setImages] = useState("");
  const [name, setName] = useState(dataEdit?.name || "");
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [color, setColor] = useState(dataEdit?.color || "");
  const [description, setDescription] = useState(dataEdit?.description || "");
  const [detail_Description, setDetail_Description] = useState(
    dataEdit?.detail_Description || ""
  );
  const [chip, setChip] = useState(dataEdit?.chip || "");
  const [ram, setRam] = useState(null);
  const [rom, setRom] = useState(null);
  const [system, setSystem] = useState(dataEdit?.system || "");
  const [address, setAddress] = useState(dataEdit?.address || "");
  const [category, setCategory] = useState(dataEdit?.category || "");
  useEffect(() => {
    setName(dataEdit?.name || "");
    setCategory(dataEdit?.category || "");
    setAddress(dataEdit?.address || "");
    setPrice(dataEdit?.price || null);
    setQuantity(dataEdit?.quantity || "");
    setColor(dataEdit?.color || "");
    setDescription(dataEdit?.description || "");
    setDetail_Description(dataEdit?.detail_Description || "");
    setChip(dataEdit?.chip || "");
    setRam(dataEdit?.ram || null);
    setRom(dataEdit?.rom || null);
    setSystem(dataEdit?.system || "");
  }, [dataEdit]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id,
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
      const response = await axios.put(
        `https://localhost:7162/api/Product/${id}`,
        data
      );
      navigate("/");
      toast("Cập nhật thành công !");
      console.log("Response from API:", response.data);
    } catch (error) {
      console.error("Error calling API:", error);
    }
    console.log(dataEdit);
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
    <>
      {dataEdit && (
        <div className="w-full  pt-2 ">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <h3 className="text-[#ff901c] text-2xl font-bold ">
                Thông tin điện thoại
              </h3>
              <div className="ml-[40px] w-[50%]">
                <InputProduct
                  defaultValue={dataEdit?.name}
                  id={"name"}
                  name={"name"}
                  htmlFor={"name"}
                  text={"Tên điện thoại:"}
                  onChange={(e) => setName(e.target.value)}
                />
                <InputProduct
                  defaultValue={dataEdit?.category}
                  id={"category"}
                  text={"Thương hiệu:"}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <InputProduct
                  defaultValue={dataEdit?.address}
                  id={"address"}
                  text={"Địa chỉ nhập hàng:"}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <InputProduct
                  defaultValue={+dataEdit?.price}
                  id={"price"}
                  name={"price"}
                  text={"Giá bán:"}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <InputProduct
                  defaultValue={dataEdit?.quantity}
                  text={"Số lượng:"}
                  id={"quantity"}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <InputProduct
                  defaultValue={dataEdit?.color}
                  text={"Màu sắc:"}
                  id={"color"}
                  onChange={(e) => setColor(e.target.value)}
                />

                <InputProduct
                  defaultValue={dataEdit?.description}
                  id={"Description"}
                  text={"Độ mới:"}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <div className="flex my-2 font-bold">
                  <h5 className="inline-block w-[150px] ">
                    Thông tin chi tiết:
                  </h5>
                  <textarea
                    id="detail_Description"
                    defaultValue={dataEdit?.detail_Description}
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
                            value={images}
                            src={images}
                            alt="phone"
                            className="h-[200px] w-[200px] object-contain"
                          />
                          <button
                            className="absolute bottom-0 cursor-pointer py-[4px] px-[10px]  border border-[#ff901c] hover:bg-secondary hover:text-white rounded-md "
                            onClick={() => {
                              setImages(images.filter((e) => e !== images));
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
                  Lưu thay đổi
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
                  defaultValue={dataEdit?.system}
                  id={"system"}
                  onChange={(e) => setSystem(e.target.value)}
                />
                <InputParam
                  defaultValue={dataEdit?.chip}
                  typeInput={"Chip"}
                  id={"chip"}
                  onChange={(e) => setChip(e.target.value)}
                />
                <InputParam
                  defaultValue={+dataEdit?.ram}
                  typeInput={"RAM"}
                  id={"ram"}
                  onChange={(e) => setRam(e.target.value)}
                />
                <InputParam
                  defaultValue={+dataEdit?.rom}
                  typeInput={"Bộ nhớ trong"}
                  id="rom"
                  onChange={(e) => setRom(e.target.value)}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default memo(EditProduct);
