import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png'
                     alt='New img'/>
            </div>
            <div> Avatar + description</div>

            <MyPosts/>
        </div>
    )
};

export default Profile;