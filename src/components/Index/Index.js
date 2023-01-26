
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'

const Index = () => {

    return (
        <div className="w-75 h-75 p-5 container-card rounded shadow d-flex gap-5">

          <div className='container-card-wall ms-5 p-3'></div>

          <Register/>
          <Login/>

       </div>
    )
}

export default Index