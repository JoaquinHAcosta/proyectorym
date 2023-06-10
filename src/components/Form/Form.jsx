import { useState } from "react";
import { validation } from "./validation";
import style from "./Form.module.css"

const Form = ( {login} ) => {

    const [ userData, setUserData ] = useState({
        email: "",
        password: ""
    })

    const [ errors, setErrors ] = useState({})
 
    const handleChange = (event) => {
        setErrors(validation({
            ...userData,
            [event.target.name] : event.target.value,
        }))
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <div className={style.loginBox}>
            <form onSubmit={handleSubmit}>
                <div className={style.userBox}>
                    <label htmlFor="email">Email: </label>
                    <input onChange={handleChange} type="text" name="email" value={userData.email} autoComplete="on"/>
                    {errors.email ? <p className={style.error}>{errors.email}</p> : <p></p>}
                </div>
                <div className={style.userBox}>
                    <input onChange={handleChange} type="text" name="password" value={userData.password} autoComplete="on"/>
                    <label htmlFor="password">Password: </label>
                    {errors.password ? <p className={style.error}>{errors.password}</p> : <p></p>}
                </div>
                <center>
                    <a href="" onClick={handleSubmit}>
                        Login <span></span>
                    </a>
                </center>
            </form>
        </div>
    )
}

export default Form;