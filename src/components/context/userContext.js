import { createContext, useState } from "react";

//Here the createContext is used to be able to handle the user's information with total freedom by all the components of the project, collecting the data from the Login so as not to have to consult the database again.

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