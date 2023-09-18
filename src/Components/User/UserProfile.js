import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserDetails from './UserDetails';
import PostCard from '../Post/PostCard'
import Loading from '../Pages/Loading';

const UserProfile = () => {

    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);
    const [userInfo, setUserInfo] = useState([]);

    // TODO ileride tüm axios talepleri axiosWithAuth ile yapılacak.
    const refreshData = () => {
        Promise.all([
            axios.get(`/tweet?userId=${id}`),
            axios.get(`/user/${id}`)
        ])
            .then((responses) => {
                const [postResponse, userResponse] = responses;
                setIsLoaded(true);
                setPostList(postResponse.data);
                setUserInfo(userResponse.data.length < 1 ? [userResponse.data] : userResponse.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    };

    useEffect(() => {
        refreshData();
    }, []);

    if (error) {
        return <div className='w-[42rem]'>Hata Olustu.</div>
    } else if (!isLoaded) {
        return (<div className='w-[42rem]'><Loading /></div>);
    } else {
        return (
            <div >
                <ul className='w-[42rem]'>
                    <UserDetails userInfo={userInfo} />
                    <PostCard refreshData={refreshData} postList={postList} />
                </ul>
            </div>
        )
    }
};

export default UserProfile