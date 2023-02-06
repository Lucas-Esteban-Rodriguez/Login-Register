
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'
import Wall from '../Wall/Wall.js'
import { useEffect } from 'react'


const Index = () => {
    //check if responsive must exist to manipulate the DOM.

    useEffect(()=>{

        const register = document.querySelector('.container-register')

        if (visualViewport.width < 576 ) {
        register.classList.add('card-slow')
        }

    })

    return (
        <div className="w-lg-75 h-lg-75 w-md-100 h-md-50 px-5 container-card rounded d-flex gap-md-5 position-relative">

        <Wall/> 
        <Register/>
        <Login/>

       </div>
    )
}

export default Index