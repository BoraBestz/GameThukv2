import Navbar from "../components/navbar";
import React, { useState, createContext, useContext  } from "react";
import Link from "next/link";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function SearchGameList({data}) {

   //เปลี่ยนแปลงค่า store
   const ditpatch = useDispatch();

   //เข้าถึง store
   const best = useSelector((state) => ({ ...state }));


    return (
        
      <div className="">
          <Navbar />
        <div className="flex justify-center items-center flex-col pt-40 text-center lg:text-4xl text-5xl space-y-2">
          <h1 className="text-center">ผลการค้นหา </h1>
          <h2> {best.game} (number) รายการ</h2>
        </div>
      </div>
    );
  }
  
  export default SearchGameList;
  