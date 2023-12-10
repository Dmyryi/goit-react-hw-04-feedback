import React from 'react';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <div>
    <h2 class={styles.title}>{title}</h2>
    {children}
  </div>
);
export default Section;
