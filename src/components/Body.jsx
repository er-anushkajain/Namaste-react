import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import reslist from "../../utils/mockdata";
import Shimmer from "./Shimmer";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [SearchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61&lng=77.20&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    const res =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(res);
    console.log(`ListOfRestaurants ${JSON.stringify(res, null, 2)}`);
      setFilteredRestaurants(res);
  };

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button>
            onClick=
            {() => {
              console.log(SearchText);
              const filteredRestaurant = ListOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes( SearchText.toLocaleLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurant);
            }}{" "}
            search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setListOfRestaurants(filteredList);
            console.log("Filtered Restaurants:", filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
