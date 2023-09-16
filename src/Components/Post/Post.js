import axios from 'axios';
import React, { useState, useEffect } from 'react'
import CreatePost from './CreatePost';
import PostCard from './PostCard';

const Post = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState();

    // TODO: LOGIN'DEN AL:
    const userId = 2;

    // TODO ileride tüm axios talepleri axiosWithAuth ile yapılacak.
    useEffect(() => {
        axios
            .get("/tweet")
            .then((res) => {
                setIsLoaded(true);
                setPostList(res.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Hata Olustu.</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div >
                <ul className='w-[40rem]'>
                    <CreatePost />
                    <PostCard postList={postList} />
                </ul>
            </div>
        )
    }
};

export default Post;