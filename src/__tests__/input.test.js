import { render, screen } from "@testing-library/react";
import Input from "../components/Input";

describe("Input component", () => {
  test("get by role", () => {
    render(<Input />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
});
