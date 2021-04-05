import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg'}
                 alt={'Image is there'}/>

            {props.message}

            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    )
};

export default Post;