import Navbar from "./navbar";
import Link  from "next/link";
import React, { useState } from "react";
import Axios from "axios";

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

        <div className=" flex-col pt-40 text-left lg:text-4xl text-5xl space-y-2">
          <h1 className="ml-10">ชื่อเกม  </h1>
        </div>
      </div>
    );
  }
  
  export default favorite;

  