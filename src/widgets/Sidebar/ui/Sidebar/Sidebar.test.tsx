import { userEvent } from "@testing-library/user-event";
import { Sidebar } from "./Sidebar";
import { renderWithTranslation } from "@/shared/lib/tests/renderWithTranslation/renderWithTranslation";

jest.mock("./Sidebar.module.scss", () => ({
  collapsed: "collapsed",
}));

describe("Sidebar", () => {
  test("render", () => {
    const screen = renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar collapse", async () => {
    const screen = renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getAllByRole("button")[0];
    await userEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass(/collapsed/i);
    await userEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass(/collapsed/i);
  });
});
