import React from 'react';
import useMedia from 'use-media';
import { breakpoints } from '@carbon/elements';
import { Link } from '@carbon/react/icons';
import cx from 'classnames';
import slugify from 'cjk-slug';

import {
  header,
  anchor,
  leftAnchor,
  rightAnchor,
} from './AutolinkHeader.module.scss';

const Anchor = ({ id, string, position }) => {
  const anchorClasses = cx(anchor, {
    [leftAnchor]: position === 'left',
    [rightAnchor]: position === 'right',
  });

  return (
    <a
      className={anchorClasses}
      href={`#${id}`}
      aria-label={`${string} permalink`}>
      <Link size={20} />
    </a>
  );
};

const AutolinkHeader = ({ is: Component, className, ...props }) => {
  const isMobile = useMedia({ maxWidth: breakpoints.md.width });

  const string = React.Children.map(
    props.children,
    (child) => (child.props ? child.props.children : child) // handle bold/italic words
  ).join('');

  const id = `${slugify(string)}`;

  const anchorPosition = () => (isMobile ? 'right' : 'left');

  return (
    <Component className={cx(header, className)} {...props} id={id}>
      {props.children}
      <Anchor id={id} string={string} position={anchorPosition()} />
    </Component>
  );
};

AutolinkHeader.defaultProps = { is: 'h2' };

export default AutolinkHeader;
