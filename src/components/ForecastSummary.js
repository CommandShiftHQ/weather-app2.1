import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, icon, temperature, description } = props;
  return <div className="forecast-summary"></div>;
};

export default ForecastSummary;

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
};
