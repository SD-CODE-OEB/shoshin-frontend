import "./dashboard.css";
import React from "react";
import PropTypes from "prop-types";
import { MdPushPin } from "react-icons/md";
import { HiDotsCircleHorizontal } from "react-icons/hi";

const GrayCard = ({ cardInfo, cardHeading, className }) => {
  return (
    <div className={`card`}>
      <div className="body">
        <div className="header">{cardHeading}</div>
        <div className="info">{cardInfo}</div>
      </div>
      <div className="end">
        <MdPushPin className={`pin-icon ${className}`} />
        <HiDotsCircleHorizontal className="dots-icon" />
      </div>
    </div>
  );
};

GrayCard.propTypes = {
  cardInfo: PropTypes.string.isRequired,
  cardHeading: PropTypes.string.isRequired,
  className: PropTypes.string,
};

GrayCard.defaultProps = {
  className: "",
};

export default GrayCard;
