import React, { Component } from "react";
import PropTypes from "prop-types";

class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected
    };
  }

  render() {
    let { id, displayName, value, selected, selectionCallback } = this.props;
    let extraData = "";
    let linkClass = selected ? "react-link selected" : "react-link";

    if (value) {
      extraData = `(${value})`;
    }

    return (
      <span className={linkClass} onClick={() => selectionCallback(id)}>
        {displayName} {extraData}
      </span>
    );
  }
}

export default Link;

Link.propTypes = {
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selected: PropTypes.bool,
  selectionCallback: PropTypes.func.isRequired
};
