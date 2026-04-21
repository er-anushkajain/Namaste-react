import RestaurantCard from "./RestaurantCard";
import restlist from "../../utils/mockdata";
const Body = () => {
  return (
    <div className="Body">
      <div className="search">Search </div>
      <div className="restaurant-container">
        {restlist.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;