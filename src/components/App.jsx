import React, { useState } from 'react';
import Statistics from './Statistics/StatisticFeeadback';
import FeedbackOptions from './Feedback/FeedbackOptions';
import Section from './Notification/Section';
import Notification from './Notification/NotificationFeedback';
import styles from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  // eslint-disable-next-line
  const [options, setOptions] = useState(['good', 'neutral', 'bad']);

  const handleFeedbackOption = option => {
    // eslint-disable-next-line
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  return (
    <div className={styles.container}>
      <div>
        <Section title="Give Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedbackOption}
          />
        </Section>
      </div>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <div>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        </div>
      )}
    </div>
  );
}
