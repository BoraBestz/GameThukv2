import Navbar from "../components/navbar";
import  Link  from "next/link";
import React, { useState } from "react";
import Axios from "axios";

function register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConpassword] = useState("");
    const [email, setEmail] = useState("");

    const [userdataList, setUserdataList] = useState([]);

    const addUserdata = () => {
        if (password == conpassword && username.length > 0 && password.length > 0 && conpassword.length > 0 && email.length > 0){
            
            Axios.post("http://localhost:3001/user_data", {
          username: username,
          password: password,
          conpassword: conpassword,
          email: email
        }).then(() => {
          setUserdataList([
            ...userdataList,
            {
                username: username,
                password: password,
                conpassword: conpassword,
                email: email
            }
          ]);
        });
        alert("สมัครสมาชิกสำเร็จ!");
        }
        else if (password != conpassword) {
            alert("กรอกรหัสผ่านและรหัสผ่านยืนยันให้ตรงกัน");
        }
        else {
            alert("กรอกข้อมูลให้ครบถ้วน");
        }
      };

    return (
        <div className='h-screen flex bg-gray-bg1'>
        <Navbar/>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    สมัครสมาชิก 🔐
                </h1>
                <form >
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='username'
                            placeholder='ชื่อผู้ใช้'
                            onChange={(event) => {
                                setUsername(event.target.value)
                              }}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='รหัสผ่าน'
                            onChange={(event) => {
                                setPassword(event.target.value)
                              }}
                        />
                    </div>

                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='confirmPassword'
                            placeholder='ยืนยันรหัสผ่าน'
                            onChange={(event) => {
                                setConpassword(event.target.value)
                              }}
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Email </label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='อีเมล'
                            onChange={(event) => {
                                setEmail(event.target.value)
                              }}
                        />
                    </div>


                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-blue-600 py-2 px-6 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                            onClick={addUserdata}
                        >
                            ยืนยัน
                        </button>
                    </div>
                    </form>
            </div>
        </div>

        
    )
}

export default register;