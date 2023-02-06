import { useState } from 'react'
import './Wall.css'

const Wall = () => {

    
    const [ msgWall , setMsgWall ] = useState(true)

    function turnRegister() {

        //This function checks if responsive should exist and manipulates the DOM based on this information.

        const wall = document.querySelector( ".container-card-wall" )

        if (visualViewport.width > 576) {
            
            setMsgWall(false)
            wall.style.left = '47%'

        }
    }

    function turnLogin() {
        
        //This function checks if responsive should exist and manipulates the DOM based on this information.

        const wall = document.querySelector( ".container-card-wall" )

        if (visualViewport.width > 576) {

            setMsgWall('true')
            wall.style.left = '0%'

        }
      }

    return (

        <div className='container-card-wall ms-5 p-3 bg-dark'>

            {msgWall? 
                <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-evenly'>
                    <p className='h1 text-light'>Do not you have an account yet?</p>
                    <button className='bg-blue outline-0 border-0 text-light fw-bold py-2 px-3 rounded btn-wall' onClick={turnRegister}>Register</button>
                </div>
                :
                <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-evenly'>
                    <p className='h1 text-light'>Do you have an account yet?</p>
                    <button className='bg-blue outline-0 border-0 text-light fw-bold py-2 px-3 rounded btn-wall' onClick={turnLogin}>Login</button>
                </div>
            }

        </div>

    )
}

export default Wall