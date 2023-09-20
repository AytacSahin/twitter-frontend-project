import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MenuUserInfo = () => {
    const navigate = useNavigate();
    const token = "Bearer " + localStorage.getItem("TOKEN")
    const currentUserId = localStorage.getItem("CurrentUser");
    const [userInfos, setUserInfos] = useState([]);

    const refreshData = async () => {
        try {
            const response = await axios.get(`/user/${currentUserId}`, {
                headers: {
                    Authorization: token
                }
            });

            const userData = response.data;

            setUserInfos(userData);

            localStorage.setItem("userName", userData.userName);
            localStorage.setItem("userNick", userData.userNick);
            localStorage.setItem("profilePicture", userData.profilePicture);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);


    const exitUser = () => {
        navigate('/home');
        localStorage.clear();
        window.location.reload()
    }

    return (
        <div>
            <div className="flex-shrink-0 flex hover:bg-blue-00 rounded-full p-4 mt-4 mr-2">
                <a className="flex-shrink-0 group block">
                    <div className="flex items-center">


                        {userInfos.profilePicture !== null ? (
                            <img
                                className="h-14 w-14 md rounded-full relative border-2 border-white"
                                src={userInfos.profilePicture}
                                alt=""
                            />) : (
                            <div className="h-14 w-14 md rounded-full relative border-2 border-white bg-blue-400 text-white text-center text-3xl pt-2">
                                {userInfos.userName.charAt(0).toUpperCase()}
                            </div>
                        )}

                        <div className="ml-3">
                            <p className="text-base leading-6 font-medium text-black">
                                {userInfos.userName}
                            </p>
                            <p className="text-sm leading-5 font-medium text-black group-hover:text-gray-300 transition ease-in-out duration-150">
                                {userInfos.userNick}
                            </p>
                        </div>

                    </div>

                </a>
                <button onClick={() => exitUser()} className='ml-20'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default MenuUserInfo