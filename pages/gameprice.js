import Navbar from "../components/navbar";
import Link from "next/link";
import Axios from "axios";
import { useState, useRef, Component } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function favorite() {
  const [gamesdataList, setGamesdataList] = useState([]);
  const getGamesdata = () => {
    Axios.get("http://localhost:3001/games_data").then((response) => {
      setGamesdataList(response.data);
    });
  };

  return (
    <div className="">
      <Navbar />

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <Carousel>
                <div>
                  <img
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_6eccc970b5de2943546d93d319be1b5c0618f21b.1920x1080.jpg?t=1642526157"
                    alt="image1"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.1920x1080.jpg?t=1642526157"
                    alt="image2"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_3670ba72c7e3e9c3c3225547ef2c1053504e62b8.1920x1080.jpg?t=1642526157"
                    alt="image3"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_93a3ca63aa2cd8c675bbb6430324ee3f2d44b845.1920x1080.jpg?t=1642526157"
                    alt="image4"
                  />
                </div>
                <div>
                  <img
                    src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_1bd99270dcbd4ff9fe9c94b0d9c8ffc50ebb42c7.1920x1080.jpg?t=1642526157"
                    alt="image5"
                  />
                </div>
              </Carousel>
            </div>
            <div class="lg:w-full w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                God of War
              </h1>
              <div>
                <button class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ">
                  แอ็คชัน
                </button>
                <button class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  ผจญภัย
                </button>
                <button class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  เกมสวมบทบาท
                </button>
              </div>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <span class="text-gray-600 ">
                    ผู้พัฒนา: Santa Monica Studio
                  </span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <span class="text-gray-600 ml-3">
                    ผู้จัดจำหน่าย: PlayStation PC LLC
                  </span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <span class="text-gray-600 ml-3">
                    วันวางจำหน่าย: 14 ม.ค. 2022
                  </span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <span class="text-gray-600 ml-3">
                    อายุที่ต้องการขั้นต่ำ: 18
                  </span>
                </span>
              </div>
              <p class="leading-relaxed">
                การชำระแค้นกับเหล่าทวยเทพแห่งโอลิมปัสผ่านพ้นมาหลายปีแล้ว
                บัดนี้เครโทสใช้ชีวิตเยี่ยงชายคนหนึ่งในดินแดนของเหล่าเทพเจ้าแห่งนอร์สและหมู่มวลสัตว์ประหลาด
                ในโลกอันโหดร้ายและไม่ปรานีปราศรัยแห่งนี้
                เขาต้องต่อสู้เพื่อเอาชีวิตรอด…
                และต้องสอนลูกชายให้ทำแบบเดียวกันด้วย
              </p>

              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>

              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ราคาถูกสุด: <span className="text-blue-500">1232.13</span> บาท
                </span>

                {/* ปุ่มก่อนกดติดตาม */}
                <button class="flex ml-auto mr-10 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  ติดตาม
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
                        ราคาหน้าร้าน
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        ราคา(บาท)
                      </th>
                      <th class="py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-4 py-3">GameSrig</td>
                      <td class="px-4 py-3">$10</td>
                      <td class="px-4 py-3">1390.0</td>
                      <td class="px-4 py-3 ">
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                          ซื้อเลย 🛒
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">Hrk</td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">$10</td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        1232.13
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3 ">
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                          ซื้อเลย 🛒
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        Kinguin
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">$10</td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        1522.82
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                          ซื้อเลย 🛒
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Steam
                      </td>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        $10
                      </td>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        1290.0
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                          ซื้อเลย 🛒
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        Epicgames
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">$10</td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        1290.0
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                          ซื้อเลย 🛒
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        Gamivo
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">$10</td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        1484.74
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                          ซื้อเลย 🛒
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br></br>
                <div
                  class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                  role="alert"
                >
                  <span class="font-medium">แจ้งเตือน !!</span>{" "}
                  ราคา(บาท)ที่แสดงเป็นอัตราเงินที่เปลี่ยนจากราคาต่างประเทศมาเป็นเงินบาทโดยใช้
                  api บลาๆ
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
              <p class="leading-relaxed text-base">
                ระบบปฏิบัติการ: Windows 10 64-bit หน่วยประมวลผล: Intel i5-2500k
                <br></br>
                (4 core 3.3 GHz) or AMD Ryzen 3 1200 (4 core 3.1 GHz)<br></br>
                หน่วยความจำ: แรม 8 GB กราฟิกส์: NVIDIA GTX 960 (4 GB) or AMD R9
                <br></br>
                290X (4 GB) DirectX: เวอร์ชัน 11 พื้นที่จัดเก็บข้อมูล:<br></br>
                พื้นที่ว่างที่พร้อมใช้งาน 70 GB
              </p>
            </div>

            <div class="flex flex-col md:w-1/2 md:pl-12 md:pl-8 md:pr-17">
              <h class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                สเปคแนะนำ
              </h>
              <p class="leading-relaxed text-base">
                ระบบปฏิบัติการ: Windows 10 64-bit หน่วยประมวลผล: Intel i5-6600k
                <br></br>
                (4 core 3.5 GHz) or AMD Ryzen 5 2400 G (4 core 3.6 GHz)<br></br>
                หน่วยความจำ: แรม 8 GB กราฟิกส์: NVIDIA GTX 1060 (6 GB) or AMD RX
                <br></br>
                570 (4 GB) DirectX: เวอร์ชัน 11 พื้นที่จัดเก็บข้อมูล:<br></br>
                พื้นที่ว่างที่พร้อมใช้งาน 70 GB
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default favorite;
