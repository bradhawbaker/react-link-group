import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeThemeFromProps } from '@css-modules-theme/react';

import Link from './Link';
import styles from './LinkGroup.css';

class LinkGroup extends Component {
  constructor(props) {
    super(props);
    this.linkSelection = this.linkSelection.bind(this);

    this.state = {
      selected: undefined,
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
        selected: id,
      });

      if (selectionCallback) {
        selectionCallback(id);
      }
    }
  }

  render() {
    const { links, autoSelect } = this.props;
    const { selected } = this.state;
    const theme = composeThemeFromProps(styles, this.props, {
      compose: 'Replace',
    });

    const linkList = links.map((link, i) => (
      <Link
        key={link.id}
        {...this.props}
        {...link}
        selected={
          link.id === selected || (selected === undefined && i === 0 && autoSelect)
        }
        selectionCallback={this.linkSelection}
      />
    ));
    return <ul className={theme.reactLinkGroup}>{linkList}</ul>;
  }
}

export default LinkGroup;

LinkGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      displayName: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ),
  selected: PropTypes.string,
  selectionCallback: PropTypes.func,
  autoSelect: PropTypes.bool,
};

LinkGroup.defaultProps = {
  links: [],
};
