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
            <div className="menu">
                <div>Restaurant Menu : {id}</div>
                <div>
                    <h2>{restaurant[0]?.card?.card?.info?.name}</h2>
                    <img src={restaurantImageUrl + restaurant[0]?.card?.card?.info?.cloudinaryImageId} />
                    <h2>{restaurant[0]?.card?.card?.info?.labels[1]?.message}</h2>
                    <h2>{restaurant[0]?.card?.card?.info?.city}</h2>
                    <h2>{restaurant[0]?.card?.card?.info?.avgRating} stars</h2>
                    <h2>{restaurant[0]?.card?.card?.info?.costForTwoMessage}</h2>
                    <h2>{restaurant[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
                </div>
                <div>
                    <h2>Menu</h2>
                        {console.log(restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.title)}
                        {
                            // restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map(
                            //     (item) => <li>{item?.card?.card?.title}</li>
                            // )
                            restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                                (item) =>   item?.card?.card?.title !== undefined
                            ).map(
                                (item,index) => <li key={index}>{item?.card?.card?.title}</li>
                            )
                        }
                </div>
            </div>
        </>
    )
}



export default RestaurantMenu;