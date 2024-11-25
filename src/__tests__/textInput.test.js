import { fireEvent, render, screen } from "@testing-library/react";
import TextInput from "../components/TextInput";

describe("TextInput Component", () => {
  test("on change event testing", () => {
    render(<TextInput />);
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "shiva" } });
    expect(input.value).toEqual("shiva");
  });
});
