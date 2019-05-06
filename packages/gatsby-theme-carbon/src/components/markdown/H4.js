import React from 'react';
import responsiveStyles from '../shared/responsiveStyles';

const h4Css = ({ typeStyles, layout }) => [
  typeStyles.heading02,
  responsiveStyles,
  {
    marginTop: layout[0],
    marginBottom: `calc(0.5 * ${layout[0]})`,
  },
];

const H4 = ({ children }) => (
  <h4 css={h4Css} className="carbon--mdx__h4">
    {children}
  </h4>
);

export default H4;
