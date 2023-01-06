import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("TEST APP", () => {
  test("are element in the document", () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole("button");
    const input = screen.getByPlaceholderText(/input value/i);

    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test("example test2", async () => {
    render(<App />);
    //const helloWorldElem = screen.queryByText(/hello2/i);
    //expect(helloWorldElem).toBeNull()
    const dataElem = await screen.findByText(/data/i);
    expect(dataElem).toBeInTheDocument();
    expect(dataElem).toHaveStyle({ color: "red" });
  });

  test("Click Event", () => {
    render(<App />);
    const btn = screen.getByTestId("toggle-btn");
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId("toggle-elem")).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId("toggle-elem")).toBeNull();
  });
});
