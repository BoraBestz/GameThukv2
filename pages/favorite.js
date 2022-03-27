import Navbar from "../components/navbar";
import Link from "next/link";
import React, { useState } from "react";

function favorite() {
  const [show, setShow] = useState(null);
  return (
    <>
      <Navbar />
      <div className="w-full sm:px-6 py-20">
        <div className="px-4 md:px-10 py-4 md:py-7  rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center flex flex-col text-center w-full">
            <p className="text-base sm:text-4l md:text-4xl lg:text-4xl leading-normal text-gray-800">
              เกมที่ติดตาม
            </p>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">เกม</th>
                <th className="font-normal text-left pl-12">ราคาถูกสุด</th>
                <th className="font-normal text-left pl-12">
                  แจ้งเตือนเมื่อราคาถูกกว่าปัจจุบัน
                </th>
                <th className="font-normal text-left pl-20">
                  แจ้งเตือนเมื่อราคาถูกกว่าราคาที่กำหนด
                </th>
                <th className="font-normal text-left pl-20">เลิกติดตามเกม</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {/* -------------------------------------เริ่มแถว----------------------------------- */}
              <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-15 h-10 ">
                      <img
                        className="w-full h-full object-center object-cover"
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">God of War</p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    999 <a className="font-medium text-gray-600 ml-2">บาท</a>
                  </p>
                </td>
                <td className="pl-12 text-blue-600">
                  <p className="font-medium">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                    <a className="ml-2">999</a>
                    <a className="font-medium text-gray-600 ml-2">บาท</a>
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">
                    <div className="">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />

                      <input
                        class=" ml-3 py-2.5 px-0 w-25 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                        placeholder=" "
                        required
                      />
                      <a className="font-medium text-gray-600 ml-2">บาท</a>
                    </div>
                  </p>
                </td>
                <td className="pl-20">
                  <button
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    เลิกติดตาม
                  </button>
                </td>
              </tr>
              {/* ---------------------------จบหนึ่งแถว--------------------------------- */}
              <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-4 cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-15 h-10 ">
                      <img
                        className="w-full h-full object-center object-cover"
                        src="https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">God of War</p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    999 <a className="font-medium text-gray-600 ml-2">บาท</a>
                  </p>
                </td>
                <td className="pl-12 text-blue-600">
                  <p className="font-medium">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                    <a className="ml-2">999</a>
                    <a className="font-medium text-gray-600 ml-2">บาท</a>
                  </p>
                </td>
                <td className="pl-20">
                  <p className="font-medium">
                    <div className="">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />

                      <input
                        class=" ml-3 py-2.5 px-0 w-25 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
                        placeholder=" "
                        required
                      />
                      <a className="font-medium text-gray-600 ml-2">บาท</a>
                    </div>
                  </p>
                </td>
                <td className="pl-20">
                  <button
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    เลิกติดตาม
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default favorite;
