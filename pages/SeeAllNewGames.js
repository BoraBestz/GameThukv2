import Navbar from "../components/navbar";
import React, { useState, createContext, useContext } from "react";
import Link from "next/link";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PageTitle from "../components/PageTitle";

function SeeAllNewGames() {
    //เปลี่ยนแปลงค่า store
    const ditpatch = useDispatch();
  
    //เข้าถึง store
    const best = useSelector((state) => ({ ...state }));
    const [gamesNewDataList, setGamesNewDataList] = useState([]);
    useEffect(() => {
      Axios.get("http://localhost:3001/click_count_all").then((response) => {
        setGamesNewDataList(response.data);
      });
    }, []);
  
    const goToGamePrice = (gameName) => {
      ditpatch({
        type: "CLICK_GAME",
        payload: gameName,
      });
      // window.location.href = '/gameprice/{game_id}';
    };
  
    return (
      <div className="">
        <Navbar />
        <div className="flex justify-center items-center flex-col pt-40 text-center lg:text-4xl text-5xl space-y-2">
          <PageTitle text="เกมใหม่ล่าสุดทั้งหมด" />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {gamesNewDataList.map((val) => (
            <Link href="/gameprice">
              <div key={val.game_id} className="group relative">
                <button onClick={() => goToGamePrice(val.game_name)}>
                  <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 ">
                    <img
                      src={val.game_image}
                      alt={val.game_image}
                      className="w-full h-full object-center object-cover "
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={val.href}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {val.game_name}
                        </a>
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ราคาถูกสุด {val.now_price} บาท
                    </p>
                  </div>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  
  export default SeeAllNewGames;
  