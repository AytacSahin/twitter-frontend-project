import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const handleEmail = (value) => {
        setEmail(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const handleLogin = () => {

        axios.post('/auth/login', {
            email: email,
            password: password,
        })
            .then((res) => {
                localStorage.setItem("TOKEN", res.data.jwt);
                localStorage.setItem("CurrentUser", res.data.user.id);
            })
            .then((res) => {
                setEmail("")
                setPassword("")
                navigate('/home');
                window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <div>

            <div className="flex items-center justify-center mt-28">


                <div className="bg-gray-900 border border-gray-900 rounded-2xl">

                    <div className="sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">

                        <h1 className="text-white text-2xl">X'e giriş yap</h1>
                        <input className="w-full p-2 bg-gray-900 rounded-md  border border-gray-700 focus:border-blue-700"
                            placeholder="email" type="email" name="correo" value={email} onChange={(e) => handleEmail(e.target.value)} />
                        <input className="w-full p-2 bg-gray-900 rounded-md border border-gray-700 " placeholder="password*"
                            type="password" name="correo" value={password} onChange={(e) => handlePassword(e.target.value)} />
                        <button className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700 "
                            type="submit" name="correo" onClick={handleLogin}>Gönder</button>

                        <p>Hesabın yok mu?
                            <a className="font-semibold text-sky-700" href="/home">Kaydol</a>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login