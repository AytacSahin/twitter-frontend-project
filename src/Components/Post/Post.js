import axios from 'axios';
import React, { useState, useEffect } from 'react'
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import Loading from '../Pages/Loading';

const Post = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState();

    const token = "Bearer " + localStorage.getItem("TOKEN")

    // TODO ileride tüm axios talepleri axiosWithAuth ile yapılacak.
    const refreshData = () => {
        axios
            .get("/tweet", {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                setIsLoaded(true);
                setPostList(res.data);
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
        return <div className='w-[42rem] font-bold text-6xl flex justify-center text-center items-center'>Hata Olustu.</div>
    } else if (!isLoaded) {
        return (<div className='w-[42rem]'><Loading /></div>);
    } else {
        return (
            <div >
                <ul className='w-[42rem]'>
                    <CreatePost refreshData={refreshData} />
                    <PostCard refreshData={refreshData} postList={postList} />
                </ul>
            </div>
        )
    }
};

export default Post;