import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ item }) => {
  const { title, cuisines, avgRating } = item;
  const deliveryTime = item?.sla?.deliveryTime;
  const imageURL = `${CDN_URL}${item?.cloudinaryImageId}`;

  // console.log(item);

  return (
    <div
      data-testid="resCard"
      className="bg-gray-100 rounded-lg shadow-lg p-2 max-h-[500px] hover:bg-gray-200"
    >
      <img
        src={imageURL}
        className="w-full h-1/2 max-h-[200px] object-cover rounded-lg"
      />
      <div className="px-1">
        <h3 className="font-semibold py-2">{title}</h3>
        <h4>{cuisines.join(", ").slice(0, 25)}...</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
