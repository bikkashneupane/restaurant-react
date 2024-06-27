import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

export const CustomCard = ({ item }) => {
  const id = item?.info?.id;
  const title = item?.info?.name;
  const cuisines = item?.info?.cuisines;
  const avgRating = item?.info?.avgRating;
  const deliveryTime = item?.info?.sla?.deliveryTime;
  const imageURL = `${CDN_URL}${item?.info?.cloudinaryImageId}`;

  return (
    <Link to={`/restaurants/${id}`} className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="card-detail">
        <h3>{title}</h3>
        <h4>Cuisines: {cuisines.join(", ")}</h4>
        <h4>Ratings: {avgRating}</h4>
        <h4>Delivery time: {deliveryTime} minutes</h4>
      </div>
    </Link>
  );
};
