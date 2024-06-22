export const CustomCard = ({
  title,
  cuisines,
  avgRating,
  deliveryTime,
  imageURL,
}) => {
  return (
    <div className="card">
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
    </div>
  );
};
