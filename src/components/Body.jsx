import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import reslist from "../../utils/mockdata";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurant] = useState([
    {
      info: {
        id: "686214",
        name: "pizza hutt",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/8f8c4818-ff0b-4471-97d7-a0ac9525c28e_686214.jpg",

        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
        avgRating: 3.8,
        parentId: "11329",
        avgRatingString: "3.8",

        sla: {
          deliveryTime: 25,
        },
      },
    },

    {
      info: {
        id: "686216",
        name: "pizza point",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/8f8c4818-ff0b-4471-97d7-a0ac9525c28e_686214.jpg",

        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
        avgRating: 4.2,
        parentId: "11329",
        avgRatingString: "4.2",

        sla: {
          deliveryTime: 25,
        },
      },
    },
    {
      info: {
        id: "686215",
        name: "pizza house",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/8f8c4818-ff0b-4471-97d7-a0ac9525c28e_686214.jpg",

        costForTwo: "₹250 for two",
        cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
        avgRating: 4.5,
        parentId: "11329",
        avgRatingString: "4.5",

        sla: {
          deliveryTime: 25,
        },
      },
    },
  ]);
  return (
    <div className="Body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurant(filteredList);
            console.log("Filtered Restaurants:", ListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
