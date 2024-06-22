import { useEffect, useState } from "react";
import { CDN_URL, SWIGGY_API } from "../utils/constants";
import { CustomCard } from "./CustomCard";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [resturantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_API);
      const { data } = await res.json();
      console.log(data);
      setRestaurantList(
        data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredResList(
        data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (resturantList.length === 0) {
    return <Shimmer />;
  }

  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        type="text"
        placeholder="Search Food..."
        style={{ marginRight: "10px", height: "25px" }}
        onChange={(e) => {
          const { value } = e.target;
          setFilteredResList(
            resturantList.filter(
              (item) =>
                item.info.cuisines
                  .join(", ")
                  .toLowerCase()
                  .includes(value.toLowerCase()) ||
                item.info.name.toLowerCase().includes(value.toLocaleLowerCase())
            )
          );
        }}
      />

      <button
        className="btn-filter"
        onClick={() => {
          setFilteredResList(
            resturantList?.filter((item) => item?.info?.avgRating >= 4.5)
          );
        }}
      >
        Top Rated Restaurant
      </button>

      <div className="card-container">
        {filteredResList?.map((item) => (
          <CustomCard
            key={item?.info?.id}
            title={item?.info?.name}
            cuisines={item?.info?.cuisines}
            avgRating={item?.info?.avgRating}
            deliveryTime={item?.info?.sla?.deliveryTime}
            imageURL={`${CDN_URL}${item?.info?.cloudinaryImageId}`}
          />
        ))}
      </div>
    </>
  );
};
