import './UserDates.css'

const UserDates = (props) => {
    return (
        <div className='w-75 position-relative'>
            <input className='position-relative text-light p-2' required type= {props.type} name= {props.name} ></input>
            <label className='position-absolute text-light ms-1' for= {props.name} > {props.name} </label>
        </div>
    )
}

export default UserDates;