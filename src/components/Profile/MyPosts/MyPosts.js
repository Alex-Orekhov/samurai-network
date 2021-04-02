import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <Post message={'Hi, how are you?'} likeCount={3}/>
                    <Post message={`It's my first post`} likeCount={1}/>
                </div>
            </div>
        </div>
    )
};

export default MyPosts;