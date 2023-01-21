import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider = ({children}) => {

    const [ data, setData ] = useState([])

    const handleUserData = (e) =>{
        setData(e)
    }

    return (

        <UserContext.Provider value = {{ handleUserData, data }} >
            {children}
        </UserContext.Provider>

    )

}