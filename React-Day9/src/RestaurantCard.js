import {restaurantImageUrl} from "../src/Config";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, lastMileTravel }) => {
    return (
        <div className="cards">
            <img src={restaurantImageUrl+cloudinaryImageId} alt="restaurantName"/>
            <h2>{name} </h2>
            <h3>{cuisines.join(", ")} </h3>
            <h4>{lastMileTravel} minutes</h4>
        </div>
    )
}
export default RestaurantCard;