import React from "react";
import PropTypes from "prop-types";
import "./menu.css";
import logo from "../../assets/logo.png";
import { BiCalendar } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { PiHeadphonesFill } from "react-icons/pi";
import { FaCircleRadiation, FaPeopleGroup } from "react-icons/fa6";

function Menu({ show }) {
  return show ? (
    <div className="menu-container">
      <div className="logo-holder">
        <img src={logo} alt="logo" />
        <h2 className="blue">Vasitum</h2>
      </div>
      <div className="link-box">
        <h4 className="link-head">Main Menu</h4>
        <ul className="link-group">
          <li className="link active">
            <a href="#">
              <MdDashboard className="icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li className="link">
            <a href="#">
              <BsPersonAdd className="icon" />
              <span>Recruitment</span>
            </a>
          </li>
          <li className="link">
            <a href="#">
              <BiCalendar className="icon" />
              <span>Schedule</span>
            </a>
          </li>
          <li className="link">
            <a href="#">
              <FaPeopleGroup className="icon" />
              <span>Employee</span>
            </a>
          </li>
          <li className="link">
            <a href="#">
              <FaCircleRadiation className="icon" />
              <span>Department</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="link-box">
        <h4 className="link-head">Other</h4>
        <ul className="link-group">
          <li className="link">
            <a href="#">
              <PiHeadphonesFill className="icon" />
              <span>Support</span>
            </a>
          </li>
          <li className="link">
            <a href="#">
              <IoSettings className="icon" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <></>
  );
}
Menu.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Menu;
