import Navbar from "./navbar";
import { useState } from "react";
import Axios from "axios";
import Link from "next/link";

function homepage() {
  const [gamesdataList, setGamesdataList] = useState([]);
  const getGamesdata = () => {
    Axios.get("http://localhost:3001/games_data").then((response) => {
      setGamesdataList(response.data);
    });
  };

  return (
    <div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-4xl text-5xl space-y-2">
      <h1 className="text-center">รายชื่อเกม 100 เกม </h1>
      <button
        class="flex items-center justify-center px-4 border-l"
        onClick={getGamesdata}
      >
        <svg
          class="w-6 h-6 text-gray-600"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
        </svg>
      </button>
      <br></br>
      {gamesdataList.map((val, key) => {
        return (
          <div className="gamesdata card">
            <div className="card-body text-left">
              <Link href="/gameprice">
                <a>
                  <p className="card-text">Name: {val.game_name}</p>
				  
                </a>
              </Link>
              <br></br>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default homepage;
