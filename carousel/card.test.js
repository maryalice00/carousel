// src/components/Card/__tests__/Card.test.js

import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Card from "../Card";

test("renders Card without errors", () => {
  render(<Card caption="Test Caption" src="test-image.jpg" currNum={1} totalNum={3} />);
  // If the test reaches this point without throwing errors, it passes.
});

test("Card snapshot", () => {
  const tree = renderer
    .create(<Card caption="Test Caption" src="test-image.jpg" currNum={1} totalNum={3} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
