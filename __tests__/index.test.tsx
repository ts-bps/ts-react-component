import * as React from "react";
import { render } from "react-testing-library";
import { Sum } from "../src/";

describe("Sum", () => {
  test("Renders", async () => {
    const { getAllByText } = render(<Sum a={1} b={2} />);
    const result = getAllByText("3");
    expect(result.length).toEqual(1);
  });
});
