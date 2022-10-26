import React from "react";
import PropTypes from "prop-types";
import "./style.css";

Button.propTypes = {
  text: PropTypes.string.isRequired,
  classType: PropTypes.string,
};
function Button(props) {
  const { text, classNumType } = props;
  return <button className={classNumType}>{text}</button>;
}

export default Button;
