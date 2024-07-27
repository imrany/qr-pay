import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import NotFound from "./pages/NotFound";
import NotSupported from "./components/NotSupported";

function App() {
    const [isSupported,setIsSupported]=useState(true)
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
                    <Route path="/" element={<Home/>}/>
                    <Route path="/pay" element={<Pay/>}/>
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
