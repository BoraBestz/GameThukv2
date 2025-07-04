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
  };

  const goToGameTags = (gameTag) => {
    if (gameTag.length > 0) {
      ditpatch({
        type: "SEARCH",
        payload: gameTag,
      });
    }
  };

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="">
      <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <aside class="sidebar overflow-y-auto w-80 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-50 rounded dark:bg-gray-800 py-20">
          <div class="sidebar-content px-4 py-6 space-y-2">
            <ul class="flex flex-col w-full">
              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("แอ็คชัน");
                    }}
                  >
                    <button class="ml-3" type="button">
                      แอ็คชัน
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("ผจญภัย");
                    }}
                  >
                    <button class="ml-3" type="button">
                      ผจญภัย
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("เกมสวมบทบาท");
                    }}
                  >
                    <button class="ml-3" type="button">
                      เกมสวมบทบาท
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("แคชชวล");
                    }}
                  >
                    <button class="ml-3" type="button">
                      แคชชวล
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("อินดี้");
                    }}
                  >
                    <button class="ml-3" type="button">
                      อินดี้
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("จำลองสถานการณ์");
                    }}
                  >
                    <button class="ml-3" type="button">
                      จำลองสถานการณ์
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("กีฬา");
                    }}
                  >
                    <button class="ml-3" type="button">
                      กีฬา
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("เล่นระหว่างพัฒนา");
                    }}
                  >
                    <button class="ml-3" type="button">
                      เล่นระหว่างพัฒนา
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("แข่งความเร็ว");
                    }}
                  >
                    <button class="ml-3" type="button">
                      แข่งความเร็ว
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("กลยุทธ์");
                    }}
                  >
                    <button class="ml-3" type="button">
                      กลยุทธ์
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("ผู้เล่นหลายคนจำนวนมาก");
                    }}
                  >
                    <button class="ml-3" type="button">
                      ผู้เล่นหลายคนจำนวนมาก
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("แอนิเมชันและการสร้างโมเดล");
                    }}
                  >
                    <button class="ml-3" type="button">
                      แอนิเมชันและการสร้างโมเดล
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("การออกแบบและภาพประกอบ");
                    }}
                  >
                    <button class="ml-3" type="button">
                      การออกแบบและภาพประกอบ
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("การแก้ไขรูปภาพ");
                    }}
                  >
                    <button class="ml-3" type="button">
                      การแก้ไขรูปภาพ
                    </button>
                  </a>
                </Link>
              </li>

              <li class="my-px">
                <Link href="/SeeGamesTags">
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => {
                      goToGameTags("ยูทิลิตี้");
                    }}
                  >
                    <button class="ml-3" type="button">
                      ยูทิลิตี้
                    </button>
                  </a>
                </Link>
              </li>

              <div className="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"></div>
              {/* <Link href="SeeGamesTags">
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick= {goToGameTags(gameTag)}
              >
                ค้นหา
              </button>
              </Link> */}
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
                <Link href={"/gameprice"}>
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
              <div class=" flex flex-col gap-4 mt-50 w-80 mx-auto">
                <Link href="SeeAllPopularGames">
                  <button
                    type="button"
                    class="justify-center items-center rounded-md flex py-2.5 px-5 mr-2 mb-2 text-4l font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    ดูทั้งหมด{" "}
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokewidth="2"
                      fill="none"
                      strokelinecap="round"
                      strokelinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
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
              <div class=" flex flex-col gap-4 mt-50 w-80 mx-auto">
                <Link href="SeeAllNewGames">
                  <button
                    type="button"
                    class="justify-center items-center rounded-md flex py-2.5 px-5 mr-2 mb-2 text-4l font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    ดูทั้งหมด{" "}
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokewidth="2"
                      fill="none"
                      strokelinecap="round"
                      strokelinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default homepage;
