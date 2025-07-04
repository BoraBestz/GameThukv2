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
  //เข้าถึง store
  const store = useSelector((state) => ({ ...state }));
  const [gamesdataList, setGamesdataList] = useState([]);
  const [gamesPriceList, setGamesPriceList] = useState([]);
  const [gamesTagsList, setgamesTagsList] = useState([]);
  const [userDataList, setUserDataList] = useState([]);

  useEffect(async () => {
    await Axios.get("http://localhost:3001/gameprice/" + store.game, {}).then(
      (response) => {
        setGamesdataList(response.data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/priceList/" + store.game, {}).then(
      (response) => {
        setGamesPriceList(response.data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/tagsList/" + store.game, {}).then(
      (response) => {
        setgamesTagsList(response.data);
      }
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:3001/gamecount/" + store.game, {}).then(
      (response) => {}
    );
  }, []);

  useEffect(() => {
    if (store.user != null) {
      Axios.get("http://localhost:3001/user/" + store.user, {}).then(
        (response) => {
          setUserDataList(response.data);
        }
      );
    }
  }, []);

  const addFavorite = () => {
    if (store.user != null) {
      Axios.post("http://localhost:3001/getDataFavoriteGame/", {
        gameId: gamesdataList[0].game_id,
        userId: userDataList[0].user_id,
      }).then((response) => {
        if (response.data.message) {
          Axios.post("http://localhost:3001/subscribeGame/", {
            gameId: gamesdataList[0].game_id,
            gamePrice: gamesdataList[0].lowest_price,
            userId: userDataList[0].user_id,
          }).then(() => {});
          alert("คุณได้ติดตามเกม " + gamesdataList[0].game_name);
        } else {
          alert("คุณติดตามเกม " + gamesdataList[0].game_name + " ไว้อยู่แล้ว");
        }
      });

      // } else {
      //   alert("คุณได้ติดตามเกม" + gamesdataList[0].game_name);
      // }
    } else {
      alert("กรุณาเข้าสู่ระบบก่อน");
      window.location.href = "/login";
    }
  };
  // console.log(gamesdataList[0])
  if (userDataList.length > 0) {
    console.log("user id: " + userDataList[0].user_id);
    console.log("price: " + gamesdataList[0].lowest_price);
    console.log("game id: " + gamesdataList[0].game_id);
  }
  return (
    <div className="">
      <Navbar />
      {gamesdataList.map((val) => (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                <Carousel>
                  <div>
                    <img src={val.screenshots_1} alt="image1" />
                  </div>
                  <div>
                    <img src={val.screenshots_2} alt="image2" />
                  </div>
                  <div>
                    <img src={val.screenshots_3} alt="image3" />
                  </div>
                  <div>
                    <img src={val.screenshots_4} alt="image4" />
                  </div>
                  <div>
                    <img src={val.screenshots_5} alt="image5" />
                  </div>

                  <div>
                    <iframe
                      src={val.movies}
                      width="981"
                      height="552"
                      frameborder="0"
                      allow="fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </Carousel>
              </div>

              <div class="lg:w-full w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {val.game_name}
                </h1>
                <div>
                  {gamesTagsList.map((val) => (
                    <button class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ">
                      {val.tag_name}
                    </button>
                  ))}
                </div>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <span class="text-gray-600 ">
                      ผู้พัฒนา: {val.developer}
                    </span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <span class="text-gray-600 ml-3">
                      ผู้จัดจำหน่าย: {val.publisher}
                    </span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <span class="text-gray-600 ml-3">
                      วันวางจำหน่าย: {val.release_date}
                    </span>
                  </span>
                  <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <span class="text-gray-600 ml-3">
                      อายุที่ต้องการขั้นต่ำ: {val.required_age}
                    </span>
                  </span>
                </div>
                <p class="leading-relaxed">{val.game_description}</p>

                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>

                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    ราคาถูกสุด:{" "}
                    <span className="text-blue-500">{val.lowest_price}</span>{" "}
                    บาท
                  </span>

                  {/* ปุ่มก่อนกดติดตาม */}
                  <button
                    class="flex ml-auto mr-10 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                    onClick={addFavorite}
                  >
                    ติดตาม 💓
                  </button>
                  {/* ปุ่มหลังจากกดติดตามไปแล้ว */}
                  {/* <button class="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded">
                  ติดตามแล้ว
                </button> */}
                </div>

                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>

                {/* -----ส่วนจัดเรียงราคา----- */}

                <div class="lg:w-full w-full mx-auto overflow-auto">
                  <table class="table-fixed w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                          ร้านค้า
                        </th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          ราคาก่อนแปลงค่า
                        </th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                          ราคา(บาท)
                        </th>
                        <th class="py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                      </tr>
                    </thead>
                    {gamesPriceList.map((val) => (
                      <tbody>
                        <tr>
                          <td class="px-4 py-3">{val.market_name}</td>
                          <td class="px-4 py-3">
                            {val.market_id == "9" && val.before_price != 0
                              ? "$ " + val.before_price
                              : (val.market_id == "10" &&
                                  val.before_price != null) ||
                                (val.market_id == "13" && val.before_price != 0)
                              ? "€ " + val.before_price
                              : ""}
                          </td>
                          <td class="px-4 py-3">
                            {val.now_price != null
                              ? val.now_price
                              : "out of stock"}
                          </td>
                          <td class="px-4 py-3 ">
                            <a target="_blank" href={val.market_url}>
                              <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                                ซื้อเลย 🛒
                              </button>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                  <br></br>
                  <div
                    class="flex p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                    role="alert"
                  >
                    <svg
                      class="inline flex-shrink-0 mr-3 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <span class="font-medium">
                        ราคา(บาท)ที่แสดงเป็นอัตราเงินที่เปลี่ยนจากราคาต่างประเทศมาเป็นเงินบาทโดยใช้
                        api currency converter{" "}
                      </span>
                    </div>
                  </div>
                </div>
                {/* จบส่วนจัดเรียงราคา */}
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              </div>
              {/* ส่วนสเปค */}
              <div class="md:w-1/2 md:pr-17 md:pl-8 md:py-1 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  สเปคขั้นต่ำ
                </h1>
                <p
                  class="leading-relaxed text-base"
                  dangerouslySetInnerHTML={{ __html: val.spec_minimum }}
                ></p>
              </div>

              <div class="flex flex-col md:w-1/2 md:pl-12 md:pl-8 md:pr-17">
                <h class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  สเปคแนะนำ
                </h>
                <p
                  class="leading-relaxed text-base"
                  dangerouslySetInnerHTML={{ __html: val.spec_recommend }}
                ></p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default favorite;
