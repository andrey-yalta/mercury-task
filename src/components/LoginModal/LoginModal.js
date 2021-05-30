import {LoginApi} from "../../api/api";
import React from 'react'

export const LoginModal =({setIsLogginModalOpen, setIsLoggedIn})=>{
    const [login, setLogin] = React.useState("" )
    const [password, setPassword] = React.useState( "")

    const  onLoginClick = async(e)=>{
        e.preventDefault()
        const response = await LoginApi.login(login,password)
        if(response === 200){
            const date =new Date(Date.now()).toString()
            setIsLoggedIn(true)
            setIsLogginModalOpen(false)
            localStorage.setItem(login,date)
            alert("succesfull")
        }
    }
    return(
        <div className={"loginModal"}>
            <form onSubmit={onLoginClick}>
                <input onInput={e=>setLogin(e.target.value)} type="text" name="login" placeholder="login"/>
                <input onInput={e=>setPassword(e.target.value)} type="text" name="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}