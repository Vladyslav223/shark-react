import React from "react";
<<<<<<< HEAD
=======

>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7
import "./Profile.scss";

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("userData"));
<<<<<<< HEAD
  if (data.results) {
    const { name, picture, location, email, login } = data.results[0];
=======
  //const userKey = JSON.parse(localStorage.getItem('userKey'));
>>>>>>> c15402091b58b88a0e922a1779c96bc271c383d7

  if (data.results) {
    const { name, picture, location, email, login } = data.results[0];
    return (
      <>
        <h1>Profile</h1>
        <div className="user">
          <img className="user__image" src={picture.large} alt="user" />
          <div className="user__info">
            <div className="user__label">Name:</div>
            <div className="user__name">
              {name.title + " " + name.first + " " + name.last}
            </div>
            <div className="user__label">Nick:</div>
            <div className="user__username">{login.username}</div>
            <div className="user__label">Country:</div>
            <div className="user__country">{location.country}</div>
            <div className="user__label">City:</div>

            <div className="user__name">{location.city}</div>
            <div className="user__label">Email:</div>
            <div className="user__email">{email}</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <h1>Profile</h1>
      <div></div>
    </div>
  );
};

export default Profile;
