import { userEvent } from "@testing-library/user-event";
import { Sidebar } from "./Sidebar";
import { renderComponent } from "@/shared/lib/tests/renderComponent/renderComponent";

jest.mock("./Sidebar.module.scss", () => ({
  collapsed: "collapsed",
}));

describe("Sidebar", () => {
  test("render", () => {
    const screen = renderComponent(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar collapse", async () => {
    const screen = renderComponent(<Sidebar />);
    const toggleButton = screen.getAllByRole("button")[0];
    await userEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass(/collapsed/i);
    await userEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).not.toHaveClass(/collapsed/i);
  });
});
