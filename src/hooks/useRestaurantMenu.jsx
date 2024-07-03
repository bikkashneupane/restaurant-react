import React, { useEffect, useState } from "react";

export const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const { data } = await response.json();
    setResMenu(data.cards);
  };

  return resMenu;
};
