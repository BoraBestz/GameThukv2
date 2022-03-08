import navbar from "./navbar";
import { useState } from "react";
import Axios from "axios";
import Link from "next/link";

function homepage(props) {
  const [gamesdataList, setGamesdataList] = useState([]);
  const getGamesdata = () => {
    Axios.get("http://localhost:3001/games_data").then((response) => {
      setGamesdataList(response.data);
    });
  };

  return (
    
    <div className="bg-purple-100 flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-4xl text-5xl space-y-2"> รายชื่อเกม 100 เกม
    
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

      <br></br>

      {gamesdataList.map((val, key) => {
        return (
          <div className="grid grid-cols-30 gap-20 " key={key} >
            <div className="bg-blue-300 p-3 rounded"> 
              <Link href="/gameprice">
                  <a className="text-3xl">
                    {val.game_name} <img width= "500" height = "500" src={val.game_image} alt="new" />
                    <div className="text-2xl">ราคาถูกสุด 
                      </div>
                      <div className="text-1xl">
                      {val.now_price} บาท
                      </div>
                  </a>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default homepage;
