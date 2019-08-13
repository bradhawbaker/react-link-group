import React from "react";
import PropTypes from "prop-types";

const Link = props => {
  let { id, displayName, value, selected, selectionCallback } = props;
  let extraData = "";
  let linkClass = selected ? "react-link selected" : "react-link";

  if (value) {
    extraData = ` (${value})`;
  }

  return (
    <li className={linkClass} onClick={() => selectionCallback(id)}>
      {displayName}
      {extraData}
    </li>
  );
};

export default Link;

Link.propTypes = {
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.bool,
  selectionCallback: PropTypes.func.isRequired
};

Link.defaultPrps = {
  selected: false
};
