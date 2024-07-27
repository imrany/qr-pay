import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import NotFound from "./pages/NotFound";
import NotSupported from "./components/NotSupported";

function App() {
    const [isSupported,setIsSupported]=useState(false)
    window.onresize=function(){
        if(screen.width>425){
            //not supported
            setIsSupported(false)
        }else{
            //supported
            setIsSupported(true)
        }
    }

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
