import axios from 'axios';
import React, { useState } from 'react'
import CreateImageUrlPost from '../Post/CreateImageUrlPost';
import Modal from 'react-modal';

const CreateComment = ({refreshData, tweetId}) => {
    const [newComment, setNewComment] = useState();
    const [imageLink, setImageLink] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const userIdDegistir = 1;

    const sendComment = () => {
        axios.post('/comment', {
            text: newComment,
            userId: userIdDegistir,
            tweetId: tweetId,
            imageUrl: imageLink
        })
            .then(function (response) {
                refreshData();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleImageUrl = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const handlePromptSubmit = (text) => {
        setImageLink(text);
        setIsModalOpen(false);
    }

    return (

        <div className='border-2 border-gray-200 border-opacity-50 pt-4 mt-2 bg-gray-100'>

            <div className="flex ">
                <div className="m-2 w-10 py-1">
                    <img className="inline-block h-10 w-10 rounded-full" src="https://aytac-sahin.vercel.app/static/media/headerImage.4719c4dbc590028a0a9f.png" alt="" />
                </div>
                <div className="flex-1 px-2 pt-2 mt-2">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className=" bg-transparent text-gray-400 font-medium text-lg w-full" rows="2" cols="50" placeholder="Post your reply"></textarea>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Tweet'ler resimlerle güzel!"
            >
                <CreateImageUrlPost
                    onClose={handleModalClose}
                    onSubmit={handlePromptSubmit}
                />
            </Modal>

            <div className="flex">
                <div className="w-10"></div>

                <div className="w-64 px-2">

                    <div className="flex items-center">
                        <div onClick={() => handleImageUrl()} className="flex-1 text-center px-1 py-1 m-2">
                            <a className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </a>
                        </div>

                        <div onClick={() => handleImageUrl()} className="flex-1 text-center py-2 m-2">
                            <a className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </a>
                        </div>

                        <div className="flex-1 text-center py-2 m-2">
                            <a className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </a>
                        </div>

                        <div className="flex-1 text-center py-2 m-2">
                            <a className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                <svg className="text-center h-7 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <button onClick={() => sendComment()} className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateComment