import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";

jest.mock("./Sidebar.module.scss", () => ({
  collapsed: "collapsed",
}));

describe("Sidebar", () => {
  test("render", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar collapse", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getAllByRole("button")[0];
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass(/collapsed/i);
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass(/collapsed/i);
  });
});
