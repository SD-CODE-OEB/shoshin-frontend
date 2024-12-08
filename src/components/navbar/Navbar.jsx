// import React from "react";
import "./nav.css";
import searchIcon from "../../assets/ic_search.svg";
import notification from "../../assets/Vector.svg";
import chevDown from "../../assets/vec1.svg";
import profile from "../../assets/profile.png";
import message from "../../assets/mssg.svg";
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      <div className="nav-pr-box">
        <button type="button" className="icon-btn">
          <img src={notification} alt="notification" />
          <div className="dot"></div>
        </button>
        <button type="button" className="icon-btn">
          <img src={message} alt="message" className="mssg" />
        </button>
        <div className="pr-box">
          <img src={profile} alt="profile" className="profile" />
          <div className="pr-name">
            <p className="name">John Doe</p>
          </div>
          <img src={chevDown} alt="down" className="down" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
