import { Scanner } from '@yudiel/react-qr-scanner';

export default function Pay(){
    fucntion handleScan(result:any){
        console.log(result)
    }
    return(
        <div className="text-white">
            <Scanner
                classNames={{container:"my-[25vh]"}} 
                onScan={(result) => handleScan(result)} 
            />
        </div>
    )
}
