import QRCode from "../assets/qr-code.png";
import { CiMenuFries } from "react-icons/ci";

export default function Navbar(){
    return(
        <nav className="fixed top-0 left-0 right-0 px-4 bg-[var(--button-bg-01)]">
            <div className="flex h-[60px] items-center text-white justify-between shadow-sm">
                <div className="flex gap-2 text-xl items-center text-center font-semibold">
                    <div className="p-[2px] border-[var(--primary-01)] border-dashed border-[1px]">
                        <img src={QRCode} alt="QR code" width={30} height={10}/>
                    </div>
                    <p>Qr pay</p>
                </div>
                <button>
                    <CiMenuFries className="text-3xl"/>
                </button>
            </div>
        </nav>
    )
}
