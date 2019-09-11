import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./LinkGroup.css";

const Link = props => {
  const { id, displayName, value, selected, selectionCallback } = props;
  let extraData = "";

  if (value) {
    extraData = ` (${value})`;
  }

  return (
    <li
      className={
        selected ? cx(styles.reactLink, styles.selected) : styles.reactLink
      }
      onClick={() => selectionCallback(id)}
    >
      {displayName}
      {extraData}
    </li>
  );
};

export default Link;

Link.propTypes = {
  id: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.bool,
  selectionCallback: PropTypes.func.isRequired
};

Link.defaultPrps = {
  selected: false
};
