import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "./Link";

class LinkGroup extends Component {
  constructor(props) {
    super(props);
    this.linkSelection = this.linkSelection.bind(this);

    this.state = {
      selected: undefined
    };
  }

  componentDidMount() {
    let { selected } = this.props;

    if (selected) {
      this.linkSelection(selected);
    }
  }

  componentDidUpdate(prevProps) {
    let { selected } = this.props;

    if (selected !== prevProps.selected) {
      this.linkSelection(selected);
    }
  }

  linkSelection(id) {
    let { selectionCallback } = this.props;
    let { selected } = this.state;

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
    return <ul className="react-link-group">{linkList}</ul>;
  }
}

export default LinkGroup;

LinkGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: function(props, propName, componentName) {
        const propValue = props[propName]; // the actual value of `id` prop
        if (propValue === null) return;
        if (typeof propValue === "string") return;
        return new Error(`${componentName} only accepts null or string`);
      },
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
