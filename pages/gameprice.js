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
              {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Release Date
              </h2> */}
              <div class="flex mb-4">
                <span class="flex items-center">
                  <span class="text-gray-600 ml-3">
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
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  ติดตามราคาเกม
                </button>

                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>

              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              {/* -----ส่วนจัดเรียงราคา----- */}
              <div class="lg:w-full w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                        ร้านค้า
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        {/* Speed */}
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        {/* Storage */}
                      </th>
                      <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                        ราคา
                      </th>
                      {/* <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-4 py-3">GameSrig</td>
                      <td class="px-4 py-3">{/* 5 Mb/s */}</td>
                      <td class="px-4 py-3">{/* 15 GB */}</td>
                      <td class="px-4 py-3 text-lg text-gray-900">$12</td>
                      {/* <td class="w-10 text-center">
                        <input name="plan" type="radio" />
                      </td> */}
                    </tr>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">Hrk</td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {/* 25 Mb/s */}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {/* 25 GB */}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $24
                      </td>
                      {/* <td class="border-t-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio" />
                      </td> */}
                    </tr>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        Kinguin
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {/* 36 Mb/s */}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {/* 40 GB */}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $50
                      </td>
                      {/* <td class="border-t-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio" />
                      </td> */}
                    </tr>
                    <tr>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        Steam
                      </td>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {/* 48 Mb/s */}
                      </td>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3">
                        {/* 120 GB */}
                      </td>
                      <td class="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $72
                      </td>
                      {/* <td class="border-t-2 border-b-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio" />
                      </td> */}
                    </tr>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        Epicgames
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {/* 36 Mb/s */}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {/* 40 GB */}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $50
                      </td>
                      {/* <td class="border-t-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio" />
                      </td> */}
                    </tr>
                    <tr>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        Gamivo
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {/* 36 Mb/s */}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3">
                        {/* 40 GB */}
                      </td>
                      <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
                        $50
                      </td>
                      {/* <td class="border-t-2 border-gray-200 w-10 text-center">
                        <input name="plan" type="radio" />
                      </td> */}
                    </tr>
                  </tbody>
                </table>
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
                Locavore cardigan small batch roof party blue bottle blog
                meggings sartorial jean shorts kickstarter migas sriracha
                church-key synth succulents. Actually taiyaki neutra, distillery
                gastropub pok pok ugh.
              </p>
            </div>

            <div class="flex flex-col md:w-1/2 md:pl-12 md:pl-8 md:pr-17">
              <h class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                สเปคพื้นฐาน
              </h>
              <p class="leading-relaxed text-base">
                Locavore cardigan small batch roof party blue bottle blog
                meggings sartorial jean shorts kickstarter migas sriracha
                church-key synth succulents. Actually taiyaki neutra, distillery
                gastropub pok pok ugh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default favorite;
