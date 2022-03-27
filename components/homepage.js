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
  const [gamesPopularDataList, setGamesPopularDataList] = useState([]);
  const [gamesNewDataList, setGamesNewDataList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/click_count_top12").then((response) => {
      setGamesPopularDataList(response.data);
    });
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/games_new_top12").then((response) => {
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
  console.log("homepage");
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="">
      <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <aside class="sidebar overflow-y-auto w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-50 rounded dark:bg-gray-800 py-20">
          <div class="sidebar-content px-4 py-6 space-y-2">
            <ul class="flex flex-col w-full">
              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">แอ็คชัน</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">ผจญภัย</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">เกมสวมบทบาท</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">แคชชวล</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">อินดี้</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">จำลองสถานการณ์</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">กีฬา</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">เล่นระหว่างการพัฒนา</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">แข่งความเร็ว</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">กลยุทธ์</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">ผู้เล่นหลายคนจำนวนมาก</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">แอนิเมชันและการสร้างโมเดล</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">การออกแบบและภาพประกอบ</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">การแก้ไขรูปภาพ</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>

              <li class="my-px">
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <span class="ml-3">ยูทิลิตี้</span>
                  <div class="flex items-center justify-center h-6 px-2 rounded-full ml-auto">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                </a>
              </li>
              <div className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></div>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                ค้นหา
              </button>
            </ul>
          </div>
        </aside>

        <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in py-20 bg-white">
          <div class="main-content flex flex-col flex-grow p-4 ">
            <div className="flex justify-center items-center flex-shrink-0 ">
              <h1 className=" font-bold text-xl ">
                <a className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
                  Game<span className="text-blue-500">Thuk</span>
                </a>
              </h1>
            </div>

            <p className="max-w-xl text-center px-2 mx-auto text-4l text-gray-600">
              แหล่งรวมเกมถูกหลากหลายรายการ 🎮
            </p>
            <br></br>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              เกมยอดนิยม
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {gamesPopularDataList.map((val) => (
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
              <br></br>
              <Link href="SeeAllPopularGames">
                <button className="max-w-xl text-center px-2 mx-auto text-4l text-blue-600">
                  ดูทั้งหมด
                </button>
              </Link>
            </div>

            <div className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></div>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              เกมใหม่ล่าสุด
            </h2>
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
              <br></br>
              <Link href="SeeAllNewGames">
                <button className="max-w-xl text-center px-2 mx-auto text-4l text-blue-600">
                  ดูทั้งหมด
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default homepage;
