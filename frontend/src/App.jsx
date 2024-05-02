import React,{ useState, useEffect } from 'react'
import './App.css'
import Login from "./components/Login.jsx"
import Home from "./components/Home.jsx"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Recommendation from './components/Recommendation.jsx'
import Sidebar  from './components/Sidebar.jsx'
import AuthState from './Context/authstate.jsx'
import Signin from './components/SignUp.jsx'
import Profile from "./components/Profile.jsx"
import ProfileState from "./Context/profileState.jsx"
import Search from "./components/Search.jsx"
function App() {
  const router = createBrowserRouter([
    {path:"/",element:<> <Home/> </>},
    {path:"/recommendation", element:<><div className='recommender-container  h-screen'><Sidebar></Sidebar><Recommendation/></div></>},
    {path:"/login",element:<><Login/></>},
    {path:"/signup",element:<><Signin/></>},
    {path:"/profile",element:<><Profile/></>},
    {path:"/search",element:<><Search/></>}
    
  ])
  

  return (
    <>
    
    <AuthState>
    <ProfileState>
     <RouterProvider router={router}/>
     </ProfileState>
     </AuthState>
     

    </>
  )
}

export default App
