import Navbar from "../components/navbar";
import  Link  from "next/link";

function register() {
    return (
        <div className='h-screen flex bg-gray-bg1'>
        <Navbar/>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    สมัครสมาชิก 🔐
                </h1>
                <form >
                    <div>
                        <label htmlFor='email'>Username</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='ชื่อผู้ใช้'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='รหัสผ่าน'
                        />
                    </div>

                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='confirmPassword'
                            placeholder='ยืนยันรหัสผ่าน'
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Email </label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='อีเมล์'
                        />
                    </div>


                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-blue-600 py-2 px-6 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
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