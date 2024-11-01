import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Home } from "../Pages/Home";
import MOCK_DATA from "../mocks/RestaurantListData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Burger Restaurant List from search Input", async () => {
  // Whenever you are making a api call/ state update, we need to wrap the render inside a act function which returns a promise so it needs to be async/await
  await act(async () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole("button", { name: "Search" });

  const inputSearch = screen.getByTestId("searchInput");

  fireEvent.change(inputSearch, { target: { value: "burger" } });

  fireEvent.click(searchButton);

  // screen should load 4 burgers result
  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(2);
});

it("Should render top rated restauant on button click", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
  );

  const resBeforeFilter = screen.getAllByTestId("resCard");

  expect(resBeforeFilter.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedButton);

  const resAfterFilter = screen.getAllByTestId("resCard");

  expect(resAfterFilter.length).toBe(13);
});
