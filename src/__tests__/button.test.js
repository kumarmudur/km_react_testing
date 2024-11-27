import { fireEvent, screen, render } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  test("click event test case", () => {
    render(<Button />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("updated data")).toBeInTheDocument();
  });
});
