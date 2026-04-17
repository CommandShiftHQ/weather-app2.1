import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  it("renders correctly", () => {
    const validProps = {
      date: 1111111,
      temperature: {
        min: 12,
        max: 22,
      },
      wind: {
        speed: 5,
        direction: "n",
      },
      humidity: 50,
    };

    const { asFragment } = render(<ForecastDetails forecast={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
