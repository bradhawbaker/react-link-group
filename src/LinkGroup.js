import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "./Link";

class LinkGroup extends Component {
  constructor(props) {
    super(props);
    this.linkSelection = this.linkSelection.bind(this);

    this.state = {
      selected: props.selected
    };
  }

  linkSelection(id) {
    let { selectionCallback } = this.props;
    let { selected } = this.state;

    this.setState({
      selected: id
    });

    if (selectionCallback && selected !== id) {
      selectionCallback(id);
    }
  }

  render() {
    let { links } = this.props;
    let { selected } = this.state;
    let linkList = links.map(link => {
      return (
        <Link
          key={link.id}
          {...link}
          selected={link.id === selected}
          selectionCallback={this.linkSelection}
        />
      );
    });
    return <div className="react-link-group">{linkList}</div>;
  }
}

export default LinkGroup;

LinkGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ).isRequired,
  selected: PropTypes.string,
  selectionCallback: PropTypes.func
};
