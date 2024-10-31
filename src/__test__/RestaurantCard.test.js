import { render } from "@testing-library/react";
import { RestaurantCard } from "../components/RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/RestaurantData.json";
import { BrowserRouter } from "react-router-dom";

test("Should render CustomCard Component with props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard item={MOCK_DATA} />
    </BrowserRouter>
  );
});
