import { IoChevronForwardOutline } from "react-icons/io5";

export default function SignIn(){
    return(
        <div className="h-screen text-[var(--primary-02)] bg-[var(--primary-01)] flex flex-col justify-center items-center">
            <div className="text-4xl text-center font-semibold">
                <p>Kenya Qr pay</p>
            </div>
            <div className="text-[var(--primary-03)] text-center text-base max-md:text-sm my-2">
                <p>Scan to pay</p>
            </div>

            <form className="flex flex-col mt-5 gap-5">
                <div className="flex flex-col gap-3">
                    <label htmlFor="phone_number" className="text-base font-semibold">Enter phone number</label>
                    <input id="phone_number" name="phone_number" type="tel" placeholder="+2547..." className="px-4 py-2 text-[var(--primary-02)] border-[1px] rounded-[30px] focus:outline-none" required/>
                </div>
        
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-base font-semibold">Enter password</label>
                    <input id="password" minLenght={8} maxLength={24} name="password" type="password" className="px-4 py-2 text-[var(--primary-02)] border-[1px] rounded-[30px] focus:outline-none" required/>
                </div>

                <button className="flex justify-center px-3 items-center rounded-[30px] w-full text-[var(--primary-01)] h-[43px] bg-[var(--button-bg-01)]">
                    <p className="flex-grow">Continue</p>
                    <IoChevronForwardOutline  className="ml-auto"/>
                </button>

            </form>
        </div>
    )
}
