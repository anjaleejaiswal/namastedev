import  Shimmer  from "./Shimmer";
import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import {restaurantImageUrl} from "./Config";
import useRestaurant from "../utils/useRestaurant";
import {FETCH_MENU_URL} from "./Config";

const RestaurantMenu = () => {
    const {id} = useParams();

    const restaurant = useRestaurant(FETCH_MENU_URL+id);

    return restaurant===null ? (<Shimmer />) : (
        <>
            <div className="flex">
                <div className="font-bold">Restaurant Menu : {id}</div>
                <div className="m-2 p-2">
                    <h2 className="text-2xl font-bold py-2 ">{restaurant[0]?.card?.card?.info?.name}</h2>
                    <img src={restaurantImageUrl + restaurant[0]?.card?.card?.info?.cloudinaryImageId} className="w-58 shadow-lg" />
                    <h2 className="text-xs mt-2">{restaurant[0]?.card?.card?.info?.labels[1]?.message}</h2>
                    <h2 className="text-sm">{restaurant[0]?.card?.card?.info?.city}</h2>
                    <h2 className="text-lg">{restaurant[0]?.card?.card?.info?.avgRating} stars</h2>
                    <h2 className="text-lg">{restaurant[0]?.card?.card?.info?.costForTwoMessage}</h2>
                    <h2 className="text-sm">{restaurant[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
                </div>
                <div className="p-2 py-14">
                    <h2 className="text-2xl font-bold text-center p-2">Menu</h2>
                        {console.log(restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.title)}
                        {
                            // restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
                            //     (item) => <li>{item?.card?.card?.title}</li>
                            // )
                            restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                                (item) =>   item?.card?.card?.title !== undefined
                            ).map(
                                (item,index) => <li key={index} className="text-sm px-14">{item?.card?.card?.title}</li>
                            )
                        }
                </div>
            </div>
        </>
    )
}



export default RestaurantMenu;