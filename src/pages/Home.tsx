import { Scanner } from '@yudiel/react-qr-scanner';

export default function Home(){
    return(
        <>
            <Scanner onScan={(result) => console.log(result)} />
        </>
    )
}
