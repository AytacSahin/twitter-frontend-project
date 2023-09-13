import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { ReactDOM } from 'react'

const Post = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postList, setPostList] = useState();

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
                console.log(error);
            });
    }, []);

    if (error) {
        return <div>Hata Olustu.</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <ul>
                {postList.map(post => (
                    <li key={post.id}>
                        {post.text}
                    </li>
                ))}
            </ul>
        )
    }

}

export default Post;