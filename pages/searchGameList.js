import Navbar from "../components/navbar";
function SearchGameList({data}) {
    return (
        
      <div className="">
          <Navbar />
        <div className="flex justify-center items-center flex-col pt-40 text-center lg:text-4xl text-5xl space-y-2">
          <h1 className="text-center">ผลการค้นหา </h1>
          {/* <h2>{JSON.stringify(data)}</h2> */}
        </div>
      </div>
    );
  }
  
  export default SearchGameList;
  