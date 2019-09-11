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
  id: function(props, propName, componentName) {
    const propValue = props[propName]; // the actual value of `id` prop
    if (propValue === null) return;
    if (typeof propValue === "string") return;
    return new Error(`${componentName} only accepts null or string`);
  },
  displayName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.bool,
  selectionCallback: PropTypes.func.isRequired
};

Link.defaultPrps = {
  selected: false
};
