import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul class={styles.feedback_list}>
    {options.map(option => (
      <li class={styles.feedback_item} key={option}>
        <button onClick={() => onLeaveFeedback(option)}>{option}</button>
      </li>
    ))}
  </ul>
);

export default FeedbackOptions;
