import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import axios from "axios";
import ActionAreaCard from "../components/HomeCard";
import { Outlet } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import MenuComponent from "../components/MenuComponent";
function LandingPage() {
  const userStatus = useSelector((state) => state.status);
  const [sideBar, setSideBar] = useState(false);

  return (
    <div className="bg-gradient-to-r from-slate-900 to-black min-h-screen relative">
      <Header stauts={userStatus} />
      <div className="flex">
        <div className="sticky mt-[126px] h-[80vh]  bg-neutral-700/40 w-[15vw]  p-4">
          <div className="flex  align-middle mt-10">
            <ListIcon style={{ fill: "violet", fontSize: 40 }} />
            <label htmlFor="" className="text-white  text-3xl ml-5 font-bold">
              Menu
            </label>
          </div>
          <MenuComponent status={userStatus} />
        </div>
        <div className="mx-10 w-[80vw] flex flex-col  pt-36">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
