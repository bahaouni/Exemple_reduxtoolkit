import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from './features/user';
const Login = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => dispatch(login({ email: "bahaouni1@gmail.com", nom: "ouni", prenom: "baha", address: "Sousse" }))}

            >se connecter !</button>
            <button
                onClick={() => dispatch(logout())}

            >se deconnecter !</button>Z
        </div>
    )
}

export default Login
