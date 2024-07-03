import { useEffect, useState } from "react";
import { CustomCard } from "../components/CustomCard";
import { Shimmer } from "../layout/Shimmer";
import { useRestaurantList } from "../hooks/useRestaurantList";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

export const Home = () => {
  const resturantList = useRestaurantList();
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    setFilteredResList(resturantList);
  }, [resturantList]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>You are currently offline, please check your internet connection!</h1>
    );
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
          <CustomCard key={item?.info?.id} item={item} />
        ))}
      </div>
    </>
  );
};
