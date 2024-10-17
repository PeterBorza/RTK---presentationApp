import React from "react";
import { render, shallow } from "enzyme";

import Box from "./Box";

const mockUseHover = jest.fn().mockReturnValue(true);
jest.mock("../../hooks", () => ({
  useHover: () => mockUseHover(),
}));

describe("Box component", () => {
  it("returns div 1 if isHover is true", () => {
    //@ts-expect-error shallow argument is Element, shallow expecting ReactElement
    const renderBox = shallow(<Box />);
    const box = renderBox.find("[data-test-id='div1']").exists();

    expect(box).toBeTruthy();
  });

  it("returns div 2 if isHover is false", () => {
    (mockUseHover as jest.Mock).mockReturnValue(false);
    //@ts-expect-error shallow argument is Element, shallow expecting ReactElement
    const renderBox = shallow(<Box />);
    const box = renderBox.find("[data-test-id='div2']").exists();

    expect(box).toBeTruthy();
  });
});
