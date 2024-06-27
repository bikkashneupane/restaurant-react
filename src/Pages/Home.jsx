import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import { CustomCard } from "../components/CustomCard";
import { Shimmer } from "../layout/Shimmer";

export const Home = () => {
  const [resturantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_API);
      const { data } = await res.json();

      console.log(
        data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setRestaurantList(
        data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredResList(
        data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

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
          <CustomCard key={item?.info?.id} item={item} />
        ))}
      </div>
    </>
  );
};
