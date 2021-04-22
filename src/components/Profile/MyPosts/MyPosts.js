import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    function addPost() {
        props.dispatch({ type: 'ADD-POST' });
    }

    let onPostChange = () => {
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: newPostElement.current.value});
    }

    return (
        <div className={s.postsBlock}>
           <h3> My posts </h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;