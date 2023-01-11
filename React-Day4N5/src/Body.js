import {RestaurantList} from "../src/Config";
import {useState} from "react";
import RestaurantCard from "./RestaurantCard";

const  filterData = (searchTxt,restaurant) =>{
    return restaurant.filter(item => item.data.name.toLowerCase().includes(searchTxt.toLowerCase()))
};

const Body = () => {
    const [restaurant,setRestaurant] = useState(RestaurantList);
    const [searchTxt,setSearchTxt] = useState("");


    return (
        <>
            <div className="search-container">
                <input type="text"
                        value={searchTxt}
                        placeholder="Search"
                        className="search-input"
                        onChange={
                            (e)=> setSearchTxt(e.target.value)
                        }
                        
                />
                <button className="search-btn"
                    onClick={()=> {
                        //setRestaurant(RestaurantList);
                        //filter the data
                        const data = filterData(searchTxt,RestaurantList);
                        //update the state of restaurant variable
                        setRestaurant(data);
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {restaurant.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>}
                    )
                }
            </div>
        </>
    )
}

export default Body;