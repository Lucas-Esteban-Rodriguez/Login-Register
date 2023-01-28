
import Register from '../Register/Register.js'
import Login from '../Login/Login.js'

const Index = () => {

    return (
        <div className="w-lg-75 h-lg-75 w-md-100 h-md-50 px-5 container-card rounded d-md-flex gap-5">

          <div className='container-card-wall ms-md-5 p-md-3'></div>

          <Register/>
          <Login/>

       </div>
    )
}

export default Index