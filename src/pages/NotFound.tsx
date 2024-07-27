import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate=useNavigate()
    return (
        <div className="flex flex-col gap-y-2 h-[100vh] bg-[var(--primary-01)] items-center justify-center text-[var(--primary-02)]">
            <p className="max-md:text-4xl text-6xl font-semibold">Oops.</p>
            <p className="text-base my-2">The page you're try to reach doesn't exist</p>
            <button className="flex justify-center items-center rounded-[30px] w-[100px] text-[var(--primary-01)] h-[40px] bg-[var(--button-bg-01)]" onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    );
};
