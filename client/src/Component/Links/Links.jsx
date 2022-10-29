import React from 'react';
import PropTypes from "prop-types";

 
Links.propTypes = {
  classNumType: PropTypes.string,

};
function Links(props) {
  const { classNumType, href } = props;
  return (
    <div className={classNumType}>
        <a href={href}>Đây là link</a>
    </div>
  )
}



export default Links
