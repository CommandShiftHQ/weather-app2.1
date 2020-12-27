import React from "react";
import "../styles/App.css";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts }) => {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
};

export default ForecastSummaries;
