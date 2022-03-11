import Navbar from "../components/navbar";
import Link from "next/link";
import React, { useState } from "react";
import Axios from "axios";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  //เปลี่ยนแปลงค่า store
  const ditpatch = useDispatch();

  //เข้าถึง store
  const best = useSelector((state) => ({ ...state }));

  const login = () => {
    if (username.length > 0 && password.length > 0) {
      Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].username);
          ditpatch({
            type: "LOGOUT",
            payload: username
            
          });
        }
      });
    } else if (username.length == 0 && password.length > 0) {
      alert("กรุณากรอก username ");
    } else if (username.length > 0 && password.length == 0) {
      alert("กรุณากรอก password ");
    } else {
      alert("กรุณากรอก username และ password ");
    }
  };
  
  return (
    <div className="h-screen flex bg-gray-bg1">
      <Navbar/>

      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          เข้าสู่ระบบ 🔐
        </h1>

        <form>
          <div>
            <label htmlFor="email">Username</label>
            <input
              type="text"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              placeholder="ชื่อผู้ใช้"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              placeholder="รหัสผ่าน"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          {/* <Link href="/"> */}

          <div className="flex justify-center items-center mt-6">
            <button
              type="button"
              className={`bg-blue-600 py-2 px-6 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
              onClick={login}
            >
              ยืนยัน
            </button>
          </div>
          {/* </Link> */}

          <h1 className={"bg-red-500"}>{loginStatus}</h1>

          <Link href="/register">
            <div className="text-right mt-1">
              <label
                className={`cursor-pointer italic py-2 px-6 text-sm text-blue-600 `}
              >
                ไม่มีบัญชี? กดสมัครสมาชิกที่นี่
              </label>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default login;
