import React, { useState ,useContext} from "react";
import img from "../images/download.jpeg"
import Embed from "./Embed";
import Navbar from "./Navbar";

const Main = () => {
  const [link, setLink] = useState(null)
    const portfolios_happy = [
        {
            id:1,
            src: "https://i.scdn.co/image/ab67616d0000b273a3a7f38ea2033aa501afd4cf",
            link:"0WtM2NBVQNNJLh6scP13H8",
            title:"Calm Down (with Selena Gomez)",
            singer : "Rema, Selena Gomez",
            year : "2022-08-25"
        },
        {
            id:2,
            src: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
            link:"0V3wPSX9ygBnCm8psDIegu",
            title:"Anti-Hero",
            singer : "Taylor Swift",
            year : "2022-10-21"
        },
        {
            id:3,
            src: "https://i.scdn.co/image/ab67616d0000b273ef5c4d1b49aa500905423be3",
            link:"2KukL7UlQ8TdvpaA7bY3ZJ",
            title:"BREAK MY SOUL",
            singer : "Beyoncé",
            year : "2022-06-21"
        },
        {
            id:4,
            src: "https://i.scdn.co/image/ab67616d0000b273d24bb6aa36842e45bdd3d1cc",
            link:"1058fW9H3fZA6QjYCdOBad",
            title:"Don't Go Yet",
            singer : "Camila Cabello",
            year : "2021-07-23"
        },
        {
            id:5,
            src: "https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631",
            link:"5zFglKYiknIxks8geR8rcL",
            title:"Beautiful Mistakes (feat. Megan Thee Stallion)",
            singer : "Maroon 5",
            year : "2021-06-11"
        },
        
        {
            id:6,
            src: "https://i.scdn.co/image/ab67616d0000b273ae40468931087f78919b86ce",
            link:"4qu63nuBpdn0qHUHuObEj1",
            title:"Leave Before You Love Me (with Jonas Brothers)",
            singer : "Marshmello, Jonas Brothers",
            year : "2021-05-21"
        }
        

    ]

    //Energetic

    const portfolios_energetic = [
      {
          id:1,
          src: "https://i.scdn.co/image/ab67616d0000b273fc915b69600dce2991a61f13",
          link:"3CIyK1V4JEJkg02E4EJnDl",
          title:"Enemy (with JID) - from the series Arcane League of Legends",
          singer : "Imagine Dragons",
          year : "2022-07-01"
      },
      {
          id:2,
          src: "https://i.scdn.co/image/ab67616d0000b27322f21ef4e9da48c31170a418",
          link:"5b2bu6yyATC1zMXDGScJ2d",
          title:"Hey Mama (feat. Nicki Minaj, Bebe Rexha & Afrojack)",
          singer : "David Guetta",
          year : "2014-11-24"
      },
      {
          id:3,
          src: "https://i.scdn.co/image/ab67616d0000b2737e3e34dcefc6f62b01b7d3f0",
          link:"7y2YUIyCuVhBidENVT0068",
          title:"Love Me Like You Do",
          singer : "Ellie Goulding",
          year : "2015-01-07"
      },
      {
          id:4,
          src: "https://i.scdn.co/image/ab67616d0000b273945bde149d413a1c6d974eed",
          link:"46GGxd8TVRt6FjUBfCavVT",
          title:"Renegades",
          singer : "X Ambassadors",
          year : "2015-06-30"
      },
      {
          id:5,
          src: "https://i.scdn.co/image/ab67616d0000b2736d212964f44127ddabdac111",
          link:"7yCm5uEZcQ6uzt9E5Py6IR",
          title:"Middle Of The Night",
          singer : "The Vamps",
          year : "2017-07-14"
      },
      
      {
          id:6,
          src: "https://i.scdn.co/image/ab67616d0000b273c18194a4022ec44507f7b248",
          link:"4zrKN5Sv8JS5mqnbVcsul7",
          title:"Celestial",
          singer : "Ed Sheeran",
          year : "2022-09-29"
      }
      

  ]

  //calm

  const portfolios_calm = [
    {
        id:1,
        src: "https://i.scdn.co/image/ab67616d0000b273fb3e7746e273d0c0b935bd22",
        link:"6XYktvAOFBlDr4TUKHUxPS",
        title:"Our Winter Love",
        singer : "Bill Pursell",
        year : "2021-04-28"
    },
    {
        id:2,
        src: "https://i.scdn.co/image/ab67616d0000b273f2248cf6dad1d6c062587249",
        link:"3ZCTVFBt2Brf31RLEnCkWJ",
        title:"everything i wanted",
        singer : "Billie Eilish",
        year : "1997-04-22"
    },
    {
        id:3,
        src: "https://i.scdn.co/image/ab67616d0000b273337c2575d6bad60b36a90644",
        link:"0LZhlPswR8YgcJV09oQvg9",
        title:"Forever",
        singer : "Various Artists",
        year : "2012-09-19"
    },
    {
        id:4,
        src: "https://i.scdn.co/image/ab67616d0000b2730418ecaac2546d3ef45f3944",
        link:"770bUE65sXIhYuLNGm4CIL",
        title:"Love Letters",
        singer : "Ketty Lester",
        year : "1992-01-20"
    },
    {
        id:5,
        src: "https://i.scdn.co/image/ab67616d0000b2739ea8820ac0387457a634bbd2",
        link:"3J90DxBYXJR2G60Hlro76Q",
        title:"Butterfly",
        singer : "Matt Flinders",
        year : "2021-06-11"
    },
    
    {
        id:6,
        src: "https://i.scdn.co/image/ab67616d0000b2738b62f896e8d3ca8dad7588e7",
        link:"0AQqrtK1pULuwZUXhwaaDz",
        title:"All By Myself",
        singer : "Eric Carmen",
        year : "1905-05-27"
    }
    

]
  // sad

  const portfolios_sad = [
    {
        id:1,
        src: "https://i.scdn.co/image/ab67616d0000b2738e49866860c25afffe2f1a02",
        link:"70XtWbcVZcpaOddJftMcVi",
        title:"From the Bottom of My Broken Heart",
        singer : "Britney Spears",
        year : "2023-04-14"
    },
    {
        id:2,
        src: "https://i.scdn.co/image/ab67616d0000b2733889f04c48f6bf57649c282c",
        link:"6oDPg7fXW3Ug3KmbafrXzA",
        title:"Wrecking Ball",
        singer : "Miley Cyrus",
        year : "2022-01-05"
    },
    {
        id:3,
        src: "https://i.scdn.co/image/ab67616d0000b27313b3e37318a0c247b550bccd",
        link:"5TvFfDlVoUWZvfqrhTJzD7",
        title:"One",
        singer : "BEd Sheeran",
        year : "2021-06-24"
    },
    {
        id:4,
        src: "https://i.scdn.co/image/ab67616d0000b2730c2c97099fd6a637ed0aa4a4",
        link:"45bE4HXI0AwGZXfZtMp8JR",
        title:"you broke me first",
        singer : "Tate McRae",
        year : "2021-06-18"
    },
    {
        id:5,
        src: "https://i.scdn.co/image/ab67616d0000b273d7fb3e4c63020039d1cff6b2",
        link:"2nMeu6UenVvwUktBCpLMK9",
        title:"Young And Beautiful",
        singer : "Lana Del Rey",
        year : "2021-06-11"
    },
    
    {
        id:6,
        src: "https://i.scdn.co/image/ab67616d0000b273d304ba2d71de306812eebaf4",
        link:"5O2P9iiztwhomNh8xkR9lJ",
        title:"Night Changes",
        singer : "One Direction",
        year : "2008-01-01"
    }
    

]

   const handleClick = (link) => {
     setLink(link)
   }

   



  return (
    <>
      <div className={`main-container flex flex-col bg-main-back w-[100%] absolute   p-8  font-ubuntu`}>
        {/* <div className="main-navbar text-white bg-inherit">
          <div className="navbar-icon flex flex-row px-2">
            <i class="fa-solid fa-bars text-2xl"></i>
          </div>
          <div className="navbar-search"></div>
        </div> */}
       
        {/* Happy Songs Playlist */}
        <div className="main-happy bg-sidebar-back rounded p-2 mt-6">
          <h1 className="text-left text-white font-bold text-3xl pl-6">
            Happy Songs
          </h1>
          <div className="happy-cards p-4 text-left">
            <div
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12
      sm:px-0"
            >
              {portfolios_happy.map(({ id, src, link, title, singer , year }) => (
                <div key={id} className="shadow-md shadow-gray-700 rounded-lg bg-card-back p-2">
                  <div className="image-container w-full relative mb-3">
                    <img
                      src={src}
                      alt="song-image"
                      className="rounded-md  object-contain w-full"
                    />
                    <div className="fav-icon absolute bg-gray-500 top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-gray-900 shadow-md hover:scale-105"><i className="fa-solid fa-heart text-white"></i></div>
                    <div className="play-icon absolute bg-green-600 -bottom-4 right-2 rounded-full flex items-center justify-center w-12 h-12 shadow-green-300 shadow-md hover:scale-105" onClick={() => { setLink(link)}}><i className="fa-solid fa-play text-2xl"></i></div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="m-2 text-gray-200 text-left font-bold">{title}</h3>
                    <div className="song-info flex flex-row justify-around">
                       <div className="singer-name text-white"> {singer} </div>
                       <div className="song-year text-white"> {year}  </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
        {/* Ended Happy Songs playlist */}

        {/* Sad Songs Playlist */}

        <div className="main-sad bg-sidebar-back rounded p-2 mt-6">
          <h1 className="text-left text-white font-bold text-3xl pl-6">
            Sad Songs
          </h1>
          <div className="happy-cards p-4 text-left">
            <div
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12
      sm:px-0"
            >
              {portfolios_sad.map(({ id, src, link, title, singer , year }) => (
                <div key={id} className="shadow-md shadow-gray-700 rounded-lg bg-card-back p-2">
                  <div className="image-container w-full relative mb-3">
                    <img
                      src={src}
                      alt="song-image"
                      className="rounded-md  object-contain w-full"
                    />
                    <div className="fav-icon absolute bg-gray-500 top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-gray-900 shadow-md hover:scale-105"><i className="fa-solid fa-heart text-white"></i></div>
                    <div className="play-icon absolute bg-green-600 -bottom-4 right-2 rounded-full flex items-center justify-center w-12 h-12 shadow-green-300 shadow-md hover:scale-105" onClick={() => { setLink(link)}}><i className="fa-solid fa-play text-2xl"></i></div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="m-2 text-gray-200 text-left font-bold">{title}</h3>
                    <div className="song-info flex flex-row justify-around">
                       <div className="singer-name text-white"> {singer} </div>
                       <div className="song-year text-white"> {year}  </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ended Sad Songs Playlist */}

        {/* Energetic Songs Playlist */}
        <div className="main-energetic bg-sidebar-back rounded p-2 mt-6">
          <h1 className="text-left text-white font-bold text-3xl pl-6">
            Energetic Songs
          </h1>
          <div className="happy-cards p-4 text-left">
            <div
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12
      sm:px-0"
            >
              {portfolios_energetic.map(({ id, src, link, title, singer, year }) => (
                <div key={id} className="shadow-md shadow-gray-700 rounded-lg bg-card-back p-2">
                  <div className="image-container w-full relative mb-3">
                    <img
                      src={src}
                      alt="song-image"
                      className="rounded-md  object-contain w-full"
                    />
                    <div className="fav-icon absolute bg-gray-500 top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-gray-900 shadow-md hover:scale-105"><i className="fa-solid fa-heart text-white"></i></div>
                    <div className="play-icon absolute bg-green-600 -bottom-4 right-2 rounded-full flex items-center justify-center w-12 h-12 shadow-green-300 shadow-md hover:scale-105" onClick={() => { setLink(link)}}><i className="fa-solid fa-play text-2xl"></i></div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="m-2 text-gray-200 text-left font-bold">{title}</h3>
                    <div className="song-info flex flex-row justify-around">
                       <div className="singer-name text-white"> {singer} </div>
                       <div className="song-year text-white"> {year}  </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
         </div>
        </div>

        {/* Ended Energetic Songs Playlist */}

        {/* Calm Songs Playlist */}
        <div className="main-calm bg-sidebar-back rounded p-2 mt-6">
          <h1 className="text-left text-white font-bold text-3xl pl-6">
            Calm Songs
          </h1>
          <div className="happy-cards p-4 text-left">
            <div
              className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12
      sm:px-0"
            >
              {portfolios_calm.map(({ id, src, link, title, singer, year }) => (
                <div key={id} className="shadow-md shadow-gray-700 rounded-lg bg-card-back p-2">
                  <div className="image-container w-full relative mb-3">
                    <img
                      src={src}
                      alt="song-image"
                      className="rounded-md  object-contain w-full"
                    />
                    <div className="fav-icon absolute bg-gray-500 top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-gray-900 shadow-md hover:scale-105"><i className="fa-solid fa-heart text-white"></i></div>
                    <div className="play-icon absolute bg-green-600 -bottom-4 right-2 rounded-full flex items-center justify-center w-12 h-12 shadow-green-300 shadow-md hover:scale-105" onClick={() => { setLink(link)}}><i className="fa-solid fa-play text-2xl"></i></div>
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="m-2 text-gray-200 text-left font-bold">{title}</h3>
                    <div className="song-info flex flex-row justify-around">
                       <div className="singer-name text-white"> {singer} </div>
                       <div className="song-year text-white"> {year}  </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
        {/* Ended Calm Songs Playlist */}
      </div>



      {/* Embed element */}
      {link && <Embed link={link}/>}
    </>
  );
};

export default Main;
