import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostCard from '../Post/PostCard';
import CreateComment from './CreateComment';
import Loading from '../Pages/Loading';

const Comment = ({ tweetId }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState();
    const token = "Bearer " + localStorage.getItem("TOKEN")

    // TODO ileride tüm axios talepleri axiosWithAuth ile yapılacak.
    const refreshData = () => {
        axios
            .get(`/comment?tweetId=${tweetId}`, {
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
        return <div className='w-[42rem]'>Hata Olustu.</div>
    } else if (!isLoaded) {
        return (<div className='w-[42rem]'><Loading /></div>);
    } else {
        return (
            <div >
                <ul className='w-[42rem]'>
                    <CreateComment refreshData={refreshData} tweetId={tweetId} />
                    <PostCard refreshData={refreshData} postList={postList} />
                </ul>
            </div>
        )
    }
};

export default Comment