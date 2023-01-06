import { render, screen } from "@testing-library/react";
import App from "./App";

test("are element in the document", () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/hello world/i);
  const btn = screen.getByRole("button");
  const input = screen.getByPlaceholderText(/input value/i);

  expect(helloWorldElem).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});
