import { useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.8554984&lng=78.7902154&restaurantId=1234261&submitAction=ENTER",
    );
    const result = await data.json();
    console.log(`restaurant menu ${JSON.stringify(result)}`);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>French Fries</li>
        <li>Coke</li>
        <li>Pepsi</li>
        <li>Ice Cream</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
