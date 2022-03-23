import navbar from "./navbar";
import { useState } from "react";
import Axios from "axios";
import Link from "next/link";
import Image from "next/image";
import PageTitle from "./PageTitle";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function homepage() {
  //เปลี่ยนแปลงค่า store
  const ditpatch = useDispatch();

  //เข้าถึง store
  const best = useSelector((state) => ({ ...state }));
  const [gamesdataList, setGamesdataList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/games_data").then((response) => {
      setGamesdataList(response.data);
    });
  }, []);

  const goToGamePrice = (gameName) => {
    ditpatch({
      type: "CLICK_GAME",
      payload: gameName,
    });
    // window.location.href = '/gameprice/{game_id}';
  };
  console.log('homepage')

  return (
    <div className="">
      <div class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <div className="max-w-2xl mx-auto py-20 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
          <PageTitle text="เกมใหม่ล่าสุด!" />
          <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
            เกมใหม่ล่าสุด 100 รายการ 🎮
          </p>
          <br></br>
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            เกมใหม่ล่าสุด
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {gamesdataList.map((val) => (
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
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
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
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////// */}
    </div>
  );
}

export default homepage;