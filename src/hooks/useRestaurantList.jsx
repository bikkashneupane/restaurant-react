import React, { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";

export const useRestaurantList = () => {
  const [resturantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_API);
      const { data } = await res.json();

      setRestaurantList(
        data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  return resturantList;
};
