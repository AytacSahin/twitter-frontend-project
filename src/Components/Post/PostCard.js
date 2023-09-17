import React, { useState } from 'react'
import dateCalculator from '../../Helpers/DateCalculator';
import PostFooterBar from './PostFooterBar';
import determineLinkType from '../../Helpers/IsVideoOrImage';


const PostCard = ({ postList, refreshData }) => {

    return (
        <div>

            {postList.map(post => (
                <li key={post.id} className="border-l-2 border-r-2 border-t-2 border-gray-300 border-opacity-40 pr-10">
                    <div className="flex flex-shrink-0 p-4 pb-0">
                        <a className="flex-shrink-0 group block">
                            <div className="flex items-center">
                                <div>
                                    <img className="inline-block h-10 w-10 rounded-full" src={post.profilePicture} alt="" />
                                </div>
                                <div className="ml-3">
                                    <p className="text-base leading-6 font-medium text-black">
                                        {post.userName}
                                        <span className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                                            {" "}@{post.userNick}{dateCalculator(post.updatedAt)}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="pl-16">
                        <p className="text-base width-auto font-medium text-black flex-shrink">
                            {post.text}
                        </p>

                        {
                            post.imageUrl &&
                            <div className="md:flex-shrink pr-6 pt-3">
                                {determineLinkType(post.imageUrl) == "video" ? (
                                    <iframe
                                        width="560"
                                        height="315"
                                        src={post.imageUrl}
                                        title="YouTube video player"
                                        frameorder="0"
                                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    >
                                    </iframe>
                                ) : (
                                    <img className="rounded-lg w-full h-64" src={post.imageUrl} alt="ben bir resimim..." />
                                )}
                            </div>
                        }
                        <PostFooterBar refreshData={refreshData} tweetId={post.id} likeCount={post.likeCount} />
                    </div>
                </li>
            ))}

        </div>
    )
}

export default PostCard