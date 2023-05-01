import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders SpongeBob SquarePants link", () => {
  render(<App />);
  const linkElement = screen.getByText(/SpongeBob SquarePants/i);
  expect(linkElement).toBeInTheDocument();
});
