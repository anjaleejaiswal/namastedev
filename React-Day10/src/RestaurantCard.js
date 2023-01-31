import {restaurantImageUrl} from "../src/Config";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravel }) => {
    return (
        <div className="w-52 bg-slate-100 shadow-xl m-2 p-2 hover:bg-slate-400">
            <img src={restaurantImageUrl+cloudinaryImageId} alt="restaurantName" className="w-52 h-32"/>
            <h2 className="font-bold text-xl">{name} </h2>
            <h3 className="text-lg">{cuisines.join(", ")} </h3>
            <h4 className="text-sm">{lastMileTravel} minutes</h4>
        </div>
    )
}
export default RestaurantCard;