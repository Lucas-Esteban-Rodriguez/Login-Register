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

    const validateUser = async() =>{

        try {
            const db = getFirestore()
            const usersRef = collection(db,'Usuarios')
            const docsRef = await getDocs(usersRef)

            docsRef.forEach(doc => { 
                if (doc.id === email && doc.data().password === password) {
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
        }

        catch(e) {
            console.log(e)
        }

    }

    function turnRegister() {

        const wall = document.querySelector( ".container-card-wall" )
        const login = document.querySelector('.container-login')
        const register = document.querySelector('.container-register')

        if (visualViewport.width < 576) {
            
            login.classList.add('card-slow')
            register.classList.remove('card-slow')

        } else {

            console.log('tablet/desk')
         
            wall.style.left = '47%'
            setEmail('')
            setPassword('')
            setWarning('')

        }
    }

    return (
        
        <div className='p-md-3 d-flex justify-content-evenly align-items-center flex-column position-relative container-login'>

            <p className='text-blue h1 p-1 fw-bold'>Log in</p>

            <div className='w-75 position-relative my-3 py-1 px-4'>
                <input className='position-relative text-blue px-2 input-form input-login a' autoComplete='off' required type='text' name='Email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email'></input>
                <label className='position-absolute text-blue label-form fw-bold' htmlFor= 'Email' > Email </label>
            </div>

            <div className='w-75 position-relative my-3 py-1 px-4'>
                <input className='position-relative text-blue px-2 input-form input-login' autoComplete='off' required type='password' name='Password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password'></input>
                <label className='position-absolute text-blue label-form fw-bold' htmlFor= 'Password' > Password </label>
            </div>

            <div className='d-flex gap-3 pt-md-5 pt-4'>
                <button className="bg-blue outline-0 border-0 text-light fw-bold py-2 px-3 rounded" onClick={validateUser}>Log in</button>
                <button className="bg-blue outline-0 border-0 text-light fw-bold py-2 px-3 rounded" onClick={turnRegister}>Register</button>
            </div>
            <p className="p-3 text-danger" >{warning}</p>
        </div>

    )
}

export default Login