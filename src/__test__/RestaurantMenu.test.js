import { fireEvent, render, screen } from "@testing-library/react";
import { RestaurantMenu } from "../components/RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../mocks/ResMenuData.json";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@testing-library/jest-dom";
import { Header } from "../layout/Header";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "../Pages/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Restaurant Menu Component", async () => {
  await act(() =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    )
  );

  const recommendationHeader = screen.getByText("Recommended (20)");

  fireEvent.click(recommendationHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(20);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("Cart is Empty"));
});
