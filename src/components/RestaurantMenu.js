import { useEffect } from "react";

const RestaurantMenu = () => { 
        useEffect(() => {
            fetchMenu();
        }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61&lng=77.20&restaurantId=229");
        const json = await data.json();
        console.log(json);
    }
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