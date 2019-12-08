import React from 'react';
import { HashRouter, Redirect } from 'react-router-dom';

import './Profile.scss'

const Profile = () => {
    const data = JSON.parse(localStorage.getItem('userData'));
    const userKey = JSON.parse(localStorage.getItem('userKey'));

    if (!userKey) {
        return (
          <HashRouter>
            <Redirect to="/autorise" />
          </HashRouter>
        );
    }

    if (data.results) {
        console.log(data.results[0]);
        const { name, picture, location, email, login } = data.results[0];
        return (
            <>
                <h1>Profile</h1>
                <div className="user">
                    <img className="user__image" src={picture.large} alt="user" />
                    <div className="user__info">
                        <div className="user__name">Name:{
                            name.title + ' ' + name.first + ' ' + name.last
                        }
                        </div>
                        <div className="user__username">Nick:{
                            login.username
                        }</div>
                        <div className="user__country">Country:{
                            location.country
                        }</div>
                        <div className="user__name">City:{
                            location.city
                        }</div>
                        <div className="user__email">Email:{
                            email
                        }</div>
                    </div>
                    
                </div>

            </>
        );
    }    

    return (
        <>
        <h1>Profile</h1>
        <div></div>
        </>
    );
};

export default Profile;
