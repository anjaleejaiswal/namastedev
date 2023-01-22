import {RestaurantList} from "../src/Config";
import {useState, useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const  filterData = (searchTxt,restaurant) =>{
    return restaurant.filter(item => item?.data?.name?.toLowerCase().includes(searchTxt?.toLowerCase()))
};

const Body = () => {
    const [allrestaurant,setAllRestaurant] = useState([]);
    const [filterRestaurant,setFilterRestaurant] = useState([]);
    const [searchTxt,setSearchTxt] = useState("");

    //empty dependency array it will call after render
    useEffect(() => {
        //API call
        getRestaurant();
    },[]);

    async function getRestaurant(){
        try{
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.6348058&lng=86.1848739&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json)
            setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
            setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        }
        catch(e){
            console.log(e);
        }
    }


    //conditional rendering 
    //if restaurant is empty => shimmer UI
    //if restaurant has data => actual data UI


    return (allrestaurant.length ===0 )? 
    (<Shimmer/>)
     : (
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
                        const data = filterData(searchTxt,allrestaurant);
                        //update the state of restaurant variable
                        setFilterRestaurant(data);
                    }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                {filterRestaurant.map((restaurant) => 
                {
                     return (
                        <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                        </Link>
                        
                     )
                }
                    )
                }
            </div>
        </>
    )
}

export default Body;