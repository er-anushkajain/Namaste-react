import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import useOnlineStatus from '../../utils/useOnlineStatus.js';
import Shimmer from './Shimmer';
import { Link } from 'react-router';

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [SearchText, setSearchText] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61&lng=77.20&page_type=DESKTOP_WEB_LISTING',
    );
    const json = await data.json();
    const res =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(res);
    setFilteredRestaurants(res);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        look's like you are offline!! please check your internet connection
      </h1>
    );

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
          <button
            onClick={() => {
              const filteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(SearchText.toLocaleLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0,
            );
            setListOfRestaurants(filteredList);
            console.log('Filtered Restaurants:', filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          /* The key belongs on the outermost element (Link) */
          <Link
            key={restaurant.info.id}
            to={'/restaurants/' + restaurant.info.id}
          >
            <RestaurantCard resObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
