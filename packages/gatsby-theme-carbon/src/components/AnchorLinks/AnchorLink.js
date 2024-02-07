import React from 'react';
import slugify from 'cjk-slug';
import cx from 'classnames';
import { link } from './AnchorLinks.module.scss';

const AnchorLink = ({ to, children, className }) => {
  const href = to || `#${slugify(children)}`;
  return (
    <a className={cx(link, className)} href={href}>
      {children}
    </a>
  );
};

export default AnchorLink;
