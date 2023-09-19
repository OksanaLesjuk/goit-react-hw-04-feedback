import { FeedbackButton, FeedbackButtons } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons>
      {options.map(option => (
        <FeedbackButton type="button" onClick={onLeaveFeedback} key={option}>
          {option}
        </FeedbackButton>
      ))}
    </FeedbackButtons>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
