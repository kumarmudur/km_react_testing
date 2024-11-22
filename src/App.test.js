import { render, screen } from "@testing-library/react";
import App from "./App";

test("first react app", () => {
  render(<App />);
  const text = screen.getByText("First React Test Case");
  expect(text).toBeInTheDocument();
});

test("testing input box", () => {
  render(<App />);
  let checkInput = screen.getByRole("textbox");
  let checkPlaceholder = screen.getByPlaceholderText("Enter User Name");
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("value", "shiva");
});

describe("UI test case group", () => {
  test("case 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toBeInTheDocument();
  });
});
