import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMv86_LalaC-b83K1AtbyDFjRONGMgeHO5OA-V_NAlR1_WGDE2' />
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts />
        </div>
    )
};


export default Profile;