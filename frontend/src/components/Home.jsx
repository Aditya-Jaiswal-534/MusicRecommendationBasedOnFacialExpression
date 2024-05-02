import React,{useContext,useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import Sidebar from "./Sidebar";
import Main from "./Main"
import Recommendation from "./Recommendation";
import Embed from "./Embed";
import authContext from '../Context/authcontext.jsx'


const Home = () =>{
    const context = useContext(authContext)
  const {success}=context;
  const Navigate=useNavigate()
  

  useEffect(() => {
      
      
    if(!success){
      Navigate("/login")
    }
   
    }
    // eslint-disable-next-line
  , );
    
    return (
        <>
         <Sidebar/>
         <Main/>
         
        
        </>
    )
}

export default Home