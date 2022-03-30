import Navbar from "../components/navbar";
import Link from "next/link";
import Axios from "axios";
import { useState, useRef, Component } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


function favorite() {
  const [show, setShow] = useState(null);

  //เข้าถึง store
  const best = useSelector((state) => ({ ...state }));
  const [gameFavoriteList, setGameFavoriteList] = useState([]);
  const [userDataList, setUserDataList] = useState([]);
  const [userNeedPrice, setUserNeedPrice] = useState("");
  
  const fetchData = () => {
    if (best.user != null){
       Axios.get("http://localhost:3001/favoriteGame/"+ best.userId, {
        }).then((response) => {
            setGameFavoriteList(response.data);
        }); 
    }
  }

  //auto fetchData if data change
  useEffect(() => {
    fetchData();
    if (fetchData.length) fetchData();
    }, [fetchData]);

  async function notifyPrice(userNeedPrice,gameId) {
    if (userNeedPrice.length > 0){
      await Axios.post("http://localhost:3001/updatePriceNotifyGame/", {
        userNeedPrice: userNeedPrice,
        gameId: gameId,
        userId: best.userId,
        }).then((response) => {
            
        }); 
    }
  }

  async function  deleteFavoriteGame(gameId){
    await Axios.post("http://localhost:3001/deleteFavoriteGame", {
      gameId: gameId,
      userId: best.userId,
    }).then((response) => {
      console.log(gameId)
    }); 
  }
  console.log(userNeedPrice)
  return (
    <>
      <Navbar />
      <div className="w-full sm:px-6 py-20">
        <div className="px-4 md:px-10 py-4 md:py-7  rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center flex flex-col text-center w-full">
            <p className="text-base sm:text-4l md:text-4xl lg:text-4xl leading-normal text-gray-800">
              เกมที่ติดตาม
            </p>
            <br></br>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">เกม</th>
                <th className="font-normal text-left pl-12">ราคาถูกสุด</th>
                <th className="font-normal text-left pl-12">
                  ราคาที่จะแจ้งเตือนหากถูกกว่า
                </th>
                <th className="font-normal text-left pl-20">
                  ราคาที่ต้องการให้แจ้งเตือนเมื่อราคาถูกกว่าราคาที่กำหนด
                </th>
                <th className="font-normal text-left pl-20">เลิกติดตามเกม</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {/* -------------------------------------เริ่มแถว----------------------------------- */}
            {gameFavoriteList.map((val) => (
              <tr key={val.game_id} className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-15 h-10 ">
                      <img
                        className="w-full h-full object-center object-cover"
                        src={val.game_image}
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">{val.game_name}</p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                  {val.lowest_price} <a className="font-medium text-gray-600 ml-2">บาท</a>
                  </p>
                </td>
                <td className="pl-12 text-blue-600">
                  <p className="font-medium">
                    
                    <a className="ml-2">{val.need_price}</a>
                    <a className="font-medium text-gray-600 ml-2">บาท</a>
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">
                    <div className="">
                      <input
                        class=" ml-3 py-2.5 px-0 w-25 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                        placeholder=" "
                        required
                        onChange={(event) => {
                          setUserNeedPrice(event.target.value)
                        }}
                      />
                      <a className="font-medium text-gray-600 ml-2">บาท</a>

                      <button
                        type="button"
                        class="ml-5 py10 text-white bg-blue-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        required
                        onClick={() => {
                          notifyPrice(userNeedPrice,val.game_id)
                        }}
                      >
                        ยืนยัน
                      </button>
                    </div>
                  </p>
                </td>
                <td className="pl-20">
                  <button
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={() => deleteFavoriteGame(val.game_id)}
                  >
                    เลิกติดตาม
                  </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default favorite;
