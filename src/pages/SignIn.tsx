import { IoChevronForwardOutline } from "react-icons/io5";
import InLogo from "../components/InLogo";
import { useState } from "react"
import { Error } from "../components/dialogs";
import { openDialog } from "../components/actions"

export default function SignIn(){
    const API_URL="http://localhost:8000"
    const [disabled,setDisabled]=useState(false);
    const [error,setError]=useState({
        type:"",
        message:""
    })

    function showErrorDialog(type,message){
        setError({
            type,
            message
        })
        openDialog("error_dialog")
    }

    async function handleSubmit(e:any){
        try{
            e.preventDefault()
            setDisabled(true)
            const response=await fetch(`${API_URL}/api/sign_in`,{
                method:"POST",
                body:JSON.stringify({
                    phone_number:e.target.phone_number.value,
                    password:e.target.password.value
                })
            })
            const parseRes=await response.json()
            if(parseRes.error){
                setDisabled(false)
                console.log(parseRes.error)
                showErrorDialog("Error",parseRes.error)
            }else{
                console.log(parseRes)
                setDisabled(false)
            }

        }catch(error:any){
            setDisabled(false)
            let errorMessage=error.message.includes("Failed to fetch")?"No connection":error.message
            showErrorDialog("Error",errorMessage)
            console.log(error.message)
        }
    }
    return(
        <div className="h-screen text-[var(--primary-02)] bg-[var(--primary-01)] flex flex-col justify-center items-center">
            <InLogo/>
            <div className="text-[var(--primary-03)] text-center text-base my-2">
                <p>Pay without limits. Scan to pay</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col mt-10 max-md:w-[90vw] gap-5">
                <div className="flex flex-col gap-3">
                    <label htmlFor="phone_number" className="text-base font-semibold">Enter phone number</label>
                    <input id="phone_number" name="phone_number" type="tel" placeholder="+2547..." className="px-4 py-2 text-[var(--primary-02)] border-[1px] rounded-[30px] focus:outline-none" required/>
                </div>
        
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-base font-semibold">Enter password</label>
                    <input id="password" minLength={8} maxLength={24} name="password" type="password" className="px-4 py-2 text-[var(--primary-02)] border-[1px] rounded-[30px] focus:outline-none" required/>
                </div>

                <button disabled={disabled} className={disabled===false?"flex justify-center px-3 items-center rounded-[30px] w-full text-[var(--primary-01)] h-[43px] bg-[var(--button-bg-01)]":"flex justify-center px-3 items-center rounded-[30px] w-full text-gray-300 h-[43px] bg-[var(--primary-03)]"}>
                    <p className="flex-grow">Continue</p>
                    <IoChevronForwardOutline  className="ml-auto"/>
                </button>

            </form>
            <Error data={error}/>
        </div>
    )
}
