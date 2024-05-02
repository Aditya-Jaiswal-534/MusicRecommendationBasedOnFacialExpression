import React,{useState, Component } from "react"

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleClick = () => {
      
    }

    return (
        <>
          <div className="main-navbar text-white bg-inherit">
            <div className="navbar-icon flex flex-row px-2">
              <i class="fa-solid fa-bars text-2xl" onClick={handleClick}></i>
            </div>
            <div className="navbar-search"></div>
          </div>
        </>
    )
}

export default Navbar