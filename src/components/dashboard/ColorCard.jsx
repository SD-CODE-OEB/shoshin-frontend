import PropTypes from "prop-types";

const ColorCard = ({ bgColor, textColor, Heading, Number, Text }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="header">{Heading}</div>
      <div className="number">{Number}</div>
      <div className="info" style={{ color: textColor }}>
        {Text}
      </div>
    </div>
  );
};
ColorCard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  Heading: PropTypes.string.isRequired,
  Number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  Text: PropTypes.string.isRequired,
};

export default ColorCard;
