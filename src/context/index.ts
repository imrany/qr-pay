import { createContext } from 'react'

type ContextType={
    user:{
        username:string,
        accessToken:string,
        phoneNumber:number
    },
}
export const GlobalContext=createContext<ContextType>({
    user:{
        username:"",
        accessToken:"",
        phoneNumber:0,
    }
})
