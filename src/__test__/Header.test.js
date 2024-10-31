import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../layout/Header";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the login button in Header Component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should render cart item in Header Component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  //   using regex /string/
  const cartItem = screen.getByText(/Cart/);

  expect(cartItem).toBeInTheDocument();
});

it("Should change login button to logout button during onClick event in Header Component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  // simulate event handler (fireEvent)
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
