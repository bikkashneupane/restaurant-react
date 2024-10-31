import { sum } from "../components/sum";

// test function takes 2 arguments (1. string, 2. callback function where we call the function to test, which has expect)
test("This function should calculate and return a sum of two numbers", () => {
  const result = sum(10, 5);

  // Assertion
  expect(result).toBe(15);
});
