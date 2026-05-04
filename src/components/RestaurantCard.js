import { CDN_URL } from '../../utils/commom.js';

const RestaurantCard = (props) => {
  const { resObj } = props;

  const name = resObj?.info?.name;
  const avgRating = resObj.info?.avgRating;
  const deliveryTime = resObj.info?.sla.deliveryTime;
  const cuisines = resObj.info?.cuisines?.join(', ');
  const costForTwoMsg = resObj.info?.costForTwo;

  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + resObj.info?.cloudinaryImageId}
        alt={name}
        className="w-24 h-24 object-cover rounded-lg"
      />
      <h3>{name}</h3>
      <h4>{avgRating} stars</h4>
      <h4>{cuisines} join </h4>
      <h4>{costForTwoMsg}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};
export default RestaurantCard;
