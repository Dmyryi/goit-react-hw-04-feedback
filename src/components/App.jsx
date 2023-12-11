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

  const options = ['good', 'neutral', 'bad'];
  const leaveFeedbackHandler = option => () => {
    handleFeedbackOption(option);
  };

  const totalFeedback = countTotalFeedback();

  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={styles.container}>
      <div>
        <Section title="Give Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={leaveFeedbackHandler}
          />
        </Section>
      </div>
      {totalFeedback === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <div>
          <Section title="Statistics">
            <Statistics
              {...{
                good,
                neutral,
                bad,
                total: totalFeedback,
                positivePercentage,
              }}
            />
          </Section>
        </div>
      )}
    </div>
  );
}
