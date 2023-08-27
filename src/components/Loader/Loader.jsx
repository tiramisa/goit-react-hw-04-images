import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import styles from '../../css/styles.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <InfinitySpin
      width="200"
      color="#4fa94d"
      ariaLabel="three-dots-loading"
      wrapperClassName=""
    />
  </div>
);

export default Loader;
