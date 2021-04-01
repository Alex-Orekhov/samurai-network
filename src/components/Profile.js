import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png'
                     alt='New img'/>
            </div>
            <div> Avatar + description</div>
            <div> My posts</div>
            <div> New post </div>
            <div className={s.posts}>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
};

export default Profile;