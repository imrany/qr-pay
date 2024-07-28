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
import { GlobalContext } from "./context";

function App() {
    const API_URL = "http://localhost:8000";
    const [isLoading,setIsLoading]=useState(true);
    const [isAuth,setIsAuth]=useState(false);
    const [isSupported,setIsSupported]=useState(true);
    const [user, setUser] = useState<any>({
        username: "",
        phoneNumber: 0,
    });

    const access_token: string = localStorage.getItem("access_token");
    async function authenticate() {
        try {
            const url=`${API_URL}/api/user/${access_token}`
            const parseRes = await response.json();
            if (parseRes.error) {
                console.log(parseRes.error)
                setIsAuth(false);
                setIsLoading(false);
            } else {
                const userData = {
                    username:parseRes.data.username,
                    phoneNumber:parseRes.data.phone_number,
                    accessToken:parseRes.data.access_token
                }
                localStorage.setItem("access_token", JSON.stringify(userData.accessToken));
                setUser(userData);
                setIsAuth(true);
                setIsLoading(false);
            }
        }catch(error:any){
            setIsAuth(false);
            setIsLoading(false);
            console.log(error.message)
        }
    }

    window.onresize=function(){
        screen.width>450?setIsSupported(false):setIsSupported(true)
    }

    useEffect(()=>{
        screen.width>450?setIsSupported(false):setIsSupported(true)
        if (access_token !== null) {
            authenticate();
        } else {
            setIsAuth(false);
            setIsLoading(false);
        }
    },[screen.width,isAuth])
  return (
    <>
        {isSupported?(
            <BrowserRouter>
            <GlobalContext.Provider value={{ user }}>
                {isLoading ? (
                    <div className="fixed top-0 bottom-0 left-0 z-20 right-0 bg-white">
                        <div className="flex flex-col items-center h-[100vh] justify-center">
                            <p className="text-xl font-semibold text-[var(--primary-01)]">
                                Loading...
                            </p>
                        </div>
                    </div>
                ) : (
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
                )}
            </GlobalContext.Provider>
            </BrowserRouter>
        ):(
            <NotSupported/>    
        )}
    </>
  )
}

export default App
