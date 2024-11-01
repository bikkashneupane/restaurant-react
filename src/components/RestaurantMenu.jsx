import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

export const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const { name, cuisines, costForTwoMessage } =
    resInfo[2]?.card?.card?.info || {};

  const categories =
    resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("categories:", categories);

  if (!resInfo.length || !categories) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-center">
      <h1 className="py-4 text-2xl font-bold">{name}</h1>
      <p className="font-bold text-lg mb-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* categories categories */}
      {categories?.map((item, index) => (
        <RestaurantCategory
          key={item?.card?.card?.title}
          data={item?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
