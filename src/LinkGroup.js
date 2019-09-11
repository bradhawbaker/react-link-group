import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "./Link";
import styles from "./LinkGroup.css";

class LinkGroup extends Component {
  constructor(props) {
    super(props);
    this.linkSelection = this.linkSelection.bind(this);

    this.state = {
      selected: undefined
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    if (selected) {
      this.linkSelection(selected);
    }
  }

  componentDidUpdate(prevProps) {
    const { selected } = this.props;

    if (selected !== prevProps.selected) {
      this.linkSelection(selected);
    }
  }

  linkSelection(id) {
    const { selectionCallback } = this.props;
    const { selected } = this.state;

    if (selected !== id) {
      this.setState({
        selected: id
      });

      if (selectionCallback) {
        selectionCallback(id);
      }
    }
  }

  render() {
    const { links } = this.props;
    const { selected } = this.state;

    const linkList = links.map(link => (
      <Link
        key={link.id}
        {...link}
        selected={link.id === selected}
        selectionCallback={this.linkSelection}
      />
    ));
    return <ul className={styles.reactLinkGroup}>{linkList}</ul>;
  }
}

export default LinkGroup;

LinkGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      displayName: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  selected: PropTypes.string,
  selectionCallback: PropTypes.func
};

LinkGroup.defaultProps = {
  links: []
};
