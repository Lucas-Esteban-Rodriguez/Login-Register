import { useState } from "react"
import { getFirestore , collection , getDocs , query , where, getDoc} from "firebase/firestore"
const Login = () =>{

    const [ email , setEmail ] = useState()
    const [ password , setPassword ] = useState()
    const [ userLogin , setLogin ] = useState(false)

    const validateUser = async() =>{

        try {
            const db = getFirestore()
            const usersRef = collection(db,'Usuarios')
            const docsRef = await getDocs(usersRef)
            docsRef.forEach(doc => {
                
                doc.id === email && doc.password === password? setLogin(true):console.log(' ')

            });
        }

        catch {
            console.log('error')
        }

    }

    function turnRegister() {
        const wall = document.querySelector( ".container-card-wall" )
        wall.style.left = '50%'
      }

    return(

        <div className='w-50 h-100 p-3 d-flex justify-content-evenly align-items-center flex-column'>

        <p className='text-light h1 p-1'>Log in</p>

            <div className='w-75 position-relative p-2'>
                <input className='position-relative text-light px-2 input-form' autoComplete='off' required type='email' name='Email' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Email'></input>
                <label className='position-absolute text-light label-form' htmlFor= 'Email' > Email </label>
            </div>

            <div className='w-75 position-relative p-2'>
                <input className='position-relative text-light px-2 input-form' autoComplete='off' required type='password' name='Password' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password'></input>
                <label className='position-absolute text-light label-form' htmlFor= 'Password' > Password </label>
            </div>

        <div className='d-flex gap-5 pt-5'>
          <button onClick={validateUser}>Log in</button>
          <button onClick={turnRegister}>Register</button>
        </div>

      </div>

    )
}

export default Login