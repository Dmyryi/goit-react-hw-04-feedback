import React from 'react';
import styles from './Section.module.css';

const Notification = ({ message }) => (
  <div>
    <h2 class={styles.title}>{message}</h2>
  </div>
);
export default Notification;
