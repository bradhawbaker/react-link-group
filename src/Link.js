import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { composeThemeFromProps } from '@css-modules-theme/react';

import styles from './LinkGroup.css';

const Link = (props) => {
  const { id, displayName, value, selected, selectionCallback } = props;
  let extraData = '';

  if (value) {
    extraData = ` (${value})`;
  }

  const theme = composeThemeFromProps(styles, props, { compose: 'Replace' });

  return (
    <li
      className={
        selected ? cx(theme.reactLink, theme.selected) : theme.reactLink
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
  selectionCallback: PropTypes.func.isRequired,
};

Link.defaultPrps = {
  selected: false,
};
