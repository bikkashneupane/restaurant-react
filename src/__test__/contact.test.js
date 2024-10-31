import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ContactUs } from "../Pages/ContactUs";

test("This should load Contact us component", () => {
  render(<ContactUs />);

  const heading = screen.getByRole("heading");

  // assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside Contact component", () => {
  render(<ContactUs />);

  const button = screen.getByRole("button");

  // assertion
  expect(button).toBeInTheDocument();
});

test("Should load input name inside Contact component", () => {
  render(<ContactUs />);

  const inputName = screen.getByPlaceholderText("Name");

  // assertion
  expect(inputName).toBeInTheDocument();
});

test("Should load 3 input fields inside Contact Component", () => {
  render(<ContactUs />);

  // Querrying
  const inputBoxs = screen.getAllByRole("textbox");

  // Assertion
  expect(inputBoxs.length).toBe(3);
});
