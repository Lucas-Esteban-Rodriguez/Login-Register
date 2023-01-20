import './Register.css'
import { useState } from 'react'
import { getFirestore , collection , getDocs , setDoc , doc } from 'firebase/firestore'

const Register = () => {

    const [ newFirstName , setNewFirstName ] = useState()
    const [ newLastName , setNewLastName ] = useState()
    const [ newEmail , setNewEmail ] = useState()
    const [ newPassword , setNewPassword ] = useState()
    const [ userExisting , setUserExisting ] = useState(false)

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
            }
        }
        catch(error) {
            console.log(error)
        }
    }

    function turnLogin() {
        const wall = document.querySelector( ".container-card-wall" )
        wall.style.left = '0%'
      }

    return(

    <div className='bg-dark w-50 h-100 p-3 d-flex justify-content-evenly align-items-center flex-column'>
    <p className='h1 text-light p-1'>Register</p>

        <div className='d-flex gap-5'>
            <div className='w-75 position-relative p-2'>
                <input className='position-relative text-light px-2 input-form' autoComplete='off' required type='text' name='firstName' onChange={(e) => setNewFirstName(e.target.value)} value={newFirstName} placeholder='First Name'></input>
                <label className='position-absolute text-light label-form' htmlFor= 'firstName' > First Name </label>
            </div>
            <div className='w-75 position-relative p-2'>
                <input className='position-relative text-light px-2 input-form' autoComplete='off' required type='text' name='lastName' onChange={(e) => setNewLastName(e.target.value)} value={newLastName} ></input>
                <label className='position-absolute text-light label-form' htmlFor= 'lastName' > Last Name </label>
            </div>
        </div>

        <div className='w-75 position-relative p-2'>
            <input className='position-relative text-light px-2 input-form' autoComplete='off' required type='email' name='email' onChange={(e) => setNewEmail(e.target.value)} value={newEmail} ></input>
            <label className='position-absolute text-light label-form' htmlFor= 'email' > Email </label>
        </div>  

        <div className='w-75 position-relative p-2'>
            <input className='position-relative text-light px-2 input-form' autoComplete='off' required type='text' name='password' onChange={(e) => setNewPassword(e.target.value)} value={newPassword} ></input>
            <label className='position-absolute text-light label-form' htmlFor= 'password' > Password </label>
        </div>

      <div className='d-flex gap-5 pt-3'>
        <button onClick={createUser} >Register</button>
        <button onClick={turnLogin}>Log in</button>
      </div>
  </div>

    )
}

export default Register