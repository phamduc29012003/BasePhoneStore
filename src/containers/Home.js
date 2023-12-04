import React from "react";
import Header from "./Header";
import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import { AddProduct, DetailPage, EditProduct } from "./index";
import { path } from "../ultils/constant";
import HomePage from "./Homepage";
const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <div className=" flex justify-center h-[1022px] w-full bg-[#f6f6f6] ">
        <div className="flex justify-start  w-[90%]">
          <Routes>
            <Route path={path.ADD_PRODUCT} element={<AddProduct />} />
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/detail-product/:id" element={<DetailPage />} />
            <Route path={path.HOME} element={<HomePage />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
