import { render, screen } from "@testing-library/react";
import App from "./App";

// test("snapshot testing for app component", () => {
//   const view = render(<App />);
//   expect(view).toMatchSnapshot();
// });

test("first react app", () => {
  render(<App />);
  const text = screen.getByText("First React Test Case");
  expect(text).toBeInTheDocument();
});
