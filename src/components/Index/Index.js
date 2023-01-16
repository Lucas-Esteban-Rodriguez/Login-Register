import UserDates from '../UserDates/UserDates.js'
import { useEffect } from 'react'

const Index = () => {

  function turnRegister() {
    const wall = document.querySelector( ".container-card-wall" )
    wall.style.left = '50%'
  }

  function turnLogin() {
    const wall = document.querySelector( ".container-card-wall" )
    wall.style.left = '0%'
  }

    return (
        <div className="w-75 h-75 p-5 container-card rounded shadow d-flex gap-5">

          <div className='container-card-wall ms-5'></div>

          <div className='bg-dark w-50 h-100 p-3 d-flex justify-content-evenly align-items-center flex-column'>
            <p className='h1 text-light p-1'>Register</p>

            <div className='d-flex gap-5'>
              <UserDates name='First Name' type='text' />
              <UserDates name='Last Name' type='text' />
            </div>

            <UserDates name='Email' type='Email' />
            <UserDates name='Password' type='password' />

              <div className='d-flex gap-5 pt-3'>
                <button>Register</button>
                <button onClick={turnLogin}>Log in</button>
              </div>

          </div>

          <div className='w-50 h-100 p-3 d-flex justify-content-evenly align-items-center flex-column'>
            <p className='text-light h1 p-1'>Log in</p>
            <UserDates name='Email' type='text' />
            <UserDates name='Password' type='password' />

            <div className='d-flex gap-5 pt-5'>
              <button>Log in</button>
              <button onClick={turnRegister}>Register</button>
            </div>

          </div>

       </div>
    )
}

export default Index