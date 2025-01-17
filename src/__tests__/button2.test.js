import { render, screen } from "@testing-library/react";
import Button2 from "../components/Button2";

describe("Button2 component", () => {
  test("getByRole testing", () => {
    render(<Button2 />);
    const btn1 = screen.getByRole("button", { name: "Click 1" });
    const btn2 = screen.getByRole("button", { name: "Click 2" });
    const input1 = screen.getByRole("textbox", { name: "User Name" });
    const input2 = screen.getByRole("textbox", { name: "User Age" });
    const div1 = screen.getByRole("dummy");

    expect(btn1).toBeInTheDocument();
    expect(btn2).toBeInTheDocument();
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(div1).toBeInTheDocument();
  });
});
