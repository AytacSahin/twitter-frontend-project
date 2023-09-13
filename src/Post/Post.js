import axios from 'axios';
import React, { useState, useEffect } from 'react'

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


    /*
    tweetdata = [

        {"id":1,
        "userId":1,
        "userName":"test1",
        "userNick":"test1",
        "text":"time exception!!!!!!!! ",
        "imageUrl":null,
        "likeCount":0,
        "tweedLikes":[
                {"id":1,"userId":1,"tweetId":1},
                {"id":2,"userId":4,"tweetId":1},
                {"id":5,"userId":1,"tweetId":1},
                {"id":7,"userId":1,"tweetId":1}
            ],
        "commentCount":0},
        
        {"id":9,
        "userId":1,
        "userName":"test1",
        "userNick":"test1",
        "text":"when i was a little child","imageUrl":null,"likeCount":0,"tweedLikes":[{"id":8,"userId":1,"tweetId":9}],"commentCount":0},{"id":10,"userId":1,"userName":"test1","userNick":"test1","text":"when i was a little child","imageUrl":null,"likeCount":0,"tweedLikes":[],"commentCount":0},{"id":8,"userId":4,"userName":"test2","userNick":"test2","text":"i hope fixed","imageUrl":null,"likeCount":0,"tweedLikes":[{"id":3,"userId":4,"tweetId":8},{"id":4,"userId":1,"tweetId":8},{"id":6,"userId":4,"tweetId":8},{"id":9,"userId":1,"tweetId":8}],"commentCount":0}]
    */


    if (error) {
        return <div>Hata Olustu.</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <ul className='bg-yellow-500 w-[40%]'>
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