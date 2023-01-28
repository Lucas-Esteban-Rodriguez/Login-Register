import './Register.css'
import { useState } from 'react'
import { getFirestore , collection , getDocs , setDoc , doc } from 'firebase/firestore'

const Register = () => {

    const [ newFirstName , setNewFirstName ] = useState()
    const [ newLastName , setNewLastName ] = useState()
    const [ newEmail , setNewEmail ] = useState()
    const [ newPassword , setNewPassword ] = useState()
    const [ userExisting , setUserExisting ] = useState(false)
    const [ warning , setWarning ] = useState()

    const createUser = async() => {
        try {
            const user = {
                date: new Date(),
                firstName: newFirstName,
                lastName: newLastName,
                password: newPassword
            }

            const db = getFirestore()
            const usersRef = collection(db , 'Usuarios')
            const docsRef = await getDocs(usersRef)

            docsRef.forEach(doc => {
                doc.id === newEmail?setUserExisting(true):console.log('ok')
            })

            if (userExisting === false) {
                await setDoc(doc(db, "Usuarios", newEmail), user);
            } else (
                setWarning('An account already exists with this email')
            )
        }
        catch {
            setWarning('Missing data')
        }
    }

    function turnLogin() {
        const wall = document.querySelector( ".container-card-wall" )
        wall.style.left = '0%'
        setNewLastName('')
        setNewFirstName('')
        setNewEmail('')
        setNewPassword('')
        setWarning('')
      }

    return(

    <div className='p-md-3 d-flex justify-content-evenly align-items-center flex-column position-relative container-register'>
    <p className='h1 text-light p-1'>Register</p>

        <div className='d-flex gap-5'>
            <div className='w-75 position-relative my-3 py-1 px-4'>
                <input className='position-relative text-light px-2 input-form input-register' autoComplete='off' required type='text' name='firstName' onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName} placeholder='First Name'></input>
                <label className='position-absolute text-light label-form' htmlFor= 'firstName' > First Name </label>
            </div>
            <div className='w-75 position-relative my-3 py-1 px-4'>
                <input className='position-relative text-light px-2 input-form input-register' autoComplete='off' required type='text' name='lastName' onChange={(e) => setNewLastName(e.target.value)} value={newLastName} ></input>
                <label className='position-absolute text-light label-form' htmlFor= 'lastName' > Last Name </label>
            </div>
        </div>

        <div className='w-75 position-relative my-3 py-1 px-4'>
            <input className='position-relative text-light px-2 input-form input-register' autoComplete='off' required type='text' name='email' onChange={(e) => setNewEmail(e.target.value)} value={newEmail} ></input>
            <label className='position-absolute text-light label-form' htmlFor= 'email' > Email </label>
        </div>  

        <div className='w-75 position-relative my-3 py-1 px-4'>
            <input className='position-relative text-light px-2 input-form input-register' autoComplete='off' required type='password' name='password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} ></input>
            <label className='position-absolute text-light label-form' htmlFor= 'password' > Password </label>
        </div>

      <div className='d-flex gap-5 pt-3'>
        <button className='outline-0 border-0 rounded text-dark bg-light fw-bold py-2 px-3' onClick={createUser} >Register</button>
        <button className='outline-0 border-0 rounded text-dark bg-light fw-bold py-2 px-3' onClick={turnLogin}>Log in</button>
      </div>

        <p className='p-2 text-danger'> {warning} </p>

  </div>

    )
}

export default Register