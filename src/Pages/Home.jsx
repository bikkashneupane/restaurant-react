import { useContext, useEffect, useState } from "react";
import { Shimmer } from "../layout/Shimmer";
import { useRestaurantList } from "../hooks/useRestaurantList";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import { SWIGGY_API } from "../utils/constants";
import RestaurantCard from "../components/RestaurantCard";

export const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const resturantList = useRestaurantList();

  const [filteredResList, setFilteredResList] = useState(resturantList || []);

  const { setLoggedInUser } = useContext(UserContext);

  useEffect(() => {
    setFilteredResList(resturantList);
  }, [resturantList]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  const handleOnSearch = () => {
    const filteredValue = resturantList?.filter((item) =>
      item?.info?.cuisines?.some((cuisine) =>
        cuisine.toLowerCase().includes(searchInput.toLowerCase())
      )
    );

    // console.log(filteredValue);
    setFilteredResList(filteredValue);
  };

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
          onChange={handleOnChange}
          value={searchInput}
          data-testid="searchInput"
        />

        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={handleOnSearch}
        >
          Search
        </button>

        <button
          className="px-4 py-2 bg-yellow-500 text-white rounded-md"
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
          <Link to={`/restaurants/${item?.info?.id}`} key={item?.info?.id}>
            <RestaurantCard item={item?.info} />
          </Link>
        ))}
      </div>
    </>
  );
};
