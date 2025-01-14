import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import slugify from 'cjk-slug';
import cx from 'classnames';

import {
  tabsContainer,
  list,
  selectedItem,
  listItem,
  link,
} from './PageTabs.module.scss';

export default class PageTabs extends React.Component {
  render() {
    const { title, tabs, slug } = this.props;
    const currentTab = slug.split('/').filter(Boolean).slice(-1)[0];

    const pageTabs = tabs.map((tab) => {
      const slugifiedTab = slugify(tab);
      const selected = slugifiedTab === currentTab;
      // matches with or without trailing slash: /?
      // matches with or without hash link: (#.*)?
      const currentTabRegex = new RegExp(`${currentTab}/?(#.*)?$`);
      const href = slug.replace(currentTabRegex, slugifiedTab);
      return (
        <li key={tab} className={cx({ [selectedItem]: selected }, listItem)}>
          <Link className={link} to={`${href}`}>
            {tab}
          </Link>
        </li>
      );
    });

    return (
      <div className={tabsContainer}>
        <div className="cds--grid">
          <div className="cds--row">
            <div className="cds--col-lg-12 cds--col-no-gutter">
              <nav aria-label={title}>
                <ul className={list}>{pageTabs}</ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageTabs.propTypes = {
  tabs: PropTypes.array,
  slug: PropTypes.string,
};
