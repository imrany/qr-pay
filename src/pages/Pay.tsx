import { Scanner } from '@yudiel/react-qr-scanner';

export default function Pay(){
    return(
        <div className="text-white">
            <Scanner
                classNames={{container:"my-[25vh]"}} 
                onScan={(result) => alert(result)} 
            />
        </div>
    )
}
