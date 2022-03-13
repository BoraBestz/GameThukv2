import navbar from "./navbar";
import { useState } from "react";
import Axios from "axios";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "./PageTitle";

function homepage() {
  const [gamesdataList, setGamesdataList] = useState([]);
  const getGamesdata = () => {
    Axios.get("http://localhost:3001/games_data").then((response) => {
      setGamesdataList(response.data);
    });
  };
  console.log(gamesdataList)
  return (
    <div className="">
      <PageTitle text="เกมใหม่ล่าสุด!" />
      <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
        เกมใหม่ล่าสุด 100 รายการ 🎮
      </p>
      <button
        className="flex items-center justify-center px-4 border-l"
        onClick={getGamesdata}
      >
        <svg
          className="w-6 h-6 text-gray-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      </button>
      
      <div className="py-12  grid grid-cols-1 grid-cols-2 grid-cols-3 grid-cols-4 grid-cols-5 gap-4">
        {gamesdataList.map((val, key) => {
          return (
            <Link href="/gameprice">
            <a className="h-150 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
              <div className="h-50 border-b-2 border-palette-lighter relative">
                <p><img  src={val.game_image} alt="new" /></p>
              </div>
              <div className="h-48 relative">
                <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
                  <p>{val.game_name}</p>
                </div>
                <div className="text-lg text-gray-600 p-4 font-primary font-light">
                  <p>รายละเอียดเกม {val.game_description}</p>
                </div>
                <div
                  className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
           rounded-tl-sm triangle"
                >
                  <p>ราคาถูกสุด {val.now_price} บาท</p>
                </div>
              </div>
            </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default homepage;
