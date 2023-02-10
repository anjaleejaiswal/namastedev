import  Shimmer  from "./Shimmer";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import {restaurantImageUrl} from "./Config";
import useRestaurant from "../utils/useRestaurant";
import {FETCH_MENU_URL} from "./Config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const {id} = useParams();

    const restaurant = useRestaurant(FETCH_MENU_URL+id);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return restaurant===null ? (<Shimmer />) : (
        <>
            <div className="flex">
                <div className="font-bold">Restaurant Menu : {id}</div>
                <div className="m-2 p-2">
                    <h2 className="text-2xl font-bold py-2 ">{restaurant?.name}</h2>
                    <img src={restaurantImageUrl + restaurant?.cloudinaryImageId} className="w-58 shadow-lg" />
                    <h2 className="text-xs mt-2">{restaurant?.locality}</h2>
                    <h2 className="text-sm">{restaurant?.city}</h2>
                    <h2 className="text-lg">{restaurant?.avgRating} stars</h2>
                    <h2 className="text-lg">{restaurant?.costForTwoMsg}</h2>
                    <h2 className="text-sm">{restaurant?.cuisines.join(", ")}</h2>
                </div>

                <div className="p-2 py-14">
                    <h2 className="text-2xl font-bold text-center p-2">Menu</h2>
                        {/* {console.log(restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.title)} */}
                        {/* {
                            // restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
                            //     (item) => <li>{item?.card?.card?.title}</li>
                            // )
                            restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                                (item) =>   item?.card?.card?.title !== undefined
                            ).map(
                                (item,index) => 
                                <li 
                                    key={index} 
                                    className="text-sm px-14">
                                        {item?.card?.card?.title} 
                                            - 
                                        <button 
                                            className="p-2 m-2 bg-slate-500 text-white"
                                            onClick={() => handleAddItem(item)}
                                        >Add Item</button>
                                </li>
                            )
                        } */}

                        {Object.values(restaurant?.menu?.items).map(
                            item => 
                            <li 
                                    key={item?.id} 
                                    className="text-sm px-14">
                                        {item?.name} 
                                            - 
                                        <button 
                                            className="p-2 m-2 bg-slate-500 text-white"
                                            onClick={() => handleAddItem(item)}
                                        >Add Item</button>
                                </li>
                        )}
                </div>
            </div>
        </>
    )
}



export default RestaurantMenu;