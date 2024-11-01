import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ContactUs } from "../Pages/ContactUs";

// describe/ test/it function takes 2 arguments: 1. String describing the test case 2. callback function which has test case
describe("Contact Us Test Cases", () => {
  // beforeAll(()=>{
  //   console.log("Before All the tests")
  // })

  // beforeEach(()=>{
  //   console.log("Before Each Test, Helper function, helpful if cleanup is needed before each test")
  // })

  // afterEach(()=>{
  //   console.log("After Each Test")
  // })

  // afterAll(()=>{
  //   console.log("After All the test cases")
  // })

  it("This should load Contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    // assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");

    // assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("Name");

    // assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 3 input fields inside Contact Component", () => {
    render(<ContactUs />);

    // Querrying
    const inputBoxs = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxs.length).toBe(3);
  });
});
