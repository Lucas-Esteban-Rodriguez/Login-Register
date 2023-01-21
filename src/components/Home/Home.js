import { useContext } from "react"
import { UserContext } from "../context/userContext"

const Home = () =>{

    const { data } = useContext(UserContext)

    return(

        <div className="d-flex flex-column gap-3">
            <h1 className="text-light">Inciaste sesion!!</h1>
            <p className="text-light"> {data.firstName} </p>
            <p className="text-light"> {data.lastName} </p>
            <p className="text-light"> {data.password} </p>
        </div>

    )
}

export default Home