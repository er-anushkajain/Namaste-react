import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);

    const result = await data.json();

    const menuCard =
      result?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card;

    // Set the state for the UI
    setResInfo(menuCard);
  };

  if (resInfo === null) return <Shimmer />;
  //const { name, cuisines, costForTwoMessage } = resInfo?.itemCards?.card.info;
  const { itemCards } = resInfo;
  console.log(itemCards);

  return (
    <div className="menu">
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - Rs.{' '}
            {item.card?.info?.price / 100 ||
              item.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
