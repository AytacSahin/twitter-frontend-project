import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostCard from '../Post/PostCard';
import Comment from '../Comment/Comment';
import axios from 'axios';
import Loading from './Loading';

const PostWithCommUniq = () => {
    const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState([]);
    const token = "Bearer " + localStorage.getItem("TOKEN")

    // TODO ileride tüm axios talepleri axiosWithAuth ile yapılacak.
    const refreshData = () => {
        axios
            .get(`/tweet/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            .then((res) => {
                setIsLoaded(true);
                setPostList([res.data]);
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
                    <PostCard refreshData={refreshData} postList={postList} />
                    <Comment tweetId={id} />
                </ul>
            </div>
        )
    }
};

export default PostWithCommUniq