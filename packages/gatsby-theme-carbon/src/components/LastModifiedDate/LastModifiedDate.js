import React from 'react';
import { Row, Column } from '../Grid';
import * as styles from './last-modified-date.module.scss';

const LastModifiedDate = ({ date }) => {
  const options = {
    year: "numeric",
    month: '2-digit',
    day: '2-digit',
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Seoul"
  };

  const lastModified = new Date(date);

  return date ? (
    <Row className={styles.row}>
      <Column>
        <div className={styles.text}>
          Page last updated: {lastModified.toLocaleString('ko-KR', options)}
          {/* // https://www-03preprod.ibm.com/support/knowledgecenter/ibm_style/dates-and-times.html */}
        </div>
      </Column>
    </Row>
  ) : null;
};
export default LastModifiedDate;
