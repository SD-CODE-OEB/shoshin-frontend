import React from "react";
import "./menu.css";
import logo from "../../assets/logo.png";
import { BiCalendar } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { PiHeadphonesFill } from "react-icons/pi";
import { FaCircleRadiation, FaPeopleGroup } from "react-icons/fa6";
const Menu = () => {
  return (
    <div className="menu-container">
      <div className="logo-holder">
        <img src={logo} alt="logo" />
        <h2 className="blue">Vasitum</h2>
      </div>
      <div className="link-box">
        <h4 className="link-head">Main Menu</h4>
        <ul className="link-group">
          <li className="link active">
            <MdDashboard className="icon" />
            <a href="#">Dashboard</a>
          </li>
          <li className="link">
            <BsPersonAdd className="icon" />
            <a href="#">Recruitment</a>
          </li>
          <li className="link">
            <BiCalendar className="icon" />
            <a href="#">Schedule</a>
          </li>
          <li className="link">
            <FaPeopleGroup className="icon" />
            <a href="#">Employee</a>
          </li>
          <li className="link">
            <FaCircleRadiation className="icon" />
            <a href="#">Department</a>
          </li>
        </ul>
      </div>
      <div className="link-box">
        <h4 className="link-head">Other</h4>
        <ul className="link-group">
          <li className="link">
            <PiHeadphonesFill className="icon" />
            <a href="#">Support</a>
          </li>
          <li className="link">
            <IoSettings className="icon" />
            <a href="#">Settings</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
