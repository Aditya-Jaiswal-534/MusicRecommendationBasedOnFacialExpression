import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import WebcamCapture from "./WebCam";
import Pred from "./Pred.jsx";
import Sidebar from "./Sidebar.jsx";
import avatar from "../images/avatar1.png";
import songs_id from "../JSON/songs_data.json"
import items from "../JSON/songs.json";
import Embed from "./Embed.jsx"

const Search = () => {
  // dropdown begins
  const [link, setLink] = useState()
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [val, setValue] = useState("");
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(e.target.value.length > 0);
       // Show dropdown if there's text
  };

  const handleItemClick = (item) => {
    setSearchTerm(item.name); // Set input to clicked item
    setShowDropdown(false); // Hide dropdown after selection
  };
  const onSearch = (val) => {
    console.log(val)
    // console.log(songs_id["val"])
    var flag=0;
    for(var i=0;i<items.length;i++){
      if(items[i].name === val){
        console.log(items[i].id);
        flag=1;
        setLink(items[i].id)
      }
    }
    if(flag===0){
      setLink(false)
    }
  }
  //dropdown ends



  return (
    <>
      <Sidebar />
      <div className="main-container flex flex-col bg-main-back w-[100%]  min-h-screen p-8  font-ubuntu">
        <div className="recommendation text-white font-ubuntu mt-6 bg-sidebar-back p-6">
          <h1 className="header text-left  rounded p-2 text-4xl font-bold">
            Search
          </h1>
          <div className="container flex flex-row justify-between w-[80%] mt-4">
            {/* dropdown begins */}
            <div className="relative w-64 text-black">
              {" "}
              {/* Container with a relative position */}
              <input
                type="text"
                placeholder="Search a song..."
                value={searchTerm}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
                
              
                
              />
              {showDropdown && (
                <div className="absolute top-full left-0 w-full bg-white border rounded shadow-lg">
                  {" "}
                  {/* Dropdown styles */}
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, key) => (
                      <div
                        key={key}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleItemClick(item)}
                      >
                        {item.name}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500">No results found</div>
                  )}
                </div>
              )}
            </div>
            {/* dropdown ends */}
            <div className="search-button">
              <button
                className="button border-2 p-1"
                onClick={() => onSearch(searchTerm)}
              >
                Search
              </button>
            </div>

            {/* <div className="dropdown">
            {data.map((item, id) => (
              <div key={id} className="dropdown-row"> {item.name} </div>
            ))}
           </div> */}
          </div>

          {link    && <Embed link={link} /> }
        </div>
      </div>
    </>
  );
};

export default Search;
