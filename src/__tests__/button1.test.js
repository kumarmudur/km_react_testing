import { fireEvent, render, screen } from "@testing-library/react";
import Button1 from "../components/Button1";
import handleOtherMethod from "../helper";

describe("button1 component", () => {
  test("method testing case 1", () => {
    render(<Button1 />);
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("hello shiva")).toBeInTheDocument();
  });

  test("other method testing case 2", () => {
    expect(handleOtherMethod()).toMatch("hello");
  });
});
