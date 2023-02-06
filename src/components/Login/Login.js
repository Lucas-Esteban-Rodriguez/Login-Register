import { UserContext } from "../context/userContext"
import './Login.css';
import { useState , useContext } from "react"
import { useNavigate } from "react-router-dom"
import { getFirestore , collection , getDocs} from "firebase/firestore"

const Login = () =>{

    const [ email , setEmail ] = useState()
    const [ password , setPassword ] = useState()
    const navigate = useNavigate()
    const { handleUserData } = useContext(UserContext)
    const [ warning , setWarning ] = useState()
    const [ type , setType ] = useState('Password')

    const handleTypePassword = () => {
        type === 'Password'? setType('Text'): setType('Password')
    }

    const validateUser = async() =>{

        //The database is consulted if the data entered by the user matches the data stored there to validate the entry.

        try {
            const db = getFirestore()
            const usersRef = collection(db,'Usuarios')
            const docsRef = await getDocs(usersRef)

            docsRef.forEach(doc => { 
                if (doc.id === email.toLowerCase() && doc.data().password === password) {
                    const data = [doc.data()]
                    handleUserData(...data)
                    navigate('/home')
                }
            })
            if (email && password) {
                setWarning('Email or password is wrong')
            } else {
                setWarning('Missing data')
            }
            setWarning('')
        }

        catch(e) {
            console.log(e)
        }

    }

    function turnRegister() {

        //This function manipulates the DOM.

        const login = document.querySelector('.container-login')
        const register = document.querySelector('.container-register')
        
        register.classList.remove('card-slow')
        login.classList.add('card-slow')
    }

    return (
        
        <div className='p-md-3 d-flex justify-content-evenly align-items-center flex-column container-login m-auto'>

            <p className='text-blue h1 p-1 mt-1 fw-bold'>Log in</p>

            <div className='w-75 position-relative my-3 py-1 px-4'>
                <input className='position-relative text-blue px-2 input-form input-login' autoComplete='off' required type='text' name='Email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email'></input>
                <label className='position-absolute text-blue label-form fw-bold' htmlFor= 'Email' > Email </label>
            </div>

            <div className='w-75 position-relative my-3 py-1 px-4'>
                {type === 'Password'? 
                    <input className='position-relative text-blue px-2 input-form input-login' autoComplete='off' required type='Password' name='Password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password'></input>
                    :
                    <input className='position-relative text-blue px-2 input-form input-login' autoComplete='off' required type='Text' name='Password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password'></input>  
            }
                <label className='position-absolute text-blue label-form fw-bold' htmlFor= 'Password' > Password </label>
                <button className="position-absolute eye-icon" onClick={handleTypePassword}><img width={30} height={30} src="data:image/png;base64,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"></img></button>
            </div>

            <div className='d-flex gap-2 pt-3'>
                <button className="bg-blue outline-0 border-0 text-light fw-bold py-2 px-3 rounded" onClick={validateUser}>Log in</button>

                {   visualViewport.width < 576
                    ?
                    <button className='bg-blue outline-0 border-0 text-light fw-bold py-2 px-3 rounded btn-wall' onClick={turnRegister}>Register</button>
                    :
                    console.log(' ')
                }

            </div>
            <p className="p-3 text-danger" >{warning}</p>
        </div>

    )
}

export default Login