import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

jest.mock("./Button.module.scss", () => ({
  Button: "Button",
  clear: "clear",
}));

describe("Button component", () => {
  test("render", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("render with theme", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("clear");
  });
});
