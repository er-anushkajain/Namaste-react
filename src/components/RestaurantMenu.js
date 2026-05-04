import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
import { useRestaurantMenu } from '../../utils/useRestaurantMenu';
import { MENU_API_URL, MENU_IMG_API_URL } from '../../utils/commom';

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
        {itemCards?.map((item) => {
          const { id, name, price, defaultPrice, imageId } = item.card?.info;

          return (
            <li
              key={id}
              className="flex justify-between items-center p-4 border-b"
            >
              <div>
                <p className="font-bold">{name}</p>
                <p>Rs. {(price || defaultPrice) / 100}</p>
              </div>

              {/* Binding the image here */}
              {imageId && (
                <img
                  src={
                    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/' +
                    imageId
                  }
                  alt={name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
