import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.image}>
                <img src='http://img0.joyreactor.cc/pics/post/%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-art-allwife-man-5365630.jpeg'
                     alt='New img'/>
            </div>
            <div className={s.descriptionBlock}>
                Avatar + description
            </div>
        </div>
    )
};

export default ProfileInfo;