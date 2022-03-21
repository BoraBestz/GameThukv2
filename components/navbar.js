import React, { useState, createContext, useContext  } from "react";
import Link from "next/link";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [gameName, setgameName] = useState("");
  const [gamesdataList, setGamesdataList] = useState([]);

  //เปลี่ยนแปลงค่า store
  const ditpatch = useDispatch();

  //เข้าถึง store
  const best = useSelector((state) => ({ ...state }));
 
  const getGamesdata = () => {
    if (gameName.length > 0) {
      
        ditpatch({
          type: "SEARCH",
          payload: gameName
          
        });
        // window.location.href = '/searchGameList';
    }
  };
  const testClick = () => {
     if (best.user != null) {
      window.location.href = '/login';
     }
  }

  return (
    <nav className=" bg-blue-50 shadow-sm fixed w-full z-10">

      <div className="w-full">
        <div className="flex items-center h-20 w-full">
          <div className="flex items-center  mx-20  justify-between w-full">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <h1 className=" font-bold text-xl cursor-pointer">
                <Link href="/">
                  <a>
                    Game<span className="text-blue-500">Thuk</span>
                  </a>
                </Link>
              </h1>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center">
                <div className="flex border-2 rounded">
                  <form>
                    <input
                      type="text" 
                      className="px-4 py-2 w-80"
                      placeholder="ค้นหา..."
                      onChange={(event) => {
                        setgameName(event.target.value);
                      }}
                    />
                  </form>
                  <Link href="/searchGameList">
                  <button 
                    type="button"
                    className="bg-white flex items-center justify-center px-4 border-l"
                    onClick= {getGamesdata}
                    
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
                  </Link>

                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/">
                  <a>
                    <div className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black">
                      หน้าแรก
                    </div>
                  </a>
                </Link>

                <Link href="/favorite">
                  <a>
                    <div className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black">
                      ติดตามเกม
                    </div>
                  </a>
                </Link>

                <a>
                  <div className="text-black font-semibold px-3 py-2 text-md hover:font-black">
                    {best.user}
                  </div>
                </a>
                
                <Link href="/login" >
                <button 
                    type="button"
                    className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
                    onClick= {testClick}
                    
                  >
                  <a>
                    <div className="">
                     {best.user == null ? 'เข้าสู่ระบบ' : 'ออกจากระบบ'}
                    </div>
                  </a>
              </button>

                </Link>
              </div>
              
              {/* {gamesdataList.map((val, key) => {
                return (
                  <div className="grid grid-cols-30 gap-20" key={key}> 
                    <div className="bg-blue-300 p-3 rounded">
                      <Link href="/gameprice">
                          <a className="text-3xl">
                            {val.game_name}{" "}
                            <img src={val.game_image} alt="new" />
                            <div className="text-2xl">ราคาถูกสุด</div>
                            <div className="text-1xl">{val.now_price} บาท</div>
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
