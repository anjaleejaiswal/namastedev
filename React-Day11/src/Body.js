import {RestaurantList} from "../src/Config";
import {useState, useEffect, useContext} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { RESTAURANT_URL } from "../src/Config";
import useRestaurant from "../utils/useRestaurant";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

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
            const data = await fetch(RESTAURANT_URL);
            const json = await data.json();
            //console.log(json)
            setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
            setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        }
        catch(e){
            console.log(e);
        }
    }

    const online = useOnline();

    if(!online){
        return <h1>You're Offline! Please check internet connection.</h1>
    }


    //conditional rendering 
    //if restaurant is empty => shimmer UI
    //if restaurant has data => actual data UI

    const {user, setUser} = useContext(UserContext);

    return (allrestaurant.length === 0)? 
    (<Shimmer/>)
     : (
        <>
            <div className="py-6 mt-2 bg-slate-100 shadow-lg">
                <input type="text"
                        value={searchTxt}
                        placeholder="Search"
                        className="ml-6 focus:bg-slate-300"
                        onChange={
                            (e)=> setSearchTxt(e.target.value)
                        }
                        
                />

                <button className="p-2 m-2 bg-slate-500 rounded-md w-24 h-10 hover:bg-slate-700 hover:text-white"
                    onClick={()=> {
                        //setRestaurant(RestaurantList);
                        //filter the data
                        const data = filterData(searchTxt,allrestaurant);
                        //update the state of restaurant variable
                        setFilterRestaurant(data);
                    }}
                >Search</button>

                <input 
                    value = {user.name}
                    onChange = {
                        (e) => setUser({
                        name : e.target.value,
                        email : "email@gmail.com"
                        })
                    }
                />
                <input 
                    value = {user.email}
                    onChange = {
                        (e) => setUser({
                            ...user,
                            email : e.target.value
                        })
                    }
                />
            </div>
            <div className="flex flex-wrap pl-16">
                {  filterRestaurant.map((restaurant) => 
                {
                     return (
                        <Link to={"/restaurant/" + restaurant?.data?.id} key={restaurant?.data?.id}>
                            <RestaurantCard {...restaurant.data}  />
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