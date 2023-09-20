import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = ({ onClose }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [nick, setNick] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") {
            setName(value);
        } else if (name === "phoneNumber") {
            setPhoneNumber(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "nick") {
            setNick(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };

    const handleRegister = () => {
        axios
            .post('/auth/register', {
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                nick: nick,
                password: password,
            })
            .then((res) => {
                onClose();
                navigate('/home');
                setEmail("");
                setPhoneNumber("");
                setName("");
                setNick("");
                setPassword("");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="flex items-center justify-center mt-20">
                <div className="bg-gray-900 border border-gray-900 rounded-2xl">
                    <div className="sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
                        <h1 className="text-white text-2xl">X'e kayıt ol</h1>
                        <input
                            className="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
                            type="text"
                            placeholder="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
                            placeholder="phone number"
                            type="text"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
                            placeholder="email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
                            placeholder="nick"
                            type="text"
                            name="nick"
                            value={nick}
                            onChange={handleChange}
                        />
                        <input
                            className="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                        <button
                            className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700"
                            type="button"
                            name="submit"
                            onClick={handleRegister}
                        >
                            Kaydet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Register