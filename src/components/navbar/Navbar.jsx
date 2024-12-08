import React from "react";
import "./nav.css";
import searchIcon from "../../assets/ic_search.svg";
import notification from "../../assets/Vector.svg";
import chevDown from "../../assets/vec1.svg";
import profile from "../../assets/profile.png";
import message from "../../assets/mssg.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import PropTypes from "prop-types";

const Navbar = ({ showMenu, setShowMenu }) => {
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth - 250);
  React.useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth - 160);
      if (window.innerWidth < 900) {
        setScreenWidth(window.innerWidth - 100);
      }
      if (window.innerWidth > 1330) {
        setScreenWidth(window.innerWidth - 240);
      }
      if (window.innerWidth < 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setShowMenu]);
  return (
    <div
      className="nav-container"
      style={showMenu ? { width: screenWidth } : { width: "100%" }}
    >
      <button type="button" onClick={() => setShowMenu(!showMenu)}>
        <RxHamburgerMenu className="ham-icon" />
      </button>
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
Navbar.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default Navbar;
