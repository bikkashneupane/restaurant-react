import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

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
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
