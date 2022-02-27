import Navbar from "../components/navbar";
import Link from "next/link";

function favorite() {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center flex-col pt-40 text-center lg:text-4xl text-5xl space-y-2">
        <h1 className="text-center">เกมที่กดติดตามไว้ </h1>
      </div>
    </div>
  );
}

export default favorite;
