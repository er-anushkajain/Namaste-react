import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { MENU_API_URL } from '../../utils/commom';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);

    const result = await data.json();
    console.log(`restaurant menu ${JSON.stringify(result)}`);

    setResInfo(JSON.stringify(result));
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards[3].card.info;
  const { itemCards } =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(',')}</h3>
      <h4>{costForTwoMessage} . rs</h4>)<h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}</li>
        ))}
        <li>
          {item.card.info.name} .{' '}
          {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
        </li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
