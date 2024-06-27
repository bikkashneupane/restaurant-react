import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const RestaurantMenu = () => {
  const { resId } = useParams();
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

  console.log(
    resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards
  );
  return (
    <div>
      <h1>{resMenu[0]?.card?.card?.text}</h1>
      <p>
        {resMenu[2]?.card?.card?.info?.cuisines?.join(", ")} -
        {resMenu[2]?.card?.card?.info?.costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {resMenu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (item) => (
            <li>
              {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
