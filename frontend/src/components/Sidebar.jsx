import React, { useContext, useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";


const Sidebar = () => {
  

  return (
    <>
      <div className=" bg-sidebar-back   ">
        <div className="sidebar-container flex bg-sidebar-back w-[100%]  flex-row ">
          <div className="sidebar-heading text-gray-300  h-16 flex justify-center items-center w-[20%]">
            <img src={logo} className="w-8 h-8 mr-1" alt="logo" />
            <h1 className="text-4xl font-raleway font-bold">FaceBeats</h1>
          </div>
          <div className="sidebar-menu-container flex flex-row justify-between items-center  ml-8 w-[80%] pr-2">
            <Link to="/">
              <div className="sidebar-dashboard h-16  flex justify-center items-center    text-gray-400  hover:border-b-4">
                <div className="text-left text-2xl font-bold">Dashboard</div>
              </div>
            </Link>
            <Link to="/recommendation">
              {" "}
              <div className="sidebar-search  h-16 flex justify-center items-center text-gray-400 hover:border-b-4">
                <div className="text-left text-2xl font-bold">
                  {" "}
                  Recommendation
                </div>
              </div>
            </Link>
            <Link to="/search">
            <div className="sidebar-favourites h-16 flex justify-center items-center  text-gray-400 hover:border-b-4">
              <div className="text-left text-2xl font-bold">Search</div>
            </div>
            </Link>
            <Link to="/profile">
              <div className="sidebar-profile h-16 flex justify-center items-center   text-gray-400 hover:border-b-4">
                {" "}
                <div className="text-left text-2xl font-bold">Profile</div>
              </div>
            </Link>
            {/* <div className="sidebar-mode h-16 flex justify-center items-center   hover:border-b-4 text-gray-400">
              {" "}
              <div className="text-left text-2xl font-bold">Light Mode</div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
