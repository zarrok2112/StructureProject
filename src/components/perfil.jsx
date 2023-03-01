import React from "react";
import "../assets/Profile.css"

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-picture">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
          className="profile-picture-img"
        />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">Juan Pérez</h1>
        <p className="profile-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          imperdiet libero. Aliquam quis massa et est pellentesque scelerisque.
          Quisque vel nibh id lacus mollis ornare a eu nulla. Suspendisse sed
          lorem elit. Donec ac blandit sem. Curabitur euismod vestibulum dui
          sit amet hendrerit.
        </p>
      </div>
    </div>
  );
};
