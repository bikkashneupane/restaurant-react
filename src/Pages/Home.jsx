import { useContext, useEffect, useState } from "react";
import { RestaurantCard } from "../components/RestaurantCard";
import { Shimmer } from "../layout/Shimmer";
import { useRestaurantList } from "../hooks/useRestaurantList";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Home = () => {
  const { setLoggedInUser } = useContext(UserContext);

  const resturantList = useRestaurantList();
  // console.log(resturantList);

  const [filteredResList, setFilteredResList] = useState(resturantList || []);

  useEffect(() => {
    setFilteredResList(resturantList);
  }, [resturantList]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1>You are currently offline, please check your internet connection!</h1>
    );
  }
  return resturantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="px-4 flex gap-4">
        <input
          type="text"
          placeholder="Search Food..."
          className="px-4 py-2 rounded-md shadow-lg"
          onChange={(e) => {
            const { value } = e.target;
            setFilteredResList(
              resturantList.filter(
                (item) =>
                  item.info.cuisines
                    .join(", ")
                    .toLowerCase()
                    .includes(value.toLowerCase()) ||
                  item.info.name
                    .toLowerCase()
                    .includes(value.toLocaleLowerCase())
              )
            );
          }}
        />

        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={() => {
            setFilteredResList(
              resturantList?.filter((item) => item?.info?.avgRating >= 4.5)
            );
          }}
        >
          Top Rated Restaurant
        </button>

        <input
          type="text"
          className="px-4 py-2 shadow-lg rounded-lg"
          placeholder="Change User name"
          onChange={(e) => setLoggedInUser(e.target.value)}
        />
      </div>
      <div className="px-4 py-6 grid  xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
        {filteredResList?.map((item) => (
          <RestaurantCard key={item?.info?.id} item={item} />
        ))}
      </div>
    </>
  );
};
