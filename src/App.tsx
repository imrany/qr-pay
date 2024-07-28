import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Pay from "./pages/Pay";
import NotFound from "./pages/NotFound";
import NotSupported from "./components/NotSupported";

function App() {
    const [isLoading,setIsLoading]=useState(true);
    const [isAuth,setIsAuth]=useState(false);
    const [isSupported,setIsSupported]=useState(true);

    window.onresize=function(){
        screen.width>450?setIsSupported(false):setIsSupported(true)
    }

    useEffect(()=>{
        screen.width>450?setIsSupported(false):setIsSupported(true)
    },[screen.width])
  return (
    <>
        {isSupported?(
            <BrowserRouter>
                <Routes>
                    <Route path="/landing_page" element={!isAuth?<LandingPage/>:<Navigate to="/"/>}/>
                    <Route path="/sign_in" element={!isAuth?<SignIn/>:<Navigate to="/"/>}/>
                    <Route path="/sign_up" element={!isAuth?<SignUp/>:<Navigate to="/"/>}/>
                    <Route path="/" element={isAuth?<Layout />:<Navigate to="/sign_in"/>}>
                    <Route index element={<Home />} />
                        <Route path="pay" element={<Pay />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        ):(
            <NotSupported/>    
        )}
    </>
  )
}

export default App
