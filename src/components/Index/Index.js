
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import { useEffect } from 'react'


const Index = () => {

    useEffect(()=>{

        const register = document.querySelector('.container-register')

        if (visualViewport.width < 576 ) {
        register.classList.add('card-slow')
        }

    })

    return (
        <div className="w-lg-75 h-lg-75 w-md-100 h-md-50 px-5 container-card rounded d-flex gap-md-5 position-relative">

          <div className='container-card-wall ms-5 p-3'></div>

          <Register/>
          <Login/>

       </div>
    )
}

export default Index